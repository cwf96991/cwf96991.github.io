import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import Tilt from "react-parallax-tilt";

const HoverCardWidget = () => {
  const HoverCard = () => {
    return (
      <div className="mx-auto flex items-center justify-center h-[350px] md:h-auto  ">
        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <div className="mt-4 flex flex-col items-center border border-black rounded-lg p-2 opacity-85 backdrop-filter backdrop-blur-sm">
            <img src={"/icon-200x200.png"} className="mb-2" />
            <h1>3D Hover Effect 👀</h1>
          </div>
        </Tilt>
      </div>
    );
  };
  return (
    <div className="">
      <Header
        title="3D Hover Effect | my work"
        header="3D Hover Effect"
        skill="3DHoverEffect"
      />

      <SkillContainer phone={<HoverCard />} window={<HoverCard />} />

      <MobileDeskTopSection>
        <HoverCard />
      </MobileDeskTopSection>
    </div>
  );
};

export default HoverCardWidget;
