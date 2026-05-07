export const profile = {
  name: 'BANDAOGO Idrissa Ben Omar',
  title: 'Développeur Full Stack | Backend & Frontend',
  email: 'idrissabenbandaogo12@gmail.com',
  phone: '+226 65 50 30 39',
  location: 'Ouagadougou, Burkina Faso',
  status: 'Disponible pour missions freelance et CDI',
}

export const about = [
  {
    label: 'Profil',
    value:
      'Développeur Full Stack avec une expérience concrète en développement web et mobile, DevOps, administration système et architecture logicielle.',
  },
  { label: 'Localisation', value: profile.location },
  { label: 'Email', value: profile.email },
  { label: 'Contact', value: profile.phone },
  { label: 'Statut', value: profile.status },
]

export const education = {
  school: "Université de l'Unité Africaine — Ouagadougou",
  items: [
    'Licence BAC+3 — Informatique de Gestion, Génie Logiciel (2025-2026, en cours)',
    'BAC+2 — Informatique de Gestion, Génie Logiciel (2024-2025, obtenu)',
    'Baccalauréat Série D (2023-2024)',
  ],
}

export const experience = [
  {
    period: 'Avril 2025 - présent',
    title: 'Développeur Full Stack Freelance',
    place: 'Obat Services — Canada (télétravail)',
  },
  {
    period: 'Juin 2025 - Octobre 2025',
    title: 'Développeur Full Stack',
    place: 'Box Africa — Burkina Faso',
  },
  {
    period: 'Juin 2025 - Juillet 2025',
    title: 'Consultant Développement Web',
    place: 'NIPAB SA — Burkina Faso',
  },
  {
    period: 'Juillet 2024 - Février 2025',
    title: 'Stagiaire Développeur',
    place: 'DISIAS · CHU Bogodogo — Burkina Faso',
  },
]

export const certifications = [
  'Java Developer — Cursa',
  'Python Essentials 1 — Cisco Networking Academy',
  'Introduction to Data Science (Data Scientist Junior 1) — Cisco Networking Academy',
  'Introduction to IoT — Cisco Networking Academy',
  'Linux Unhatched — Cisco Networking Academy',
  'Angular — Orange Digital Center',
]

export const badges = [
  { name: 'Introduction to Data Science', verified: true },
  { name: 'Python Essentials 1', verified: true },
  { name: 'Linux Unhatched', verified: true },
  { name: 'Introduction to Internet of Things', verified: true },
]

export const skills = [
  'Frontend: React.js, Angular, HTML5, CSS3, JavaScript',
  'Backend: Laravel (PHP), Node.js, Spring Boot',
  'Mobile: Flutter, Ionic',
  'DevOps / Cloud: AWS EC2, Docker, GitLab CI/CD',
  'Bases de données: MySQL, PostgreSQL',
  'CMS / OS: WordPress, Joomla, Linux, macOS',
]

export const projects = [
  {
    title: 'Notarix',
    description: 'Application de suivi et de gestion de dossiers notariés avec génération et conversion RTF/PDF-A.',
    tech: ['React', 'Laravel', 'Docker', 'AWS EC2'],
  },
  {
    title: 'EasyStock',
    description: 'Application de gestion de stock développée avec Laravel.',
    tech: ['Laravel'],
  },
  {
    title: 'Application hospitalière',
    description: 'Gestion des renseignements, examens et consultations.',
    tech: ['Laravel'],
  },
  {
    title: 'Application mobile universitaire',
    description: 'Version Ionic + Laravel, avec une v2 Flutter en cours.',
    tech: ['Ionic', 'Laravel', 'Flutter'],
    inProgress: true,
  },
  {
    title: 'PWA de vote des délégués',
    description: 'Application web progressive réalisée pour IAM Ouaga.',
    tech: ['PWA', 'JavaScript'],
  },
  {
    title: 'Application mobile fast-food',
    description: 'Application mobile pour Belchicken.',
    tech: ['Mobile'],
  },
  {
    title: 'Gestion de tickets de restauration',
    description: 'Application web pour le CHU de Bogodogo.',
    tech: ['Laravel'],
  },
  {
    title: 'Site institutionnel PAIF',
    description: 'Développement WordPress en équipe.',
    tech: ['WordPress'],
  },
]

/** Sites réalisés — projets en ligne avec liens directs */
export const featuredSites = [
  {
    name: 'PAIF',
    description: 'Site du PAIF (Pôle d’Accompagnement et d’Insertion des Femmes), réalisé en équipe.',
    url: 'https://paif.bf',
  },
  {
    name: 'Digit Group',
    description: 'Site web de Digit Group.',
    url: 'https://digitgroup.site',
  },
  {
    name: 'Obat Services',
    description: 'Site de Obat Services Canada.',
    url: 'https://obatservices.com',
  },
  {
    name: 'NIpab SA',
    description: 'Site de NIpab SA.',
    url: 'https://nipab-sa.com',
  },
]

export const references = [
  {
    name: 'M. Siaka BLEGNA',
    role: 'DSI, CHU Bogodogo',
    place: 'Burkina Faso',
    phone: '+226 76 72 38 49',
  },
  {
    name: 'M. Serge BATIONO',
    role: 'CEO, Obat Services',
    place: 'Canada',
    phone: '+1 (438) 886-9239',
  },
]
