import React from 'react';
import clsx from 'clsx';
import style from './rewards.module.scss';

import SkinList from './components/Skins/SkinList';

const Rewards = (props) => { 
  return (
    <section
      className={clsx(style.sect, 'section')}
      {...props}
    >
      <div className={style.inner}>
        <div className={style.header}>
          <h2 className="title title--md">rewards</h2>

          <div className={style.circles}>
            <span className={style.circle}></span>
            <span className={style.circle}></span>
          </div>

          <a
            href="https://cs.money/"
            className={clsx('text--light', style.link)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsored by cs.money
          </a>
        </div>

        <SkinList />
      </div>
    </section>
  );
}

export default Rewards;
