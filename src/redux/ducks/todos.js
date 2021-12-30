const SET_TODOS = "settodos";
export const ARCHIVE_TODOS = "archivetodos";
export const GET_TODOS = "gettodos";
export const SET_LOADER = "setloader";

export const setTodos = (todos) => ({
  type: SET_TODOS,
  todos,
});

export const getTodos = () => ({
  type: GET_TODOS,
});

export const archiveTodos = (allselects) => ({
  type: ARCHIVE_TODOS,
  allselects,
});
export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

const initialState = {
  todos: undefined,
  loader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      const { todos } = action;
      // console.log({...state,todos});
      return { ...state, todos };

    case SET_LOADER:
      const { payload } = action;
      // console.log({...state,todos});
      return { ...state, loader: payload };

    default:
      return state;
  }
}
