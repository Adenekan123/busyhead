export  const GET_ARCHIVE = 'getarchives';
        const SET_ARCHIVE = 'setarchives';

//Actions
 export const getArchive = () =>({
     type:GET_ARCHIVE
 }); 

 export const setArchive = (archives) =>({
     type:SET_ARCHIVE,
     archives
 });  


 const initialState = {
     archives:undefined
 }
 
 
 //reducer
 export default function(state=initialState,action){
    switch(action.type){
        case SET_ARCHIVE:
            const {archives} = action;
            return {...state,archives}

        default:
            return state
    }
 }


