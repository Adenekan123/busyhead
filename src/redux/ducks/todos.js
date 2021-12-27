const SET_TODOS = 'settodos';
export const ARCHIVE_TODOS = 'archivetodos';
export const GET_TODOS = 'gettodos';

export const setTodos = (todos) =>({
    type:SET_TODOS,
    todos
});

export const getTodos = () =>({
    type:GET_TODOS
});

export const archiveTodos = (allselects) =>({
    type:ARCHIVE_TODOS,
    allselects
});


const initialState = {
    todos:undefined
}

export default function(state=initialState,action){
    switch (action.type) {
        case SET_TODOS:
            const {todos} = action;
            // console.log({...state,todos});
            return {...state,todos}

        
        default:
            return state;
    }
}