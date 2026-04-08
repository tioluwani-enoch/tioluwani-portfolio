// ============================================================
// EDIT THIS FILE to personalise your portfolio
// ============================================================

export const personal = {
  name: 'Tioluwani Enoch',
  title: 'Software &',
  titleHighlight: 'Embedded',
  titleAccent: 'Engineer.',
  tagline: 'Open to internships',
  bio: [
    "I'm an aspiring software engineer and AI/ML enthusiast studying Computer Science & Data Science at Knox College. I'm passionate about building digital tools that solve real-world problems.",
    "I work across the full stack — from React frontends to Python ML pipelines — and I'm always exploring the intersection of software engineering and data science.",
    "Currently grinding LeetCode, building side projects, and preparing for my next big opportunity. Small steps every day lead to big outcomes tomorrow.",
  ],
  email: 'teolubunmi@gmail.com',
  github: 'https://github.com/tioluwani-enoch',
  linkedin: 'https://linkedin.com/in/tioluwani-olubunmi-52557428b',
}

export const stats = [
  { value: '57', label: 'GitHub repos' },
  { value: '2x', label: 'CS & Data Science' },
  { value: '4', label: 'Pinned projects' },
  { value: '∞', label: 'Problems to solve' },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  url?: string
}

export const projects: Project[] = [
  {
    title: 'green-ml',
    description: 'A machine learning model that classifies waste into three categories: Compost, Recycle, and Landfill. Built to make recycling smarter.',
    tags: ['Python', 'ML', 'Classification'],
    url: 'https://github.com/tioluwani-enoch/green-ml',
  },
  {
    title: 'banah.js',
    description: 'Scaffold Node.js projects with ease — no more manually installing Express, CORS, and boilerplate basics. A beginner-friendly alternative to Lodash.',
    tags: ['TypeScript', 'Node.js', 'OSS'],
    url: 'https://github.com/tioluwani-enoch/banah.js',
  },
  {
    title: 'Project Collab Hub',
    description: 'A platform for CS students to find collaborators. Helps students connect with others who are excited about their project ideas. (Coming soon)',
    tags: ['React', 'Next.js', 'Community'],
    url: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A clean, React-based personal portfolio to showcase skills and projects. You\'re looking at it right now.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://github.com/tioluwani-enoch/portfolio-website',
  },
  {
    title: 'DSA Practice',
    description: 'A structured repository of Data Structures & Algorithms solutions in Python and JavaScript, following Grokking Algorithms chapter by chapter.',
    tags: ['Python', 'JavaScript', 'DSA'],
    url: 'https://github.com/tioluwani-enoch/DSA',
  },
  {
    title: 'LeetCode Grind',
    description: 'Actively solving algorithm challenges to sharpen problem-solving skills and prepare for technical interviews at U.S. startups.',
    tags: ['Python', 'Algorithms', 'Interview Prep'],
    url: 'https://github.com/tioluwani-enoch',
  },
]

export type SkillCategory = 'languages' | 'frameworks' | 'infra'

export type Skill = {
  name: string
  pct: number
}

export const skills: Record<SkillCategory, Skill[]> = {
  languages: [
    { name: 'JavaScript / TypeScript', pct: 88 },
    { name: 'Python', pct: 85 },
    { name: 'HTML / CSS', pct: 90 },
  ],
  frameworks: [
    { name: 'React', pct: 85 },
    { name: 'Next.js', pct: 78 },
    { name: 'Node.js', pct: 80 },
    { name: 'Tailwind CSS', pct: 88 },
    { name: 'Vite', pct: 82 },
  ],
  infra: [
    { name: 'Git / GitHub', pct: 90 },
    { name: 'Linux', pct: 75 },
    { name: 'VS Code', pct: 95 },
  ],
}
