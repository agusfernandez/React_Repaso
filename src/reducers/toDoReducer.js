import {ACTIONS} from "../actions/toDoAction"

export default function toDoReducer(state, action){
//action va a ser un objeto de tipo type
    switch(action.type){
        case ACTIONS.ADD_TASK:
            return[...state, newTaskAdd(action.payload.name)]

        case ACTIONS.CHANGE_TASK:
            return state.map(toDo =>{
                if(toDo.id===action.payload.id){
                    return{...toDo, complete: !toDo.complete}
                }
                return toDo;
            })
        case ACTIONS.DELETE_TASK:
            //esta filtrando los que son distintos al payload
            return state.filter((toDo)=>toDo.id !== action.payload.id);
        default:
            return state;    
    }
}

// los datos del nuevo dato q voy a agregar
const newTaskAdd=(name)=>{
    return{id: Date.now(), name: name, complete:false};
}