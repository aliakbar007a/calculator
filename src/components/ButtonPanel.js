import Button from "./ui/Button";

const layout = [
  ["AC", "DE", ".", "/"],
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["00", "0", "="],
];

export default function ButtonPanel({ onAppend, onClear, onDelete, onEqual }) {
  return (
    <div className="panel">
      {layout.flat().map((label) => (
        <Button
          key={label}
          value={label}
          label={label}
          onClick={() =>
            label === "AC"
              ? onClear()
              : label === "DE"
              ? onDelete()
              : label === "="
              ? onEqual()
              : onAppend(label)
          }
          variant={label === "=" ? "equal" : ""}
        />
      ))}
    </div>
  );
}
