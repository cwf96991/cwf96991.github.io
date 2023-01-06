import Base from "./base";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { ArrowRight } from "../components/img";
import {
  FormWidget,
  HoverCardWidget,
  SocialMediaSkill,
  MarkDownWidget,
} from "../components/skill";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const SocialMediaLogin = dynamic(
  () => import("../components/skill/socialMediaLogin"),
  {
    ssr: false,
  }
);
const PixelEffectWidget = dynamic(
  () => import("../components/skill/pixelEffect"),
  {
    ssr: false,
  }
);
const porjList = [
  {
    text: "MarkdownEditor",
    widget: <MarkDownWidget />,
  }, 
  {
    text: "3DHover",
    widget: <HoverCardWidget />,
  },
  {
    text: "PixelEffect",
    widget: <PixelEffectWidget />,
  },
  {
    text: "SocialMedia",
    widget: <SocialMediaSkill />,
  },
  {
    text: "SocialMediaLogin",
    widget: <SocialMediaLogin />,
  },
  {
    text: "form",
    widget: <FormWidget />,
  },
  
];
const Test = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (window) {
      if (window.location.href.includes("#")) {
        let text = window.location.href.split("#")[1];
        for (let index = 0; index < porjList.length; index++) {
          const element = porjList[index];

          if (text == element.text) {
            ref.current.go(index);

            break;
          }
        }
      }
    }
  }, []);
  return (
    <Base>
      <div className="my-5">
        <Splide
          ref={ref}
          onMove={(splide, prev, next) => {
            let skillName = porjList[prev].text;
            window.history.replaceState(
              window.history.state,
              "",
              `/myWork#${skillName}`
            );
          }}
          renderControls={() =>
            porjList.length != 1 && (
              <div className="splide__arrows">
                <div className=" splide__arrow--prev" role="button">
                  <Button
                    rounded
                    className="btn btn-xs btn-ghost hover:bg-transparent absolute left-8 top-1/3 "
                  >
                    <div className=" rotate-[270deg]">
                      <ArrowRight />
                    </div>
                  </Button>
                </div>
                <div className="splide__arrow--next" role="button">
                  <Button
                    rounded
                    className="btn btn-xs btn-ghost hover:bg-transparent  absolute right-8 top-1/3 "
                  >
                    <div className=" rotate-90">
                      <ArrowRight />
                    </div>
                  </Button>
                </div>
              </div>
            )
          }
          options={{
            arrows: porjList.length != 1,
            rewind: true,
            pagination: false,
          }}
        >
          {porjList.map((proj, index) => {
            const { widget } = proj;
            return <SplideSlide key={index}>{widget}</SplideSlide>;
          })}
        </Splide>
      </div>
    </Base>
  );
};

export default Test;
