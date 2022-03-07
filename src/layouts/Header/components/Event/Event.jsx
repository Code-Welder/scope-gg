import React from 'react';
import clsx from 'clsx';
import style from './event.module.scss';

const Event = (props) => {
  const { diodColor, text, hideDiod } = props;

  return (
    <div className={clsx('rounded-bg rounded-bg--sm', style.container)}>
      <span
        className={
          clsx( hideDiod && 'hidden', style.diod, 'diod', 'diod--sm', `diod--${diodColor}`)
        }
      ></span>
      {text}
    </div>
  );
};

export default Event;
