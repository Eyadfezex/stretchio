import { Button } from "@nextui-org/button";

import Link from "next/link";
import React from "react";

const getPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};
const Footer = () => {
  const year = new Date().getFullYear();
  const gradientDirection =
    getPath() === "/ar"
      ? "to-black from-primary from-40% lg:from-30% xl:from-50%"
      : "from-black to-primary to-90% lg:to-90% xl:to-70%";

  const sections = [
    {
      title: getPath() === "/ar" ? "الرئيسية" : "Home",
      link: ".",
    },
    {
      title: getPath() === "/ar" ? "المميزات" : "Features",
      link: ".",
    },
    {
      title: getPath() === "/ar" ? "كلمنا" : "Contact",
      link: ".",
    },
  ];
  const social = [
    {
      title: getPath() === "/ar" ? "فيسبوك" : "Facebook",
      link: "https://www.facebook.com",
    },
    {
      title: getPath() === "/ar" ? "تويتر" : "Twitter",
      link: "https://www.twitter.com",
    },
  ];

  return (
    <footer className="bg-primary ">
      <div className="flex justify-center">
        <div className="flex flex-col w-full p-4 gap-[6rem] lg:w-[90%] max-w-[1920px] md:w-[95%]">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-10 lg:pt-[3rem] lg:px-[2rem]">
            <div>
              <span>
                {getPath() === "/ar" ? "ستريتشيو" : "Stretchio"} &copy; {year}
              </span>
              <p className="text-xl">
                {getPath() === "/ar"
                  ? "معاك في الشغل خطوة خطوة"
                  : "Empowering desk working to thrive, one stretch at a time"}
              </p>
            </div>
            <div className="flex gap-10">
              <Link href={getPath() === "/ar" ? "/" : "/ar"}>
                <Button className="bg-primary bg-opacity-20 font-bold tracking-wider backdrop-blur-xl border text-white ">
                  {getPath() === "/ar" ? "English" : "عربي"}
                </Button>
              </Link>
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
          <p
            className={`text-[18vw] xl:text-[190px]  font-semibold bg-gradient-to-r  
             ${gradientDirection}
             
              inline-block text-transparent bg-clip-text`}
          >
            {getPath() === "/ar" ? "ستريتشيو" : "Stretchio"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
