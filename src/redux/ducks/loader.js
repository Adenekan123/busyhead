const SET_LOADER = "setloader";
const GET_LOADER = "getloader";

export const setLoader = (stateValue) => ({
  type: SET_LOADER,
  stateValue,
});

export const getLoader = () => ({
  type: GET_LOADER,
});

const initialState = {
  loader: true,
};

//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOADER:
      return { ...state };

    case SET_LOADER:
      const { stateValue } = action;
      return { ...state, loader: stateValue };

    default:
      return state;
  }
}
