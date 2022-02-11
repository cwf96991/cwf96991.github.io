import Base from "./base";
import { BgBtn } from "../components/btn";
import { contactDesc, resumeDesc } from "../utils/constant";
import { SendSvg, DownloadSvg } from "../components/img";
import useMobile from "../hook/useMobile";
import { NewlineText } from "../components";
import React, { useEffect, useState, useRef } from "react";
var FileSaver = require("file-saver");

const titleStyle = "text-2xl md:text-4xl font-extrabold text-center ";
const subSessionStyle = "my-4 bg-black text-extrabold text-white text-2xl";
const TitleDescTime = ({ title, desc, time }) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="text-black text-extrabold text-xl">{title}</div>
      <div className="">{desc}</div>
      <div className="text-gray-500">{time}</div>
    </div>
  );
};
const workExpList = [
  {
    title: "Intern React Native Engineer",
    company: "Flow Entertainment Limited",
    time: "Jun 2020 - Aug 2020",
  },
  {
    title: "Flutter Engineer",
    company: "Flowsophic Limited",
    time: "Oct 2020 - Jan 2021",
  },
  {
    title: "Flutter Engineer",
    company: "Sonivy Technology Limited",
    time: "Jan 2021 - Now",
  },
];

const Resume = () => {
  const isMobile = useMobile();
  const ref = useRef(null);
  useEffect(() => {
    if (window.location.href.includes("#contact")) {
      ref.current.scrollIntoView();
    }
  }, []);
  return (
    <Base title={"Resume"}>
      <div className="flex flex-col items-center px-4">
        <div className={titleStyle}>Resume</div>
        <div className="max-w-lg mt-4 text-center ">{resumeDesc}</div>
        <div className="mb-5"></div>
        <div className={subSessionStyle}>Education</div>
        <TitleDescTime
          title="The University Of Hong Kong"
          desc="Computer Science"
          time="2018 - 2022"
        />
        <div className="mb-5"></div>
        <div className={subSessionStyle}>Work Experience</div>
        {workExpList.map((work, index) => {
          const { title, company, time } = work;
          return (
            <TitleDescTime
              title={title}
              desc={company}
              time={time}
              key={index}
            />
          );
        })}
        <div className="mb-5"></div>
        <div className={subSessionStyle}>Skill and Tools</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-4 md:mx-16">
          <div className="flex flex-col">
            <div>Flutter</div>
            <div>React Native</div>
            <div>NextJs</div>
            <div>ReactJs</div>
            <div>HTML&CSS</div>
          </div>
          <div className="flex flex-col">
            <div>NodeJs</div>
            <div>Firebase</div>
            <div>AWS</div>
            <div>Google Cloud Platform</div>
            <div>MongoDB</div>

            <div>MySQL</div>
            <div>GraphQL</div>
            <div>PHP</div>
          </div>
          <div className="flex flex-col">
            <div>Solidity</div>
            <div>Web3</div>
            <div>SEO</div>
            <div>NFT Marketplace</div>
            <div>NFT Launch Pad</div>
          </div>
          <div className="flex flex-col">
            <div>GIT</div>
            <div>Jira</div>
            <div>Jenkins - Test Automation</div>
            <div>Unit Testing</div>
          </div>
          <div className="flex flex-col">
            <div>AWS Amplify</div>
            <div>Vercel</div>
            <div>
              App Store &<br /> Play Store Deployments
            </div>
          </div>
        </div>
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

              <div className="ml-2 ">Download (229KB)</div>
            </div>
          }
          isTight={isMobile}
        />
        <div className="mb-10"></div>
        <div ref={ref} className={titleStyle}>
          Contact
        </div>
        <div className=" mt-4 text-center ">
          <NewlineText text={contactDesc} />
        </div>
        <div className="mb-5"></div>
        <div className="form-control w-4/5">
          <input
            type="text"
            placeholder="Enter your name"
            className=" input input-bordered bg-gray-100 border-black text-gray-700"
          />

          <textarea
            className="my-5 textarea textarea-bordered h-24 bg-gray-100 border-black text-gray-700"
            placeholder="Tell me"
          />
        </div>
        <BgBtn
          onClick={() => {
            window.open(
              "mailto:cwfflutter@gmail.com?subject=I am interested in &body=Testing"
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
    </Base>
  );
};

export default Resume;
