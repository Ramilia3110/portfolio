import React from "react";
import Image from "next/image";
import me from "../../../public/assets/images/me.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[rgba(99,184,154,0.1)] py-16 w-[90%] mx-auto my-5"
    >
      <div className="container  mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <Image
            width={100}
            height={100}
            src={me}
            alt="a young women"
            className="rounded-full object-cover"
          />
          <h1 className="text-3xl font-semibold">Ramilia Imankulova</h1>

          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center py-5">About Me</h2>
          <p className="text-center">
            I am skilled Front-End Developer dedicated to creating visually
            appealing and user-friendly websites. With expertise in HTML, CSS,
            JS and React, I specialize in translating design concepts into
            responsive and interactive web interfaces. Continuously exploring
            new technologies and staying up-to- date with industry trends. I
            strive to deliver exceptional user experiences while maintaining
            clean and efficient code. Let's collaborate and bring your digital
            vision to life!
          </p>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <ul className="list-none list-inside mt-2">
            <li>
              <strong>Frontend Developer Intern</strong>, Kiwkish Technology
              <br />
              <span className="text-gray-700">11/2022 - 06/2023</span>
            </li>
            <li>
              <strong>Frontend Developer Intern</strong>, Kyrgyz Academy of
              Education
              <br />
              <span className="text-gray-700">2020</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
