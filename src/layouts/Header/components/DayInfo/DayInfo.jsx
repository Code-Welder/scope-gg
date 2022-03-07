import React from 'react';
import clsx from 'clsx';
import style from './dayInfo.module.scss'

const DayInfo = (props) => {
  const { day, mainText, additional} = props

  return (
    <p className={style.info}>
      <span
        className={clsx(!day && 'hidden')}
      >Day: {day}</span>
      
      <span className={style.text}>{mainText}</span>
      <span className={style.additional}>{additional}</span>
    </p>
  );
};

export default DayInfo;