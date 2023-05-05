import useMobile from "../hook/useMobile";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ReadMoreText from "./readMore";

const Roadmap = () => {
  const isMobile = useMobile();
  const timelineList = [
    {
      time: "Aug 2022 - Present",
      title: "Frontend Developer",
      subtitle: "VirgoCX Inc.",
      desc: "A mobile app provides crypto trading service and a marketplace to trade NFT",
      points:[
        "-Reduced the bundle size by 30% by using the tracking dependencies tool.",
        "-Reduced the time consumed in the whole CI/CD procedure by 20%.",
      ]
    },
    {
      time: "May 2022 - Aug 2022",
      title: "React Native Freelancer",
      subtitle: "Kios",
      desc: "A mobile app that can interact with 3D objects in AR.",
      points:[
        "-Embedded Unity 3D Model into a mobile application built with React Native.",
        "-Built Interactable objects in the real world in AR environment.",
        
      ]
    },
    {
      time: "Jan 2021 - Jun 2022",
      title: "Flutter Engineer",
      subtitle: "QuantDart",
      desc: "A mobile app provides crypto trading service and a marketplace to trade NFT",
      points:[
        "-Revamped the whole app and provide a better UI and UX to reach 1000+ daily users.",
        "-Implemented the security feature which includes 2FA and biometric security checking.",
      ]
    },
    {
      time: "Oct 2020 - Jan 2021",
      title: "Flutter Engineer",
      subtitle: "Flowsophic Limited",
      desc: "A mobile app provides academic support all-in-one platform",
      points:[
        "-Integrated API with a WebSocket server to build a real-time chatroom function for all online users.",
        "-Implemented a login system that includes social login, such as Google,Facebook, and Apple"
      ]
    },
    {
      time: "Jun 2020 - Aug 2020",
      title: "Intern React Native Engineer",
      subtitle: "Flow Entertainment Limited",
      desc: "Implement a Map section for users to search for the hotel by location in a map view. Also, implement a login system that includes social login, such as Google, Facebook, and Apple.",
      points:[]
    },
  ];
  const RoadMapItem = ({ item }) => {
    const { time, title, subtitle, desc,points } = item;

    return (
      <div className="flex mb-2">
        <div className="flex flex-col mr-5 ">
          <div className="w-[12px] h-[12px] ml-[26.5px] bg-black rounded-full"></div>
          <div
            className={`ml-8 bg-black ${
              isMobile ? "h-[360px] " : "h-[220px]"
            } w-[2px]`}
          ></div>
        </div>
        <div className="flex flex-col font-bold ">
          <div
            className={`text-white bg-black italic font-bold px-3 py-1 w-[250px] text-center`}
          >
            {time}
          </div>
          <div className="mt-4 text-2xl text-themeColor lg:text-3xl ">
            {title}
          </div>
          <div className="my-2 text-lg text-themeBlue lg:text-xl ">
            {subtitle}
          </div>
          <div className="my-auto font-normal text-themeWhite grow max-w-[972px]">
            <div>{desc}</div>
             
            {points.map((point,index)=>{
              return <div key={index}>{point}</div>
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-2">
      <AnimationOnScroll animatein="animate__fadeInRight">
        <div className="ml-8 bg-black h-[80px] w-[2px]"></div>
      </AnimationOnScroll>
      {timelineList.map((item, index) => {
        return (
          <AnimationOnScroll key={index} animatein="animate__fadeInRight">
            <RoadMapItem item={item}  key={index}/>
          </AnimationOnScroll>
        );
      })}
    </div>
  );
};
export default Roadmap;
