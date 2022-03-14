import React from 'react';
import clsx from 'clsx';
import style from './control.module.scss';

const Control = ({teams, daysGone}) => {

  return (
    <div className={style.bar}>
      <div className={style.team}>
        <span className={style.title}>Team:</span>
        <button className={clsx('btn', style.team__btn, style.active)}>{teams[1].name}</button>
        <button className={clsx(style.team__btn, 'btn')}>{teams[2].name}</button>
      </div>      

      <div className={style.days}>
        <span className={style.title}>Day:</span>
        <div className={style.daysBtns}>
          <button className={clsx(style.daysBtn, style.active)}>All</button>
          <button className={clsx(style.daysBtn)}>1</button>
          <button className={clsx(style.daysBtn)}>2</button>
          <button className={clsx(style.daysBtn, style.disabled)}>3</button>
          <button className={clsx(style.daysBtn, style.disabled)}>4</button>
          <button className={clsx(style.daysBtn, style.disabled)}>5</button>
        </div>
      </div>
      
    </div>
  );
};

export default Control;