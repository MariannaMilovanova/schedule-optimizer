import React from 'react';
import ScheduleForm from './ScheduleForm';
import real from '../../img/real.jpg';

const RealSchedule = props => (
  <ScheduleForm customStyle={{ backgroundColor: 'blue' }} img={real} />
);

export default RealSchedule;
