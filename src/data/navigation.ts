export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Red de Cooperación', href: '/red-de-cooperacion/' },
  { label: 'Transparencia', href: '/transparencia/' },
  { label: 'Novedades', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
  { label: 'Donar', href: '/donar/', isButton: true },
];

export const footerNav = {
  institucional: [
    { label: 'Quiénes Somos', href: '/quienes-somos/' },
    { label: 'Transparencia', href: '/transparencia/' },
    { label: 'Red de Cooperación', href: '/red-de-cooperacion/' },
  ],
  recursos: [
    { label: 'Proyectos', href: '/proyectos/' },
    { label: 'Novedades', href: '/blog/' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/politica-de-privacidad/' },
    { label: 'Aviso Legal', href: '/aviso-legal/' },
  ],
};
