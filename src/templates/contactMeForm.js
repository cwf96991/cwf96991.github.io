const titleStyle = "text-2xl md:text-4xl font-extrabold text-center ";
import { contactDesc } from "../utils/constant";
import { NewlineText } from "../components";
import { SendSvg } from "../components/img";
import { BgBtn } from "../components/btn";
import useMobile from "../hook/useMobile";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ContactMeForm = ({ formRef }) => {
  const isMobile = useMobile();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className="flex flex-col items-center">
        <div ref={formRef} className={titleStyle}>
          Contact
        </div>
        <div className=" mt-4 text-center ">
          <NewlineText text={contactDesc} />
        </div>
        <div className="mb-5"></div>
        <div className="form-control w-4/5">
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" input input-bordered bg-gray-100 border-black text-gray-700"
          />

          <textarea
            className="my-5 textarea textarea-bordered h-24 bg-gray-100 border-black text-gray-700"
            placeholder="Tell me"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <BgBtn
          onClick={() => {
            window.open(
              `mailto:cwfflutter@gmail.com?subject=I am ${name} &body=${desc}`
            );
          }}
          text={
            <div className="flex items-center">
              <div className="w-[30px] h-[30px]">
                <SendSvg />
              </div>

              <div className="ml-2 ">Send</div>
            </div>
          }
          isTight={isMobile}
        />
        <div className="mb-5"></div>
      </div>
    </AnimationOnScroll>
  );
};

export default ContactMeForm;
