const IconBtn = ({ src, onClick, tooltip, tooltipText }) => {
    tooltip = tooltip != null ? `tooltip-${tooltip}` : "";
    let finalStyle = tooltipText == null ? "" : `tooltip ${tooltip}`;
    return (
      <div data-tip={tooltipText} className={finalStyle}>
        <button className="btn btn-ghost btn-sm p-0 hover:bg-transparent ">
          <img className="w-[20px]" src={src} onClick={() => onClick()} />
        </button>
      </div>
    );
  };
  
  export default IconBtn;
  