import { Field } from 'redux-form';
import React from 'react';
import { DropdownList } from 'react-widgets';
import { timeArray } from './subData';

import 'react-widgets/dist/css/react-widgets.css';

export const renderTimeSpend = ({ change, fields, meta: { error } }) => (
  <div>
    <div>
      {fields.map((timeSpend, index) => (
        <div key={index}>
          <button onClick={() => fields.remove(index)}>-</button>
          <Field name={`${timeSpend}key`} type="text" component="input" />
          <Field
            name={`${timeSpend}from`}
            type="text"
            component={field => (
              <DropdownList
                valueField="value"
                textField="label"
                {...field.input}
                data={timeArray}
                onChange={time => change(field.input.name, time.value)}
              />
            )}
          />
          <Field
            name={`${timeSpend}to`}
            type="text"
            component={field => (
              <DropdownList
                valueField="value"
                textField="label"
                {...field.input}
                data={timeArray}
                onChange={time => change(field.input.name, time.value)}
              />
            )}
          />
        </div>
      ))}
    </div>
    <div>
      <button type="button" onClick={() => fields.push()}>
        +
      </button>
    </div>
  </div>
);
