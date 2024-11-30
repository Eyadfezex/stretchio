"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative">
      <div className="flex justify-center py-4 lg:py-[4rem] px-4">
        <div className="flex flex-col justify-between items-center md:flex-row gap-10 w-full px-4 md:px-8 md:w-[90%] max-w-[1920px] border border-primary/20 rounded-2xl bg-primary bg-opacity-20 backdrop-blur-lg p-8 lg:py-1 lg:px-[5rem] ">
          <h2 className="w-full text-4xl font-bold md:w-[70%]">
            Ready to transform <br />
            <span className="text-primary">your office wellness?</span>
          </h2>
          <Link
            href="#"
            className="w-[120px] flex lg:-top-10 justify-center items-center h-[120px] lg:h-[150px] lg:w-[150px] lg:pt-4 pt-2 pl-2 relative  rounded-full tr_gradient  text-white border border-primary"
          >
            <div className="flex flex-col">
              <span>
                Join <br /> Waitlist
              </span>
              <GoArrowUpRight size={30} className="relative -left-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
