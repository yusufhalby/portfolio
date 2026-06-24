export const projects = [
  {
    id: 'yaoguai-api',
    termPath: [
      { text: '~/projects/', highlight: false },
      { text: 'yaoguai-api', highlight: true },
    ],
    badge: { text: 'active', className: 'badge-live' },
    name: 'Yaoguai API',
    desc: 'Backend for an cyber security-focused community platform. Discord OAuth2 login, JWT auth, RBAC with four role tiers, Discord server role sync cached every 10 minutes, and Zod input validation throughout.',
    tags: ['TypeScript', 'Express v5', 'MongoDB', 'Discord.js v14', 'Zod'],
    links: [
      { href: 'https://github.com/yusufhalby/yaoguai-api', icon: 'github', label: 'GitHub', target: '_blank' },
    ],
  },
  {
    id: 'pa-api',
    termPath: [
      { text: '~/projects/', highlight: false },
      { text: 'PA-API', highlight: true },
      { text: ' + ', highlight: false },
      { text: 'PA-Frontend', highlight: true },
    ],
    badge: { text: 'Excellent — Graduation Project', className: 'badge-academic' },
    name: 'Precision Agriculture IoT System',
    desc: 'Full-stack monitoring system for 5G-connected IoT sensors. Real-time sensor ingestion, crop disease detection from photos, remote actuator control for irrigation and fertilisation, and an interactive Mapbox dashboard.',
    tags: ['Node.js', 'Next.js 13', 'MongoDB', 'Mapbox GL', 'Chart.js', 'GitHub Actions'],
    links: [
      { href: 'https://github.com/yusufhalby/PA-API', icon: 'github', label: 'API Repo', target: '_blank' },
      { href: 'https://github.com/yusufhalby/PA-Frontend', icon: 'github', label: 'Frontend Repo', target: '_blank' },
    ],
  },
  {
    id: 'dalili',
    termPath: [
      { text: '~/projects/', highlight: false },
      { text: 'dalili', highlight: true },
    ],
    badge: { text: 'live · private codebase', className: 'badge-live' },
    name: 'Dalili — Business Directory',
    desc: 'Full backend for a Luxor-based advertising and business directory platform. Facebook Messenger chatbot for automated discovery, brand directory API, and multiple backend iterations shipped as the product evolved.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Messenger API'],
    links: [
      { href: 'https://www.facebook.com/DaliliLuxor', icon: 'arrow-external', label: 'View on Facebook', target: '_blank' },
      { href: 'http://www.messenger.com/t/532191613303130', icon: 'arrow-external', label: 'Try on Messenger', target: '_blank' },
    ],
  },
  {
    id: '3rka-api',
    termPath: [
      { text: '~/projects/', highlight: false },
      { text: '3rka-API', highlight: true },
    ],
    badge: { text: 'open source', className: 'badge-live' },
    name: '3rka API — Backend Rebuild',
    desc: 'Redesigned and rebuilt a PHP project as a clean Node.js REST API. Stateless JWT sessions, Sequelize ORM over MySQL, Multer file uploads, and a full MVC architecture replacing the original flat PHP structure.',
    tags: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT'],
    links: [
      { href: 'https://github.com/yusufhalby/3rka-API', icon: 'github', label: 'GitHub', target: '_blank' },
    ],
  },
  {
    id: 'had',
    termPath: [
      { text: '~/projects/', highlight: false },
      { text: 'had', highlight: true },
    ],
    badge: { text: 'open source', className: 'badge-live' },
    name: 'Heart Attack Detector API',
    desc: 'REST API for detecting heart attack risk from smartwatch sensor data. Accepts biometric readings, runs diagnostic assessment logic, and triggers SendGrid email alerts on high-risk detections.',
    tags: ['Node.js', 'MongoDB', 'bcryptjs', 'SendGrid', 'JWT'],
    links: [
      { href: 'https://github.com/yusufhalby/had', icon: 'github', label: 'GitHub', target: '_blank' },
    ],
  },
  {
    id: 'luxor-rehab',
    termPath: [
      { text: '~/clients/', highlight: false },
      { text: 'luxorrehabcenter.com', highlight: true },
    ],
    badge: { text: 'live', className: 'badge-live' },
    name: 'Luxor Rehab Center',
    desc: 'Production website for a physiotherapy and rehabilitation centre serving local and international clients. Full ownership: build, hosting configuration, domain management, and ongoing technical support.',
    tags: ['Web Development', 'Hosting', 'DNS', 'Tailwind CSS'],
    links: [
      { href: 'https://www.luxorrehabcenter.com', icon: 'external-link', label: 'Visit Site', target: '_blank' },
    ],
  },
]