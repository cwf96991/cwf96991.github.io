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
        className="cursor-pointer bg-transparent btn-sm p-0 border-0 m-0"
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
