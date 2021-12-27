import { call, put } from "redux-saga/effects";
import { requestGetTodos } from "../requests/todos";
import { requestArchiveTodos } from "../requests/todos";
import { setTodos } from "../../ducks/todos";

export function* handleGetTodos() {
  const response = yield call(requestGetTodos);
  const { data } = response;
  yield put(setTodos(data));
}
export function* handleArchiveTodos() {
  const response = yield call(requestArchiveTodos);
  const { data } = response;
  // console.log({archivedTodo: data});
  yield put(setTodos(data));
}
