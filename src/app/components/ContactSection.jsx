import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import DiscordIcon from "../../../public/discord-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="my-12 md:my-12 py-24 relative text-center">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let`&apos;s Connect</h5>
        <p className="text-slate-200 mb-4">I&apos;m available to talk about exciting projects. Feel free to contact me.</p>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://www.linkedin.com/in/farhaz-nurjananto-a5b964212/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://github.com/farhaznurjananto">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.instagram.com/farhaznurjananto/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
          <Link href="https://discord.com/users/Halon#8063">
            <Image src={DiscordIcon} alt="Discord Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
