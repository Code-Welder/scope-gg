import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './results.module.scss';

import Winner from '../../sections/resultsPage/Winner/Winner';
import Discord from '../../sections/common/Discord/Discord';
import ScoreBoard from '../../sections/resultsPage/ScoreBoard/ScoreBoard';
import Showmatch from '../../sections/resultsPage/Showmatch/Showmatch';
import LeaderBoard from '../../sections/resultsPage/LeaderBoard/LeaderBoard';

import { Context } from '../../context/Context';

const Results = () => {
  const { event, user, teams, totalPlayers, showmatch } = useContext(Context);
  const [showSect, toggleShowSect] = useState(false);

  useEffect(() => {
    const scrollToTop = (scrollDuration) => {
      const scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else clearInterval(scrollInterval);
        }, 15);
    };

    toggleShowSect(true);
    scrollToTop(15);

    return () => {
      toggleShowSect(false);
    };
  }, []);

  return (
    <main className={clsx(style.container, showSect && style.show)}>
      {teams.winner ? <Winner teamName={teams.winner} teamNumber="1" /> : undefined}

      <ScoreBoard
        team1={teams[1]}
        team2={teams[2]}
        userAuth={user.isAuth}
        userTeamNumber={user.team}
        totalPlayers={totalPlayers}
        event={event}
        showBg={teams.winner ? false : true}
      />

      <Showmatch team1={teams[1]} team2={teams[2]} showmatch={showmatch} />

      <LeaderBoard teams={teams} />
      <Discord />
    </main>
  );
};

export default Results;
