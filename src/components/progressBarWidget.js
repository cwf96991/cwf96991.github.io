import { Line, Circle } from "rc-progress";

const ProgressBar = ({ text, percent }) => {
  let style = "";
  return (
    <div className=" text-left  text-black font-bold font-italic">
      <div className="flex relative">
        {text}
        <div className={`absolute text-sm`} style={{ left: ` ${percent - 5}%` }}>
          {percent}%
        </div>
      </div>
      <Line
        percent={percent}
        strokeWidth="1"
        strokeColor="black"
        trailColor="#D3D3D3"
      />
    </div>
  );
};

export default ProgressBar;
