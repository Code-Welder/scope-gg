import React from 'react';
import clsx from 'clsx';
import { calcPercent } from '../../utils/utils';
import style from './chartBar.module.scss';

const ChartBar = ({ num1, num2 }) => {
  const total = num1 + num2;

  const firstBarWidth = `${calcPercent(total, num1)}%`;
  const secondBarWidth = `${calcPercent(total, num2)}%`;

  return (
    <div className={style.wrapper}>
      <div className={clsx(style.bar, style.left)} style={{ width: firstBarWidth }}></div>

      <div className={clsx(style.bar, style.right)} style={{ width: secondBarWidth }}></div>
    </div>
  );
};

export default ChartBar;
