import {call,put} from 'redux-saga/effects';
import {requestGetRecycles} from '../requests/recycles';
import {setRecycles} from '../../ducks/recycles';

export function* handleGetRecycles(){
   const response = yield call(requestGetRecycles);
   const {data} = response;
   yield put(setRecycles(data));

}
