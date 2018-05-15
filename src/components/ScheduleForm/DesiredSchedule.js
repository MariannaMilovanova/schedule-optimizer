import React from 'react';
import desired from '../../img/desired.jpg';
import ScheduleForm from './ScheduleForm';

const DesiredSchedule = props => (
  <ScheduleForm
    customStyle={{ backgroundColor: '#99cc67' }}
    img={desired}
    type={'desired'}
    header={'Enter your ideal work-live schedule'}
  />
);

export default DesiredSchedule;
