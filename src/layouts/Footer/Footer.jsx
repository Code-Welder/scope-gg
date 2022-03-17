import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './footer.module.scss';

import Logo from '../../components/Logo/Logo'
import Menu from './components/Menu/Menu';
import Socials from '../../components/Socials/Socials';

import paths from '../../constants/paths';

import poweredByIcon from './assets/powered-by.svg'

const Footer = () => {
  return (
    <footer className={clsx('container px-36', style.container)}>

      <div className={style.inner}>
        <div className={style.block}>
          <Link to={paths.home.path} className={style.logo}>
            <Logo />
          </Link>

          <p className={style.company}>
            <img src={poweredByIcon} alt="Powered by" />
            CS Virtual Trade Ltd, reg. no. HE 389299
            <br />
            Address: 705, Spyrou Araouzou & Koumantarias, Fayza House, 3036, Limassol, Cyprus
          </p>
        </div>

        <div className={style.block}>
          <Menu />
          
          <div className={style.socials}>
            <Socials />
            <p className={style.rights}>© 2022 scope.gg</p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;