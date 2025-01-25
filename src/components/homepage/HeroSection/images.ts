import Image1 from "@/assets/images/home/slider/silder1.jpg";
import Image2 from "@/assets/images/home/slider/slider2.jpg";
import Image3 from "@/assets/images/home/slider/slider3.jpg";
import Image4 from "@/assets/images/home/slider/slider4.jpg";
import Image5 from "@/assets/images/home/slider/slider5.jpg";
import Image6 from "@/assets/images/home/slider/slider6.jpg";
import Image7 from "@/assets/images/home/slider/slider7.jpg";
import Image8 from "@/assets/images/home/slider/slider8.jpg";
import Image9 from "@/assets/images/home/slider/slider9.jpg";

import { StaticImageData } from "next/image";

type Group = StaticImageData[];

export const ImageGroup1: Group = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image7,
];
export const ImageGroup2: Group = [Image1, Image2, Image3, Image4, Image5];
export const ImageGroup3: Group = [Image2, Image6, Image4, Image8, Image9];
