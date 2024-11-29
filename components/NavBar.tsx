import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-center py-5 lg:py-9">
        <div className="flex items-center justify-between px-[16px] w-full lg:w-[90%]">
          <Link
            href="#"
            className="text-2xl lg:text-4xl text-primary font-bold font-poppins"
          >
            Stretchio
          </Link>
          <div className="flex items-center gap-3 text-dark">
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
