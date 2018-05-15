import React from 'react';
import ScheduleForm from './ScheduleForm';
import real from '../../img/real.jpg';

const RealSchedule = props => (
  <ScheduleForm
    customStyle={{ backgroundColor: 'rgba(125, 196, 202, 0.75)' }}
    header={'Enter your today schedule'}
    type={'real'}
    img={real}
  />
);

export default RealSchedule;
