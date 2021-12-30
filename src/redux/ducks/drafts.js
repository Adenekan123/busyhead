export const GET_DRAFT = "getdrafts";
const SET_DRAFT = "setdrafts";
const SET_LOADER = "setloader";

//Actions
export const getDraft = () => ({
  type: GET_DRAFT,
});

export const setDraft = (drafts) => ({
  type: SET_DRAFT,
  drafts,
});

const initialState = {
  drafts: undefined,
  loader: false,
};

export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DRAFT:
      const { drafts } = action;
      return { ...state, drafts };

    case SET_LOADER:
      const { payload } = action;
      // console.log({...state,todos});
      return { ...state, loader: payload };

    default:
      return state;
  }
}
