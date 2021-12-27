const SET_RECYCLES = 'setrecycles';
export const GET_RECYCLES = 'getrecycles';

export const setRecycles = (recycles) =>({
    type:SET_RECYCLES,
    recycles
});

export const getRecycles = () =>({
    type:GET_RECYCLES
});


const initialState = {
    recycles:undefined
}

export default function(state=initialState,action){
    switch (action.type) {
        case SET_RECYCLES:
            const {recycles} = action;
            // console.log({...state,recycles});
            return {...state,recycles}

        
        default:
            return state;
    }
}