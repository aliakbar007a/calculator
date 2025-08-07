
import './App.css';
import { useState } from 'react';
import { evaluate } from "mathjs"

function App() {
  const [value, setValue] = useState("")

  const handleClick = (e) => {
  const val = e.target.value;
  const lastChar = value[value.length - 1];

  if (
    ["+", "-", "*", "/"].includes(val) &&
    ["+", "-", "*", "/"].includes(lastChar)
  ) {
    return; 
  }

  setValue(value + val);
};
function formatResult(result) {
  let rounded = Number(result).toFixed(2); 

  if (rounded.endsWith(".00")) {
    return rounded.slice(0, -3); 
  } else if (rounded.endsWith("0")) {
    return rounded.slice(0, -1); 
  }

  return rounded;
}
  return (
    <div className="container">
      <div className='calculator'>
        <form onSubmit={(e) => e.preventDefault()}>
         <div className='display'>
          <input
           type="text"
           value={value}
    />
  </div>
          <div>
            <input type="button" value="AC" onClick={e => setValue("")}/>
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            <input type="button" value="." onClick={handleClick}/>
            <input type="button" value="/" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick}/>
            <input type="button" value="8" onClick={handleClick}/>
            <input type="button" value="9" onClick={handleClick}/>
            <input type="button" value="+" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick}/>
            <input type="button" value="5" onClick={handleClick}/>
            <input type="button" value="6" onClick={handleClick}/>
            <input type="button" value="-" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick}/>
            <input type="button" value="2" onClick={handleClick}/>
            <input type="button" value="3" onClick={handleClick}/>
            <input type="button" value="*" onClick={handleClick}/>
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick}/>
            <input type="button" value="0" onClick={handleClick}/>
            <input type="button" value="=" className='equal' onClick={() => {
              try {
                const result = evaluate(value)
                setValue(formatResult(result))
              } catch {
                setValue("Error")
              }
            }}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
