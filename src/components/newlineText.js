function NewlineText({ text, split }) {
  const newText = text.split(split ?? "\n").map((str, index) => (
    <span key={index}>
      {str}
      <br />
    </span>
  ));

  return newText;
}
export default NewlineText;
