export const ADD_SCHEDULE = 'ADD_SCHEDULE';

export const addSchedule = (data, scheduleType) => {
  return {
    type: ADD_SCHEDULE,
    data,
    scheduleType
  };
};
