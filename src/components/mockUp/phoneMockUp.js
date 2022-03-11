const PhoneMockUp = ({ children }) => {
  return (
    <div
      data-theme="light"
      className="mockup-phone absolute bottom-0 !min-width-[150px] w-[30%] h-4/5 aspect-[19.5/9]"
    >
      <div className="camera"></div>
      <div className="display w-full h-full">
        <div className="artboard artboard-demo w-full h-full overflow-y-auto !items-start">
          {children}
        </div>
      </div>
    </div>
  );
};
export default PhoneMockUp;
