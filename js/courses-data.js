// E-Portfolio Courses Data
window.coursesData = {
    year1: [
        {
            id: 'tis',
            code: 'SECP 1513',
            title: 'Technology and Information Systems',
            semester: 1,
            year: 1,
            credits: 3,
            description: 'Introduction to information technology systems, emerging ICT, hardware, software, and industry practice.',
            overview: 'Technology and Information Systems introduces core ICT concepts from emerging technologies through databases, networks, cloud computing, and ethics — bridging theory with hands-on and industry engagement.',
            topics: [
                'Chapter 1: Emerging Technology in ICT',
                'Chapter 2: Hardware',
                'Chapter 3: Software',
                'Chapter 4: Information System & System Analysis Design',
                'Chapter 5: Databases & Data Analysis',
                'Chapter 6: Networks & Communications',
                'Chapter 7: Privacy, Security & Ethics',
                'Chapter 8: Cloud Computing'
            ],
            tags: ['Industry Talk & Visit', 'PC Assembly', 'Design Thinking'],
            compulsory: false
        },
        {
            id: 'programming1',
            code: 'SECP 1213',
            title: 'Programming Technique I',
            semester: 1,
            year: 1,
            description: 'Fundamentals of structured programming and problem-solving.',
            topics: [
                'Chapter 1: Programming Problem-Solving',
                'Chapter 2: Elementary Programming',
                'Chapter 3: Control Structures',
                'Chapter 4: Functions',
                'Chapter 5: Array',
                'Chapter 6: Input and Output',
                'Chapter 7: Pointers',
                'Chapter 8: Structured Data'
            ],
            compulsory: false
        },
        {
            id: 'digital-logic',
            code: 'SECP 1413',
            title: 'Digital Logic',
            semester: 1,
            year: 1,
            description: 'Digital systems, logic gates, combinational and sequential circuits.',
            topics: [
                'Chapter 1: Digital Logic Overview',
                'Chapter 2: Number Systems and Codes',
                'Chapter 3: Logic Gates: Overview',
                'Chapter 4: Boolean Algebra and Logic Simplification',
                'Chapter 5: Combinational Logic Circuit',
                'Chapter 6: Functions of Combinational Logic',
                'Chapter 7: Latches and Flip-Flops',
                'Chapter 8: Counters',
                'Chapter 9: Shift Registers'
            ],
            compulsory: false
        },
        {
            id: 'discrete-structure',
            code: 'SECP 1613',
            title: 'Discrete Structure',
            semester: 1,
            year: 1,
            description: 'Mathematical foundations for computer science.',
            topics: [
                'Chapter 1: Set Theory & Logic',
                'Chapter 2: Relations & Functions',
                'Chapter 3: Counting Methods & Probability',
                'Chapter 4: Graph Theory',
                'Chapter 5: Finite Automata'
            ],
            compulsory: false
        },
        {
            id: 'integrity-corruption',
            code: 'UMCE 1103',
            title: 'Integrity and Anti-Corruption',
            semester: 1,
            year: 1,
            description: 'University compulsory course on integrity values and anti-corruption.',
            topics: [
                'Modul 1: Konsep dan Kepentingan Nilai & Jati Diri',
                'Modul 2: Integriti dan Rasuah'
            ],
            compulsory: true
        },
        {
            id: 'system-analysis',
            code: 'SECP 2123',
            title: 'System Analysis and Design',
            semester: 2,
            year: 1,
            description: 'Methods and techniques for analyzing and designing software systems.',
            topics: [],
            compulsory: false
        },
        {
            id: 'programming2',
            code: 'SECP 2213',
            title: 'Programming Technique II',
            semester: 2,
            year: 1,
            description: 'Advanced structured programming with modular design.',
            topics: [],
            compulsory: false
        },
        {
            id: 'hci',
            code: 'SECP 2313',
            title: 'Human Computer Interaction',
            semester: 2,
            year: 1,
            description: 'Principles and practices of designing user-friendly interfaces.',
            topics: [],
            compulsory: false
        },
        {
            id: 'probability-statistics',
            code: 'SECP 2413',
            title: 'Probability and Statistical Data Analysis',
            semester: 2,
            year: 1,
            description: 'Statistical methods and probability theory for data analysis.',
            topics: [
                {
                    title: 'Chapter 1: Introduction to Statistics',
                    children: [
                        '1.1: Introduction',
                        '1.1.1: Descriptive and Inferential Statistics',
                        '1.1.2: Population and Sample'
                    ]
                }
            ],
            compulsory: false
        },
        {
            id: 'ethics-civilization',
            code: 'UMCE 1213',
            title: 'Appreciation of Ethics and Civilizations',
            semester: 2,
            year: 1,
            description: 'University compulsory course on ethics, philosophy, and civilizations.',
            topics: [],
            compulsory: true
        }
    ],

    year2: [
        {
            id: 'database',
            code: 'SECP 3123',
            title: 'Database',
            semester: 3,
            year: 2,
            description: 'Relational databases, SQL, and database design principles.',
            topics: [],
            compulsory: false
        },
        {
            id: 'software-engineering',
            code: 'SECP 3223',
            title: 'Software Engineering',
            semester: 3,
            year: 2,
            description: 'Software development methodologies, processes, and best practices.',
            topics: [],
            compulsory: false
        },
        {
            id: 'dsa',
            code: 'SECP 3313',
            title: 'Data Structure and Algorithm',
            semester: 3,
            year: 2,
            description: 'Advanced data structures and algorithm analysis.',
            topics: [],
            compulsory: false
        },
        {
            id: 'network',
            code: 'SECP 3423',
            title: 'Network Communication',
            semester: 3,
            year: 2,
            description: 'Computer networks, protocols, and communication systems.',
            topics: [],
            compulsory: false
        },
        {
            id: 'system-dev-tech',
            code: 'SECP 3523',
            title: 'System Development Technology',
            semester: 3,
            year: 2,
            description: 'Technologies and tools for system development.',
            topics: [],
            compulsory: false
        },
        {
            id: 'fashion-design',
            code: 'UMCE 2103',
            title: 'Fashion Design',
            semester: 3,
            year: 2,
            description: 'University compulsory course on fashion design and aesthetics.',
            topics: [],
            compulsory: true
        },
        {
            id: 'oop',
            code: 'SECP 4113',
            title: 'Object-Oriented Programming',
            semester: 4,
            year: 2,
            description: 'Object-oriented programming concepts, design, and implementation.',
            topics: [],
            compulsory: false
        },
        {
            id: 'os',
            code: 'SECP 4213',
            title: 'Operating System',
            semester: 4,
            year: 2,
            description: 'Operating system concepts, process management, and resource allocation.',
            topics: [],
            compulsory: false
        },
        {
            id: 'technopreneur',
            code: 'SECP 4323',
            title: 'Technopreneurship Seminar',
            semester: 4,
            year: 2,
            description: 'Entrepreneurship in the technology sector and startup development.',
            topics: [],
            compulsory: false
        },
        {
            id: 'comm-skills1',
            code: 'UHLB 2132',
            title: 'Professional Communication Skills 1',
            semester: 4,
            year: 2,
            description: 'University compulsory course on professional communication fundamentals.',
            topics: [],
            compulsory: true
        },
        {
            id: 'philosophy-issues',
            code: 'SECP 4413',
            title: 'Philosophy and Current Issues',
            semester: 4,
            year: 2,
            description: 'Contemporary philosophical issues and critical thinking.',
            topics: [],
            compulsory: false
        },
        {
            id: 'data-mining',
            code: 'SECP 4513',
            title: 'Data Mining',
            semester: 4,
            year: 2,
            description: 'Data mining techniques, algorithms, and applications.',
            topics: [],
            compulsory: false
        }
    ],

    year3: [
        {
            id: 'ai',
            code: 'SECJ 3553',
            title: 'Artificial Intelligence',
            semester: 5,
            year: 3,
            description: 'AI fundamentals including search strategies, knowledge representation, and machine learning.',
            topics: [
                'Chapter 1: Introduction to AI',
                'Chapter 2: Uninformed Search Strategies (Breadth-First Search, Uniform Cost Search, Depth-First Search, Depth-Limited Search, Iterative Deepening Search)',
                'Chapter 3: Informed Search Strategies (Greedy Best-First Search, A* Search)',
                'Chapter 4: Production Rules & Knowledge Representation',
                'Chapter 5: Structured Knowledge Representation (Semantic Nets, Frames, Conceptual Dependency, Scripts)',
                'Chapter 6: Machine Learning (Supervised, Unsupervised, Reinforcement Learning, Decision Trees)'
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment (50% Total)',
                    items: [
                        { title: 'Assignments / Quizzes (15%)' },
                        { title: 'Group Project (20%)' },
                        { title: 'Mid-Term Exam (15%)' }
                    ]
                },
                {
                    category: 'Summative Assessment',
                    title: 'Summative Assessment (50% Total)',
                    items: [
                        { title: 'Final Examination (50%)' }
                    ]
                }
            ],
            compulsory: false
        },
        {
            id: 'japanese',
            code: 'UHLJ 1112',
            title: 'Japanese Language 1',
            semester: 5,
            year: 3,
            description: 'Introductory Japanese language covering writing systems, grammar, and communication.',
            topics: [
                'Course Introduction & Sound System (Writing, Sentence Structure, Self Introduction 1 & 2)',
                'Greetings 1 - 7 (Hiragana あ to ん, Usage of はい・いいえ, reading exercises)',
                'Japanese Particle Grammar (は, の, も, と, で)',
                'Reading Comprehension (Introducing friends and family members)',
                'Numerical Systems (Numbers, Age, Year expressions, Introduction of specializations)'
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment (100% Total)',
                    items: [
                        { title: 'Weekly Quizzes 1 - 10 (15%)' },
                        { title: 'Homework Assignments / JEX 1 - 3 (15%)' },
                        { title: 'Presentation 1: Oral Video Production (15%)' },
                        { title: 'Presentation 2: Interactive Role Play Interview (15%)' },
                        { title: 'Listening Test (20%)' },
                        { title: 'Final Written Test (20%)' }
                    ]
                }
            ],
            compulsory: true
        },
        {
            id: 'comm-skills2',
            code: 'UHLB 3132',
            title: 'Professional Communication Skills 2',
            semester: 5,
            year: 3,
            description: 'Advanced professional communication for business and technical settings.',
            topics: [
                'Fundamental Speaking Skills in Professional Settings (B2 Level)',
                'Conceptualizing and Constructing Clear Business Proposals',
                'Pitching Ideas and Persuasive Argument Delivery',
                'Formal Group Discussion Mechanics & Expressing Viewpoints Convincingly',
                'Web-Based Communication Resource Utilization'
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment (100% Total)',
                    items: [
                        { title: 'Business Proposal Presentation (Product/Service Pitching) (30%)' },
                        { title: 'Professional Formal Group Discussion (Simulation Task) (40%)' },
                        { title: 'Online Independent Learning Tasks / Portfolio Activities (30%)' }
                    ]
                }
            ],
            compulsory: true
        },
        {
            id: 'electronics',
            code: 'SEEU 3003',
            title: 'Electronics',
            semester: 5,
            year: 3,
            description: 'Semiconductor devices, amplifiers, and operational amplifier circuits.',
            topics: [
                'Chapter 1: Semiconductor Devices & Material Basics',
                'Chapter 2: Diodes (Characteristics, Terminal Properties, and Application Circuits)',
                'Chapter 3: Bipolar Junction Transistors (BJT) & Field-Effect Transistors (FET) Operating Mechanisms',
                'Chapter 4: Small-Signal Single-Stage Amplifiers',
                'Chapter 5: Differential and Multistage Amplifier Architectures',
                'Chapter 6: Operational Amplifiers (Op-Amps) & Ideal Linear Electronic Circuit Design'
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment (50% Total)',
                    items: [
                        { title: 'Homework Assignments (5%)' },
                        { title: 'Lab Practicals & Worksheets (10%)' },
                        { title: 'Quizzes (5%)' },
                        { title: 'Mid-Term Test 1 (15%)' },
                        { title: 'Mid-Term Test 2 (15%)' }
                    ]
                },
                {
                    category: 'Summative Assessment',
                    title: 'Summative Assessment (50% Total)',
                    items: [
                        { title: 'Final Examination (50%)' }
                    ]
                }
            ],
            compulsory: true
        },
        {
            id: 'enterprise-system',
            code: 'SCSP 3744',
            title: 'Enterprise System Design and Modeling',
            semester: 5,
            year: 3,
            description: 'Enterprise systems, ERP, architecture frameworks, and implementation strategies.',
            topics: [
                {
                    title: 'Topic 1: Introduction to Enterprise Systems for Management',
                    children: [
                        'Enterprise Resource Planning (ERP)',
                        'ERP Softwares (SAP, Low Code Development)',
                        'Enterprise Architecture (EA), EA Zachman, EA TOGAF'
                    ]
                },
                'Topic 2: Systems Integration',
                'Topic 3: Enterprise System Architecture',
                'Topic 5: EA (Zachman, TOGAF Framework)',
                'Topic 6: Development Life Cycle - ERP Lifecycle',
                {
                    title: 'Topic 7: Implementation Strategies',
                    children: ['Software and Vendor Selection']
                },
                'Topic 8: Global, Ethics and Security Management',
                'Topic 9: Supply Chain Management',
                'Topic 10: Customer Relationship Management',
                'Topic 11: Data Governance'
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment (70% Total)',
                    items: [
                        { title: 'Project (Phase 1 - Phase 3) (30%)' },
                        { title: 'Assignment 1: Academic Writing (10%)' },
                        { title: 'Assignment 2: Industry Talk (PPG) (10%)' },
                        { title: 'Assignment 3: Industry Visit (10%)' },
                        { title: 'Presentation (Individual) (10%)' }
                    ]
                },
                {
                    category: 'Summative Assessment',
                    title: 'Summative Assessment (30% Total)',
                    items: [
                        { title: 'Final Exam (30%)' }
                    ]
                }
            ],
            compulsory: false
        },
        {
            id: 'data-analytics',
            code: 'SECP 3513',
            title: 'Data Analytics Programming',
            semester: 5,
            year: 3,
            description: 'Programming for data analytics and business intelligence workflows.',
            topics: ['Placeholder for course specific syllabus chapters'],
            compulsory: false
        },
        {
            id: 'db-programming',
            code: 'SECP 3623',
            title: 'Database Programming',
            semester: 5,
            year: 3,
            description: 'Database programming with relational and NoSQL frameworks including MongoDB.',
            topics: [
                'Topic 1: Introduction to Database Programming Concepts',
                'Topic 2: Relational vs. Non-Relational Frameworks & MongoDB Document Store Environment',
                'Topic 3: CRUD Operations in NoSQL Database Engines',
                'Topic 4: Advanced Indexing Strategies and Query Performance Optimization',
                'Topic 5: Replication, Sharding, and Distributed Cluster Scaling Foundations'
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment',
                    items: [
                        { title: 'Lab Assignment 1: Local Setup & Basic Document Schema Design' },
                        { title: 'Lab Assignment 2: Clinic Management System Real Shell commands (Mongosh Scripting)' },
                        { title: 'Database Project Implementation' }
                    ]
                }
            ],
            compulsory: false
        },
        {
            id: 'entrepreneurship',
            code: 'ULRS 3032',
            title: 'Entrepreneurship and Innovation',
            semester: 6,
            year: 3,
            description: 'Entrepreneurship principles, business model canvas, and start-up planning.',
            topics: [
                'Topic 1: The Fundamental Concept and Principles of Entrepreneurship',
                'Topic 2: Entrepreneurial Creativity and Innovation (AI-Assisted Idea Generation)',
                'Topic 3: Idea Generation in Business & Developing Business Ideas Using Business Model Canvas (BMC)',
                'Topic 4: Business Idea Pitching and Persuasive Entrepreneurial Communication',
                'Topic 5: Introduction to Business Model Canvas (BMC) & Marketing Strategies for Different Business Models',
                'Topic 6: Establishment of Business Start-ups',
                'Topic 7: Experiential Entrepreneurial Learning',
                'Topic 8: Organization Management for Business Start-ups',
                'Topic 9: Competitor Analysis and Strategies',
                'Topic 10: Marketing Planning for Business Start-up',
                'Topic 11: Production and Operations Planning for Business Start-Ups',
                'Topic 12: Financial Planning for Business Start-ups'
            ],
            // assessments: [
            //     {
            //         category: 'Coursework',
            //         title: 'Coursework & Assessments',
            //         items: [
            //             { title: 'Individual Online Test (20%)' },
            //             { title: 'Group Assignment & Presentation: Entrepreneurial Leader/Idol/Mentor (5%)' },
            //             { title: 'Group Business Idea Pitch Video & YouTube Submission (30%)' },
            //             { title: 'Live Business Execution & Sales Activity (via Instagram/TikTok, UTM XCITE Start-up registration, and Go-eCommerce tracking)' },
            //             { title: 'Group Project Presentation (20%)' },
            //             { title: 'Final Magazine-Style Business Project Report (30%)' }
            //         ]
            //     }
            // ],
            assignments: [
                {
                    title: 'Assignment 1: Entrepreneurial Leader',
                    format: 'Presentation',
                    group: 'Entrepreneurship & Innovation',
                    description: 'Group assignment and presentation profiling an entrepreneurial leader, idol, or mentor — covering their journey, business philosophy, and lessons applicable to start-up planning.',
                    reflection: 'Researching an entrepreneurial leader helped me see that success is rarely linear. Understanding their failures and pivots made the BMC and pitch work feel more grounded in real practice.',
                    attachments: [
                        {
                            title: 'Entrepreneurial Leader Presentation',
                            filename: 'Assignment_1_Entrepreneurial_Leader.pdf',
                            type: 'pdf',
                            src: 'documents/entrepreneurship/assignment-1-entrepreneurial-leader.pdf'
                        }
                    ]
                },
                {
                    title: 'Project 1: Business Model Canvas',
                    format: 'BMC',
                    group: 'Entrepreneurship & Innovation',
                    description: 'Business Model Canvas for our start-up idea, mapping customer segments, value propositions, channels, revenue streams, and key partnerships.',
                    reflection: 'The BMC forced our team to align on one coherent business story. Filling each block revealed gaps in our assumptions — especially cost structure and customer relationships.',
                    attachments: [
                        {
                            title: 'Business Model Canvas',
                            filename: 'Project_1_BMC.png',
                            type: 'image',
                            src: 'documents/entrepreneurship/project-1-bmc.png'
                        },
                        {
                            title: 'BMC Presentation Slide',
                            filename: 'Project_1_BMC_Slide.pdf',
                            type: 'pdf',
                            src: 'documents/entrepreneurship/project-1-bmc-slide.pdf'
                        }
                    ]
                },
                {
                    title: 'Project 2: Business Activity',
                    format: 'Report',
                    group: 'Entrepreneurship & Innovation',
                    description: 'Written report documenting our live business execution and sales activity, including marketing channels, customer feedback, and operational learnings.',
                    reflection: 'Running a real sales activity showed the gap between a polished BMC and day-to-day execution. Tracking Instagram/TikTok engagement alongside sales taught me to measure what actually converts.',
                    attachments: [
                        {
                            title: 'Business Activity Report',
                            filename: 'Project_2_Business_Activity_Report.pdf',
                            type: 'pdf',
                            src: 'documents/entrepreneurship/project-2-business-activity-report.pdf'
                        }
                    ]
                }
            ],
            compulsory: true
        },
        {
            id: 'high-perf-data',
            code: 'SECP 3133',
            title: 'High Performance Data Processing',
            semester: 6,
            year: 3,
            description: 'High-performance computing, cloud infrastructure, and AWS data processing.',
            topics: [
                'Fundamentals of High-Performance Computing (HPC)',
                'High-Performance Data Processing Architecture',
                'Cloud Computing Infrastructure Types and Data/Algorithm Processing',
                'Platform Hands-on: Amazon Web Services (AWS)'
            ],
            assessments: [
                {
                    category: 'Coursework',
                    title: 'Coursework & Assessments',
                    items: [
                        { title: 'Lab Assignments (LA)' },
                        { title: 'Quizzes (Q) & Theoretical Homework Assignments (Asg)' },
                        { title: 'High-Performance Compute Cluster Project & Oral Presentation (PR & Pr)' },
                        { title: 'Final Examination (FE)' }
                    ]
                }
            ],
            compulsory: false
        },
        {
            id: 'business-intelligence',
            code: 'SECP 3213',
            title: 'Business Intelligence',
            semester: 6,
            year: 3,
            description: 'Business intelligence architecture, analytics, dashboards, and visual discovery.',
            topics: [
                {
                    title: 'Chapter 1: Introduction to Business Intelligence',
                    children: [
                        '1.1: Introduction to Business Intelligence (BI)',
                        '1.2: Concept, Effect of BI in Business',
                        '1.3: The Importance of BI Tools',
                        '1.4: Business Intelligence Governance'
                    ]
                },
                {
                    title: 'Chapter 2: Components of Business Intelligence Architecture',
                    children: [
                        '2.1: Operational and Source System',
                        '2.2: Data Transfer: From Operational to Data Warehouse',
                        '2.3: The Data Warehouse & Technology Platform',
                        '2.4: Big Data Technologies'
                    ]
                },
                {
                    title: 'Chapter 3: Business Intelligence Front-End',
                    children: [
                        '3.1: Self-Service BI',
                        '3.2: Business Query and Reporting',
                        '3.3: Visual Data Discovery',
                        '3.4: Dashboard',
                        '3.5: Scorecard',
                        '3.6: Online Analytical Processing (OLAP)',
                        '3.7: Analytic Applications',
                        '3.8: Big Data Analytics'
                    ]
                },
                {
                    title: 'Chapter 4: Data Analytic Applications for Business',
                    children: [
                        '4.1: Access & Writing Data',
                        '4.2: Joining and Data Prep',
                        '4.3: Data Formula and Calculation',
                        '4.4: Data Investigation',
                        '4.5: Predictive Analytics - Regression, Classification, Clustering'
                    ]
                },
                {
                    title: 'Chapter 5: Developing Visual Analytics',
                    children: [
                        '5.1: Core Concepts of Visual Modeling',
                        '5.2: Dashboard Design & Storytelling in Tableau',
                        '5.3: Dashboard Design & Storytelling in Power BI',
                        '5.4: Publish Dashboard'
                    ]
                }
            ],
            assessments: [
                {
                    category: 'Continuous Assessment',
                    title: 'Continuous Assessment (70% Total)',
                    items: [
                        { title: 'Labs Assignment (15%)' },
                        { title: 'Quiz (10%)' },
                        { title: 'Assignment (Industry Report) (5%)' },
                        { title: 'Project Industry (Real industry case study data preprocessing workflow & dashboard design) (30%)' },
                        { title: 'Exam (Professional Certification: Alteryx Designer - Core Level) (10%)' }
                    ]
                },
                {
                    category: 'Summative Assessment',
                    title: 'Summative Assessment (30% Total)',
                    items: [
                        { title: 'Final Examination (30%)' }
                    ]
                },
                {
                    category: 'WBL',
                    title: 'Work-Based Learning & Experiential Engagements',
                    items: [
                        { title: 'Industry Guest Lecture / Industry Talk' },
                        { title: 'Industry Visit (New Academic Innovative Learning - NALI)' }
                    ]
                }
            ],
            compulsory: false
        },
        {
            id: 'special-topics',
            code: 'SECP 3843',
            title: 'Special Topics in Data Engineering',
            semester: 6,
            year: 3,
            description: 'Advanced data engineering lifecycle, architecture, and industry engagement.',
            topics: [
                'Chapter 1: Data Engineering Described (The Data Engineering Lifecycle)',
                'Chapter 2: The Data Engineering Lifecycle (Generation, Storage, Ingestion, Transformation, Serving)',
                'Chapter 3: Designing Good Data Architecture',
                'Chapter 4: Choosing Technologies Across the Data Engineering Lifecycle',
                'Chapter 5: Source Systems (Data Generation Frameworks)',
                'Chapter 6: Storage Systems & Architectures',
                'Chapter 7: Ingestion Processes',
                'Chapter 8: Transformation Frameworks',
                'Chapter 9: Serving Data (Analytics, ML, and Reverse ETL)',
                'Chapter 10: Security and Privacy (Shared Cloud Responsibility & Least Privilege)',
                'Chapter 11: The Future of Data Engineering'
            ],
            assignments: [
                {
                    category: 'Industry Engagement',
                    title: 'Industry Engagement',
                    items: [
                        { title: 'Industry Visit (PPG)' },
                        { title: 'Industry Talk (Izeno)' }
                    ]
                },
                {
                    category: 'Core Assignments',
                    title: 'Core Assignments',
                    items: [
                        { title: 'Assignment 1 (Academic Writing)' },
                        { title: 'Assignment 2 (Tutorial Azure)' },
                        { title: 'Assignment 3 (Tutorial Apache Spark)' },
                        { title: 'Assignment 4 (Tutorial AI)' }
                    ]
                },
                {
                    category: 'Hands-on Projects',
                    title: 'Hands-on Projects',
                    items: [
                        { title: 'Project Industry (PPG)' },
                        { title: 'Project Individual (Alternative Assessment)' }
                    ]
                }
            ],
            assignments: [
                {
                    title: 'Industry Visit',
                    format: 'Visit Reflection',
                    reflection: 'The industry visit gave me a clearer picture of how data engineering is applied outside the classroom. I learned how teams organize real data workflows, communicate technical decisions, and connect business needs with technical implementation.',
                    improvement: 'I could improve by preparing more questions before the visit and connecting the answers more directly to my own project work.'
                },
                {
                    title: 'Industry Talk',
                    format: 'Talk Reflection',
                    reflection: 'The industry talk helped me understand current expectations for data engineering roles, especially the importance of cloud tools, data quality, communication, and continuous learning.',
                    improvement: 'I should summarize key points immediately after each talk and turn them into action items for my skills development.'
                },
                {
                    title: 'Assignment',
                    format: 'Course Assignments',
                    items: [
                        { title: 'Assignment 1: Academic Writing', format: 'Written Assignment' },
                        { title: 'Assignment 2: Tutorial Azure', format: 'Cloud Tutorial' },
                        { title: 'Assignment 3: Tutorial Apache Spark', format: 'Big Data Tutorial' },
                        { title: 'Assignment 4: Tutorial AI', format: 'AI Tutorial' }
                    ],
                    reflection: 'The assignments helped me build both technical and communication skills. Academic writing improved how I structure ideas, while the Azure, Apache Spark, and AI tutorials strengthened my confidence in using tools relevant to modern data engineering.',
                    improvement: 'I could improve by documenting each tutorial step more neatly, adding screenshots or diagrams, and comparing different tools instead of only following the tutorial flow.'
                },
                {
                    title: 'Project Industry: PPG',
                    format: 'Industry Project',
                    reflection: 'The PPG project allowed me to apply data engineering concepts in a more realistic context. I gained experience thinking about medallion architecture, data pipeline design, and how raw data can be transformed into more useful analytical layers.',
                    improvement: 'I can improve the project by adding clearer pipeline documentation, stronger validation steps, and more explanation of how the solution supports business decisions.'
                },
                {
                    title: 'Project Individual: Alternative Assessment',
                    format: 'Individual Project',
                    reflection: 'The individual project encouraged me to take ownership of my learning and present my work in a portfolio format. It helped me reflect on my strengths, organize evidence of learning, and communicate my development more professionally.',
                    improvement: 'I should continue improving the visual presentation, add stronger project links, and write more specific reflections for each piece of work.'
                }
            ],
            reflection: 'Special Topics in Data Engineering helped me connect classroom knowledge with real industry expectations. I learned not only technical concepts such as Azure, Apache Spark, AI, and data pipelines, but also how important communication, documentation, reflection, and professional presentation are for a data engineering student.',
            improvements: [
                'Improve technical documentation by adding clearer diagrams, screenshots, and step-by-step explanations.',
                'Spend more time comparing tools and explaining why a certain technology is suitable for a project.',
                'Make reflections more specific by connecting each assignment to skills, challenges, and future career goals.'
            ],
            compulsory: false
        },
        {
            id: 'app-development',
            code: 'SECP 3643',
            title: 'Application Development',
            semester: 6,
            year: 3,
            url: 'https://flutterappdev.lovable.app/',
            description: 'Cross-platform mobile application development with Flutter and Firebase.',
            overview: 'Application Development covers cross-platform mobile engineering with Flutter, Firebase backend integration, and AI-native app workflows including prompt engineering.',
            topics: [
                'Cross-Platform Mobile Application Development Architectures',
                'Frontend UI/UX Engineering using Flutter Components',
                'Backend Integration & Real-time Cloud Infrastructure with Firebase',
                'AI-Native App Workflows & Prompt Engineering Integrations'
            ],
            assessments: [
                {
                    category: 'Coursework',
                    title: 'Coursework & Assessments',
                    items: [
                        { title: 'Hands-on Lab Tutorials & UI Mockups' },
                        { title: 'Individual App Features Implementation' },
                        { title: 'Full-Stack Interactive Application Project (Flutter Frontend + Firebase Backend Deployment)' },
                        { title: 'Live Application Deployment & Presentation Showcase (via Lovable web app platform)' }
                    ]
                }
            ],
            tags: ['Flutter', 'Firebase', 'Cross-Platform'],
            compulsory: false
        }
    ]
};

Object.values(window.coursesData).flat().forEach(course => {
    const placeholder = 'Add your personal reflection here about what you learned in this course.';

    if (!course.reflection || course.reflection === placeholder) {
        const topicSample = (course.topics || course.keyTopics || []).slice(0, 3);
        const topicText = topicSample.length
            ? topicSample.map(t => (typeof t === 'string' ? t : t.title)).join(', ')
            : course.title;

        course.reflection = `Through ${course.title}, I gained a stronger understanding of ${topicText} and how these concepts support my growth as a computer science student. The coursework helped me practise problem solving, documentation, and applying theory to practical tasks.`;
    }

    if (!course.improvements) {
        course.improvements = [
            'Revise the main topics more consistently instead of waiting until assessment week.',
            'Keep better notes for assignments, especially decisions, challenges, and feedback received.',
            'Practise applying the concepts in small personal exercises so the learning becomes more practical.'
        ];
    }

    if (!course.actionPlan) {
        course.actionPlan = [
            'Block time before deadlines for polish and peer review.',
            'Document tutorial steps with screenshots and short explanations.',
            'Connect each assignment outcome to portfolio evidence and career goals.'
        ];
    }
});
