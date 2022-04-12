function NewlineText({ text, split }) {
  const newText = text.split(split ?? "\n").map((str, index) => (
    <p key={index}>
      {str}
      <br />
    </p>
  ));

  return newText;
}
export default NewlineText;
