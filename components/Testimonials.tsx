"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials1, testimonials2 } from "@/constants";
import Reveal from "./ui/Reveal";

const getPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};
const Testimonials = () => {
  return (
    <section className="relative">
      <div className="flex justify-center py-5 lg:py-[5rem]">
        <div className="flex flex-col items-center  w-full max-w-[1920px] gap-10">
          <h2 className=" font-bold  text-4xl lg:text-5xl xl:text-7xl py-2">
            {getPath() === "/ar"
              ? "اللي جربوا قالوا ايه"
              : "They love Stretchio"}
          </h2>
          <div className="h-[12rem] rounded-md flex flex-col  items-center justify-center overflow-hidden">
            <InfiniteMovingCards
              items={testimonials1}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="h-[12rem] rounded-md flex flex-col antialiased items-center justify-center  overflow-hidden">
            <InfiniteMovingCards
              items={testimonials2}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reveal(Testimonials);
