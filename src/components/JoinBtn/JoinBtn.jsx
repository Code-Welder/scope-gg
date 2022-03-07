import React from 'react';
import clsx from 'clsx';
import style from './joinBtn.module.scss'

const JoinBtn = (props) => {
  const { teamNumber, ...others } = props

  return (
    <button className={clsx(style.btn, 'btn', `btn--t${teamNumber}`)} {...others}>
      Join
    </button>
  );
};

export default JoinBtn;