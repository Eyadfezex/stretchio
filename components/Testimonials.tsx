import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials1, testimonials2, Testimonials3 } from "@/constants";

const Testimonials = () => {
  return (
    <section className="relative">
      <div className="flex justify-center py-5 lg:py-[5rem]">
        <div className="flex flex-col items-center  w-full max-w-[1920px] gap-10">
          <h2 className="gradient_text font-bold text-2xl md:text-3xl">
            What early testers are saying
          </h2>
          <div className="h-[15rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials1}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="h-[15rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials2}
              direction="left"
              speed="slow"
            />
          </div>
          <div className="h-[15rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={Testimonials3}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
