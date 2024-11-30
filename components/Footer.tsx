import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const links = [
    {
      title: "COMPANY",
      items: [
        { label: "How it works", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Demo", href: "#" },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        { label: "Blog post name goes here", href: "#" },
        { label: "Blog post name goes here", href: "#" },
        { label: "Blog post name goes here", href: "#" },
        { label: "See all resources", href: "#" },
      ],
    },
    {
      title: "ABOUT",
      items: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary">
      <div className="flex justify-center">
        <div className="flex flex-col w-full p-4 gap-10 lg:w-[90%] max-w-[1920px] md:w-[95%]">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 lg:py-[5rem] lg:px-[2rem]">
            <Link
              href="#"
              className="text-2xl lg:text-4xl text-primary font-bold font-poppins"
            >
              Stretchio
            </Link>
            <div className="flex flex-wrap gap-5 md:gap-x-[5rem] xl:gap-[8rem] justify-between">
              {links.map((link, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="font-bold uppercase">{link.title}</h4>
                  {link.items.map((item, index) => (
                    <Link key={index} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <span className="w-full text-center text-sm">
            Copyright {year} Stretchio
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
