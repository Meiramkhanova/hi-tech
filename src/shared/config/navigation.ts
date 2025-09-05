export interface NavItem {
  id: number;
  link: string;
  name: string;
}

export const navlinks: NavItem[] = [
  {
    id: 1,
    link: "/",
    name: "Главная",
  },
  {
    id: 2,
    link: "/about",
    name: "Об институте",
  },
  {
    id: 3,
    link: "#",
    name: "Аналитика",
  },
  {
    id: 4,
    link: "#",
    name: "Образование",
  },
  {
    id: 5,
    link: "#",
    name: "Эксперты",
  },
];
