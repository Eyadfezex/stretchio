"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <header className="relative">
      <motion.div
        initial={{ x: -250 }}
        animate={toggle ? { x: 0 } : { x: -250 }}
        transition={{ type: "tween", ease: "circInOut", duration: 0.5 }}
        className="absolute p-4 bg-white top-[4rem] z-30 lg:hidden text-black"
      >
        <div className="flex flex-col gap-6 relative z-30 ">
          <Link href="#Features" onClick={() => setToggle(false)}>
            Home
          </Link>
          <Link href="#Features" onClick={() => setToggle(false)}>
            Features
          </Link>
          <Link href="#about" onClick={() => setToggle(false)}>
            About
          </Link>
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ x: -250 }}
              animate={toggle ? { x: 0 } : { x: -250 }}
              transition={{
                ease: "backOut",
                duration: 1.5,
                delay: 0.3,
              }}
              className=" text-2xl lg:text-4xl text-primary font-bold font-poppins"
            >
              Stretchio
            </motion.div>
          </div>
          <span className="w-full text-center text-xs">
            Copyright © {year} Sretchio
          </span>
        </div>
      </motion.div>
      <nav className="flex justify-center py-2 lg:py-5 relative z-30   border-b border-gray-700 ">
        <div className="flex items-center  justify-between px-[16px] w-full md:w-[90%] lg:w-[80%] max-w-[1920px]">
          <Link
            href="#"
            className="text-2xl lg:text-2xl text-primary font-semibold font-poppins relative z-30"
          >
            Stretchio
          </Link>
          <div className="lg:hidden relative z-30">
            <Hamburger
              color="gray"
              onToggle={() => setToggle(!toggle)}
              toggled={toggle}
            />
          </div>
          <div className="lg:flex items-center gap-10 xl:gap-[4rem] text-white font-semibold  hidden relative z-30">
            <Link className="hover:text-primary  duration-200" href="#">
              Home
            </Link>
            <Link className="hover:text-primary  duration-200" href="#about">
              Features
            </Link>
            <Link className="hover:text-primary  duration-200" href="#about">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
