import Base from "./base";
import { useRef } from "react";
import {TypeAnimation} from "react-type-animation";
import { titleList, desc } from "../utils/constant";
import useMobile from "../hook/useMobile";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Router from 'next/router'

import {
  LabelList,
  NewlineText,
  OutlineBtn,
  SkillSection,
  BgBtn,
} from "../components";
const About = () => {
  const isMobile = useMobile();
  const workRef = useRef(null);
  const titleStyle = "text-2xl md:text-4xl font-extrabold text-center ";
  return (
    <Base>
      <div className="flex items-center mx-4 jusitfy-center md:m-16 md:h-screen">
        {!isMobile && (
          <div
            animatein="animate__fadeInLeft"
            className="w-[40%]"
          >
            <img alt="icon" className={"w-1/2 mx-auto"} src={"/assets/icon.svg"} />
          </div>
        )}
        <div className="flex flex-col w-full  md:w-[60%] md:ml-8">
          {isMobile && <img alt="icon" className={"px-20 h-[300px] my-10"} src={"/assets/icon.svg"} />}
          <div
            animatein={isMobile ? "animate__fadeIn" : "animate__fadeInRight"}
          >
            <div className={titleStyle}>
              Hi, I'm Francis and I'm
              <br />
              <div className="flex ">
                a
                <div className="ml-2 text-white bg-black md:ml-4">
                  <TypeAnimation
                    cursor={true}
                    sequence={titleList}
                    align="center"
                    className="inline text-xl md:text-4xl grow"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto mt-4 text-center">{desc}</div>
            <div className="flex justify-center mt-8">
              <div className="mr-4 ">
                <BgBtn 
                onClick={()=>{
                  Router.push({
                    pathname: '/resume',
                    query: { to: 'contact' },
                })
                 
                }}
                text={"Contact me"} />
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

      <div className="flex flex-col mx-4 mt-4 text-center md:mt-0 md:mx-16">
        <AnimationOnScroll animatein={"animate__fadeIn"}>
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
        <AnimationOnScroll animatein={"animate__fadeIn"}>
          <SkillSection />
        </AnimationOnScroll>
        <div className="flex justify-center mb-4">
          <BgBtn
          onClick={() => {
           window.open("/chatRoom");
          }}
          text={
           "Join our Real time chat room!"
          }
          isTight={isMobile}
        />
        </div>
        
        
                     
      </div>
    </Base>
  );
};

export default About;
