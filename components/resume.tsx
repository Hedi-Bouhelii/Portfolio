'use client'

import { useState, useEffect } from 'react'
import {
    FileText,
    Briefcase,
    GraduationCap,
    Award,
    MapPin,
    Calendar,
    ChevronDown,
    ChevronUp,
    X,
    Download,
    Code2,
    Database,
    Cloud,
    Cpu,
    Globe,
    GitBranch,
    Users,
    Loader2,
} from 'lucide-react'
import PdfDialog from '@/components/pdf-dialog'
const experience = [
    {
        title: 'Full-Stack Developer & Dynamics 365 Consultant',
        company: 'N2VERSE',
        location: 'Ariana, Tunisia',
        period: 'Oct 2023 - Present',
        type: 'Full-time',
        description:
            'Designing and customizing Microsoft Dynamics 365 CRM solutions, building Azure Functions, and contributing to modern web applications with React/Next.js.',
        highlights: [
            'Designed and customized Microsoft Dynamics 365 CRM solutions with custom tables, plugins, and web resources to optimize business processes',
            'Built and documented RESTful APIs as Azure Functions with Swagger for seamless and secure CRM integration',
            'Developed and deployed .NET scheduled tasks via the Azure Portal, integrating Azure Key Vault for secure credential management and synchronization between CRM and external databases',
            'Contributed to a React/Next.js web app backed by Supabase (PostgreSQL); managed source control and delivery through Git and Azure DevOps',
            'Collaborated within an Agile framework, participating in sprint planning, reviews, and client meetings to ensure timely, high-quality delivery',
        ],
        techUsed: [
            'Dynamics 365 CRM',
            'Azure Functions',
            '.NET',
            'Azure Key Vault',
            'React',
            'Next.js',
            'Supabase',
            'PostgreSQL',
            'Swagger',
            'Git',
            'Azure DevOps',
        ],
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Web Developer',
        company: 'SIGA',
        location: 'Les Berges du Lac, Tunisia',
        period: 'Feb 2023 - Jun 2023',
        type: 'Internship',
        description:
            'Developed a web application responsible for creating and managing electronic car accident reports (E-constat).',
        highlights: [
            'Created a web application for generating and managing electronic car accident reports (E-constat)',
            'Increased website performance by 20% through optimization techniques',
            'Worked within Scrum methodology with sprint-based delivery cycles',
        ],
        techUsed: ['Angular', 'Spring Boot', 'MySQL', 'Scrum', 'Git', 'Jenkins'],
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Web Developer',
        company: 'Defensy Lab',
        location: 'Al-Ghazela Technopole, Tunisia',
        period: 'Jun 2022 - Aug 2022',
        type: 'Internship',
        description:
            'Learned ISO 27035 standards and built a web application for creating incident security reports.',
        highlights: [
            'Studied and applied ISO 27035 information security incident management standards',
            'Built a web application for creating and managing security incident reports',
            'Implemented backend services with Node.js and MySQL database integration',
        ],
        techUsed: ['Svelte', 'Node.js', 'MySQL', 'Scrum', 'Git'],
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Web Instructor',
        company: 'GoMyCode',
        location: 'Les Berges du Lac, Tunisia',
        period: 'Aug 2018 - Sep 2018',
        type: 'Part-time',
        description:
            'Taught web development fundamentals to students with diverse backgrounds and supervised their final projects.',
        highlights: [
            'Taught web development to a group of students with different professional backgrounds',
            'Created hands-on Bootstrap workshops and coding exercises',
            'Supervised final projects for each student, providing mentorship and code reviews',
            'Successfully trained 30+ students and supervised more than 20 projects',
        ],
        techUsed: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
        gradient: 'from-orange-500 to-yellow-500',
    },
]

const education = [
    {
        degree: 'Engineering Degree',
        field: 'Software Engineering & Information Systems',
        school: 'Polytech INTL',
        period: 'Aug 2024 - Present',
        location: 'Tunis, Tunisia',
        description:
            'Pursuing an engineering degree focused on advanced software development, system architecture, and modern information systems.',
        courses: [
            'Software Architecture',
            'Distributed Systems',
            'Cloud Computing',
            'DevOps',
            'Advanced Databases',
        ],
        gradient: 'from-blue-500 to-indigo-500',
    },
    {
        degree: 'License (Bachelor\'s Degree)',
        field: 'Software Engineering & Information Systems',
        school: 'Higher Institute of Applied Languages and Computer Science of Béja',
        period: 'Sep 2020 - Jun 2023',
        location: 'Béja, Tunisia',
        description:
            'Completed a three-year degree covering core computer science, software engineering principles, and information systems development.',
        courses: [
            'Algorithms & Data Structures',
            'Web Development',
            'Databases',
            'Software Engineering',
            'Networking',
        ],
        gradient: 'from-orange-500 to-yellow-500',
    },
]

const certifications = [
    {
        name: 'DevOps Pre-Requisite Course',
        issuer: 'KodeKloud',
        year: 'Sep 2023',
        icon: Cloud,
    },
    {
        name: 'GIT for Beginners',
        issuer: 'KodeKloud',
        year: 'Sep 2023',
        icon: GitBranch,
    },
    {
        name: 'Introduction to Web Development using HTML5 and CSS3',
        issuer: 'Microsoft Technology Associate',
        year: 'Jul 2021',
        icon: Code2,
    },
    {
        name: 'Full Stack Website with GitHub Actions Workflow',
        issuer: 'GoMyCode',
        year: 'Aug 2018',
        icon: Database,
    },
    {
        name: 'Front-End Development Training (React.js)',
        issuer: 'GoMyCode',
        year: 'Jul 2018',
        icon: Cpu,
    },
    {
        name: 'Frontend Development Training (HTML5, CSS3, JavaScript) — 3 months',
        issuer: 'GoMyCode',
        year: 'Mar - Jun 2018',
        icon: Globe,
    },
]

const skills = {
    Frontend: ['React', 'Next.js', 'Angular', 'Svelte', 'TailwindCSS'],
    Backend: ['Node.js', '.NET', 'Spring Boot', 'Express', 'REST APIs'],
    'Data & Cloud': ['PostgreSQL', 'MySQL', 'MongoDB', 'Azure', 'Supabase'],
    'DevOps & Tools': ['Git', 'Azure DevOps', 'Docker', 'Jenkins', 'Swagger'],
}

const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Professional' },
]

export default function Resume() {
    const [expandedExp, setExpandedExp] = useState<number | null>(0)
    const [expandedEdu, setExpandedEdu] = useState<number | null>(0)
    const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience')
    const [showPdfDialog, setShowPdfDialog] = useState(false)
    const [pdfLoading, setPdfLoading] = useState(true)
    // Prevent body scroll when dialog is open
    useEffect(() => {
        if (showPdfDialog) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [showPdfDialog])

    return (
        <>
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                                Resume
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
                                Experience &amp; Education
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Over 2 years of experience designing and delivering innovative digital solutions across web, CRM, and cloud technologies.
                            </p>
                        </div>

                        {/* View Resume Button */}
                        <div>
                            <button
                                onClick={() => {
                                    setPdfLoading(true)
                                    setShowPdfDialog(true)
                                }}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group whitespace-nowrap"
                            >
                                <FileText size={18} className="group-hover:scale-110 transition-transform" />
                                View My Resume
                            </button>
                        </div>
                    </div>

                    {/* Languages Bar */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {languages.map((lang) => (
                            <div
                                key={lang.name}
                                className="flex items-center gap-2 px-4 py-2 bg-card/40 backdrop-blur-sm rounded-lg border border-border/50"
                            >
                                <Globe size={14} className="text-primary" />
                                <span className="text-sm font-medium text-foreground">{lang.name}</span>
                                <span className="text-xs text-muted-foreground">• {lang.level}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-1 p-1 bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 mb-10 max-w-md">
                        {[
                            { key: 'experience' as const, label: 'Experience', icon: Briefcase },
                            { key: 'education' as const, label: 'Education', icon: GraduationCap },
                            { key: 'skills' as const, label: 'Skills', icon: Award },
                        ].map(({ key, label, icon: Icon }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === key
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-card/60'
                                    }`}
                            >
                                <Icon size={16} />
                                <span className="hidden sm:inline">{label}</span>
                            </button>
                        ))}
                    </div>

                    {/* =================== EXPERIENCE TAB =================== */}
                    {activeTab === 'experience' && (
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

                                {experience.map((exp, index) => (
                                    <div key={index} className="relative md:pl-12 mb-6">
                                        {/* Timeline Dot */}
                                        <div
                                            className={`absolute left-0 top-6 w-10 h-10 rounded-xl bg-gradient-to-br ${exp.gradient} items-center justify-center text-white hidden md:flex shadow-lg`}
                                        >
                                            <Briefcase size={18} />
                                        </div>

                                        <div
                                            className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${expandedExp === index
                                                ? 'bg-card/80 backdrop-blur-sm border-primary/30 shadow-lg shadow-primary/5'
                                                : 'bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:bg-card/60'
                                                }`}
                                            onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                                        >
                                            {/* Header */}
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                                    <p className="text-primary font-medium">{exp.company}</p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {exp.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {exp.location}
                                                    </span>
                                                    <button className="text-primary ml-auto sm:ml-0">
                                                        {expandedExp === index ? (
                                                            <ChevronUp size={18} />
                                                        ) : (
                                                            <ChevronDown size={18} />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Type Badge */}
                                            <span className="inline-block text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium mb-3">
                                                {exp.type}
                                            </span>

                                            {/* Expanded Content */}
                                            <div
                                                className={`overflow-hidden transition-all duration-500 ${expandedExp === index
                                                    ? 'max-h-[600px] opacity-100 mt-4'
                                                    : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                    {exp.description}
                                                </p>

                                                <div className="mb-4">
                                                    <p className="text-sm font-semibold text-foreground mb-2">
                                                        Key Contributions:
                                                    </p>
                                                    <div className="space-y-2">
                                                        {exp.highlights.map((highlight, i) => (
                                                            <p
                                                                key={i}
                                                                className="text-sm text-muted-foreground flex items-start gap-2"
                                                            >
                                                                <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                                                                {highlight}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.techUsed.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs px-2.5 py-1 bg-secondary/50 text-muted-foreground rounded-md font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* =================== EDUCATION TAB =================== */}
                    {activeTab === 'education' && (
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

                                {education.map((edu, index) => (
                                    <div key={index} className="relative md:pl-12 mb-6">
                                        {/* Timeline Dot */}
                                        <div
                                            className={`absolute left-0 top-6 w-10 h-10 rounded-xl bg-gradient-to-br ${edu.gradient} items-center justify-center text-white hidden md:flex shadow-lg`}
                                        >
                                            <GraduationCap size={18} />
                                        </div>

                                        <div
                                            className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${expandedEdu === index
                                                ? 'bg-card/80 backdrop-blur-sm border-primary/30 shadow-lg shadow-primary/5'
                                                : 'bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/20 hover:bg-card/60'
                                                }`}
                                            onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                                                    <p className="text-primary font-medium">{edu.field}</p>
                                                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {edu.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {edu.location}
                                                    </span>
                                                    <button className="text-primary ml-auto sm:ml-0">
                                                        {expandedEdu === index ? (
                                                            <ChevronUp size={18} />
                                                        ) : (
                                                            <ChevronDown size={18} />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className={`overflow-hidden transition-all duration-500 ${expandedEdu === index
                                                    ? 'max-h-[400px] opacity-100 mt-4'
                                                    : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                    {edu.description}
                                                </p>

                                                <div>
                                                    <p className="text-sm font-semibold text-foreground mb-2">
                                                        Key Coursework:
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {edu.courses.map((course, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs px-2.5 py-1 bg-secondary/50 text-muted-foreground rounded-md font-medium"
                                                            >
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <div className="mt-10">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Award size={20} className="text-primary" />
                                    Certifications
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {certifications.map((cert, index) => {
                                        const Icon = cert.icon
                                        return (
                                            <div
                                                key={index}
                                                className="group flex items-center gap-4 p-4 bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <Icon size={20} className="text-primary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-foreground leading-tight">
                                                        {cert.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                        {cert.issuer} • {cert.year}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* =================== SKILLS TAB =================== */}
                    {activeTab === 'skills' && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(skills).map(([category, items], index) => {
                                const gradients = [
                                    'from-blue-500 to-cyan-500',
                                    'from-purple-500 to-pink-500',
                                    'from-green-500 to-emerald-500',
                                    'from-orange-500 to-yellow-500',
                                ]
                                const icons = [Code2, Database, Cpu, Cloud]
                                const Icon = icons[index]

                                return (
                                    <div
                                        key={category}
                                        className="group p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className={`p-2.5 rounded-lg bg-gradient-to-br ${gradients[index]}`}>
                                                <Icon size={18} className="text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground">{category}</h3>
                                        </div>

                                        <div className="space-y-3">
                                            {items.map((skill, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-sm font-medium text-foreground">{skill}</span>
                                                        </div>
                                                        <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full bg-gradient-to-r ${gradients[index]} transition-all duration-1000`}
                                                                style={{
                                                                    width: `${92 - i * 7}%`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Soft Skills */}
                            <div className="md:col-span-2 p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border/50">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-rose-500 to-red-500">
                                        <Users size={18} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">Soft Skills</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        'Communication',
                                        'Collaboration',
                                        'Attention to Detail',
                                        'Problem Solving',
                                        'Agile & Scrum',
                                        'Mentoring',
                                        'Web Design',
                                        'Continuous Learning',
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-card/60 to-accent/5 backdrop-blur-sm border border-primary/20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <p className="text-lg text-muted-foreground mb-4">
                                Want the full picture? View and download my complete resume.
                            </p>
                            <button
                                onClick={() => {
                                    setPdfLoading(true)
                                    setShowPdfDialog(true)
                                }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                            >
                                <FileText size={18} />
                                View My Resume
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <PdfDialog
                isOpen={showPdfDialog}
                onClose={() => setShowPdfDialog(false)}
            />
        </>

    )
}
