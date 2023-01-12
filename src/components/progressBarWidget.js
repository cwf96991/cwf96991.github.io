import { Line } from "rc-progress";

const ProgressBar = ({ text, percent }) => {
  return (
    <div className="font-bold text-left text-black font-italic">
      <div className="relative flex">
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
