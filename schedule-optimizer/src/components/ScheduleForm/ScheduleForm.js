import React, { Component } from 'react';
import './ScheduleForm.css';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import desired from '../../img/desired.jpg';
import { FIELDS, timeArray } from './subData';
import { renderTimeSpend } from './renderFields';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

class ScheduleForm extends Component {
  renderField(field, change) {
    const {
      meta: { touched, error }
    } = field;
    const className = `schedule-form__field ${
      touched && error ? 'has-danger' : ''
    }`;
    return (
      <div className={className}>
        {(() => {
          switch (field.input.name) {
            case 'sleepTimeFrom':
            case 'sleepTimeTo':
            case 'wakeUp':
              return (
                <div className="schedule-form__field-block">
                  <label className="schedule-form__field-label">
                    {field.label}
                  </label>
                  <DropdownList
                    valueField="value"
                    textField="label"
                    {...field.input}
                    data={timeArray}
                    onChange={time => change(field.input.name, time.value)}
                  />
                </div>
              );
            default:
              return (
                <div className="schedule-form__field-block">
                  <label className="schedule-form__field-label">
                    {field.label}
                  </label>
                  <input
                    className="schedule-form__form-input"
                    {...field.input}
                    type="text"
                  />
                </div>
              );
          }
        })()}
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }
  onSubmit(values) {
    /*this.props.createPost(values, () => {
      this.props.history.push('/');
    });*/
  }

  render() {
    const { handleSubmit, change } = this.props;
    return (
      <div className="schedule-form">
        <div className="schedule-form__image-wrapper">
          <div className="schedule-form__image">
            <img src={desired} alt="img" />
          </div>
        </div>
        <div className="schedule-form__header">
          Enter your ideal work-live schedule
        </div>
        <div className="schedule-form__wrapper">
          <form
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            className="schedule-form__form"
          >
            <div>
              <label className="schedule-form__fields-group-label">
                Sleep Time
              </label>
              <div className="schedule-form__fields-group">
                <Field
                  label="From:"
                  name="sleepTimeFrom"
                  component={field => this.renderField(field, change)}
                />
                <Field
                  label="To:"
                  name="sleepTimeTo"
                  component={field => this.renderField(field, change)}
                />
              </div>
              <Field
                label="Wake up time"
                name="wakeUp"
                component={field => this.renderField(field, change)}
              />
            </div>
            <FieldArray
              change={change}
              name="additional"
              component={renderTimeSpend}
            />
            <div className="schedule-form__buttons">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  //Validate the input from 'values
  _.each(FIELDS, (value, key) => {
    if (!values[key]) {
      errors[key] = `Enter a ${key}`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'ScheduleNewForm',
  fields: _.keys(FIELDS)
})(connect(null, {})(ScheduleForm));
