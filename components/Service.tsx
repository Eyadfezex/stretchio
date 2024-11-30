import React from "react";

const Service = () => {
  return (
    <section>
      <div className="flex justify-center  py-5">
        <div className="flex flex-col items-center md:items-start px-4 w-full lg:w-[90%] max-w-[1920px] md:w-[95%] gap-4 md:gap-8">
          <h2 className="gradient_text font-bold text-2xl md:text-3xl">
            Why Choose Stretchio
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-4">
            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-[350px] min-h-[110px] md:max-w-[300px] lg:max-w-[280px]">
              <h3 className="text-primary font-bold text-lg">
                Personalized Stretch Reminders
              </h3>
              <p>
                Get timely reminders tailored to your work schedule and
                preferences
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-[350px] min-h-[110px] md:max-w-[300px] lg:max-w-[280px]">
              <h3 className="text-primary font-bold text-lg">
                Guided Office-Friendly Routines
              </h3>
              <p>
                Follow easy-to-do stretches and exercises right at your desk
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-[350px] min-h-[110px] md:max-w-[300px] lg:max-w-[280px]">
              <h3 className="text-primary font-bold text-lg">
                Team Challenges and Leaderboards
              </h3>
              <p>Engage in friendly competition and boost team morale</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-[350px] min-h-[110px] md:max-w-[300px] lg:max-w-[280px]">
              <h3 className="text-primary font-bold text-lg">
                Integration with Your Work Calendar
              </h3>
              <p>Seamlessly fit wellness into your busy work schedule</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-[350px] min-h-[110px] md:max-w-[300px] lg:max-w-[280px]">
              <h3 className="text-primary font-bold text-lg">
                Progress Tracking and Gamification
              </h3>
              <p>
                Stay motivated with fun challenges and track your wellness
                journey
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-[350px] min-h-[110px] md:max-w-[300px] lg:max-w-[280px]">
              <h3 className="text-primary font-bold text-lg">
                Improve Posture and Reduce Strain
              </h3>
              <p>
                Learn techniques to maintain good posture and prevent repetitive
                strain injuries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
