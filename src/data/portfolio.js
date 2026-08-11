export const projects = [
  {
    id: 'klinik-management-system',
    title: 'Klinik Management System',
    repo: 'https://github.com/baguesputra/klinik-management-system',
    category: 'Backend',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma', 'JWT', 'OAuth2', 'RBAC', 'Docker'],
    description:
      'Production-grade Clinic & Pharmacy Management REST API. Full clinic workflow from patient registration to billing, secured with JWT auth, Google OAuth2, and role-based access control.',
    highlight: true,
    accent: 'green',
  },
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    repo: 'https://github.com/baguesputra/finance-tracker',
    category: 'Fullstack',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Charts', 'Excel', 'PDF'],
    description:
      'Modern fullstack personal finance tracker with transaction management, analytics dashboard, interactive charts, filtering, and export to Excel/PDF in a responsive fintech-style UI.',
    highlight: true,
    accent: 'violet',
  },
  {
    id: 'hr-payroll-system',
    title: 'HR & Payroll System',
    repo: 'https://github.com/baguesputra/hr-payroll-system',
    category: 'Fullstack',
    tech: ['Laravel', 'React', 'PostgreSQL'],
    description:
      'HR & Payroll Management System built with Laravel 13 and React, handling employee data, attendance, payroll calculation, and reporting with a modern dashboard.',
    highlight: true,
    accent: 'red',
  },
  {
    id: 'enterprise-auth-service-go',
    title: 'Enterprise Auth Service (Go)',
    repo: 'https://github.com/baguesputra/enterprise-auth-service-go',
    category: 'Backend',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Docker'],
    description:
      'Enterprise-grade authentication service written in Golang with Gin, backed by PostgreSQL and Redis, containerized with Docker for scalable deployments.',
    highlight: true,
    accent: 'cyan',
  },
  {
    id: 'company-profile',
    title: 'Company Profile CMS',
    repo: 'https://github.com/baguesputra/company-profile',
    category: 'Fullstack',
    tech: ['Laravel', 'PHP', 'MySQL', 'CMS'],
    description:
      'Laravel-based company profile website with a built-in CMS — page management, articles/blog, services, galleries, banners, and contact settings via a modern admin dashboard.',
    highlight: true,
    accent: 'amber',
  },
  {
    id: 'Journal-Publishing',
    title: 'Journal Publishing Platform',
    repo: 'https://github.com/baguesputra/Journal-Publishing',
    category: 'Fullstack',
    tech: ['Laravel', 'Blade', 'MySQL'],
    description:
      'Laravel journal publishing platform with roles for authors, admins, editors, reviewers, and users — supporting manuscript submission, peer review, and publication workflows.',
    highlight: true,
    accent: 'blue',
  },
  {
    id: 'IT-Asset-Management',
    title: 'IT Asset Management',
    repo: 'https://github.com/baguesputra/IT-Asset-Management',
    category: 'Fullstack',
    tech: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    description:
      'Web-based IT asset management system with asset tracking, service history, warranty monitoring, depreciation calculation, and borrowing management.',
    accent: 'teal',
  },
  {
    id: 'Weather-App',
    title: 'Weather App',
    repo: 'https://github.com/baguesputra/Weather-App',
    category: 'Frontend',
    tech: ['JavaScript', 'REST API', 'Charts'],
    description:
      'Modern responsive weather app with current conditions, 7-day forecasts, alerts, city search, search history, unit preferences, and visual temperature trends.',
    accent: 'sky',
  },
  {
    id: 'realtime-chat-app',
    title: 'Real-time Chat App',
    repo: 'https://github.com/baguesputra/realtime-chat-app',
    category: 'Fullstack',
    tech: ['Next.js', 'Node.js', 'Socket.io', 'MySQL'],
    description:
      'Real-time chat application with a Node.js backend and Next.js frontend — login, instant messaging, and chat history powered by Socket.io.',
    accent: 'pink',
  },
  {
    id: 'Sistem-Manajemen-Layanan-Jasa-Pengiriman',
    title: 'Delivery Service Management',
    repo: 'https://github.com/baguesputra/Sistem-Manajemen-Layanan-Jasa-Pengiriman',
    category: 'Fullstack',
    tech: ['JavaScript', 'MySQL', 'Web'],
    description:
      'Web-based delivery service management system covering order management, shipment tracking, customer handling, and payment processing.',
    accent: 'orange',
  },
  {
    id: 'Sistem-Manajemen-Body-Repair',
    title: 'Body Repair Management',
    repo: 'https://github.com/baguesputra/Sistem-Manajemen-Body-Repair',
    category: 'Fullstack',
    tech: ['CodeIgniter 3', 'JavaScript', 'CSS'],
    description:
      'Web application for managing body repair services — job tracking, repair status, and customer management built with CodeIgniter 3.',
    accent: 'lime',
  },
  {
    id: 'Sistem-Informasi-Dukcapil',
    title: 'Civil Registry Info System',
    repo: 'https://github.com/baguesputra/Sistem-Informasi-Dukcapil',
    category: 'Fullstack',
    tech: ['PHP', 'JavaScript', 'MySQL'],
    description:
      'Civil registry (Dukcapil) information system built with native PHP — citizen registration, document processing, and record management.',
    accent: 'purple',
  },
  {
    id: 'metricflow',
    title: 'MetricFlow',
    repo: 'https://github.com/baguesputra/metricflow',
    category: 'SaaS',
    tech: ['Laravel', 'React', 'React Native', 'Analytics'],
    description:
      'SaaS social media analytics dashboard concept combining Laravel, React, and React Native across web and mobile.',
    accent: 'indigo',
  },
]

export const skills = [
  {
    group: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React / React Native', level: 90 },
      { name: 'Next.js', level: 82 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS / Bootstrap', level: 85 },
      { name: 'HTML / CSS / Figma', level: 88 },
    ],
  },
  {
    group: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Laravel (PHP)', level: 90 },
      { name: 'Node.js / Express', level: 88 },
      { name: 'Golang (Gin)', level: 72 },
      { name: 'Python (Flask)', level: 75 },
      { name: 'REST API Design', level: 92 },
    ],
  },
  {
    group: 'Database & Data',
    icon: '🗄️',
    items: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'SQLite / Prisma / ORM', level: 84 },
    ],
  },
  {
    group: 'Infrastructure & Tools',
    icon: '🖥️',
    items: [
      { name: 'Docker', level: 76 },
      { name: 'Linux / Server Admin', level: 85 },
      { name: 'Git & GitHub / CI', level: 90 },
      { name: 'Networking & Security', level: 80 },
      { name: 'JWT / OAuth2 / RBAC', level: 85 },
    ],
  },
]

export const socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/baguesputra',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/baguesputra',
    icon: 'linkedin',
  },
  {
    label: 'Twitter / X',
    url: 'https://twitter.com/baguesputra',
    icon: 'twitter',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/baguesputra_',
    icon: 'instagram',
  },
]
