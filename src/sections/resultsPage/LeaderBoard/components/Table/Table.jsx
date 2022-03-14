import React from 'react';
import style from './table.module.scss';
import TableRow from './TableRow';

const Table = ({players, user = null}) => {
  return (
<table className={style.board}>
      <thead className={style.head}>
        <tr className={style.row}>
          <td className={style.cell}>Place</td>
          <td className={style.cell}>Player</td>
          <td className={style.cell}>Score</td>
        </tr>
      </thead>  
      <tbody>
        {
          players.map(playerInfo => {
            const {place, name, avatar, link, score} = playerInfo
            return (
              <TableRow 
                key={place}
                place={place} 
                name={name} 
                team={1}
                avatar={avatar}
                link={link}
                score={score}
              />
            )
          })
        }

        {
          user && user.place > 10
          ? <TableRow 
              key={user.place}
              place={user.place} 
              name={user.name} 
              team={user.team}
              avatar={user.avatar}
              link={user.link}
              score={user.score}
              showYouText={true}
            />
          : undefined
        }
      </tbody>    
    </table>
  );
};

export default Table;