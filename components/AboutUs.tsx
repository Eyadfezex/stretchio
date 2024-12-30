"use client";
import React from "react";
import mockUp from "@/public/imgs/mockup.png";
import Image from "next/image";
import Reveal from "./ui/Reveal";
const AboutUs = () => {
  const getPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/";
  };
  return (
    <section>
      <div className="flex justify-center py-10">
        <div className="flex flex-col gap-[8rem] px-6 w-full lg:w-[80%] max-w-[1920px]">
          <h2 className="text-4xl lg:text-7xl font-bold bg-gradient-to-br from-white from-30% to-default-600 inline-block text-transparent bg-clip-text">
            {getPath() === "/ar" ? "Stretchio - ستريتشيو" : "Stretchio"}
          </h2>
          <div className="flex items-center  gap-10 ">
            <div className="relative hidden h-[25rem] xl:h-[30rem] lg:w-[80%] xl:w-[40%] rounded-xl overflow-hidden lg:block">
              <Image
                src={mockUp}
                alt="mockup"
                width={1000}
                height={1000}
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="lg:max-w-sm xl:max-w-xl">
              <h3 className="text-lg lg:text-2xl font-semibold after:absolute after:bg-primary after:w-full w-fit after:h-[1px] after:top-[100%] after:left-0 relative ">
                {getPath() === "/ar" ? "نبذة تخصك عننا" : "About Us"}
              </h3>
              <p className="mt-5 lg:text-xl">
                {getPath() === "/ar" ? (
                  <span>
                    احنا في ستريتشيو فاهمين كويس تعب الشغل المكتبي. عارفين إن
                    وجع الظهر والصداع والإرهاق بيخربوا اليوم. عشان كده عملنا لك
                    تطبيق سهل بيساعدك تحافظ على صحتك وانت شغال. هتلاقي عندنا
                    تمارين سريعة تعملها على المكتب، نصايح تخلصك من التوتر،
                    وإرشادات للأكل الصحي - كل ده عشان تفضل مركز ومرتاح مهما شغلك
                    كبير.
                  </span>
                ) : (
                  <span>
                    At Stretchio, we understand the daily challenges of office
                    life. From back pain to mental fatigue, we've designed a
                    comprehensive wellness platform that fits seamlessly into
                    your workday. Our quick, desk-friendly stretches,
                    stress-relief techniques, and smart nutrition tips help you
                    stay healthy, focused, and comfortable - no matter how long
                    your to-do list is
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reveal(AboutUs);
