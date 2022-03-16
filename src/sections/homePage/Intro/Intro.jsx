import React, { useContext } from 'react';
import clsx from 'clsx';
import style from './intro.module.scss';

import crossIcon from '../../../assets/icons/cross.svg';

import { Context } from '../../../context/Context';

const Intro =(props) => {
  const { teams } = useContext(Context);

  return (
    <section 
      id="intro" 
      className={clsx('section', style.sect)} 
      {...props}
    >
      <div className={style.inner}>
        <div className={style.bg}>
          <span className={style.bgCircle}></span>
          <span className={style.bgCircle}></span>
        </div>

        <div className={style.circles}>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
        </div>

        <h1 className={style.title}>
          <span className={style.descr}>New scope.gg event</span>
          <span className="title title--lg">The battle</span>
          <span className={clsx(style.bloggers, 'title title--lg text--stroke')}>of the bloggers</span>
        </h1>

        <p className={style.teams}>
          <span>{teams[1].name}</span>
          <img src={crossIcon} className={style.teamsCross} alt="Cross"></img>
          <span>{teams[2].name}</span>
        </p>

        <p className={style.info}>
          <span className={clsx(style.infoDescr, 'text--light')}>
            What’s
            <br />
            going on?
          </span>
          <span className={style.text}>
            Two YouTube bloggers are rallying their followers to take up arms and fight for a prize of $500 in CS:GO
            skins. Join the gang and help to defeat adversary.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Intro;
