import React, { useState } from "react";
import useMobile from "../hook/useMobile";
import NewlineText from "./newlineText";
const ReadMore = ({ children, textLimit }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const isMobile = useMobile();
  textLimit = textLimit ?? (isMobile ? 80 : 100);
  return (
    <p className="font-semibold text-black transition-all">
      {
        <NewlineText text={isReadMore ? text.slice(0, textLimit) : text} />
        }
      {text.length > textLimit && (
        <span
          onClick={toggleReadMore}
          className={`read-or-hide text-blue-500 cursor-pointer hover:font-extrabold ${
            isReadMore ? "overflow-y-auto" : "overflow-y-scroll"
          }`}
        >
          {isReadMore ? " ...Read more" : "  Show less"}
        </span>
      )}
    </p>
  );
};

const ReadMoreText = ({ text, textLimit }) => {
  return (
    <div className="container my-5">
      <h2>
        <ReadMore textLimit={textLimit}>{text}</ReadMore>
      </h2>
    </div>
  );
};

export default ReadMoreText;
