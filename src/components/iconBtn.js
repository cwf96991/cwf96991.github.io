const IconBtn = ({ src, onClick, tooltip, tooltipText }) => {
    tooltip = tooltip != null ? `tooltip-${tooltip}` : "";
    let finalStyle = tooltipText == null ? "" : `tooltip ${tooltip}`;
    return (
      <div data-tip={tooltipText} className={finalStyle}>
        <button className="p-0 btn btn-ghost btn-sm hover:bg-transparent ">
          <img alt={tooltipText??"button"} className="w-[20px]" src={src} onClick={() => onClick()} />
        </button>
      </div>
    );
  };
  
  export default IconBtn;
  