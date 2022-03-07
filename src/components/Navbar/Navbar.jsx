import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './navbar.module.scss';

const Navbar = (props) => {
  const { btnCallback, activeBtnValue } = props 
  const [active, setActive] = useState('')

  const handleClick = (e) => {
    const btn = e.target
    const value = btn.dataset.val
    setActive(value)

    btnCallback(value)
  }

  useEffect(() => {
    setActive(activeBtnValue)
  }, [activeBtnValue])

  return (
    <div className={style.wrapper}>
      <button className={clsx(style.btn, active === 'intro' && style.active)} onClick={handleClick} data-val="intro">Intro</button>
      <button className={clsx(style.btn, active === 'rewards' && style.active)} onClick={handleClick} data-val="rewards">Rewards</button>
      <button className={clsx(style.btn, active === 'rules' && style.active)} onClick={handleClick} data-val="rules">Rules</button>
      <button className={clsx(style.btn, active === 'showmatch' && style.active)} onClick={handleClick} data-val="showmatch">Showmatch</button>
      <button className={clsx(style.btn, active === 'join' && style.active)} onClick={handleClick} data-val="join">Choose a Pill</button>
    </div>
  );
};

export default Navbar;