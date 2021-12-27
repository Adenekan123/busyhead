const SET_PROFILE = "setprofile";
export const GET_PROFILE = "getprofile";

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const getProfile = () => ({
  type: GET_PROFILE,
});

const initialState = {
  profile: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      const { profile } = action;
      // console.log({...state,todos});
      return { ...state, profile };

    default:
      return state;
  }
}
