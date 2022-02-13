import React from "react";
import {useSelector , useDispatch} from "react-redux";
import {increment , decrement} from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Conter : {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {islogged ? <h3>valuable information I can't see if I'm not logged in</h3> : ""}
    </div>
  );
}

export default App;
