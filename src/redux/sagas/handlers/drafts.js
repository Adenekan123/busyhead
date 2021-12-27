import {call,put} from 'redux-saga/effects';
import {requestGetDrafts} from '../requests/drafts';
import {setDraft} from '../../ducks/drafts';

export function* handleGetDrafts(){
   const response = yield call(requestGetDrafts);
   const {data} = response;
   // console.log(data);
   yield put(setDraft(data));

}