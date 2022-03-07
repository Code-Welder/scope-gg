import React from 'react';
import style from './table.module.scss'
import User from '../../../../../components/User/User';

const TableRow = (props) => {
  const {place, name, team, avatar, link, score} = props

  return (
    <tr className={style.row}>
      <td title={`#${place}`}>
        #{place}
      </td>

      <td className={style.cell}>
        <div className={style.playerInfo}>
          <a href={link} className={style.player}>
            <User name={name} avatar={avatar} teamNumber={team} />      
          </a>

          {
            place <= 5 
            ? <p className={style.playerShowmatch}>Showmatch</p>
            : ''
          }
        </div>
      </td>

      <td className={style.cell}>{score}</td>
    </tr>
  );
};

export default TableRow;