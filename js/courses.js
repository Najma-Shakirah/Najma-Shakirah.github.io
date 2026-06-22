// Courses list (index.html) and detail page (course-detail.html)

class CoursesPortfolio {
    constructor() {
        this.init();
    }

    init() {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('id');
        const listContainer = document.getElementById('courses-list-container');
        const detailContainer = document.getElementById('course-detail-container');

        if (detailContainer && courseId) {
            this.loadCourseDetail(courseId);
        } else if (detailContainer && !courseId) {
            this.showError('No course selected. Please choose a course from the portfolio.');
        }

        if (listContainer) {
            this.renderCoursesList();
        }
    }

    getAllCourses() {
        const all = [];
        if (window.coursesData) {
            all.push(...(window.coursesData.year1 || []));
            all.push(...(window.coursesData.year2 || []));
            all.push(...(window.coursesData.year3 || []));
        }
        return all;
    }

    findCourseById(id) {
        return this.getAllCourses().find(course => course.id === id);
    }

    escapeHtml(text) {
        if (text == null) return '';
        const div = document.createElement('div');
        div.textContent = String(text);
        return div.innerHTML;
    }

    formatCode(code) {
        if (!code) return '';
        return code.replace(/\s/g, ' ').trim();
    }

    renderCoursesList() {
        const container = document.getElementById('courses-list-container');
        if (!container || !window.coursesData) return;

        const years = [
            { key: 'year1', label: 'Year 1' },
            { key: 'year2', label: 'Year 2' },
            { key: 'year3', label: 'Year 3' }
        ];

        let html = '<div class="courses-grid">';

        years.forEach(({ key, label }) => {
            const courses = window.coursesData[key];
            if (!courses || !courses.length) return;

            html += `<div class="year-section"><h3 class="year-title">${label}</h3>`;

            const semesters = [...new Set(courses.map(c => c.semester))].sort((a, b) => a - b);
            semesters.forEach(sem => {
                const semCourses = courses.filter(c => c.semester === sem);
                html += `
                    <div class="semester-section">
                        <h4 class="semester-title">Semester ${sem}</h4>
                        <div class="courses-list">
                `;

                semCourses.forEach(course => {
                    const compulsoryClass = course.compulsory ? ' course-card--compulsory' : '';
                    const badge = course.compulsory
                        ? '<span class="badge badge--compulsory">Compulsory</span>'
                        : '';
                    const topicCount = (course.topics || course.keyTopics || []).length;
                    const desc = course.description || (topicCount
                        ? `${topicCount} syllabus topics covered`
                        : 'View course details and reflections');

                    html += `
                        <article class="course-card${compulsoryClass}">
                            <a class="course-card__link" href="course-detail.html?id=${this.escapeHtml(course.id)}">
                                <div class="course-card__header">
                                    <h5 class="course-card__title">${this.escapeHtml(course.title)}${badge}</h5>
                                    <span class="course-card__code">${this.escapeHtml(this.formatCode(course.code))}</span>
                                </div>
                                <p class="course-card__desc">${this.escapeHtml(desc)}</p>
                                <div class="course-card__footer">
                                    <span class="course-card__click">View course details →</span>
                                </div>
                            </a>
                        </article>
                    `;
                });

                html += '</div></div>';
            });

            html += '</div>';
        });

        html += '</div>';
        container.innerHTML = html;
    }

    loadCourseDetail(courseId) {
        const course = this.findCourseById(courseId);
        if (course) {
            document.title = `${course.title} | Najma's E-Portfolio`;
            this.displayCourseDetail(course);
        } else {
            this.showError('Course not found');
        }
    }

    getTopics(course) {
        return course.topics || course.keyTopics || [];
    }

    parseTopic(topic) {
        if (typeof topic === 'string') {
            const colonIdx = topic.indexOf(':');
            if (colonIdx > -1) {
                return {
                    title: topic.slice(0, colonIdx + 1).trim(),
                    description: topic.slice(colonIdx + 1).trim(),
                    children: []
                };
            }
            return { title: topic, description: '', children: [] };
        }
        return {
            title: topic.title || '',
            description: topic.description || '',
            children: topic.children || []
        };
    }

    renderTopicsGrid(topics) {
        if (!topics.length) {
            return '<p style="color: var(--cd-muted-foreground);">Syllabus topics will be added soon.</p>';
        }

        return `
            <div class="topic-grid">
                ${topics.map((topic, index) => {
                    const parsed = this.parseTopic(topic);
                    const idx = String(index + 1).padStart(2, '0');
                    const childrenHtml = parsed.children.length
                        ? `<ul class="topic-list-nested">${parsed.children.map(child =>
                            `<li>${this.escapeHtml(typeof child === 'string' ? child : child.title)}</li>`
                        ).join('')}</ul>`
                        : (parsed.description
                            ? `<p>${this.escapeHtml(parsed.description)}</p>`
                            : '');

                    return `
                        <div class="topic-card">
                            <span class="topic-index">${idx}</span>
                            <h4>${this.escapeHtml(parsed.title)}</h4>
                            ${childrenHtml}
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    renderAssessments(assessments) {
        if (!assessments || !assessments.length) return '';

        let html = '';
        assessments.forEach(group => {
            const items = group.items || [];
            html += `
                <div class="assignment-group">
                    <div class="group-header">
                        <span class="group-tag assessment">${this.escapeHtml(group.category || 'Assessment')}</span>
                        <span class="group-title">${this.escapeHtml(group.title || group.category || 'Coursework')}</span>
                        <span class="group-count">${items.length} item${items.length !== 1 ? 's' : ''}</span>
                    </div>
            `;

            items.forEach(item => {
                if (typeof item === 'string') {
                    html += `<div class="assessment-card">${this.escapeHtml(item)}</div>`;
                } else if (item.children && item.children.length) {
                    html += `
                        <div class="assessment-card">
                            <strong>${this.escapeHtml(item.title)}</strong>
                            <ul>${item.children.map(child => `<li>${this.escapeHtml(child)}</li>`).join('')}</ul>
                        </div>
                    `;
                } else {
                    html += `<div class="assessment-card">${this.escapeHtml(item.title || item)}</div>`;
                }
            });

            html += '</div>';
        });

        return html;
    }

    flattenAssignments(items, parentTitle = '') {
        const result = [];
        if (!items) return result;

        items.forEach(item => {
            if (item.items && item.items.length) {
                item.items.forEach(sub => {
                    result.push({
                        title: sub.title || item.title,
                        format: sub.format || item.format,
                        description: sub.description || item.description,
                        reflection: sub.reflection || item.reflection,
                        improvement: sub.improvement || item.improvement,
                        attachments: sub.attachments || item.attachments || [],
                        group: sub.group || item.group || parentTitle || item.title
                    });
                });
            } else {
                result.push({
                    title: item.title,
                    format: item.format,
                    description: item.description,
                    reflection: item.reflection,
                    improvement: item.improvement,
                    attachments: item.attachments || [],
                    group: item.group || parentTitle || 'Portfolio Work'
                });
            }
        });

        return result;
    }

    getBadgeClass(format) {
        if (!format) return '';
        const key = format.toLowerCase();
        if (key.includes('poster')) return 'poster';
        if (key.includes('video')) return 'video';
        if (key.includes('report')) return 'report';
        if (key.includes('presentation') || key.includes('slide')) return 'presentation';
        if (key.includes('bmc') || key.includes('canvas')) return 'prototype';
        return 'report';
    }

    renderAttachments(attachments, assignKey) {
        if (!attachments || !attachments.length) return '';

        return attachments.map((att, attIdx) => {
            const filename = att.filename || att.title;
            const fileLabel = att.type === 'pdf' ? 'PDF' : att.type === 'image' ? 'Image' : 'File';
            const previewId = `${assignKey}-att-${attIdx}`;

            let embedHtml = '';
            if (att.type === 'pdf') {
                embedHtml = `<iframe class="doc-embed-pdf" src="${this.escapeHtml(att.src)}#toolbar=0" title="${this.escapeHtml(att.title)}"></iframe>`;
            } else if (att.type === 'image') {
                embedHtml = `<img class="doc-embed-image" src="${this.escapeHtml(att.src)}" alt="${this.escapeHtml(att.title)}">`;
            } else {
                embedHtml = `
                    <div class="doc-preview-placeholder">
                        <div class="doc-preview-icon">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
                        </div>
                        <div class="doc-preview-title">${this.escapeHtml(att.title)}</div>
                        <div class="doc-preview-sub">${this.escapeHtml(fileLabel)} · Attach your document</div>
                    </div>
                `;
            }

            return `
                <div class="doc-viewer-block">
                    <div class="ass-section-title">Document</div>
                    <div class="doc-viewer">
                        <div class="doc-header">
                            <div class="doc-controls">
                                <span class="dot red"></span>
                                <span class="dot yellow"></span>
                                <span class="dot green"></span>
                            </div>
                            <div class="doc-filename">${this.escapeHtml(filename)}</div>
                            <a class="doc-open-btn" href="${this.escapeHtml(att.src)}" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                                Open
                            </a>
                        </div>
                        <div class="doc-body" id="${previewId}">
                            ${embedHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderPortfolioAssignments(assignments, course) {
        if (!assignments || !assignments.length) return '';

        const groupTag = course && course.code
            ? course.code.split(' ')[0]
            : 'Portfolio';

        const grouped = {};
        this.flattenAssignments(assignments).forEach(assign => {
            const group = assign.group || 'Portfolio Work';
            if (!grouped[group]) grouped[group] = [];
            grouped[group].push(assign);
        });

        let html = '';
        Object.keys(grouped).forEach(groupName => {
            const items = grouped[groupName];
            html += `
                <div class="assignment-group">
                    <div class="group-header">
                        <span class="group-tag tis">${this.escapeHtml(groupTag)}</span>
                        <span class="group-title">${this.escapeHtml(groupName)}</span>
                        <span class="group-count">${items.length} submission${items.length !== 1 ? 's' : ''}</span>
                    </div>
            `;

            items.forEach((assign, idx) => {
                const badgeClass = this.getBadgeClass(assign.format);
                const badge = assign.format
                    ? `<span class="ass-badge ${badgeClass}">${this.escapeHtml(assign.format)}</span>`
                    : '';
                const desc = assign.description || '';
                const reflection = assign.reflection || 'Reflection to be added.';
                const improvement = assign.improvement || '';
                const assignKey = `${groupName.replace(/\W/g, '')}-${idx}`;
                const attachmentsHtml = this.renderAttachments(assign.attachments, assignKey);
                const previewDesc = desc.length > 90 ? `${desc.slice(0, 90)}...` : desc;

                html += `
                    <div class="assignment-card">
                        <div class="assignment-header" data-assignment-toggle>
                            <div class="assignment-left">
                                <div class="ass-info">
                                    <div class="ass-title-row">
                                        <span class="ass-title">${this.escapeHtml(assign.title)}</span>
                                        ${badge}
                                    </div>
                                    ${previewDesc ? `<div class="ass-description">${this.escapeHtml(previewDesc)}</div>` : ''}
                                </div>
                            </div>
                            <span class="ass-chevron">⌄</span>
                        </div>
                        <div class="assignment-body">
                            <div class="ass-inner">
                                ${desc ? `
                                    <div>
                                        <div class="ass-section-title">Description</div>
                                        <div class="ass-text-block">${this.escapeHtml(desc)}</div>
                                    </div>
                                ` : ''}
                                ${attachmentsHtml}
                                <div class="cd-reflection-box">
                                    <div class="reflection-header">
                                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--cd-accent)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M12 2a5 5 0 0 0-5 5v8a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/><path d="M6 15h12"/></svg>
                                        <h5>Reflection</h5>
                                    </div>
                                    <p>${this.escapeHtml(reflection)}</p>
                                </div>
                                ${improvement ? `
                                    <div class="cd-reflection-box">
                                        <div class="reflection-header"><h5>Improvement</h5></div>
                                        <p>${this.escapeHtml(improvement)}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
            });

            html += '</div>';
        });

        return html;
    }

    displayCourseDetail(course) {
        const container = document.getElementById('course-detail-container');
        if (!container) return;

        const topics = this.getTopics(course);
        const overview = course.overview || course.description || '';
        const tags = course.tags || [];
        const heroTags = tags.length
            ? tags.map(tag => `<span class="tag-orange">${this.escapeHtml(tag)}</span>`).join('')
            : (course.compulsory
                ? '<span class="tag-orange">University Compulsory</span>'
                : '');

        const detailRows = [
            ['Course Code', this.formatCode(course.code)],
            ['Credit Hours', course.credits ? `${course.credits} Credits` : '3 Credits'],
            ['Semester', `Semester ${course.semester}`],
            ['Year', `Year ${course.year}`],
            ['Faculty', course.faculty || 'Computing']
        ];

        if (course.session) detailRows.push(['Session', course.session]);

        const gradeHtml = course.grade ? `
            <div class="grade-card">
                <div class="grade-left">
                    <div class="grade-info"><span class="grade-label">Final Grade</span></div>
                    <div class="grade-letter">${this.escapeHtml(course.grade.letter || '—')}</div>
                </div>
                <div class="grade-info">
                    <span class="gpa">${this.escapeHtml(course.grade.gpa || '')} GPA</span>
                    <span class="sub">${this.escapeHtml(course.grade.note || 'Coursework + Final Exam')}</span>
                </div>
            </div>
        ` : '';

        const externalLink = course.url
            ? `<a class="course-external-link" href="${this.escapeHtml(course.url)}" target="_blank" rel="noopener noreferrer">Visit course project →</a>`
            : '';

        const assessmentsHtml = this.renderAssessments(course.assessments);
        const portfolioHtml = this.renderPortfolioAssignments(course.assignments, course);

        const improvements = course.improvements || [];
        const actionPlan = course.actionPlan || improvements;

        container.innerHTML = `
            <aside class="sidebar">
                <a class="sidebar-back" href="index.html#courses">← Back to Courses</a>
                <div class="sidebar-header">
                    <div class="info-block">
                        <div class="icon-box">
                            <svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M12 2a5 5 0 0 1 5 5v8a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M6 15h12"/></svg>
                        </div>
                        <span class="course-code">${this.escapeHtml(this.formatCode(course.code))}</span>
                    </div>
                    <h2>${this.escapeHtml(course.title)}</h2>
                    <div class="sidebar-tags">
                        <span class="tag-green">Sem ${course.semester}</span>
                        <span class="tag-blue">Year ${course.year}</span>
                        ${course.compulsory ? '<span class="tag-orange">Compulsory</span>' : ''}
                    </div>
                </div>

                <nav class="sidebar-nav">
                    <a href="#overview"><span class="nav-left"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>Overview</span></a>
                    <a href="#topics"><span class="nav-left"><svg class="nav-icon" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>Topics</span><span class="nav-arrow">›</span></a>
                    <a href="#assessments"><span class="nav-left"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>Assessments</span></a>
                    <a href="#reflection"><span class="nav-left"><svg class="nav-icon" viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M12 2a5 5 0 0 0-5 5v8a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z"/><path d="M6 15h12"/></svg>Reflection</span></a>
                    <a href="#improvements"><span class="nav-left"><svg class="nav-icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>Improvements</span></a>
                </nav>

                <div class="sidebar-footer">Faculty of Computing<br>UTM · Najma's E-Portfolio</div>
            </aside>

            <main class="main-content">
                <div class="hero-banner" id="overview">
                    <div class="hero-tags">${heroTags}</div>
                    <h1 class="hero-title">${this.escapeHtml(course.title)}</h1>
                    <p class="hero-subtitle">${this.escapeHtml(this.formatCode(course.code))} · YEAR ${course.year} · SEMESTER ${course.semester}</p>
                </div>

                <div class="two-col">
                    <div class="overview-text">
                        <div class="overview-divider">Course Overview</div>
                        <p>${this.escapeHtml(overview)}</p>
                        ${externalLink}
                    </div>
                    <div>
                        <div class="detail-card">
                            <h3>Course Details</h3>
                            <div class="detail-list">
                                ${detailRows.map(([label, value]) => `
                                    <div class="row">
                                        <span class="label">${this.escapeHtml(label)}</span>
                                        <span class="value">${this.escapeHtml(value)}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${gradeHtml}
                    </div>
                </div>

                <div class="section-divider" id="topics">Topics Learned</div>
                <h2 class="section-title">Syllabus & Topics</h2>
                ${this.renderTopicsGrid(topics)}

                <div class="section-divider" id="assessments">Coursework & Assessments</div>
                <h2 class="section-title">Assessment Breakdown</h2>
                ${assessmentsHtml || '<p style="color: var(--cd-muted-foreground); margin-bottom: 2rem;"></p>'}
                ${portfolioHtml}

                <div id="reflection" class="reflection-improvements">
                    <section class="overall-reflection-block">
                        <h2>Overall Reflection</h2>
                        <blockquote>
                            ${this.escapeHtml(course.reflection || 'Personal reflection for this course will be added soon.')}
                             
                        </blockquote>
                    </section>

                    <section id="improvements">
                        <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Future Improvements</h2>
                        <div class="improvement-grid">
                            <div class="improvement-card">
                                <ul>${improvements.map(item => `<li>${this.escapeHtml(item)}</li>`).join('')}</ul>
                            </div>
                            
                        </div>
                    </section>
                </div>

                <footer class="page-footer">
                    <p><a href="index.html#courses">← Back to all courses</a></p>
                    <p>Copyright © 2026 Najma Shakirah</p>
                </footer>
            </main>
        `;

        this.initCourseDetailInteractions();
    }

    initCourseDetailInteractions() {
        document.querySelectorAll('[data-assignment-toggle]').forEach(header => {
            header.addEventListener('click', () => {
                const card = header.closest('.assignment-card');
                const body = card.querySelector('.assignment-body');
                const chevron = header.querySelector('.ass-chevron');
                const group = card.closest('.assignment-group');
                const isOpen = body.classList.contains('open');

                if (group) {
                    group.querySelectorAll('.assignment-body.open').forEach(openBody => {
                        if (openBody !== body) {
                            openBody.classList.remove('open');
                            openBody.style.maxHeight = '0';
                            const openChev = openBody.closest('.assignment-card').querySelector('.ass-chevron');
                            if (openChev) openChev.classList.remove('open');
                        }
                    });
                }

                if (isOpen) {
                    body.classList.remove('open');
                    body.style.maxHeight = '0';
                    if (chevron) chevron.classList.remove('open');
                } else {
                    body.classList.add('open');
                    body.style.maxHeight = body.scrollHeight + 'px';
                    if (chevron) chevron.classList.add('open');
                }
            });
        });

        const sections = document.querySelectorAll('#overview, #topics, #assessments, #reflection, #improvements');
        const navLinks = document.querySelectorAll('.sidebar-nav a');

        const updateActiveLink = () => {
            let currentId = 'overview';
            const scrollPos = window.scrollY + 150;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentId = section.id;
                }
            });

            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
            });
        };

        window.addEventListener('scroll', updateActiveLink);
        setTimeout(updateActiveLink, 100);
    }

    showError(message) {
        const container = document.getElementById('course-detail-container');
        if (container) {
            container.innerHTML = `
                <div class="cd-error">
                    <p>${this.escapeHtml(message)}</p>
                    <p><a href="index.html#courses">← Back to Courses</a></p>
                </div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    function initializeIfReady() {
        if (window.coursesData && window.coursesData.year1) {
            new CoursesPortfolio();
        } else {
            setTimeout(initializeIfReady, 100);
        }
    }
    initializeIfReady();
});
