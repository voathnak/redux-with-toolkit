// import 'style.css';

import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../redux/counter";

function CountingNumber() {
  const { count }  = useSelector((state) => state.counter);
  const dispatch =  useDispatch();
  const increaseCount = () => dispatch(increment());
  const decreaseCount = () => dispatch(decrement());
  return (
    <div>
      <p className={"text"}>Counting Number: <span>{ count }</span></p>
      <button onClick={increaseCount}>increasing</button>
      <button  onClick={decreaseCount}>decreasing</button>
    </div>
  );
}

export default CountingNumber;
