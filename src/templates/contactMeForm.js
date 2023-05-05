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
    <AnimationOnScroll animatein="animate__fadeIn">
      <div className="flex flex-col items-center">
        <div ref={formRef} className={titleStyle}>
          Contact
        </div>
        <div className="mt-4 text-center ">
          <NewlineText text={contactDesc} />
        </div>
        <div className="mb-5"></div>
        <div className="w-4/5 form-control">
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="text-gray-700 bg-gray-100 border-black input input-bordered"
          />

          <textarea
            className="h-24 my-5 text-gray-700 bg-gray-100 border-black textarea textarea-bordered"
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
              `mailto:francis.choi1223@gmail.com?subject=I am ${name} &body=${desc}`
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
