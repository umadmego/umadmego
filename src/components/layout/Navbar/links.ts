type Link = {
  title: string;
  destination: string;
};

const links: Link[] = [
  { title: "Página Inicial", destination: "/" },
  { title: "Ao Vivo", destination: "/live" },
  { title: "Fotos", destination: "/photo" },
  { title: "Umadmídia", destination: "/umadmidia" },
  { title: "Sócio", destination: "/partner" },
  { title: "Sobre", destination: "/about" },
  { title: "Nossos Contatos", destination: "/contact" },
];

export default links;
