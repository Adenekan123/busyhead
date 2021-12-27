export  const GET_DRAFT = 'getdrafts';
        const SET_DRAFT = 'setdrafts';

//Actions
 export const getDraft = () =>({
     type:GET_DRAFT
 }); 

 export const setDraft = (drafts) =>({
     type:SET_DRAFT,
     drafts
 });  


 const initialState = {
     drafts:undefined,
 }
 
 
 //reducer
 export default function(state=initialState,action){
    switch(action.type){
        case SET_DRAFT:
            const {drafts} = action;
            return {...state,drafts}

        default:
            return state
    }
 }


