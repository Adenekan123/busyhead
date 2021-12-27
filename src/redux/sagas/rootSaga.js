import { takeLatest } from "redux-saga/effects";

import { GET_TODOS } from "../ducks/todos";
import { ARCHIVE_TODOS } from "../ducks/todos";
import { GET_DRAFT } from "../ducks/drafts";
import { GET_ARCHIVE } from "../ducks/archive";
import { GET_RECYCLES } from "../ducks/recycles";
import { GET_REMINDERS } from "../ducks/reminder";
import { GET_PROFILE } from "../ducks/profile";

import { handleGetTodos, handleArchiveTodos } from "./handlers/todos";
import { handleGetDrafts } from "./handlers/drafts";
import { handleGetArchives } from "./handlers/archives";
import { handleGetRecycles } from "./handlers/recycles";
import { handleGetReminders } from "./handlers/reminders";
import { handleGetProfile } from "./handlers/profile";

export function* watcherSaga() {
  yield takeLatest(GET_TODOS, handleGetTodos);
  yield takeLatest(ARCHIVE_TODOS, handleArchiveTodos);
  yield takeLatest(GET_DRAFT, handleGetDrafts);
  yield takeLatest(GET_ARCHIVE, handleGetArchives);
  yield takeLatest(GET_RECYCLES, handleGetRecycles);
  yield takeLatest(GET_REMINDERS, handleGetReminders);
  yield takeLatest(GET_PROFILE, handleGetProfile);
}
