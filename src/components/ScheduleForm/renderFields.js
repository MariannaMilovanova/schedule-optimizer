import { Field } from 'redux-form';
import React from 'react';
import { DropdownList } from 'react-widgets';
import { timeArray } from './subData';
import { b, createBlock } from '../../helpers/bem';
import 'react-widgets/dist/css/react-widgets.css';

const block = createBlock('ScheduleForm');

export const renderField = (field, time) => {
  const {
    changeTime,
    meta: { touched, error }
  } = field;
  const className = `${b(block, 'field')} ${
    touched && error ? 'has-danger' : ''
  }`;
  return (
    <div className={className}>
      <div className={b(block, 'field-block')}>
        <label className={b(block, 'field-label')}>{field.label}</label>
        {(() => {
          switch (field.input.name) {
            case 'wakeUp':
              return (
                <DropdownList
                  valueField="value"
                  textField="label"
                  {...field.input}
                  data={timeArray}
                  onChange={time => {
                    if (changeTime) {
                      changeTime(time);
                    }
                    field.input.onChange(time);
                  }}
                />
              );
            default:
              return (
                <DropdownList
                  valueField="value"
                  textField="label"
                  {...field.input}
                  data={time}
                  onChange={time => {
                    if (changeTime) {
                      changeTime(time);
                    }
                    field.input.onChange(time);
                  }}
                />
              );
          }
        })()}
      </div>
      <div className={b(block, 'text-help')}>{touched ? error : ''}</div>
    </div>
  );
};

export const renderTimeSpend = ({ change, fields, meta: { error } }) => (
  <div>
    <div>
      {fields.map((timeSpend, index) => (
        <div key={index}>
          <div className={b(block, 'remove-block')}>
            <button
              onClick={() => fields.remove(index)}
              className={b(block, 'add-btn')}
            >
              -
            </button>
            <label className={b(block, 'field-label')}>Activity name:</label>{' '}
            <Field
              name={`${timeSpend}key`}
              type="text"
              component="input"
              className={b(block, 'additional-name')}
            />
          </div>
          <div className={b(block, 'fields-group', 'additional')}>
            <div className={b(block, 'field-block')}>
              <label className={b(block, 'field-label')}>From:</label>
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
            </div>
            <div className={b(block, 'field-block')}>
              <label className={b(block, 'field-label')}>To:</label>
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
          </div>
        </div>
      ))}
    </div>
    <div>
      <button
        type="button"
        onClick={() => fields.push()}
        className={b(block, 'add-btn')}
      >
        +
      </button>
    </div>
  </div>
);
