import { useState } from "react";

const DropDownWrapper = ({ children, items, isHover }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`dropdown ${
        isHover ?? false ? "dropdown-hover" : ""
      } m-0 dropdown-end`}
    >
      <div
        tabIndex="0"
        className="p-0 m-0 bg-transparent border-0 cursor-pointer btn-sm"
        onClick={() => {
          if (isOpen) {
            document.activeElement.blur();
          }
          setIsOpen(!isOpen);
        }}
      >
        {children}
      </div>
      <ul
        tabIndex="0"
        className="flex p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 "
      >
        {items}
      </ul>
    </div>
  );
};

export default DropDownWrapper;
