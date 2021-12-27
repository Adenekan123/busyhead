import {call,put} from 'redux-saga/effects';
import {requestGetArchives} from '../requests/archives';
import {setArchive} from '../../ducks/archive';

export function* handleGetArchives(){
   const response = yield call(requestGetArchives);
   const {data} = response;
   yield put(setArchive(data));

}
