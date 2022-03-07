import clsx from 'clsx';
import React from 'react';
import style from './discord.module.scss'

import discordIcon from './assets/discord-icon.svg'

const listItems = [
  'the up-to-date information and news regarding the event',
  'teammates with the same skill level',
  'useful tactics for today’s map and get a chance to talk to the blogger you fight for'
]

const Discord = () => {
  return (
    <section className={clsx(style.sect, 'section')}>
      <div className={style.inner}>

        <p className="text--light">How to win more make it to the leaderboard?</p>

        <div className={style.info}>
          <p className={style.header}>
            <img src={discordIcon} alt="Discord" />
            Join SCOPE.GG community on Discord!
          </p>

          <p className="text--light">There you can find:</p>

          <ul className={style.list}>
            {
              listItems.map((item, i) => {
                return <li key={i} className={style.listItem}>{item}</li>
              })
            }
          </ul>

          <a 
            href='#' 
            className={clsx('btn btn--neutral', style.link)} 
            style={{ padding: '13px 40px' }}
            target="_blank"
          >
            Join discord
          </a>
        </div>

      </div>      
    </section>
  );
};

export default Discord;