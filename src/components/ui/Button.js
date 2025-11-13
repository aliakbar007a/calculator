import "../../styles/button.css";

export default function Button({ value, onClick, className }) {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      className={`calc-btn ${className}`}
    />
  );
}
