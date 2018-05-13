import React from 'react';
import desired from '../../img/desired.jpg';
import ScheduleForm from './ScheduleForm';

const DesiredSchedule = props => (
  <ScheduleForm customStyle={{ backgroundColor: 'blue' }} img={desired} />
);

export default DesiredSchedule;
