const OutlineBtn = ({ text, onClick, isTight }) => {
  isTight = isTight ?? false ? "w-full md:w-[170px]" : "md:w-[202px]";
  return (
    <button
      onClick={onClick}
      className={`${isTight} group hover:text-white normal-case flex btn bg-transparent text-center font-bold text-black border  border-black  rounded-lg h-12`}
    >
      {text}
    </button>
  );
};
const BgBtn = ({ text, onClick, isTight }) => {
  isTight = isTight ?? false ? "w-full md:w-[120px]" : "w-[127.5px] md:w-[202px]";
  return (
    <button
      onClick={onClick}
      className={`${isTight}  group hover:bg-white hover:text-black normal-case flex btn text-center font-bold bg-black border text-white rounded-lg h-12`}
    >
      {text}
    </button>
  );
};
export { OutlineBtn, BgBtn };
