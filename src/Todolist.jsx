import React from "react";
import  { connect } from 'react-redux';

function Todolist(props){
      console.log("todolist component::",props);
      var [newtodo,setNewTodo]=React.useState('');
    return (
        <div className="border border-2 p-3 m-2 border-primary">
            <h1>Todolist</h1>
            <input type="text" id="d2" class={"me-3 mb-4"} onChange={(e)=>{setNewTodo(e.target.value)}}/>
            <button  class={"me-3 rounded-3"} onClick={()=>{props.dispatch({type:'ADD_TODO',payload:newtodo})}}>AddTodo</button>
            <ul>
                {props.todos.map((todo) => {
                        return (
                        <li className={todo.status?"text-decoration-line-through":""}>
                            {todo.title}
                            {todo.status && <button className='ms-3 rounded-3' onClick={()=>{props.dispatch({type:'TOGGLE_STATUS',payload:todo.id})}}>Undo</button>}
                            {!todo.status && <button className='ms-3 rounded-3' onClick={()=>{props.dispatch({type:'TOGGLE_STATUS',payload:todo.id})}}>Delete</button>}
                            <button class={"ms-3 mb-3 rounded-3"}
                             onClick={()=>{
                                props.dispatch({type:"DELETE_TODO",payload:todo.id});
                            }}
                            >
                            DeleteTodo
                            </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default connect((store)=>{
    return store.todoReducer
})(Todolist)