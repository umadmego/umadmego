import InstagramIcon from "@/assets/svgs/social/instagram.svg";

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const socialLinks: Link[] = [
  {
    alt: "Instagram Profile",
    src: InstagramIcon,
    destination: "https://www.instagram.com/umadmego/",
  },
];

export default socialLinks;
