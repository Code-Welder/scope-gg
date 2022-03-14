import React from 'react';
import clsx from 'clsx';
import style from './leaderBoard.module.scss';

import Control from './components/Control/Control';
import Table from './components/Table/Table';

const LeaderBoard = ({ teams, user = null }) => {
  return (
    <div className={clsx(style.sect, 'section')}>
      <div className={style.inner}>
        <Control teams={teams} />
        <Table players={teams[1].top10} user={user} />
      </div>
    </div>
  );
};

export default LeaderBoard;
