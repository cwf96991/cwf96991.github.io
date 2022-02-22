import Base from "./base";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import TypeAnimation from "react-type-animation";
import { titleList, desc } from "../utils/constant";
import useMobile from "../hook/useMobile";
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
        {!isMobile && <img className={"w-[40%] "} src={"/assets/icon.png"} />}
        <div className="flex flex-col w-full  md:w-[60%] md:ml-8">
          {isMobile && <img className={"px-20 "} src={"/assets/icon.png"} />}
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
          <div className="max-w-lg mt-4 text-center">{desc}</div>
          <div className="flex mt-8 justify-center">
            <div className="mr-4 ">
              <BgBtn text={"Contact me"} />
            </div>
            <OutlineBtn
              onClick={() => {
                workRef.current.scrollIntoView({behavior: "smooth"});
              }}
              text={"Check my work"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 md:mt-0 text-center mx-4 md:mx-16">
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
        <SkillSection />
      </div>
    </Base>
  );
};

export default About;
