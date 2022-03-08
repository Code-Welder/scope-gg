import React, { useContext, forwardRef } from 'react';
import clsx from 'clsx';
import style from './rules.module.scss';

import DotsList from '../../../components/DotsList/DotsList';
import { Context } from '../../../context/Context';

const Rules = forwardRef((props, ref) => {
  const { teams } = useContext(Context);
  let { ruleNum, showSect, onRulesAnimationEnd, hide, ...others} = props

  if (!ruleNum) {
    ruleNum = 1
  }

  const rulesList = {
    1: `Get 3 points to win. To earn a point, the followers of the blogger<br/>have to win more matches on a selected map in a single day.`,
  
    2: `Let’s take de_inferno, for example. The score is 1 - 0 in Novke’s favor, because his followers won more matches than the other team members.`,
  
    3: `The first blogger to score 3 will win $500 in CS:GO skins.<br/>He’ll make a giveaway for his team members.`,
  };

  
  let dotsList_1 = [false, false, false];
  let dotsList_2 = [false, false, false];
  let team1Info = ''
  let team2Info = ''
  let score = ''

  switch (ruleNum) {    
    case 1:
      break;
    case 2:
      dotsList_1 = [true, false, false];
      dotsList_2 = [false, false, false];
      team1Info = '430 wins on Inferno'
      team2Info = '240 wins on Inferno'
      score = '1 - 0'
      break;
    case 3:
      dotsList_1 = [true, true, true];
      dotsList_2 = [true, true, false];      
      team1Info = 'Win'
      score = '3 - 2'
      break;

    default:
      break;
  }

  return (
    <section 
      id="rules" 
      ref={ref} 
      className={clsx('section section--100vh', style.sect)} 
      style={{ opacity: showSect ? '1' : '0' }}
      {...others}
    >
      <div className={style.inner}>
        <div className={style.header}>
          <h2 className={clsx(style.title, 'title title--md')}>The rules</h2>

          <p className={style.rule}>
            <span className={style.number}>{ruleNum}</span>
            <span className={style.ruleText} dangerouslySetInnerHTML={{ __html: rulesList[ruleNum] }}></span>
          </p>
        </div>

        <div className={clsx(style.visual)}>
          <div className={clsx(style.team, style['team--1'], style[`rule-${ruleNum}`])}>
            <p className={clsx(style.teamInfo, style[`rule-${ruleNum}`])}>{team1Info}</p>
            <div className={style.teamInner}>
              <DotsList dots={dotsList_1} />
              <p className={style.teamName}>{teams[1].name}</p>
            </div>
          </div>

          <div 
            className={clsx(style.scoreWrapper, style[`rule-${ruleNum}`], hide && style.hide)}            
            onTransitionEnd={() => onRulesAnimationEnd}
          >
            <p className={clsx(style.score__text, "text--light")}>Total score (Best of 5)</p>
            <p className={style.score}>{score}</p>
          </div>

          <div className={clsx(style.team, style['team--2'], style[`rule-${ruleNum}`])}>
            <div className={style.teamInner}>
              <DotsList dots={dotsList_2} />
              <p className={style.teamName}>{teams[2].name}</p>
            </div>
            <p className={clsx(style.teamInfo, style[`rule-${ruleNum}`])}>{team2Info}</p>
          </div>

        </div>
      </div>
    </section>
  );
});

export default Rules;
