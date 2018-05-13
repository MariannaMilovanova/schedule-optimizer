import React from 'react';
import { b, createBlock } from '../../helpers/bem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './GraphPage.css';

const block = createBlock('GraphPage');
const renderOneHour = time => (
  <div>
    <div className={b(block, '15m')}>
      <div className={b(block, 'fill')}>
        <div className={b(block, 'color')} />
        <div className={b(block, 'empty')} />
      </div>
      <div className={b(block, 'time')}>{time}</div>
    </div>
    <div className={b(block, '30m')}>
      <div className={b(block, 'fill')}>
        <div className={b(block, 'color')} />
        <div className={b(block, 'empty')} />
      </div>
    </div>
    <div className={b(block, '45m')}>
      <div className={b(block, 'fill')}>
        <div className={b(block, 'color')} />
        <div className={b(block, 'empty')} />
      </div>
    </div>
    <div className={b(block, '1h')}>
      <div className={b(block, 'fill')}>
        <div className={b(block, 'color')} />
        <div className={b(block, 'empty')} />
      </div>
    </div>
  </div>
);

const GraphPage = ({ desired, real }) => {
  console.log(desired);
  return (
    <div className={b(block)}>
      {!desired && (
        <div className={b(block, 'desired-graph')}>
          {renderOneHour('05:00')}
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
      )
      /* : <Link to='/desired' className={b(block, 'desired')}>
        <div className={b(block, 'text')}>Fill your desired Schedule</div>
      </Link>*/
      }
      {!real && <div className={b(block, 'real-graph')} />
      /*        : <Link to='/real' className={b(block, 'real')}>
        <div className={b(block, 'text')}>Fill your real Schedule</div>
      </Link>*/
      }
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
