interface SubLinks {
  name: string;
  destination: string;
  external?: boolean;
}

interface Link {
  heading: { title: string; subLinks: SubLinks[] };
}

const links: Link[] = [
  {
    heading: {
      title: "Sobre",
      subLinks: [
        { name: "Página inicial", destination: "/" },
        { name: "Fotos", destination: "/photo" },
        { name: "Sócio", destination: "/partner" },
        { name: "Sobre nós", destination: "/about" },
        { name: "Nossos Contatos", destination: "/contact" },
      ],
    },
  },
];

export default links;
