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
            compulsory: false,
            // Added standard assignment structure
            assignments: [
                {
                    title: 'Assignment 1: Industry Talk Poster',
                    format: 'Poster',
                    group: 'Industry Engagement',
                    description: 'A visual poster summarizing key takeaways from the Industry Talk.',
                    reflection: 'Creating a poster helped me synthesize complex tech talk content into a clear, visual narrative.',
                    attachments: [
                        { title: 'Industry Talk Poster', filename: 'Industry_Talk_Poster.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Industry Visit Documentary',
                    format: 'Video',
                    group: 'Industry Engagement',
                    description: 'A 5-minute video documentary capturing the group\'s site visit experiences.',
                    reflection: 'Editing the documentary taught me how to weave a narrative from raw footage.',
                    attachments: [
                        { title: 'Visit Documentary', filename: 'Industry_Visit_Documentary.mp4', type: 'video', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 3: Design Thinking Prototype',
                    format: 'Prototype',
                    group: 'Design Practice',
                    description: 'Lo-fi paper prototype for a campus problem using the Design Thinking process.',
                    reflection: 'The Design Thinking process taught me the value of empathizing with users before jumping to solutions.',
                    attachments: [
                        { title: 'Paper Prototype Document', filename: 'Design_Thinking_Prototype.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Basic Programming Problems',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Writing basic programs covering data types, input/output, and control structures.',
                    reflection: 'Implementing these foundational codes helped me grasp the logic and syntax of C/C++ structures.',
                    attachments: [
                        { title: 'Assignment 1 Source Code', filename: 'Prog1_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Functions and Arrays',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Writing modular code utilizing functions and array data structures.',
                    reflection: 'Learning to divide code into functions made my programs much more readable and debuggable.',
                    attachments: [
                        { title: 'Assignment 2 Source Code', filename: 'Prog1_Assignment_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Logic Circuits Design',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Designing and testing simple combinational logic circuits.',
                    reflection: 'Using truth tables and logic gates to build circuits gave me a physical understanding of binary logic.',
                    attachments: [
                        { title: 'Logic Circuits Lab Report', filename: 'Digital_Logic_Lab_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Sequential Circuits',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Designing and simulating sequential circuits using flip-flops.',
                    reflection: 'Understanding feedback loops and clock cycles was challenging but rewarding for sequential logic.',
                    attachments: [
                        { title: 'Sequential Circuits Lab Report', filename: 'Digital_Logic_Lab_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Set Theory & Logic',
                    format: 'Problem Set',
                    group: 'Coursework',
                    description: 'Solving mathematical problem sets related to Set Theory and Propositional Logic.',
                    reflection: 'These problems strengthened my ability to reason logically and mathematically.',
                    attachments: [
                        { title: 'Discrete Structures Assignment 1', filename: 'Discrete_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Graph Theory & Automata',
                    format: 'Problem Set',
                    group: 'Coursework',
                    description: 'Applying graph theory and finite automata to practical computer science problems.',
                    reflection: 'Graphs are ubiquitous in CS, and applying them to data structures gave me a solid conceptual foundation.',
                    attachments: [
                        { title: 'Discrete Structures Assignment 2', filename: 'Discrete_Assignment_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Integrity Essay',
                    format: 'Essay',
                    group: 'Coursework',
                    description: 'Reflective essay on the importance of integrity in professional and personal life.',
                    reflection: 'This course helped me internalize that upholding integrity is foundational to a sustainable career.',
                    attachments: [
                        { title: 'Integrity Essay', filename: 'Integrity_Essay.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'system-analysis',
            code: 'SECP 2123',
            title: 'System Analysis and Design',
            semester: 2,
            year: 1,
            description: 'Methods and techniques for analyzing and designing software systems.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Requirements Analysis',
                    format: 'Report',
                    group: 'Project',
                    description: 'Gathering and documenting system requirements for a proposed application.',
                    reflection: 'Learning to map user needs to technical specifications was a critical step in understanding the full lifecycle.',
                    attachments: [
                        { title: 'SAD Assignment 1', filename: 'SAD_Requirements.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: UML Diagrams',
                    format: 'Diagrams',
                    group: 'Project',
                    description: 'Creating Use Case, Class, and Sequence diagrams for the system.',
                    reflection: 'UML diagrams provided a clear blueprint for translating requirements into a concrete architecture.',
                    attachments: [
                        { title: 'SAD Assignment 2 - UML', filename: 'SAD_UML_Diagrams.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'programming2',
            code: 'SECP 2213',
            title: 'Programming Technique II',
            semester: 2,
            year: 1,
            description: 'Advanced structured programming with modular design.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Modular Programming & Recursion',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Developing modular code and recursive solutions to complex problems.',
                    reflection: 'Mastering recursion and modular design truly elevated my programming logic.',
                    attachments: [
                        { title: 'Prog2 Assignment 1', filename: 'Programming_II_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Pointers & Structured Data',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Implementing programs using pointers and structured data types.',
                    reflection: 'Pointers were tricky at first, but practicing them gave me direct control over memory management.',
                    attachments: [
                        { title: 'Prog2 Assignment 2', filename: 'Programming_II_Assignment_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'hci',
            code: 'SECP 2313',
            title: 'Human Computer Interaction',
            semester: 2,
            year: 1,
            description: 'Principles and practices of designing user-friendly interfaces.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: User Persona & Journey',
                    format: 'Report',
                    group: 'Design Project',
                    description: 'Creating user personas, scenarios, and empathy maps for a target audience.',
                    reflection: 'This assignment made me realize that good design always starts with deep empathy for the user.',
                    attachments: [
                        { title: 'Persona & Journey Map', filename: 'HCI_Personas.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Low-Fidelity Prototype',
                    format: 'Prototype',
                    group: 'Design Project',
                    description: 'Sketching and building interactive low-fidelity prototypes.',
                    reflection: 'Testing paper prototypes before coding saved us from building the wrong features.',
                    attachments: [
                        { title: 'Lo-Fi Prototype Images', filename: 'HCI_Prototype.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Descriptive Statistics',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Analyzing data sets and calculating descriptive statistical measures.',
                    reflection: 'Understanding data distribution and central tendencies formed the bedrock of my data analysis skills.',
                    attachments: [
                        { title: 'Statistics Lab 1', filename: 'Statistics_Lab_1.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'ethics-civilization',
            code: 'UMCE 1213',
            title: 'Appreciation of Ethics and Civilizations',
            semester: 2,
            year: 1,
            description: 'University compulsory course on ethics, philosophy, and civilizations.',
            topics: [],
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Ethics Reflection',
                    format: 'Essay',
                    group: 'Coursework',
                    description: 'Reflective essay on the appreciation of ethics and civilization in modern society.',
                    reflection: 'Connecting historical civilizations with current ethical frameworks provided a macro view of our social structures.',
                    attachments: [
                        { title: 'Ethics Reflection Essay', filename: 'Ethics_Civilization_Essay.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: SQL Queries',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Writing complex SQL queries for data manipulation and retrieval.',
                    reflection: 'Mastering JOINs and subqueries significantly improved my ability to extract insights from raw data.',
                    attachments: [
                        { title: 'SQL Queries File', filename: 'Database_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: ERD & Normalization',
                    format: 'Diagrams',
                    group: 'Lab Assignments',
                    description: 'Designing Entity-Relationship diagrams and normalizing tables.',
                    reflection: 'Normalizing a database up to 3NF prevents data redundancy and ensures data integrity.',
                    attachments: [
                        { title: 'ERD Diagrams', filename: 'Database_Assignment_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'software-engineering',
            code: 'SECP 3223',
            title: 'Software Engineering',
            semester: 3,
            year: 2,
            description: 'Software development methodologies, processes, and best practices.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Requirements Elicitation',
                    format: 'Report',
                    group: 'Project',
                    description: 'Performing requirement elicitation and documenting a formal SRS.',
                    reflection: 'Writing a clear SRS ensures stakeholders and developers are aligned before a single line of code is written.',
                    attachments: [
                        { title: 'SRS Document', filename: 'SE_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'dsa',
            code: 'SECP 3313',
            title: 'Data Structure and Algorithm',
            semester: 3,
            year: 2,
            description: 'Advanced data structures and algorithm analysis.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Linked Lists & Trees',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Implementing fundamental data structures like linked lists and binary trees.',
                    reflection: 'Implementing these structures manually made me appreciate the performance tradeoffs between arrays and pointers.',
                    attachments: [
                        { title: 'DSA Assignment 1 Report', filename: 'DSA_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Sorting & Searching',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Implementing and comparing the performance of various sorting algorithms.',
                    reflection: 'Comparing time complexities empirically was an excellent way to understand Big O notation.',
                    attachments: [
                        { title: 'DSA Assignment 2 Report', filename: 'DSA_Assignment_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'network',
            code: 'SECP 3423',
            title: 'Network Communication',
            semester: 3,
            year: 2,
            description: 'Computer networks, protocols, and communication systems.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Packet Tracer Lab',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Simulating network topologies and routing protocols with Cisco Packet Tracer.',
                    reflection: 'Learning the OSI model and how data actually travels across wires was practically enlightening.',
                    attachments: [
                        { title: 'Packet Tracer Lab 1', filename: 'Network_Lab_1.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'system-dev-tech',
            code: 'SECP 3523',
            title: 'System Development Technology',
            semester: 3,
            year: 2,
            description: 'Technologies and tools for system development.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Technology Stack Analysis',
                    format: 'Report',
                    group: 'Report',
                    description: 'Researching and comparing different web development technology stacks.',
                    reflection: 'Understanding the trade-offs between different stacks helps in making more informed architectural decisions.',
                    attachments: [
                        { title: 'Tech Stack Analysis Report', filename: 'Dev_Tech_Analysis.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'fashion-design',
            code: 'UMCE 2103',
            title: 'Fashion Design',
            semester: 3,
            year: 2,
            description: 'University compulsory course on fashion design and aesthetics.',
            topics: [],
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Mood Board',
                    format: 'Visual',
                    group: 'Coursework',
                    description: 'Creating a visual mood board for a fashion concept.',
                    reflection: 'Exploring visual design principles and color theory was a refreshing break from pure technical subjects.',
                    attachments: [
                        { title: 'Fashion Mood Board', filename: 'Fashion_MoodBoard.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'oop',
            code: 'SECP 4113',
            title: 'Object-Oriented Programming',
            semester: 4,
            year: 2,
            description: 'Object-oriented programming concepts, design, and implementation.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Classes & Inheritance',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Writing Java programs utilizing classes, objects, and inheritance.',
                    reflection: 'OOP allowed me to map real-world relationships directly into my code structures.',
                    attachments: [
                        { title: 'OOP Assignment 1', filename: 'OOP_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Polymorphism & Interfaces',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Implementing polymorphism, abstract classes, and interfaces.',
                    reflection: 'Interfaces provide a clean way to standardize behaviors across completely different classes.',
                    attachments: [
                        { title: 'OOP Assignment 2', filename: 'OOP_Assignment_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'os',
            code: 'SECP 4213',
            title: 'Operating System',
            semester: 4,
            year: 2,
            description: 'Operating system concepts, process management, and resource allocation.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Process Management',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Simulating and analyzing process scheduling algorithms.',
                    reflection: 'Understanding CPU scheduling gave me insight into how modern operating systems manage concurrency.',
                    attachments: [
                        { title: 'OS Scheduling Lab', filename: 'OS_Assignment_1.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'technopreneur',
            code: 'SECP 4323',
            title: 'Technopreneurship Seminar',
            semester: 4,
            year: 2,
            description: 'Entrepreneurship in the technology sector and startup development.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Business Plan Draft',
                    format: 'Report',
                    group: 'Project',
                    description: 'Creating a preliminary business plan for a tech startup.',
                    reflection: 'Translating a technical idea into a viable business model requires a balance of vision and practicality.',
                    attachments: [
                        { title: 'Business Plan Report', filename: 'Technopreneur_Business_Plan.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'comm-skills1',
            code: 'UHLB 2132',
            title: 'Professional Communication Skills 1',
            semester: 4,
            year: 2,
            description: 'University compulsory course on professional communication fundamentals.',
            topics: [],
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Professional Presentation',
                    format: 'Video',
                    group: 'Coursework',
                    description: 'Delivering a professional oral presentation on a given topic.',
                    reflection: 'Presenting in front of an audience improved my confidence and my ability to structure clear talking points.',
                    attachments: [
                        { title: 'Presentation Video', filename: 'Comm_Skills_Presentation.mp4', type: 'video', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'philosophy-issues',
            code: 'SECP 4413',
            title: 'Philosophy and Current Issues',
            semester: 4,
            year: 2,
            description: 'Contemporary philosophical issues and critical thinking.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Philosophical Reflection',
                    format: 'Essay',
                    group: 'Coursework',
                    description: 'Critical essay reflecting on a contemporary social issue.',
                    reflection: 'Applying philosophical frameworks to modern dilemmas sharpened my critical thinking skills.',
                    attachments: [
                        { title: 'Philosophy Essay', filename: 'Philosophy_Essay.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'data-mining',
            code: 'SECP 4513',
            title: 'Data Mining',
            semester: 4,
            year: 2,
            description: 'Data mining techniques, algorithms, and applications.',
            topics: [],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Data Preprocessing',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Cleaning, transforming, and preparing raw datasets for mining.',
                    reflection: 'I learned that 80% of data science is actually just cleaning and wrangling the data.',
                    attachments: [
                        { title: 'Data Preprocessing Lab', filename: 'Data_Mining_Lab_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Classification Models',
                    format: 'Lab Report',
                    group: 'Lab Assignments',
                    description: 'Building and evaluating classification models using Python libraries.',
                    reflection: 'Comparing accuracy, precision, and recall was an eye-opening experience into model evaluation.',
                    attachments: [
                        { title: 'Classification Lab', filename: 'Data_Mining_Lab_2.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            // Converted assessments to assignments
            assignments: [
                {
                    title: 'Assignment 1: AI Quizzes & Exercises',
                    format: 'Quiz',
                    group: 'Continuous Assessment',
                    description: 'Quizzes covering search strategies, knowledge representation, and ML fundamentals.',
                    reflection: 'These weekly quizzes ensured I kept up with the theoretical foundations of AI algorithms.',
                    attachments: [
                        { title: 'AI Quizzes Summary', filename: 'AI_Quizzes.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: AI Group Project',
                    format: 'Project',
                    group: 'Continuous Assessment',
                    description: 'Implementing an AI agent or ML solution for a specific problem domain.',
                    reflection: 'Collaborating on an AI project taught me how to tune hyperparameters and debug complex models.',
                    attachments: [
                        { title: 'AI Project Report', filename: 'AI_Project_Report.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 3: Mid-Term Exam',
                    format: 'Exam',
                    group: 'Continuous Assessment',
                    description: 'Mid-term exam covering uninformed and informed search strategies.',
                    reflection: 'Preparing for this exam really solidified my understanding of the mathematical foundations of search.',
                    attachments: []
                }
            ]
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
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Oral Video Production',
                    format: 'Video',
                    group: 'Continuous Assessment',
                    description: 'Creating a short self-introduction video in Japanese.',
                    reflection: 'Recording myself speaking Japanese helped improve my pronunciation and confidence.',
                    attachments: [
                        { title: 'Oral Video Submission', filename: 'Japanese_Oral_Video.mp4', type: 'video', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Interactive Role Play',
                    format: 'Role Play',
                    group: 'Continuous Assessment',
                    description: 'Participating in a live interactive role play interview simulation.',
                    reflection: 'Engaging in spontaneous role-play forced me to recall vocabulary and grammar on the fly.',
                    attachments: [
                        { title: 'Role Play Reflection', filename: 'Japanese_RolePlay.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 3: Final Written Test',
                    format: 'Exam',
                    group: 'Continuous Assessment',
                    description: 'Final written exam covering vocabulary, grammar, and reading comprehension.',
                    reflection: 'The weekly JEX assignments gradually built up my stamina for the final written test.',
                    attachments: []
                }
            ]
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
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Business Proposal Pitch',
                    format: 'Presentation',
                    group: 'Continuous Assessment',
                    description: 'Pitching a business product or service idea to a panel.',
                    reflection: 'Condensing a detailed proposal into a 5-minute pitch was a great exercise in brevity.',
                    attachments: [
                        { title: 'Proposal Pitch Deck', filename: 'Comm2_Proposal_Pitch.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Formal Group Discussion',
                    format: 'Presentation',
                    group: 'Continuous Assessment',
                    description: 'Participating in a structured formal group discussion on a selected topic.',
                    reflection: 'Listening and responding constructively during the discussion honed my interpersonal communication skills.',
                    attachments: [
                        { title: 'Discussion Reflection', filename: 'Comm2_Group_Discussion.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: true,
            assignments: [
                {
                    title: 'Assignment 1: Electronic Circuits Lab',
                    format: 'Lab Report',
                    group: 'Continuous Assessment',
                    description: 'Hands-on lab worksheets covering diode, BJT, and Op-Amp circuits.',
                    reflection: 'Breadboarding actual circuits solidified my understanding of how theoretical components behave physically.',
                    attachments: [
                        { title: 'Electronics Labs', filename: 'Electronics_Labs.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Mid-Term Tests',
                    format: 'Exam',
                    group: 'Continuous Assessment',
                    description: 'Two mid-term tests covering semiconductor devices and amplifiers.',
                    reflection: 'Reviewing for these tests forced me to deeply understand the mathematics behind the electronics.',
                    attachments: []
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Academic Writing',
                    format: 'Written Assignment',
                    group: 'Continuous Assessment',
                    description: 'Academic writing assignment on an enterprise system topic.',
                    reflection: 'Researching enterprise architectures helped me understand how massive organizations manage their tech stacks.',
                    attachments: [
                        { title: 'Academic Writing PDF', filename: 'Enterprise_Academic_Writing.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Industry Talk Report',
                    format: 'Report',
                    group: 'Continuous Assessment',
                    description: 'Report on the PPG industry talk regarding enterprise solutions.',
                    reflection: 'Hearing directly from industry practitioners gave me realistic insight into ERP implementation.',
                    attachments: [
                        { title: 'Industry Talk Report', filename: 'Enterprise_Talk_Report.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 3: Project Phase 1',
                    format: 'Project',
                    group: 'Continuous Assessment',
                    description: 'Developing the initial phase of the enterprise system project.',
                    reflection: 'Applying the TOGAF framework to a hypothetical business problem provided practical modeling experience.',
                    attachments: [
                        { title: 'Project Phase 1', filename: 'Enterprise_Project_Phase1.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'data-analytics',
            code: 'SECP 3513',
            title: 'Data Analytics Programming',
            semester: 5,
            year: 3,
            description: 'Programming for data analytics and business intelligence workflows.',
            topics: ['Placeholder for course specific syllabus chapters'],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Data Analysis with Python',
                    format: 'Code',
                    group: 'Lab Assignments',
                    description: 'Exploring data analytics workflows using Python libraries like Pandas.',
                    reflection: 'Pandas made data manipulation incredibly fast, turning complex data into actionable insights.',
                    attachments: [
                        { title: 'Data Analytics Code', filename: 'Data_Analytics_Lab.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: NoSQL Schema Design',
                    format: 'Lab Assignment',
                    group: 'Continuous Assessment',
                    description: 'Setting up MongoDB and designing document schemas.',
                    reflection: 'Designing schemas for NoSQL required a shift in thinking from rigid tables to flexible JSON documents.',
                    attachments: [
                        { title: 'NoSQL Lab 1', filename: 'DB_Prog_Lab_1.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Clinic Management System',
                    format: 'Lab Assignment',
                    group: 'Continuous Assessment',
                    description: 'Mongosh scripting for a clinic management system database.',
                    reflection: 'Writing aggregation pipelines in Mongo Shell significantly boosted my data querying efficiency.',
                    attachments: [
                        { title: 'Mongosh Scripts', filename: 'DB_Prog_Lab_2.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 3: Database Project Implementation',
                    format: 'Project',
                    group: 'Continuous Assessment',
                    description: 'Full implementation of a database project using NoSQL.',
                    reflection: 'Incorporating replication and sharding concepts prepared me for production-level database administration.',
                    attachments: [
                        { title: 'Database Project Report', filename: 'DB_Prog_Final_Project.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
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
            compulsory: true,
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
                            src: '#'
                        },
                        {
                            title: 'BMC Presentation Slide',
                            filename: 'Project_1_BMC_Slide.pdf',
                            type: 'pdf',
                            src: '#'
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
                            src: '#'
                        }
                    ]
                }
            ],
            reflection: 'The entrepreneurship course was a practical journey from ideation to execution. Each assignment built on the last, culminating in a real-world business activity that tested our assumptions and taught us the importance of adaptability, customer feedback, and clear communication.',
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
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Lab Assignments',
                    format: 'Lab Report',
                    group: 'Coursework',
                    description: 'Hands-on lab assignments utilizing AWS and HPC compute clusters.',
                    reflection: 'Setting up AWS services gave me a practical understanding of cloud-based parallel processing.',
                    attachments: [
                        { title: 'HPC Lab Report', filename: 'HPC_Labs.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: HPC Cluster Project',
                    format: 'Project',
                    group: 'Coursework',
                    description: 'High-Performance Compute Cluster Project including an oral presentation.',
                    reflection: 'Designing a cluster architecture taught me the critical importance of cost-performance tradeoffs.',
                    attachments: [
                        { title: 'HPC Project Report', filename: 'HPC_Project.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        },
        {
            id: 'business-intelligence',
            code: 'SECP 3213',
            title: 'Business Intelligence',
            semester: 6,
            year: 3,
            description: 'This course introduces the concepts and tools essential for transforming raw data into actionable business insights. This course will explores business intelligence fundamentals, ETL processes using Alteryx Designer, dashboard design using Power BI and Tableau, and predictive analytics. This course teaches how to design and implement business intelligence solutions, analyze and interpret complex datasets, and communicate insights effectively through visualizations and reports to support informed, data-driven decision-making.',
            topics: [
                {
                    title: 'Chapter 1: Introduction to Business Intelligence',
                    // children: [
                    //     '1.1: Introduction to Business Intelligence (BI)',
                    //     '1.2: Concept, Effect of BI in Business',
                    //     '1.3: The Importance of BI Tools',
                    //     '1.4: Business Intelligence Governance'
                    // ]
                },
                {
                    title: 'Chapter 2: Components of Business Intelligence Architecture',
                    // children: [
                    //     '2.1: Operational and Source System',
                    //     '2.2: Data Transfer: From Operational to Data Warehouse',
                    //     '2.3: The Data Warehouse & Technology Platform',
                    //     '2.4: Big Data Technologies'
                    // ]
                },
                {
                    title: 'Chapter 3: Business Intelligence Front-End',
                    // children: [
                    //     '3.1: Self-Service BI',
                    //     '3.2: Business Query and Reporting',
                    //     '3.3: Visual Data Discovery',
                    //     '3.4: Dashboard',
                    //     '3.5: Scorecard',
                    //     '3.6: Online Analytical Processing (OLAP)',
                    //     '3.7: Analytic Applications',
                    //     '3.8: Big Data Analytics'
                    // ]
                },
                {
                    title: 'Chapter 4: Data Analytic Applications for Business',
                    // children: [
                    //     '4.1: Access & Writing Data',
                    //     '4.2: Joining and Data Prep',
                    //     '4.3: Data Formula and Calculation',
                    //     '4.4: Data Investigation',
                    //     '4.5: Predictive Analytics - Regression, Classification, Clustering'
                    // ]
                },
                {
                    title: 'Chapter 5: Developing Visual Analytics',
                    // children: [
                    //     '5.1: Core Concepts of Visual Modeling',
                    //     '5.2: Dashboard Design & Storytelling in Tableau',
                    //     '5.3: Dashboard Design & Storytelling in Power BI',
                    //     '5.4: Publish Dashboard'
                    // ]
                }
            ],
            compulsory: false,
            assignments: [
                {
                    title: 'Lab 1: Data Preprocessing in Alteryx',
                    format: 'Lab Assignment',
                    group: 'Continuous Assessment',
                    description: 'Hands-on lab assignments done during classes covering data prep, joining, and and basic data preprocessing using Alteryx.',
                    reflection: 'Learned how to clean and transform raw data into a structured format suitable for analysis using Alteryx, which is crucial for accurate insights when doing the course project.',
                    attachments: [
                        { title: 'BI Lab 1', filename: 'BI_Labs', type: 'image', src: 'documents/bi/lab1_segment.png' },
                        { title: 'BI Lab 1', filename: 'BI_Labs', type: 'image', src: 'documents/bi/lab1_combinesheets.png' },
                        { title: 'BI Lab 1', filename: 'BI_Labs', type: 'image', src: 'documents/bi/lab1_rowtocolumns.png' }
                    ]
                },
                {
                    title: 'Lab 2: Data Investigation and Predictive in Alteryx',
                    format: 'Lab Assignment',
                    group: 'Continuous Assessment',
                    description: 'Hands-on lab assignments done during classes covering data investigation and predictive analytics using Alteryx.',
                    reflection: 'Learned how to use regression and time series models to forecast future trends for making data-driven business decisions. The feature engineering and model tuning process was particularly insightful for understanding how to improve predictive accuracy.',
                    attachments: [
                        { title: 'BI Lab 2', filename: 'BI_Lab2', type: 'image', src: 'documents/bi/lab2_regression.png' },
                        { title: 'BI Lab 2', filename: 'BI_Lab2', type: 'image', src: 'documents/bi/lab2_timeseries.png' }
                    ]
                },
                {
                    title: 'Assignment 2: US Housing Analysis Project',
                    format: 'Project',
                    group: 'Continuous Assessment',
                    description: 'In this project, three distinct US housing datasets from Kaggle were cleansed and integrated using Alteryx to resolve formatting inconsistencies, data gaps, and extreme price outliers. The structured joined dataset was processed through summarization analysis and ARIMA time-series model was used to forecast future prices. The data is then translated into interactive Power BI dashboards to map out real estate affordability ratios, property characteristic variations, and geographic density distribution trends to deliver data-driven market opportunity intelligence for strategic investment decision-making.',
                    reflection: 'Working on this project made the core learning goals of the SECP3213 course highly practical. Managing messy Kaggle data showed how chaotic real-world information can be, teaching valuable lessons on how to handle missing fields and extreme price outliers without ruining the overall analysis. Overcoming an initially weak price-forecasting model by manually tuning the ARIMA settings demonstrated the power of combining digital tools with critical thinking to fix complex data challenges. Ultimately, moving step-by-step from data cleaning to creating visual dashboards proved how business intelligence successfully turns confusing rows of numbers into clear, helpful recommendations for property investors.',
                    attachments: [
    
                        { title: 'BI Project Alteryx', filename: 'BI_Project.png', type: 'image', src: 'documents/bi/project.png' },
                        { title: 'Power BI Project Dashboards', filename: 'BI_PowerBI_Project.pdf', type: 'pdf', src: 'documents/bi/phase3_pacman.pdf' }
                    ]
                },
                {
                    title: 'Alteryx Designer Certification',
                    format: 'Exam',
                    group: 'Continuous Assessment',
                    description: 'Professional certification exam for Alteryx Designer Core Level.',
                    reflection: 'The Alteryx Designer Core certification exam tested my understanding of data preparation, blending, and analysis workflows. Passing the exam validated my ability to apply Alteryx tools effectively in real-world scenarios.',
                    attachments: [
                        { title: 'Alteryx Designer Core Certification', filename: 'Alteryx_Designer_Certification.pdf', type: 'pdf', src: 'documents/bi/Alteryx_Certification.pdf' }
                    ]
                }
            ],
            reflection: 'This course provides a powerful experience in transforming raw data into practical business choices. Through the Pacman real estate project using US housing datasets, the journey highlighted how chaotic real-world information can be before it is properly organized. Using Alteryx to clean and blend messy files taught valuable lessons in data preparation and trend forecasting. The most rewarding part was using Power BI to turn those complex spreadsheets into clear, interactive dashboards that track housing affordability and geographic patterns. Discovering how property conditions and neighborhood types impact home values proved that the role of a data engineer goes far beyond managing rows of numbers. It is about translating data into useful insights that anyone can understand. Ultimately, this course successfully bridged the gap between technical skills and strategic thinking, showing that business intelligence is about telling a meaningful story to guide confident decision-making.',
            improvements: [
                'Spend more time on data cleaning and preprocessing to ensure the quality of the dataset before analysis.',
                'Explore additional predictive modeling techniques beyond ARIMA to improve forecasting accuracy.',
                'Enhance dashboard interactivity by incorporating more dynamic filters and drill-down capabilities.'
            ]
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
            compulsory: false,
            // Completely rewritten into the flat assignment structure the user requested
            assignments: [
                {
                    title: 'Industry Visit',
                    format: 'Reflection',
                    group: 'Industry Engagement',
                    description: 'Reflection on the industry visit to observe real-world data engineering workflows.',
                    reflection: 'The industry visit gave me a clearer picture of how data engineering is applied outside the classroom. I learned how teams organize real data workflows, communicate technical decisions, and connect business needs with technical implementation.',
                    attachments: [
                        { title: 'Visit Reflection', filename: 'Industry_Visit_Reflection.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Industry Talk',
                    format: 'Reflection',
                    group: 'Industry Engagement',
                    description: 'Reflection on the industry talk regarding cloud tools and data quality.',
                    reflection: 'The industry talk helped me understand current expectations for data engineering roles, especially the importance of cloud tools, data quality, communication, and continuous learning.',
                    attachments: [
                        { title: 'Talk Reflection', filename: 'Industry_Talk_Reflection.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 1: Academic Writing',
                    format: 'Written Assignment',
                    group: 'Core Assignments',
                    description: 'Academic writing assignment on a topic related to data engineering.',
                    reflection: 'Academic writing improved how I structure ideas, present arguments, and cite sources properly. I learned to write more clearly and concisely for a formal audience.',
                    attachments: [
                        { title: 'Academic Writing Paper', filename: 'Academic_Writing.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Tutorial Azure',
                    format: 'Cloud Tutorial',
                    group: 'Core Assignments',
                    description: 'Hands-on tutorial working with Azure data engineering services.',
                    reflection: 'This tutorial strengthened my confidence in using Azure for data engineering tasks. I learned how to set up data lakes, create pipelines, and manage cloud resources.',
                    attachments: [
                        { title: 'Azure Tutorial Report', filename: 'Azure_Tutorial.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 3: Tutorial Apache Spark',
                    format: 'Big Data Tutorial',
                    group: 'Core Assignments',
                    description: 'Hands-on tutorial working with Apache Spark for distributed processing.',
                    reflection: 'I gained hands-on experience with Spark for distributed data processing. Understanding RDDs, DataFrames, and Spark SQL has been really valuable.',
                    attachments: [
                        { title: 'Spark Tutorial Report', filename: 'Spark_Tutorial.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 4: Tutorial AI',
                    format: 'AI Tutorial',
                    group: 'Core Assignments',
                    description: 'Hands-on tutorial integrating AI tools into data engineering.',
                    reflection: 'I learned how AI tools can be integrated into data engineering workflows, from data preparation to model deployment. It opened my eyes to the synergy between AI and data platforms.',
                    attachments: [
                        { title: 'AI Tutorial Report', filename: 'AI_Tutorial.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Project Industry: PPG',
                    format: 'Industry Project',
                    group: 'Hands-on Projects',
                    description: 'Industry project applying medallion architecture and pipeline design.',
                    reflection: 'The PPG project allowed me to apply data engineering concepts in a more realistic context. I gained experience thinking about medallion architecture, data pipeline design, and how raw data can be transformed into more useful analytical layers.',
                    attachments: [
                        { title: 'PPG Project Report', filename: 'PPG_Project.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Project Individual: Alternative Assessment',
                    format: 'Individual Project',
                    group: 'Hands-on Projects',
                    description: 'Individual portfolio-style assessment reflecting on learning.',
                    reflection: 'The individual project encouraged me to take ownership of my learning and present my work in a portfolio format. It helped me reflect on my strengths, organize evidence of learning, and communicate my development more professionally.',
                    attachments: [
                        { title: 'Portfolio Presentation', filename: 'Portfolio_Assessment.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ],
            reflection: 'Special Topics in Data Engineering helped me connect classroom knowledge with real industry expectations. I learned not only technical concepts such as Azure, Apache Spark, AI, and data pipelines, but also how important communication, documentation, reflection, and professional presentation are for a data engineering student.',
            improvements: [
                'Improve technical documentation by adding clearer diagrams, screenshots, and step-by-step explanations.',
                'Spend more time comparing tools and explaining why a certain technology is suitable for a project.',
                'Make reflections more specific by connecting each assignment to skills, challenges, and future career goals.'
            ]
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
            tags: ['Flutter', 'Firebase', 'Cross-Platform'],
            compulsory: false,
            assignments: [
                {
                    title: 'Assignment 1: Flutter UI Mockups',
                    format: 'Lab Tutorial',
                    group: 'Coursework',
                    description: 'Hands-on lab tutorials creating UI mockups and interface components in Flutter.',
                    reflection: 'Learning Flutter\'s widget tree model was challenging but incredibly powerful for building UI.',
                    attachments: [
                        { title: 'UI Mockup Screenshots', filename: 'AppDev_Lab_Mockups.pdf', type: 'pdf', src: '#' }
                    ]
                },
                {
                    title: 'Assignment 2: Full-Stack Application Project',
                    format: 'Project',
                    group: 'Coursework',
                    description: 'Implementing a full-stack application with Flutter frontend and Firebase backend.',
                    reflection: 'Integrating Firebase authentication and real-time databases into a mobile app bridged the gap between my frontend and backend knowledge.',
                    attachments: [
                        { title: 'App Project Report', filename: 'AppDev_Fullstack_Project.pdf', type: 'pdf', src: '#' }
                    ]
                }
            ]
        }
    ]
};

// Auto-populate missing fields to ensure UI consistency
Object.values(window.coursesData).flat().forEach(course => {
    const placeholder = 'Add your personal reflection here about what you learned in this course.';

    if (!course.reflection || course.reflection === placeholder) {
        const topicSample = (course.topics || []).slice(0, 3);
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