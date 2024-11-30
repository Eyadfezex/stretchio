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
        initial={{ y: -250 }}
        animate={toggle ? { y: 0 } : { y: -250 }}
        transition={{ type: "tween", ease: "circInOut", duration: 0.5 }}
        className="absolute p-4 bg-white top-[5.5rem] z-10 lg:hidden"
      >
        <div className="flex flex-col gap-5">
          <Link href="#">Contacts</Link>
          <Link href="#">Features</Link>
          <Link href="#">About</Link>
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ x: -250 }}
              animate={
                toggle ? { x: 0, rotate: 180 } : { x: -250, rotate: -180 }
              }
              transition={{
                ease: "backOut",
                duration: 1.5,
                delay: 0.3,
              }}
              className="w-12 h-12 rounded-full tr_gradient"
            />
          </div>
          <span className="w-full text-center text-xs">
            Copyright © {year} Sretchio
          </span>
        </div>
      </motion.div>
      <nav className="flex justify-center py-5 lg:py-9 relative z-10 bg-background">
        <div className="flex items-center justify-between px-[16px] w-full md:w-[95%] lg:w-[90%]">
          <Link
            href="#"
            className="text-2xl lg:text-4xl text-primary font-bold font-poppins"
          >
            Stretchio
          </Link>
          <div className="lg:hidden">
            <Hamburger onToggle={() => setToggle(!toggle)} />
          </div>
          <div className="lg:flex items-center gap-3 text-dark hidden">
            <Link href="#">Contacts</Link>
            <Link href="#">Features</Link>
            <Link href="#">About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
