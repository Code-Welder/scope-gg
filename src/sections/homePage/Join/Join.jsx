import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './join.module.scss'

import paths from '../../../constants/paths'

import { Context } from '../../../context/Context';

const Join = (props) => {
  const { teams, totalPlayers } = useContext(Context)
  const { btn1OnClick, btn2OnClick, ...others  } = props

  return (
    <section
      className={clsx('section', style.sect)} 
      {...others}
    >

      <div className={style.inner}>

        <div className={style.header}>
          <h2 className={clsx(style.titleJoin, 'title title--md')}>Join</h2>

          <p className={style.info}>
            Help your favorite Youtuber in this battle.
            <br /> Take up arms, sign up and join his side!
          </p>

          <p className={clsx(style.titleBattle, 'title title--md text--stroke')}>to the battle</p>
          <p className={style.choice}>Choice is yours:</p>
        </div>

        <div className={style.pick}>
          <div className={style.pickSide}>
            <button 
              className="btn btn--t1" 
              style={{ padding: '13px 40px' }}
              onClick={() => btn1OnClick()}
            >
              Blue Pill
            </button>
            <span className={style.teamName}>For {teams[1].name}</span>
          </div>

          <div className={style.pickSide}>
            <span className={style.teamName}>For {teams[2].name}</span>
            <button 
              className="btn btn--t2" 
              style={{ padding: '13px 40px' }}
              onClick={() => btn2OnClick()}
            >
              Red Pill
            </button>
          </div>
        </div>

        <div className={style.bottom}>
          <span className={style.participants}>{totalPlayers} participants</span>
          <Link to={paths.results.path} className="btn btn--neutral" style={{padding: '10px 14px'}}>
            Results
          </Link>
        </div>

      </div>
      
    </section>
  );
};

export default Join;