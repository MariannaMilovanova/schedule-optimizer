import React from 'react';
import { b, createBlock } from '../../helpers/bem';
import { Link } from 'react-router-dom';
import './GraphPage.css';

const block = createBlock('GraphPage');

const HomePage = props => {
  return (
    <div className={b(block)}>
      <div className={b(block, 'hello')}>Organizing is simple</div>
      <div className={b(block, 'btns')}>
        <div className={b(block, 'label')}>Fill out your schedule!</div>
        <Link to="/desired" className={b(block, 'desire-btn')}>
          Desired schedule
        </Link>
        <Link to="/real" className={b(block, 'real-btn')}>
          Real today schedule
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
