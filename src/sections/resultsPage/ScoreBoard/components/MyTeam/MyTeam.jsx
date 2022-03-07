import React from 'react';
import style from './myTeam.module.scss'

const MyTeam = ({teamNumber}) => {
  return (
    <div className={style.wrapper}>
      <span className={`diod diod--md diod--t${teamNumber}`}></span>
      My team
    </div>
  );
};

export default MyTeam;