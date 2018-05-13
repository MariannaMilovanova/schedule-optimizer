import { ADD_SCHEDULE } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_SCHEDULE: {
      const { scheduleType, data } = action;
      const newData = _.mapValues(
        data,
        (item, key) => (key !== 'additional' ? item.value : item)
      );
      const newSchedule =
        scheduleType === 'desired' ? { desired: newData } : { real: newData };
      return { ...newSchedule };
    }
    default:
      return state;
  }
}
