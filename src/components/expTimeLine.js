import useMobile from "../hook/useMobile";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Roadmap = () => {
  const isMobile = useMobile();
  const timelineList = [
    {
      time: "Jan 2021 - Now",
      title: "Flutter Engineer",
      subtitle: "QuantDart",
      desc: "Revamp the whole app and provide a better UI and UX to reach 1000+ daily users. Also, implement the security feature which includes 2FA and biometric security checking. A full set KYC flow is included. collaborate with blockchain developers to build web3 applications.",
    },
    {
      time: "Oct 2020 - Jan 2021",
      title: "Flutter Engineer",
      subtitle: "Flowsophic Limited",
      desc: "Implement a login system that includes social login, such as Google, Facebook, and Apple. Also, implement the comment section under the item. Users can leave a comment and rate the product.",
    },
    {
      time: "Jun 2020 - Aug 2020",
      title: "Intern React Native Engineer",
      subtitle: "Flow Entertainment Limited",
      desc: "Implement a Map section for users to search for the hotel by location in a map view. Also, implement a login system that includes social login, such as Google, Facebook, and Apple.",
    },
  ];
  const RoadMapItem = ({ item }) => {
    const { time, title, subtitle, desc } = item;

    return (
      <div className="flex mb-2">
        <div className="flex flex-col  mr-5 ">
          <div className="w-[12px] h-[12px] ml-[26.5px] bg-black rounded-full"></div>
          <div
            className={`ml-8 bg-black ${
              isMobile ? "h-[360px] " : "h-[220px]"
            } w-[2px]`}
          ></div>
        </div>
        <div className=" flex flex-col font-bold">
          <div
            className={`text-white bg-black italic font-bold px-3 py-1 w-[250px] text-center`}
          >
            {time}
          </div>
          <div className="text-themeColor mt-4 text-2xl lg:text-3xl ">
            {title}
          </div>
          <div className="text-themeBlue my-2 text-lg lg:text-xl ">
            {subtitle}
          </div>
          <div className=" text-themeWhite font-normal grow my-auto">
            <div>{desc}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-2">
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className="ml-8 bg-black h-[80px] w-[2px]"></div>
      </AnimationOnScroll>
      {timelineList.map((item, index) => {
        return (
          <AnimationOnScroll key={index} animateIn="animate__fadeInRight">
            <RoadMapItem item={item} />
          </AnimationOnScroll>
        );
      })}
    </div>
  );
};
export default Roadmap;
