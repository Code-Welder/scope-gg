import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import style from './showmatch.module.scss';
import streamIcon from './assets/stream-icon.svg';

import { Context } from '../../../context/Context';

const Showmatch = forwardRef((props, ref) => {
  const { showSect, ...others } = props;
  const { showmatch } = useContext(Context);

  return (
    <section
      id="showmatch"
      ref={ref}
      className={clsx('section section--100vh', style.sect)}
      style={{ opacity: showSect ? '1' : '0' }}
      {...others}
    >

      <div className={style.inner}>
        <div className={style.background}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>

        <div className={style.header}>
          <p className="text--light">Additional reward</p>

          <h2 className={style.title}>
            <a href={showmatch.link}>
              showmatch<span className={style.arrow}></span>
            </a>
          </h2>
        </div>

        <div className={style.body}>

          <div className={style.info}>
            <p className={style.descr}>
              Top-5 players of both teams{' '}
              <span className="text--light">will play a showmatch at the end of the event</span>
            </p>
            <p className={style.reward}>The winning team will get $1000 on the CS.MONEY</p>
          </div>          

          <div className={style.stream}>
            <h3 className={style.streamTitle}>
              <img className={style.streamIcon} src={streamIcon} alt="stream" width={36} height={36} />
              Stream
            </h3>
            <p className={style.streamText}>Both Youtube bloggers will stream this match - it’s your time to shine!</p>
          </div>
          
        </div>
      </div>
    </section>
  );
});

export default Showmatch;
