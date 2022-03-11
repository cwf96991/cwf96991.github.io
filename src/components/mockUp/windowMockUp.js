import useMobile from "../../hook/useMobile";
const WindowMockUp = ({ children }) => {
  const isMobile = useMobile();
  const margin = isMobile ? "mx-auto" : "ml-auto";
  return (
    <div
      data-theme="light"
      className={`relative w-[90%] md:w-[70%] h-fullScreenWithMargin ${margin} mt-4 md:mt-0`}
    >
      <div className="border mockup-window bg-base-300 ">
        <div className="flex justify-center bg-white h-[250px] overflow-y-auto md:h-screen md:pl-16 ">
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

export default WindowMockUp;
