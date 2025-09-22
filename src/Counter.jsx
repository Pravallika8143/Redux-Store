import React from "react";
import  { connect } from "react-redux";
import { decCount,incCount } from "./Store/actioncreators";

function Counter(props){
      console.log(props)
    return (
        <div className="border border-3 p-3 m-2 border-danger">
            <h1>Counter:{props.count}</h1>
            <button  class={"me-3"} onClick={()=>{props.dispatch(incCount())}}>Increment</button>
            <button onClick={()=>{props.dispatch(decCount())}}>Decrement</button>
        </div>
    )
}
export default connect((store)=>{
    return store.counterReducer;
})(Counter);