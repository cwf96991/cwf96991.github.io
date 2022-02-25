import Base from "./base";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import useMobile from "../hook/useMobile";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import React, { useEffect, useState, useRef } from "react";
import {
  FavSvg,
  UnFavSvg,
  ArrowRight,
  Edit,
  CrossSvg,
} from "../components/img";
import FormSkill from "../components/skill/form";
import NewlineText from "../components/newlineText";
const CloseBtn = ({ onClose }) => {
  return (
    <div className="absolute right-1/4 z-40">
      <Button
        rounded
        onClick={() => onClose}
        className="btn btn-xs btn-ghost hover:bg-transparent "
      >
        <CrossSvg />
      </Button>
    </div>
  );
};
const FavBtn = ({ isLeft }) => {
  let style = isLeft ? "left-1/4 " : "right-1/4";
  return (
    <div className={`absolute ${style} z-40 translate-y-20`}>
      <Button
        rounded
        onClick={() => {}}
        className="btn btn-xs btn-ghost hover:bg-transparent "
      >
        <UnFavSvg />
      </Button>
    </div>
  );
};
const WindowContainer = ({ children }) => {
  const isMobile = useMobile();
  const margin = isMobile ? "mx-auto" : "ml-auto";
  return (
    <div
      data-theme="light"
      className={`relative w-[90%] md:w-[70%] h-fullScreenWithMargin ${margin} mt-4 md:mt-0`}
    >
      <div class="border mockup-window bg-base-300 ">
        <div class="flex justify-center bg-white h-[250px] overflow-y-auto md:h-screen md:pl-16 ">
          {children}
        </div>
      </div>
      <div className="absolute  top-[21px] left-[23px] flex">
        <div className="h-[12.5px] w-[12.5px] bg-red-400 rounded-full mr-[10px]"></div>
        <div className="h-[12.5px] w-[12.5px] bg-orange-400 rounded-full mr-[10px]"></div>
        <div className="h-[12.5px] w-[12.5px] bg-green-400 rounded-full "></div>
      </div>
    </div>
  );
};
const PhotoContainer = ({ children }) => {
  return (
    <div
      data-theme="light"
      class="mockup-phone absolute bottom-0 !min-width-[150px] w-[30%] h-4/5 aspect-[19.5/9]"
    >
      <div class="camera"></div>
      <div class="display w-full h-full">
        <div class="artboard artboard-demo w-full h-full overflow-y-auto !items-start">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProjItem = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [tempResult, setTempResult] = useState("");
  const resultRef = useRef(null);
  const modalRef = useRef(null);
  const isMobile = useMobile();
  function onSubmit(input) {
    setInput(input);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    setTimeout(() => {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }
  const FormResult = () => {
    return (
      <div
        ref={resultRef}
        class="mockup-code w-[85%] md:w-[90%] mx-auto  my-5 md:mt-5"
      >
        <pre data-prefix="$">
          <code>submit form result</code>
        </pre>
        {input != "" && (
          <pre data-prefix=">" class="text-warning">
            <code>submit...</code>
          </pre>
        )}
        <div>
          {isLoading ? (
            <div class="border border-black shadow rounded-md p-4 max-w-sm w-full ml-5">
              <div class="animate-pulse flex space-x-4">
                <div className="animate-pulse flex flex-col">
                  <code>{`{`}</code>
                  <div class=" bg-slate-200 w-[80px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div class=" bg-slate-200 w-[120px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div class=" bg-slate-200 w-[200px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div class=" bg-slate-200 w-[80px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div class=" bg-slate-200 w-[120px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div class=" bg-slate-200 w-[80px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <code>{`}`}</code>
                </div>
              </div>
            </div>
          ) : (
            input != "" && (
              <pre class="text-success ml-5">
                <code className="-ml-5">{`{`}</code>
                <code>
                  <NewlineText
                    text={JSON.stringify(input)
                      .replace("{", "")
                      .replace("}", "")}
                    split={","}
                  />
                </code>
                <code>{`}`}</code>
              </pre>
            )
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="font-bold text-2xl ml-4 md:ml-16">
        Form With Validation
      </div>
      <div>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div
          data-theme="light"
          ref={modalRef}
          onClick={(event) => {
            const element = event.target;

            if (!element.classList.contains("modal")) {
              return;
            }
            const modal = document.getElementById("my-modal");
            modal.checked = false;
            enableBodyScroll(modalRef.current);
          }}
          class="modal "
        >
          <div class="modal-box fixed rounded-lg w-[80%] top-[30vh]">
            <h3 class="font-bold text-lg">
              Are you sure you want to continue?
            </h3>
            <p class="py-4">You can see the result after submit</p>
            <div class="modal-action">
              <label
                onClick={() => {
                  enableBodyScroll(modalRef.current);
                }}
                for="my-modal"
                class="btn btn-error"
              >
                Cancel!
              </label>
              <label
                onClick={() => {
                  enableBodyScroll(modalRef.current);
                  onSubmit(tempResult);
                }}
                for="my-modal"
                class="btn"
              >
                Submit!
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen md:h-screen relative md:px-28">
        {isMobile ? (
          <FormSkill
            id={"pc"}
            isLoading={isLoading}
            onSumbit={(input) => {
              onSubmit(input);
            }}
            onClick={(input) => {
              setTempResult(input);
              disableBodyScroll(modalRef.current);
            }}
          />
        ) : (
          <WindowContainer>
            <FormSkill
              id={"pc"}
              onSumbit={(input) => {
                onSubmit(input);
              }}
              isLoading={isLoading}
              onClick={(input) => {
                setTempResult(input);
                disableBodyScroll(modalRef.current);
              }}
            />
          </WindowContainer>
        )}

        <div className="hidden md:flex">
          <PhotoContainer>
            <FormSkill
              id={"mobile"}
              isLoading={isLoading}
              onSumbit={(input) => {
                onSubmit(input);
              }}
              onClick={(input) => {
                setTempResult(input);
                disableBodyScroll(modalRef.current);
              }}
            />
          </PhotoContainer>
        </div>
      </div>
      <FormResult />
      {isMobile && (
        <div className="font-bold text-black ml-5">Desktop Version</div>
      )}
      {isMobile && (
        <WindowContainer>
          <FormSkill
            id={"pc"}
            isLoading={isLoading}
            onSumbit={(input) => {
              onSubmit(input);
            }}
            onClick={() => {
              disableBodyScroll(modalRef.current);
            }}
          />
        </WindowContainer>
      )}
    </div>
  );
};
const porjList = [1];
const Test = () => {
  return (
    <Base title={"Form | my work"}>
      <div className="my-5">
        {/* <CloseBtn
          onClose={() => {
            console.log("close");
          }}
        /> */}
        {/* <FavBtn isLeft={isOdd} onClose={() => {}} /> */}

        <Splide
          // ref={ref}
          // onMove={(splide, prev, next) => {
          //   setIsOdd(prev % 2 == 1);
          // }}
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
            // padding: "1rem",
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
