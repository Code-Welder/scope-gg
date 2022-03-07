import React from 'react';
import clsx from 'clsx';
import Advice from './components/Advice/Advice';
import style from './advices.module.scss'

const Advices = () => {
  return (
    <section className={clsx(style.sect, 'section')}>
      <div className={style.inner}>
        <p className={style.question}>How to win more make it to the leaderboard?</p>

        <Advice
          titleTop="learn"
          titleBottom="new grenades"
          underHeading="and remember the old ones"
          descr="According to our stats, solo players win 18% lessgames compared to those playing in&nbsp;a&nbsp;team."
          linkText="Find grenades"
        />

        <Advice
          titleTop="Find"
          titleBottom="A Teammates"
          underHeading="on scope.gg"
          descr="According to our stats, solo players win 18% less games compared to those playing in a team."
          linkText="Check this feature"
          headerDirection = 'ltr'
        />
      </div>
    </section>
  );
};

export default Advices;