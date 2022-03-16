import React from 'react';
import { Link } from 'react-router-dom';
import style from  './nav.module.scss'
import paths from '../../../../constants/paths';

const Nav = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link to={paths.home.path}>Rules</Link>
      </li>

      <li className={style.item}>
        <Link to={paths.results.path}>Results</Link>
      </li>
    </ul>
  );
};

export default Nav;