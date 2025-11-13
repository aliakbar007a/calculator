import { useState } from "react";
import { evaluate } from "mathjs";

export default function useCalculator() {
  const [value, setValue] = useState("");

  const append = (val) => {
    const last = value.slice(-1);
    if (["+", "-", "*", "/"].includes(val) && ["+", "-", "*", "/"].includes(last)) return;
    setValue((v) => v + val);
  };

  const clear = () => setValue("");
  const del = () => setValue((v) => v.slice(0, -1));
  const equal = () => {
    try {
      const result = evaluate(value);
      setValue(format(result));
    } catch {
      setValue("Error");
    }
  };

  const format = (num) => {
    let r = Number(num).toFixed(2);
    if (r.endsWith(".00")) return r.slice(0, -3);
    if (r.endsWith("0")) return r.slice(0, -1);
    return r;
  };

  return { value, append, clear, del, equal };
}
