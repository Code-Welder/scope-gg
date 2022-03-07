import React from 'react';
import clsx from 'clsx'
import style from './user.module.scss'

const User = ({name, avatar, teamNumber}) => {
  return (
    <div className={style.info}>
      <span className={
        clsx(
          style.avatarWrapper,
          style[`avatarWrapper--t${teamNumber}`]
        )
      }>
        <img className={style.avatar} src={avatar} alt="Avatar" />
      </span>

      <span className={style.name}>{name}</span>
    </div>
  );
};

export default User;