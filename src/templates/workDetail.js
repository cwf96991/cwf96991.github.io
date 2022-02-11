import Base from "./base";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, Button, H4, H6, H5, Divider, Subtitle1 } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import React, { useEffect, useState } from "react";
import { LeftArrow } from "../components/img";
const CloseBtn = ({ onClose }) => {
  return (
    <div className="absolute right-1/4 z-40">
      <Button rounded onClick={() => onClose} className="btn btn-xs btn-ghost hover:bg-transparent ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
    </div>
  );
};
const FavBtn = ({ isLeft }) => {
  let style = isLeft ? "left-1/4 " : "right-1/4";
  return (
    <div className={`absolute ${style} z-40 translate-y-20`}>
      <Button rounded onClick={() => {}} className="btn btn-xs btn-ghost hover:bg-transparent ">
        Heart
      </Button>
    </div>
  );
};
const ProjItem = ({ image, text, isReverse }) => {
  isReverse = isReverse ?? false;
  let gridStyle = isReverse
    ? "right-1/3 translate-x-36"
    : "left-1/3 -translate-x-36";
  let descStyle = isReverse
    ? "left-12 translate-x-2/3"
    : "right-12 -translate-x-2/3";
  return (
    <div className="w-screen px-16 h-screen relative ">
      <div className="relative inset-0 flex justify-center items-center z-10 p-16  ">
        <img className="mx-auto w-2/3 h-auto " src="/assets/mockUp.jpg" />
      </div>

      <div
        className={`w-[200px] h-2/3 bg-blue-700 text-transparent absolute top-10  z-0 ${gridStyle}`}
      >
        .
      </div>
      <div
        className={`w-1/5 h-2/3 bg-[#fdfdfb] text-black absolute top-24 z-20 ${descStyle}`}
      >
        This is the text for the desc
      </div>
    </div>
  );
};
const porjList = [1, 2, 3];
const Test = () => {
  const [isOdd, setIsOdd] = useState(false);
  return (
    <Base title={"member"}>
      <div className="my-20">
        <CloseBtn
          onClose={() => {
            console.log("close");
          }}
        />
        <FavBtn isLeft={isOdd} onClose={() => {}} />
        <Splide
          // ref={ref}
          onMove={(splide, prev, next) => {
            setIsOdd(prev % 2 == 1);
          }}
          renderControls={() => (
            <div className="splide__arrows">
              <div className=" splide__arrow--prev" role="button">
                <Button
                  rounded
                  onClick={() => {}}
                  className="btn btn-xs btn-ghost hover:bg-transparent absolute left-8 top-1/3 "
                >
                  <div className="h-[25px] w-[25px] rotate-180">
                    <LeftArrow />
                  </div>
                </Button>
              </div>
              <div className="splide__arrow--next" role="button">
                <Button
                  rounded
                  onClick={() => {}}
                  className="btn btn-xs btn-ghost hover:bg-transparent  absolute right-8 top-1/3 "
                >
                  <div className="h-[25px] w-[25px] rotate-180">
                    <LeftArrow />
                  </div>
                </Button>
              </div>
            </div>
          )}
          options={{
            arrows: true,
            rewind: true,
            padding: "1rem",
            pagination: false,
          }}
        >
          {porjList.map((proj, index) => {
            let isOdd = index % 2 == 1;
            return (
              <SplideSlide key={index}>
                <ProjItem isReverse={!isOdd} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </Base>
  );
};

export default Test;
