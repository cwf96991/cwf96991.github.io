import Base from "./base";
import useMobile from "../hook/useMobile";
import ContactMeForm from "./contactMeForm";
import React, { useEffect, useRef } from "react";
import ResumePanel from "../components/resumePanel";
import { desc } from "../utils/constant";
import Roadmap from "../components/expTimeLine";
import { EmailSvg, GithubSvg, DownloadSvg } from "../components/img";
import { BgBtn } from "../components/btn";

import { AnimationOnScroll } from "react-animation-on-scroll";

const HeaderDivider = ({ text }) => {
  return (
    <div className="w-full ">
      <div className="font-medium text-2xl ">{text}</div>
      <div className=" h-[1px] bg-gray-300"></div>
    </div>
  );
};
const contactItemList = [
  {
    text: "cwfflutter@gmail.com",
    icon: <EmailSvg />,
    link: "mailto:cwfflutter@gmail.com",
  },
  {
    text: "@cwf96991",
    icon: <GithubSvg />,
    link: "https://github.com/cwf96991",
  },
];
const ContactItem = ({ item }) => {
  const { text, icon, link } = item;
  return (
    <div
      onClick={() => {
        window.open(link);
      }}
      className="flex items-center my-2 cursor-pointer"
    >
      <div className="bg-white rounded-full p-1">{icon}</div>
      <div className="text-black ml-2">{text}</div>
    </div>
  );
};
const TitleDescTime = ({ title, desc, time }) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="text-black text-extrabold text-xl">{title}</div>
      <div className="">{desc}</div>
      <div className="text-gray-500">{time}</div>
    </div>
  );
};
const SkillCol = ({ title, content }) => {
  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border border-base-300 bg-transpartent my-2 rounded-box"
    >
      <div class="collapse-title font-medium">{title}</div>
      <div class="collapse-content">{content}</div>
    </div>
  );
};
const ProgressBar = ({ value }) => {
  return <progress class="progress w-full" value={value} max="100"></progress>;
};
const Resume = () => {
  const ref = useRef(null);
  const isMobile = useMobile();
  useEffect(() => {
    if (window.location.href.includes("#contact")) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Base title={"Resume"}>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="flex w-full ">
          <ResumePanel />
          <div className="w-full md:w-4/5 p-5">
            <HeaderDivider text={"PROFILE"} />
            <div className="flex-col md:hidden">
              {contactItemList.map((item, index) => {
                return <ContactItem item={item} key={index} />;
              })}
            </div>
            <div className="mt-4 mb-8">{desc}</div>
            <div className="flex-col md:hidden">
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <HeaderDivider text={"SKILL"} />
                <SkillCol
                  title="Frontend"
                  content={
                    <div className="flex flex-col">
                      <div>Flutter</div>
                      <ProgressBar value={"98"} />
                      <div>React Native</div>
                      <ProgressBar value={"90"} />
                      <div>NextJs</div>
                      <ProgressBar value={"95"} />
                      <div>ReactJs</div>
                      <ProgressBar value={"90"} />
                      <div>HTML&CSS</div>
                      <ProgressBar value={"92"} />
                      <div>SEO</div>
                      <ProgressBar value={"98"} />
                    </div>
                  }
                />
                <SkillCol
                  title="Backend"
                  content={
                    <div className="flex flex-col">
                      <div>NodeJs</div>
                      <ProgressBar value={"80"} />
                      <div>Firebase</div>
                      <ProgressBar value={"90"} />
                      <div>AWS</div>
                      <ProgressBar value={"88"} />
                      <div>Google Cloud Platform</div>
                      <ProgressBar value={"80"} />
                      <div>MongoDB</div>
                      <ProgressBar value={"90"} />
                      <div>MySQL</div>
                      <ProgressBar value={"88"} />
                      <div>GraphQL</div>
                      <ProgressBar value={"88"} />
                      <div>PHP</div>
                      <ProgressBar value={"80"} />
                    </div>
                  }
                />
                <SkillCol
                  title="Crypto"
                  content={
                    <div className="flex flex-col">
                      <div>Solidity</div>
                      <ProgressBar value={"80"} />
                      <div>Web3</div>
                      <ProgressBar value={"88"} />
                      <div>NFT Marketplace</div>
                      <ProgressBar value={"80"} />
                      <div>NFT Launch Pad</div>
                      <ProgressBar value={"80"} />
                    </div>
                  }
                />
                <SkillCol
                  title="Testing"
                  content={
                    <div className="flex flex-col">
                      <div>Jenkins - Test Automation</div>
                      <ProgressBar value={"100"} />
                      <div>Unit Testing</div>
                      <ProgressBar value={"98"} />
                      <div>Jest</div>
                      <ProgressBar value={"98"} />
                      <div>Playwright</div>
                      <ProgressBar value={"100"} />
                      <div>Crypress</div>
                      <ProgressBar value={"98"} />
                    </div>
                  }
                />
                <SkillCol
                  title="Deployment"
                  content={
                    <div className="flex flex-col">
                      <div>AWS Amplify</div>
                      <ProgressBar value={"100"} />
                      <div>Vercel</div>
                      <ProgressBar value={"100"} />
                      <div>
                        App Store &<br /> Play Store Deployments
                      </div>
                      <ProgressBar value={"100"} />
                    </div>
                  }
                />
                <HeaderDivider text={"EDUCATION"} />
              </AnimationOnScroll>
              <TitleDescTime
                title="The University Of Hong Kong"
                desc="Computer Science"
                time="2018 - 2022"
              />
            </div>
            <HeaderDivider text={"WORK EXPERIENCE"} />

            <Roadmap />
          </div>
        </div>
      </AnimationOnScroll>
      <div className="flex flex-col items-center">
        <div className="mb-5"></div>
        <div>Download my resume as PDF file.</div>
        <div className="mb-5"></div>
        <BgBtn
          onClick={() => {
            FileSaver.saveAs("/assets/cv.pdf", "cwf_CV.pdf");
          }}
          text={
            <div className="flex items-center">
              <div className="w-[30px] h-[30px]">
                <DownloadSvg />
              </div>

              <div className="ml-2 ">Download (191KB)</div>
            </div>
          }
          isTight={isMobile}
        />
      </div>
      <div className="mb-10"></div>
      <ContactMeForm formRef={ref} />
    </Base>
  );
};

export default Resume;
