const SET_RECYCLES = "setrecycles";
const SET_LOADER = "setloader";
export const GET_RECYCLES = "getrecycles";

export const setRecycles = (recycles) => ({
  type: SET_RECYCLES,
  recycles,
});

export const getRecycles = () => ({
  type: GET_RECYCLES,
});

export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

const initialState = {
  recycles: undefined,
  loader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RECYCLES:
      const { recycles } = action;
      // console.log({...state,recycles});
      return { ...state, recycles };

    case SET_LOADER:
      const { payload } = action;
      // console.log({...state,todos});
      return { ...state, loader: payload };

    default:
      return state;
  }
}
