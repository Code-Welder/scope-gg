import React from 'react';
import clsx from 'clsx';
import style from './table.module.scss'
import User from '../../../../../components/User/User';

const TableRow = (props) => {
  const {place, name, team, avatar, link, score, showYouText} = props

  return (
    <tr className={style.row}>
      <td title={`#${place}`}>
        #{place}
      </td>

      <td className={style.cell}>
        <div className={style.playerInfo}>
          <a 
            href={link} 
            className={style.player} 
            style={{marginRight: showYouText && '5px'}}
          >
            <User name={name} avatar={avatar} teamNumber={team} />      
          </a>

          {
            place <= 5 
            ? <span className={style.playerShowmatch}>Showmatch</span>
            : undefined
          }
          {
            showYouText
            ? <span className='text--light'>(You)</span>
            : undefined
          }
        </div>
      </td>

      <td className={style.cell}>{score}</td>
    </tr>
  );
};

export default TableRow;