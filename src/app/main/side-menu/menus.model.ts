export interface Menu {
  menuLogo: string;
  menuName: string;
  route: string;
}

export const menus: Menu[] = [
  {
    menuLogo: 'dashboard',
    menuName: 'Dashboard',
    route: 'dashboard',
  },
  {
    menuLogo: 'calendar_today',
    menuName: 'Appointments',
    route: 'appointments',
  },
  {
    menuLogo: 'group',
    menuName: 'Patients',
    route: 'patients',
  },
  {
    menuLogo: 'stethoscope',
    menuName: 'Treatments',
    route: 'treatments',
  },
  {
    menuLogo: 'credit_card',
    menuName: 'Billing',
    route: 'billing',
  },
  {
    menuLogo: 'settings',
    menuName: 'Settings',
    route: 'settings',
  },
];
