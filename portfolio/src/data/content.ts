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
    title: "green-ml",
    description:
      "Supervised image classification system using transfer learning on MobileNetV2 to sort waste into Compost, Recycle, and Landfill. Includes data augmentation, adaptive learning rate scheduling, and deployment paths for Flask, Raspberry Pi, and TensorFlow Lite.",
    tags: ["Python", "TensorFlow", "MobileNetV2", "Transfer Learning", "Computer Vision"],
    url: "https://github.com/tioluwani-enoch/green-ml",
  },
  {
    title: "banah.js",
    description:
      "A globally-installed npm CLI that scaffolds a production-ready Node.js project in one command — auto-installs Express, CORS, dotenv, and Nodemon with a clean, modular directory structure ready to run.",
    tags: ["TypeScript", "Node.js", "CLI", "npm", "Open Source"],
    url: "https://github.com/tioluwani-enoch/banah.js",
  },
  {
    title: "UrbanLens",
    description:
      "AI-powered urban heat agent built for the Google Build with AI Hackathon. Users pick a location on a map, ask a question, and the agent autonomously queries weather APIs, land-use maps, and a custom RGB-to-thermal pipeline — streaming every tool call to the UI in real time.",
    tags: ["TypeScript", "Python", "FastAPI", "Next.js", "Gemini", "Agentic AI", "Satellite Imagery"],
    url: "https://github.com/LambSystems/urbanlens",
  },
  {
    title: "devlog",
    description:
      "Auto-generate daily standup notes from your GitHub activity. Connects via OAuth, pulls commits, PRs, and reviews, and turns them into a clean editable summary you can copy straight into Slack. Stores history in PostgreSQL.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "GitHub API", "OAuth"],
    url: "https://github.com/tioluwani-enoch/devlog",
  },
  {
    title: "quick-forge",
    description:
      "A Windows desktop assistant built with Electron and React for one-click system task automation — launch apps, flush DNS, clear temp files, and restart Explorer. Actions are JSON-configurable and UAC elevation is handled automatically.",
    tags: ["TypeScript", "Electron", "React", "Desktop App", "Windows"],
    url: "https://github.com/tioluwani-enoch/quick-forge",
  },
  {
    title: "LeetCode Grind",
    description:
      "Actively solving algorithm challenges to sharpen problem-solving skills and prepare for technical interviews at U.S. startups.",
    tags: ["Python", "Algorithms", "Interview Prep"],
    url: "https://github.com/tioluwani-enoch",
  },
];

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
