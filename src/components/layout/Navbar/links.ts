type Link = {
  title: string;
  destination: string;
};

const links: Link[] = [
  {
    title: "Página Inicial",
    destination: "/",
  },
  {
    title: "Fotos",
    destination: "/photo",
  },
  {
    title: "Sócio",
    destination: "/partner",
  },
  {
    title: "Sobre",
    destination: "/about",
  },
  // {
  //   title: "Giving",
  //   destination: "/giving",
  // },
  // {
  //   title: "Eventos",
  //   destination: "/events",
  // },
  // {
  //   title: "Resources",
  //   destination: "/resources",
  // },
  // {
  //   title: "Find A Church",
  //   destination: "/church-locations",
  // },
  {
    title: "Nossos Contatos",
    destination: "/contact",
  },
];

export default links;
