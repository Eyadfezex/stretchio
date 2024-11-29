"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { cn } from "@nextui-org/theme";
import element from "@/public/heroElement.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
const Hero = () => {
  return (
    <section className="relative">
      <Image src={element} alt="shape" className="absolute top-[60%]" />
      <div className="flex justify-center relative">
        <div className="flex flex-col gap-2 items-center w-full">
          <Image
            src="https://i.ibb.co/1LjWXkv/image-2024-11-28-062619874.webp"
            alt="image-fx"
            width={2000}
            height={2000}
            className="w-full"
          />
          <div className="flex flex-col gap-7 px-4">
            <div>
              <h1 className="text-4xl hh_gradient text-transparent bg-clip-text font-semibold">
                Title Copy Goes Here Be Awesome
              </h1>
              <p className="leading-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div>
              <h2 className="font-semibold  ">
                Sign up to get notified when we launch
              </h2>
              <Input
                className="mt-2"
                placeholder="Enter your email"
                classNames={{
                  inputWrapper: cn("bg-white border py-5"),
                }}
              />
              <Button color="primary" className="w-full mt-3 items-center flex">
                <span className="text-white">Notify me</span>
                <IoIosArrowForward />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
