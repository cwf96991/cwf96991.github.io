function NewlineText({ text, split,className }) {
  const newText = text.split(split ?? "\n").map((str, index) => (
    <span key={index} className={`${className??""}`}>
      {str}
      <br />
    </span>
  ));

  return newText;
}
export default NewlineText;
