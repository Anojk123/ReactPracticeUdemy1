
function Input({ richText, ...restProps }) {
  if (richText) {
    return <textarea {...restProps} />;
  }
  return <input {...restProps} />;
}

export default Input;