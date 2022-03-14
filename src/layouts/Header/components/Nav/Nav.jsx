import React from 'react';
import { Link } from 'react-router-dom';
import style from  './nav.module.scss'

const Nav = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link to='scope-gg'>Rules</Link>
      </li>

      <li className={style.item}>
        <Link to='scope-gg/results'>Results</Link>
      </li>
    </ul>
  );
};

export default Nav;