import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Event from './components/Event/Event';
import DayInfo from './components/DayInfo/DayInfo';
import Nav from './components/Nav/Nav';
import User from '../../components/User/User';
import Join from './components/Join/Join';

import style from './header.module.scss';

import { Context } from '../../context/Context';
import clsx from 'clsx';

const Header = () => {
  const { event, user, teams } = useContext(Context);

  let eventStatusText = '';
  let diodColor = '';
  let hideDiod = false;

  let dayInfoText = '';
  let dayInfoAdditional = '';

  switch (event.status) {
    case 'started':
      eventStatusText = 'Event is running';
      diodColor = 'green';
      dayInfoText = 'Today you need to win on the';
      dayInfoAdditional = event.map;
      break;

    case 'waiting':
      eventStatusText = 'Event is not started yet';
      diodColor = 'red';
      dayInfoText = `Start at ${event.startAt.date}`;
      dayInfoAdditional = event.startAt.time;
      break;

    case 'end':
      eventStatusText = 'Event ended';
      hideDiod = true;
      dayInfoText = `Showmatch will start on ${event.showmatchStart.date}`;
      dayInfoAdditional = event.showmatchStart.time;
      break;

    default:
      break;
  }

  return (
    <header className={style.wrapper}>
      <div className={clsx(style.container, 'container')}>
        <Link to="/">
          <Logo />
        </Link>

        <Event text={eventStatusText} hideDiod={hideDiod} diodColor={diodColor} />

        <DayInfo day={event.day} mainText={dayInfoText} additional={dayInfoAdditional} />

        <Nav />

        <div className={style.user}>
          {
            user.isAuth
            ? <User name={`In ${teams[1].name}'s team`} avatar={user.avatar} teamNumber={1} />
            : <Join team1Name={teams[1].name} team2Name={teams[2].name} />
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
