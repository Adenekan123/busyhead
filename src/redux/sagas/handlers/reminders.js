import {call,put} from 'redux-saga/effects';
import {requestGetReminders} from '../requests/reminders';
import {setReminders} from '../../ducks/reminder';

export function* handleGetReminders(){
   const response = yield call(requestGetReminders);
   const {data} = response;

   yield put(setReminders(data));
}
