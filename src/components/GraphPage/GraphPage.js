import React from 'react';
import { b, createBlock } from '../../helpers/bem';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './GraphPage.css';
const colors = {
  green: '#00CB03',
  yellow: '#FFE632',
  blue: '#0095F3',
  rose: '#FF4385'
};

const block = createBlock('GraphPage');
const renderOneHour = (time, color15, color30, color45, color60, text) => {
  const label = get(text, 'label', false);
  return (
    <div>
      <div className={b(block, '15m')}>
        <div className={b(block, 'fill')}>
          <div
            className={b(block, 'color')}
            style={{ ...{ backgroundColor: colors[color15] } }}
          />
          <div className={b(block, 'empty')} />
        </div>
        <div className={b(block, 'time')}>{time}</div>
        {label && <div className={b(block, 'label')}>{label}</div>}
      </div>
      <div className={b(block, '30m')}>
        <div className={b(block, 'fill')}>
          <div
            className={b(block, 'color')}
            style={{ ...{ backgroundColor: colors[color30] } }}
          />
          <div className={b(block, 'empty')} />
        </div>
      </div>
      <div className={b(block, '45m')}>
        <div className={b(block, 'fill')}>
          <div
            className={b(block, 'color')}
            style={{ ...{ backgroundColor: colors[color45] } }}
          />
          <div className={b(block, 'empty')} />
        </div>
      </div>
      <div className={b(block, '1h')}>
        <div className={b(block, 'fill')}>
          <div
            className={b(block, 'color')}
            style={{ ...{ backgroundColor: colors[color60] } }}
          />
          <div className={b(block, 'empty')} />
        </div>
      </div>
    </div>
  );
};

const GraphPage = ({ desired, real }) => {
  return (
    <div className={b(block)}>
      <div className={b(block, 'desired-graph')}>
        <div className={b(block, 'label')}>Weak up</div>
        {renderOneHour('05:00', 'green', 'yellow', 'blue', 'rose')}
        {renderOneHour('06:00')}
        {renderOneHour('07:00')}
        {renderOneHour('08:00')}
        {renderOneHour('09:00')}
        {renderOneHour('10:00')}
        {renderOneHour('11:00')}
        {renderOneHour('12:00')}
        {renderOneHour('13:00')}
        {renderOneHour('14:00')}
        {renderOneHour('15:00')}
        {renderOneHour('16:00')}
        {renderOneHour('17:00')}
        {renderOneHour('18:00')}
        {renderOneHour('19:00')}
        {renderOneHour('20:00')}
        {renderOneHour('21:00')}
        {renderOneHour('22:00')}
        {renderOneHour('23:00')}
        {renderOneHour('00:00')}
        {renderOneHour('01:00')}
        {renderOneHour('02:00')}
        {renderOneHour('03:00')}
        {renderOneHour('04:00')}
        <div className={b(block, '15m')}>
          <div className={b(block, 'time')}>{'05:00'}</div>
        </div>
      </div>
      <div className={b(block, 'real-graph')} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    desired: state.schedule.desired,
    real: state.schedule.real
  };
};

export default connect(mapStateToProps)(GraphPage);
