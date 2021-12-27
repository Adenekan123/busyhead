const SET_REMINDERS = "setreminders";
const ARCHIVE_REMINDERS = "archivereminders";
export const GET_REMINDERS = "getreminders";

export const setReminders = (reminders) => ({
  type: SET_REMINDERS,
  reminders,
});

export const getReminders = () => ({
  type: GET_REMINDERS,
});

export const archiveReminders = (allSelects) => ({
  type: ARCHIVE_REMINDERS,
  allSelects,
});

const initialState = {
  reminders: undefined,
  totalReminders: 0,
};

const getTotal = (reminders) => {
  let total = 0;

  if (!reminders || !Array.isArray(reminders) || reminders.length < 1)
    return undefined;
  const res = reminders.reduce(
    (prev, cur) => prev.tasks.length + cur.tasks.length
  );
  // console.log({res})

  if (typeof res === "object") total = res.tasks.length;
  else total = res;

  return total;
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_REMINDERS:
      const { reminders } = action;
      // console.log({...state,reminders,totalReminders:getTotal(reminders)});
      return { ...state, reminders, totalReminders: getTotal(reminders) };

    default:
      return state;
  }
}
