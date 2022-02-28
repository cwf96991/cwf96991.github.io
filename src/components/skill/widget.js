import { Meta } from "../../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import FavBtn from "../favBtn";
import useMobile from "../../hook/useMobile";
import { WindowMockUp, PhoneMockUp } from "../mockUp";

const Header = ({ title, header, skill }) => {
  title = title === undefined ? "" : `${title} | `;
  return (
    <>
      <Meta title={`${title}${AppConfig.title}`} />
      <div className="flex mb-2">
        <div className="font-bold text-2xl ml-4 md:ml-16 ">{header}</div>
        <FavBtn skill={skill} />
      </div>
    </>
  );
};

const SkillContainer = ({ window, phone }) => {
  const isMobile = useMobile();

  return (
    <div className="w-screen  md:h-screen relative md:px-28">
      {isMobile ? phone : <WindowMockUp>{window}</WindowMockUp>}

      <div className="hidden md:flex">
        <PhoneMockUp>{phone}</PhoneMockUp>
      </div>
    </div>
  );
};

const MobileDeskTopSection = ({ children }) => {
  const isMobile = useMobile();
  return (
    <div>
      {isMobile && (
        <div className="font-bold text-black ml-5 mt-4">Desktop Version</div>
      )}
      {isMobile && (
        <WindowMockUp>
          <div className="mt-2">{children}</div>
        </WindowMockUp>
      )}
    </div>
  );
};
export { Header, SkillContainer, MobileDeskTopSection };
