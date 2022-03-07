import React from 'react';
import clsx from 'clsx';
import style from './dotsList.module.scss'

const DotsList = ({dots = [false, false, false]}) => {
  return (
    <div className={style.list}>
      {
        dots.map((dot, i) => {
          return (
            <span key={i} className={clsx(style.item, (dot === true) && style.active)}></span>
          )
        })
      }
    </div>
  );
};

export default DotsList;