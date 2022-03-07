import React from 'react';
import clsx from 'clsx';
import style from './scoreBoard.module.scss';

import ChartBar from '../../../components/ChartBar/ChartBar';
import Info from './components/Info/Info';
import JoinBtn from '../../../components/JoinBtn/JoinBtn';
import MyTeam from './components/MyTeam/MyTeam';

const ScoreBoard = (props) => {
  const { team1, team2, userAuth, userTeamNumber, totalPlayers, event, showBg, ...others } = props;

  return (
    <section className='section' {...others}>
      <div className={clsx(style.inner, showBg && style['inner--bg'])}>
        <div className={style.border}>

          <div className={style.info}>
            <div className={style.info__left}>
              {
                userAuth
                ? userTeamNumber === 1 ? <MyTeam teamNumber={1} /> : undefined
                : <JoinBtn teamNumber={1} />
              }
            </div>

            <Info team1={team1} team2={team2} event={event} style={{width: '100%'}}/>

            <div className={style.info__right}>
              {
                userAuth
                ? userTeamNumber === 2 ? <MyTeam teamNumber={2} /> : undefined
                : <JoinBtn teamNumber={2} />
              }
            </div>
          </div>          

          <ChartBar num1={team1.matches} num2={team2.matches} />
        </div>

        <div className={style.players}>
          <span className={'diod diod--sm diod--green'} style={{marginRight: '12px'}}></span>
          {totalPlayers} players 
          <span className={'text--light'} style={{marginLeft: '8px'}}>participated in the battle of the bloggers</span>
        </div>
      </div>
    </section>
  );
};

export default ScoreBoard;
