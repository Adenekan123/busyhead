export const GET_ARCHIVE = "getarchives";
const SET_ARCHIVE = "setarchives";
const SET_LOADER = "setloader";

//Actions
export const getArchive = () => ({
  type: GET_ARCHIVE,
});

export const setArchive = (archives) => ({
  type: SET_ARCHIVE,
  archives,
});

export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

const initialState = {
  archives: undefined,
  loader: false,
};

//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ARCHIVE:
      const { archives } = action;
      return { ...state, archives };

    case SET_LOADER:
      const { payload } = action;
      // console.log({...state,todos});
      return { ...state, loader: payload };

    default:
      return state;
  }
}
