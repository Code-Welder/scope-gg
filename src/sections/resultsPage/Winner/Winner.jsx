import React from 'react';
import clsx from 'clsx';
import style from './winner.module.scss';

const Winner = ({teamName, teamNumber}) => {

  return (
    <section className={clsx(style.container, 'section')}>
      <h2 className={clsx(style.title, style[`title--${teamNumber}`] )}>
        {teamName} <span className="text--light">team wins</span>
      </h2>
    </section>
  );
};

export default Winner;