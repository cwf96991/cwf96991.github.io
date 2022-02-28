import Base from "./base";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { ArrowRight } from "../components/img";
import { FormWidget, HoverCardWidget, SocialMediaSkill } from "../components/skill";
import { useEffect,  useRef } from "react";
const porjList = [
  {
    text: "form",
    widget: <FormWidget />,
  },
  {
    text: "3DHover",
    widget: <HoverCardWidget />,
  },
  {
    text: "SocialMedia",
    widget: <SocialMediaSkill />,
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
