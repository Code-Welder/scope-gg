import React from 'react';
import clsx from 'clsx';
import style from './showmatch.module.scss';

import User from '../../../components/User/User';

const Showmatch = (props) => {
  const { team1, team2, showmatch } = props;

  const { name: t1Name } = team1;
  const { name: t2Name } = team2;

  const { start } = showmatch;

  const startDay = start.day;
  const startTime = start.time;

  const { leaders } = showmatch;

  const t1Leaders = leaders[1];
  const t2Leaders = leaders[2];

  return (
    <section className={clsx('section', style.sect)}>
      <div className={style.inner}>
        <h2 className={clsx(style.title, 'title title--sm')}>
          showmatch
          <span className="text--stroke text--light" style={{ marginLeft: '24px' }}>
            participants
          </span>
        </h2>

        <div className={style.lists}>
          <div className={style.list}>
            <div className={style.list__top}>
              <span className={'diod diod--sm diod--t1'}></span>
              {t1Name} team
            </div>

            <ul>
              {t1Leaders.map((leader, i) => {
                const { steam, name, avatar } = leader;

                return (
                  <li key={i} className={style.leader}>
                    <User name={name} avatar={avatar} teamNumber="1" />
                    <a className={style.leader__steam} href={steam}>
                      Steam profile
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.list}>
            <div className={style.list__top}>
              <span className={'diod diod--sm diod--t2'}></span>
              {t2Name} team
            </div>

            <ul>
              {t2Leaders.map((leader, i) => {
                const { steam, name, avatar } = leader;

                return (
                  <li key={i} className={style.leader}>
                    <User name={name} avatar={avatar} teamNumber="2" />
                    <a className={style.leader__steam} href={steam}>
                      Steam profile
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p style={{ textAlign: 'center' }}>
          Showmatch will start on {startDay} <span className='text--light' style={{marginLeft: '8px'}}>{startTime}</span>
        </p>
      </div>
    </section>
  );
};

export default Showmatch;
