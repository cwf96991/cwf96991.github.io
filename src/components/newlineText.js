function NewlineText({ text }) {
    const newText = text.split("\n").map((str, index) => (
      <p key={index}>
        {str}
        <br />
      </p>
    ));
  
    return newText;
  }
  export default NewlineText