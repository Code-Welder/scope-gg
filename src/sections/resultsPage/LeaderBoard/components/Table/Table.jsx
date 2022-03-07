import React from 'react';
import style from './table.module.scss';
import TableRow from './TableRow';

const Table = ({players}) => {
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
      </tbody>    
    </table>
  );
};

export default Table;