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
        { name: "Sobre nós", destination: "/about" },
        { name: "Nossos Contatos", destination: "/contact" },
      ],
    },
  },
];

export default links;
