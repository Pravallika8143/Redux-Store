const initialState={
    todos:[
        {
            title:"Pravallika",
            id:"1",
            status:false
        },
        {
            title:"Uma",
            id:"2",
            status:false
        },
        {
            title:"Rajii",
            id:"3",
            status:true
        },
        {
            title:"Radhika",
            id:"4",
            status:true,
        },
        {
            title:"Ramya",
            id:"5",
            status:false,
        }
    ]
}
export function todoReducer(state=initialState,action){
   if(action.type==='ADD_TODO'){
    return{...state,todos:[...state.todos,action.payload]}
   }
   if(action.type==='DELETE_TODO'){
    var temp=state.todos.filter(todo=>todo.id!==action.payload)
    return{...state,todos:[...temp]}
   }
   if(action.type==='TOGGLE_STATUS'){
    let temp=state.todos.map((todo)=>{
        if(todo.id === action.payload){
            todo.status=!todo.status;
        }
        return todo
    });
    return{...state,todos:[...temp]}
   }
   return state;
}