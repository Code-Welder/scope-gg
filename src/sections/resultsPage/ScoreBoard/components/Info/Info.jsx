import React from 'react';
import style from './info.module.scss'

import DotsList from '../../../../../components/DotsList/DotsList';
import Day from '../Day/Day';

const Info = (props) => {
  const { team1, team2, event, ...others } = props

  const { name: t1Name, wins: t1Wins, matches: t1Matches } = team1;
  const { name: t2Name, wins: t2Wins, matches: t2Matches } = team2;

  return (
    <div className={style.wrapper} {...others}>

            <div className={style.center}>
              <div className={style.center__top}>
                <DotsList dots={t1Wins} />
                {
                  event.status === 'started'
                  ? <Day day={event.day} map={event.map} />
                  : undefined
                }
                <DotsList dots={t2Wins} />
              </div>

              <div className={style.center__bottom}>
                {t1Name}
                <div className={style.score}>
                  {t1Matches} - {t2Matches}
                </div>
                {t2Name}
              </div>
            </div>

          </div>
  );
};

export default Info;