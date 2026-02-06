export const profile = {
  name: 'BANDAOGO Idrissa Ben Omar',
  title: 'Développeur Full Stack',
  email: 'idrissabenbandaogo12@gmail.com',
  phone: '+226 65 50 30 39',
  age: 20,
  situation: 'Célibataire sans enfant',
  passion: 'Informatique et électronique',
}

export const about = [
  { label: 'Âge', value: '20 ans' },
  { label: 'Email', value: profile.email },
  { label: 'Contact', value: profile.phone },
  { label: 'Situation matrimoniale', value: profile.situation },
  { label: 'Passion', value: profile.passion },
]

export const education = {
  school: "Université de l'Unité Africaine (ex IAM)",
  items: [
    'BAC 2023',
    'BAC+2 en Informatique de Gestion (Génie Logiciel)',
    'BAC+3 en Informatique de Gestion (Génie Logiciel) en cours',
  ],
}

export const experience = [
  {
    period: 'Juillet à octobre 2024',
    title: 'Stage à la Direction de l\'Informatique des Systèmes d\'Information et de l\'Archivage en Santé (DISIAS)',
    place: 'CHU Bogodogo',
  },
  {
    period: 'Depuis juin 2025',
    title: 'Développeur full stack freelance',
    place: 'Obat Services Canada',
  },
]

export const certifications = [
  'Certifié Data Scientist junior 1 de chez Cisco Academy',
  'Certification Angular de chez Orange Digital Center',
  'Certifié Java Developer de chez Cursa',
  'Certifié Python Essential 1 de chez Cisco Academy',
]

export const badges = [
  { name: 'Introduction to Data Science', verified: true },
  { name: 'Python Essentials 1', verified: true },
  { name: 'Linux Unhatched', verified: true },
  { name: 'Introduction to Internet of Things', verified: true },
]

export const skills = [
  'Développement web',
  'Front-end (HTML/CSS/JS, React JS, Vue JS)',
  'Back-end (Laravel, Node.js, Spring Boot)',
  'CMS (WordPress / Joomla)',
  'Développement mobile (Ionic, Flutter)',
  'Bases de données (MySQL)',
]

export const projects = [
  {
    title: 'EasyStock',
    description: "Application de gestion de stock développée avec Laravel.",
    tech: ['Laravel'],
  },
  {
    title: 'Application de renseignement hospitalier',
    description: 'Application pour les examens, analyses et consultations.',
    tech: ['Laravel'],
  },
  {
    title: 'Gestion de tickets de restauration',
    description: 'Application web pour le compte du CHU de Bogodogo.',
    tech: ['Laravel'],
  },
  {
    title: 'Site du PAIF',
    description: 'Développement en équipe du site.',
    tech: ['WordPress'],
  },
  {
    title: 'Application mobile de gestion universitaire',
    description: 'Application mobile de gestion des universités.',
    tech: ['Ionic'],
  },
  {
    title: 'Application mobile gestion universitaire (en cours)',
    description: "Nouvelle version avec Flutter en front-end et Laravel en back-end.",
    tech: ['Flutter', 'Laravel'],
    inProgress: true,
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

export const reference = {
  name: 'Mr BLEGNA Siaka',
  role: 'DSI du CHU',
  place: 'Bogodogo',
  phone: '+226 76 72 38 49',
}
