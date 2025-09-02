import Link from "next/link";

const navlinks = [
  {
    id: 1,
    link: "#",
    name: "Главная",
  },
  {
    id: 2,
    link: "#",
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

function NavLinks() {
  return (
    <div className="navlinks flex items-center gap-12">
      {navlinks.map((navlink) => (
        <Link
          key={navlink.id}
          href={navlink.link}
          className="navlink hover:text-theprimary transition-all duration-300">
          {navlink.name}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
