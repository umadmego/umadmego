import Button from "@/common/Button";
import Image from "next/image";
import React from "react";
import contactInfo from "./contactInfo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signOut } from "@/store/slices/user";
import { useRouter } from "next/router";

function ContactSection() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logoutUser = async () => {
    dispatch(signOut());
    router.push("/");
  };
  return (
    <div className="flex flex-col text-white">
      <p className="font-secondary font-semibold text-lg mb-4">Contatos</p>
      <ul className="flex flex-col gap-4">
        {contactInfo.map((info) => (
          <li key={info.text} className="flex gap-4 text-sm">
            <Image src={info.icon} alt={info.alt} />
            {info.type === "email" && (
              <a target="_blank" href={"mailto:" + info.text}>
                {info.text}
              </a>
            )}
            {info.type === "phone" && (
              <a target="_blank" href={"tel:" + info.text}>
                {info.text}
              </a>
            )}
            {!info.type && <span>{info.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactSection;
