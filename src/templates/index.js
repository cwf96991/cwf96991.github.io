import Base from "./base";
import { TypeAnimation } from "react-type-animation";
import { titleList, desc } from "../utils/constant";
import useMobile from "../hook/useMobile";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Router from "next/router";
import React, { useRef, Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

import {
  LabelList,
  NewlineText,
  OutlineBtn,
  SkillSection,
  BgBtn,
} from "../components";
const LoadingImage = () => {
  return (
    <img alt="icon" className={"w-1/2 mx-auto py-auto h-full"} src={"/assets/icon.svg"} />
  );
};
const About = () => {
  const isMobile = useMobile();
  const workRef = useRef(null);
  const titleStyle = "text-2xl md:text-4xl font-extrabold text-center ";
  return (
    <Base>
      <div className="jusitfy-center mx-4 flex items-center md:m-16 md:h-screen">
        {!isMobile && (
          <div animateIn="animate__fadeInLeft" className="h-full  w-[40%]">
            <Suspense fallback={<LoadingImage />}>
              <div className={"h-full"}>
                <Spline scene="https://prod.spline.design/64VQaZi0kDzAgcnx/scene.splinecode" />
              </div>
              
            </Suspense>

            {/* <img alt="icon" className={"w-1/2 mx-auto"} src={"/assets/icon.svg"} /> */}
          </div>
        )}
        <div className="flex w-full flex-col  md:ml-8 md:w-[60%]">
          {isMobile && (
            <img
              alt="icon"
              className={"my-10 h-[300px] px-20"}
              src={"/assets/icon.svg"}
            />
          )}
          <div
            animateIn={isMobile ? "animate__fadeIn" : "animate__fadeInRight"}
          >
            <div className={titleStyle}>
              Hi, I'm Francis and I'm
              <br />
              <div className="flex ">
                a
                <div className="ml-2 bg-black text-white md:ml-4">
                  <TypeAnimation
                    cursor={true}
                    sequence={titleList}
                    align="center"
                    className="inline grow text-xl md:text-4xl"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-4 max-w-lg text-center">{desc}</div>
            <div className="mt-8 flex justify-center">
              <div className="mr-4 ">
                <BgBtn
                  onClick={() => {
                    Router.push({
                      pathname: "/resume",
                      query: { to: "contact" },
                    });
                  }}
                  text={"Contact me"}
                />
              </div>
              <OutlineBtn
                onClick={() => {
                  workRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                text={"Check my work"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 flex flex-col text-center md:mx-16 md:mt-0">
        <AnimationOnScroll animateIn={"animate__fadeIn"}>
          <div ref={workRef} className={`${titleStyle} `}>
            Work
          </div>
          <div className="mt-4 text-gray-500">
            <NewlineText
              text={
                "Check my commercial and non commercial projects.\nIf you have any questions feel free to ask me for more information. "
              }
            />
          </div>
          <div>
            <LabelList />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={"animate__fadeIn"}>
          <SkillSection />
        </AnimationOnScroll>
        <div className="mb-4 flex justify-center">
          <BgBtn
            onClick={() => {
              window.open("/chatRoom");
            }}
            text={"Join our Real time chat room!"}
            isTight={isMobile}
          />
        </div>
      </div>
    </Base>
  );
};

export default About;
