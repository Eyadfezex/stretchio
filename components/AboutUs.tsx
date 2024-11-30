import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative py-10">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-[4rem]">
          <div className="relative rounded-2xl overflow-hidden w-full h-[350px] lg:max-w-[400px]">
            <Image
              src="https://i.ibb.co/k2JN0Lz/image-2024-11-29-060453746.webp"
              alt="About us image"
              width={5000}
              height={5000}
              className="absolute w-full h-full object-cover"
              priority
            />
          </div>
          <div className="lg:w-[80%] lg:max-w-[400px]">
            <h2 className="gradient_text font-bold text-2xl md:text-3xl mb-4">
              About us
            </h2>
            <p className="text-lg md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
