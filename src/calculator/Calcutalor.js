import useCalculator from "../hooks/useCalculator";
import ButtonPanel from "../components/ButtonPanel";
import Display from "../components/ui/Display";
import "../styles/calculator.css";

export default function Calculator() {
  const { value, append, clear, del, equal } = useCalculator();

  return (
    <div className="container">
      <div className="calculator">
      <Display value={value} />
      <ButtonPanel
        onAppend={append}
        onClear={clear}
        onDelete={del}
        onEqual={equal}
      />
    </div>
    </div>
  );
}
