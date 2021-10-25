// import 'style.css';

import {useState} from "react";

function CountingNumber() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className={"text"}>Counting Number: <span>{count}</span></p>
      <button onClick={() => setCount(count + 1)}>increasing</button>
      <button  onClick={() => setCount(count - 1)}>decreasing</button>
    </div>
  );
}

export default CountingNumber;
