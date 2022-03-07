import clsx from 'clsx';
import React from 'react';
import style from './join.module.scss';

const Join = ({ team1Name, team2Name, btnOnClick }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <button 
          className={clsx('btn btn--neutral', style.btn)} 
          onClick={() => btnOnClick}
        >Join {team1Name}</button>
      </li>
      
      <li className={style.item}>
        <button 
          className={clsx('btn btn--neutral', style.btn)} 
          onClick={() => btnOnClick}
        >Join {team2Name}</button>
      </li>
    </ul>
  );
};

export default Join;
