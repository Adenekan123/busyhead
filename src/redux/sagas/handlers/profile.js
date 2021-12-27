import { call, put } from "redux-saga/effects";
import { requestGetProfile } from "../requests/profile";
import { setProfile } from "../../ducks/profile";

export function* handleGetProfile() {
  const response = yield call(requestGetProfile);
  const { data } = response;
  yield put(setProfile(data));
}
