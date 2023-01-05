import Base from "./base";
import { useRef } from "react";
import TypeAnimation from "react-type-animation";
import { titleList, desc } from "../utils/constant";
import useMobile from "../hook/useMobile";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
      <div className="flex jusitfy-center items-center mx-4 md:m-16 md:h-screen">
        {!isMobile && (
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            className="w-[40%]"
          >
            <img className={"w-1/2 mx-auto"} src={"/assets/icon.svg"} />
          </AnimationOnScroll>
        )}
        <div className="flex flex-col w-full  md:w-[60%] md:ml-8">
          {isMobile && <img className={"px-20 h-[300px] my-10"} src={"/assets/icon.svg"} />}
          <AnimationOnScroll
            animateIn={isMobile ? "animate__fadeIn" : "animate__fadeInRight"}
          >
            <div className={titleStyle}>
              Hi, I'm Francis and I'm
              <br />
              <div className="flex ">
                a
                <div className="bg-black text-white ml-2 md:ml-4">
                  <TypeAnimation
                    cursor={true}
                    sequence={titleList}
                    align="center"
                    className="inline md:text-4xl text-xl grow"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-lg mt-4 text-center mx-auto">{desc}</div>
            <div className="flex mt-8 justify-center">
              <div className="mr-4 ">
                <BgBtn 
                onClick={()=>{
                  location.href ="/resume/#contact"
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
          </AnimationOnScroll>
        </div>
      </div>

      <div className="flex flex-col mt-4 md:mt-0 text-center mx-4 md:mx-16">
        <AnimationOnScroll animateIn={"animate__fadeIn"}>
          <div ref={workRef} className={`${titleStyle} `}>
            Work
          </div>
          <div className="text-gray-500 mt-4">
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
