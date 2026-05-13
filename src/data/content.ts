export const personal = {
  name: 'Tioluwani Enoch Olubunmi',
  shortName: 'Tioluwani Enoch',
  role: 'Software, Data, and Embedded Systems Engineer',
  location: 'Galesburg, Illinois',
  school: 'Knox College',
  email: 'teolubunmi@knox.edu',
  phone: '480-995-6597',
  github: 'https://github.com/tioluwani-enoch',
  linkedin: 'https://linkedin.com/in/tioluwani-enoch',
  resume: '/files/Tioluwani_Enoch_Olubunmi_Resume.pdf',
  objective:
    'Computer and Data Science student at Knox College seeking summer 2026 software engineering internships.',
}

export const thesis = [
  'Build the interface only after the system is clear.',
  'Keep reasoning, state, and execution separated.',
  'Prefer reliable workflows over clever one-off features.',
]

export const stats = [
  { value: '3.88', label: 'GPA' },
  { value: '500+', label: 'ticketing users served' },
  { value: '40%', label: 'faster issue resolution' },
  { value: '54', label: 'public GitHub repos' },
]

export const education = {
  school: 'Knox College',
  location: 'Galesburg, IL',
  degree: 'Bachelor of Science in Computer and Data Science',
  date: 'Sep. 2024 - Jun. 2028',
  gpa: '3.88/4.00',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Machine Learning',
    'Database Systems',
    'Software Development',
  ],
}

export type Experience = {
  role: string
  org: string
  location: string
  date: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software and Embedded System Team Lead',
    org: 'Knox MakerSpace',
    location: 'Galesburg, IL',
    date: 'Nov. 2024 - Present',
    bullets: [
      'Led development of a campus-wide ticketing system serving 500+ users and reducing average issue resolution time by 40%.',
      'Built a centralized inventory management system for equipment usage and checkouts across 5+ departments.',
      'Built a touchscreen interface for real-time monitoring and control of a filament extrusion system used by the 3D printing team.',
    ],
  },
  {
    role: 'Front-end Development Intern',
    org: 'Cinfores Limited',
    location: 'Port Harcourt, Nigeria',
    date: 'Nov. 2023 - Jun. 2024',
    bullets: [
      'Optimized website performance, reducing page load times and increasing user engagement by 60%.',
      'Designed responsive web pages with HTML, CSS, and JavaScript for cross-device compatibility.',
      'Led frontend development of a React Native mobile app for employee donations and loans, serving 100+ workers.',
    ],
  },
]

export type Project = {
  title: string
  period?: string
  description: string
  stack: string[]
  decisions: string[]
  url: string
}

export const projects: Project[] = [
  {
    title: 'DevLog',
    period: 'Jan. 2026 - Present',
    description:
      'A full-stack developer productivity tracker for logging, categorizing, and reviewing daily coding sessions.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    decisions: [
      'Separated authentication, session logs, tags, and user profiles behind a RESTful API.',
      'Built dashboard filters, search, and visualization around progress review instead of raw activity dumps.',
      'Configured Docker and CI/CD paths for repeatable testing and deployment.',
    ],
    url: 'https://github.com/tioluwani-enoch/devlog',
  },
  {
    title: 'Sustainability Waste Classification System',
    period: 'Sep. 2025 - Present',
    description:
      'An end-to-end waste classification system for compost, landfill, and recycling categories.',
    stack: ['Python', 'TensorFlow', 'Streamlit', 'OpenCV', 'Scikit-learn'],
    decisions: [
      'Trained a CNN on 3,000+ labeled images and reached 89% classification accuracy.',
      'Optimized preprocessing with OpenCV to reduce real-time inference latency.',
      'Shipped a Streamlit interface with live camera capture for instant classification.',
    ],
    url: 'https://github.com/tioluwani-enoch/green-ml',
  },
  {
    title: 'QuickForge',
    description:
      'A Windows desktop assistant for running common laptop maintenance and automation tasks from one place.',
    stack: ['TypeScript', 'Electron', 'React', 'Windows Automation'],
    decisions: [
      'Wrapped repetitive system tasks in a simpler interface to reduce manual steps.',
      'Used a desktop app structure for commands that need to interact closely with the local machine.',
      'Focused on practical automation instead of adding another general productivity dashboard.',
    ],
    url: 'https://github.com/tioluwani-enoch/quick-forge',
  },
  {
    title: 'Daily Spin',
    description:
      'A music companion that sits above Spotify to resurface saved tracks, watch new releases, capture recommendations, and keep playlists intentional.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Spotify API', 'Vitest'],
    decisions: [
      'Built Spotify OAuth, library backfill, playback, daily picks, and watchlist release sync around a personal music workflow.',
      'Modeled saved tracks, recent plays, playlists, artists, releases, and capture inbox data in Supabase.',
      'Added playlist health and Morning Pick scoring so recommendations are explainable rather than a generic discovery feed.',
    ],
    url: 'https://github.com/tioluwani-enoch/daily-spin',
  },
]

export const moreProjects = [
  {
    title: 'banah.js',
    description: 'TypeScript CLI for scaffolding production-ready Node.js projects without repeating setup work.',
    stack: ['TypeScript', 'Node.js', 'CLI', 'npm', 'Express'],
    url: 'https://github.com/tioluwani-enoch/banah.js',
  },
  {
    title: 'UrbanLens',
    description: 'AI-powered urban heat agent using maps, weather APIs, land-use context, and thermal reasoning.',
    stack: ['TypeScript', 'Python', 'FastAPI', 'Next.js'],
    url: 'https://github.com/LambSystems/urbanlens',
  },
  {
    title: 'family-reminders',
    description: 'Reminder app for staying in touch with family and sending WhatsApp messages more easily.',
    stack: ['HTML', 'Automation'],
    url: 'https://github.com/tioluwani-enoch/family-reminders',
  },
  {
    title: 'exoplanent-detection-blueprint',
    description: 'Python project exploring an exoplanet detection workflow.',
    stack: ['Python', 'Data Science'],
    url: 'https://github.com/tioluwani-enoch/exoplanent-detection-blueprint',
  },
  {
    title: 'streamlit-green-ml',
    description: 'Hosted Streamlit version of the waste classification project.',
    stack: ['Python', 'Streamlit', 'ML'],
    url: 'https://github.com/tioluwani-enoch/streamlit-green-ml',
  },
  {
    title: 'project-collab-hub',
    description: 'Collaboration platform concept for helping students find project partners.',
    stack: ['TypeScript', 'React'],
    url: 'https://github.com/tioluwani-enoch/project-collab-hub',
  },
  {
    title: 'DSA',
    description: 'Algorithm practice repository for Python and JavaScript problem-solving.',
    stack: ['Python', 'JavaScript', 'Algorithms'],
    url: 'https://github.com/tioluwani-enoch/DSA',
  },
  {
    title: 'journaling-app',
    description: 'Frontend for a journaling application.',
    stack: ['TypeScript', 'Frontend'],
    url: 'https://github.com/tioluwani-enoch/journaling-app',
  },
  {
    title: 'journaling_app_backend',
    description: 'Backend service for the journaling app.',
    stack: ['Python', 'Backend'],
    url: 'https://github.com/tioluwani-enoch/journaling_app_backend',
  },
  {
    title: 'qr-code-generator',
    description: 'Utility for generating QR codes from text or website links.',
    stack: ['Python', 'Utility'],
    url: 'https://github.com/tioluwani-enoch/qr-code-generator',
  },
  {
    title: 'ssr-todo-app',
    description: 'Todo app exploring server-side rendering patterns.',
    stack: ['TypeScript', 'SSR'],
    url: 'https://github.com/tioluwani-enoch/ssr-todo-app',
  },
  {
    title: 'money-management',
    description: 'Personal finance and money management project.',
    stack: ['JavaScript'],
    url: 'https://github.com/tioluwani-enoch/money-management',
  },
  {
    title: 'mini-e-shop',
    description: 'Small e-commerce interface built while learning React.',
    stack: ['React', 'Frontend'],
    url: 'https://github.com/tioluwani-enoch/mini-e-shop',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'Assembly', 'SQL', 'HTML/CSS', 'R'],
  },
  {
    title: 'Frameworks and Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Django', 'Express', 'JUnit', 'Material UI', 'Tailwind CSS'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'Docker', 'AWS', 'VS Code', 'Visual Studio', 'MongoDB'],
  },
  {
    title: 'Data Science',
    items: ['pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
  },
]
