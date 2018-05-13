import React, { Component } from 'react';
import './ScheduleForm.css';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import desired from '../../img/desired.jpg';
import { FIELDS, timeArray } from './subData';
import { renderField, renderTimeSpend } from './renderFields';
import { addSchedule } from '../../actions';
import { b, createBlock } from '../../helpers/bem';
import { withRouter } from 'react-router-dom';
import 'react-widgets/dist/css/react-widgets.css';

const block = createBlock('ScheduleForm');

class ScheduleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeArray,
      cropedTime: timeArray
    };
  }
  onSubmit = values => {
    this.props.addSchedule(values, 'desired');
    return this.props.history.push('/');
  };

  changeCroppedTime = time => {
    const { timeArray } = this.state;
    this.setState({
      cropedTime: _.partition(timeArray, item => item.value >= time.value)[0]
    });
  };

  render() {
    console.log(this.props);
    const { handleSubmit, change } = this.props;
    return (
      <div className={b(block)}>
        <div className={b(block, 'image-wrapper')}>
          <div className={b(block, 'image')}>
            <img src={desired} alt="img" />
          </div>
        </div>
        <div className={b(block, 'header')}>
          Enter your ideal work-live schedule
        </div>
        <div className={b(block, 'wrapper')}>
          <form
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            className={b(block, 'form')}
          >
            <div>
              <Field
                label="Wake up at"
                name="wakeUp"
                changeTime={this.changeCroppedTime}
                component={field =>
                  renderField(field, this.state.cropedTime, change)
                }
              />
              <label className={b(block, 'fields-group-label')}>
                Time in transport to work
              </label>
              <div className={b(block, 'fields-group')}>
                <Field
                  label="From:"
                  name="timeAtTransportStart"
                  changeTime={this.changeCroppedTime}
                  component={field => renderField(field, this.state.cropedTime)}
                />
                <Field
                  label="To:"
                  name="timeAtTransportEnd"
                  changeTime={this.changeCroppedTime}
                  component={field => renderField(field, this.state.cropedTime)}
                />
              </div>
              <Field
                label="Morning coffee at"
                name="coffeeStart"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
              <Field
                label="Start work flow at"
                name="startingWorkFlow"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
              <label className={b(block, 'fields-group-label')}>
                Stand up meeting
              </label>
              <div className={b(block, 'fields-group')}>
                <Field
                  label="From:"
                  name="standUpMeetingStart"
                  changeTime={this.changeCroppedTime}
                  component={field => renderField(field, this.state.cropedTime)}
                />
                <Field
                  label="To:"
                  name="standUpMeetingEnd"
                  changeTime={this.changeCroppedTime}
                  component={field => renderField(field, this.state.cropedTime)}
                />
              </div>
              <Field
                label="Back to flow"
                name="backToFlow"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
              <label className={b(block, 'fields-group-label')}>
                Lunch Time
              </label>
              <div className={b(block, 'fields-group')}>
                <Field
                  label="From:"
                  name="lunchStart"
                  changeTime={this.changeCroppedTime}
                  component={field => renderField(field, this.state.cropedTime)}
                />
                <Field
                  label="To:"
                  name="lunchEnd"
                  changeTime={this.changeCroppedTime}
                  component={field => renderField(field, this.state.cropedTime)}
                />
              </div>
              <Field
                label="Back to flow after lunch"
                name="backToFlowAfterLunch"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
              <Field
                label="Productive flow after lunch starts"
                name="productiveFlowAfterLunchStarts"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
            </div>
            <label className={b(block, 'fields-group-label')}>
              Transport to home
            </label>
            <div className={b(block, 'fields-group')}>
              <Field
                label="From:"
                name="transportToHomeStart"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
              <Field
                label="To:"
                name="transportToHomeEnds"
                changeTime={this.changeCroppedTime}
                component={field => renderField(field, this.state.cropedTime)}
              />
            </div>
            <Field
              label="Fall asleep"
              name="fallAsleep"
              changeTime={this.changeCroppedTime}
              component={field => renderField(field, this.state.cropedTime)}
            />
            <div className={b(block, 'additional-block')}>
              <div className={b(block, 'additional-label')}>
                Additional timespent like coffee, meetings, gym, etc.
              </div>
              <FieldArray
                change={change}
                name="additional"
                component={renderTimeSpend}
              />
            </div>
            <div className={b(block, 'buttons')}>
              <button type="submit" className={b(block, 'submit-btn')}>
                Submit
              </button>
              <Link to="/" className={b(block, 'cancel-btn')}>
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
  /* const errors = {};
  //Validate the input from 'values
  _.each(FIELDS, (value, key) => {
    if (!values[key]) {
      errors[key] = value.label;
    }
  });
  return errors;*/
}

export default withRouter(
  reduxForm({
    validate,
    form: 'ScheduleNewForm',
    fields: _.keys(FIELDS)
  })(connect(null, { addSchedule })(ScheduleForm))
);
