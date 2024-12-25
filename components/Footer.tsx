import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const sections = [
    {
      title: "Home",
      link: ".",
    },
    {
      title: "Features",
      link: ".",
    },
    {
      title: "Contact",
      link: ".",
    },
  ];
  const social = [
    {
      title: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      title: "Twitter",
      link: "https://www.twitter.com",
    },
  ];

  return (
    <footer className="bg-primary ">
      <div className="flex justify-center">
        <div className="flex flex-col w-full p-4 gap-[6rem] lg:w-[90%] max-w-[1920px] md:w-[95%]">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-10 lg:pt-[3rem] lg:px-[2rem]">
            <p className="text-xl">
              Shape and elevate your online presence. <br /> Built in Framer by
              Mateus Rila.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-5">
                {sections.map((section, i) => (
                  <Link
                    key={i}
                    href={section.link}
                    className="text-xl hover:underline"
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {social.map((section, i) => (
                  <Link
                    key={i}
                    href={section.link}
                    className="text-xl hover:underline"
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[18vw] xl:text-[190px]  font-semibold bg-gradient-to-r  from-black from-5%  to-primary inline-block text-transparent bg-clip-text">
            Stretchio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
