import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './modal.module.scss';
import Logo from '../Logo/Logo';

import steamImg from '../../assets/steam.svg';
import faceitImg from '../../assets/faceit.svg';

const Modal = (props) => {
  const { isOpen, onClose } = props;
  const [shown, toggleShown] = useState(false);

  const close = () => {
    toggleShown(false);
    onClose()
  };

  useEffect(() => {
    toggleShown(isOpen);
  }, [isOpen]);

  return (
    <div className={clsx(style.wrapper, shown && style.open)} onClick={close}>
      <div className={style.inner} onClick={(e) => e.stopPropagation()}>
        <Logo />

        <p className={style.text}>
          Top-5 players of both teams <span className="text--light">will play a showmatch at the end of the event</span>
        </p>

        <div className={style.links}>
          <a 
            href="#" 
            className={style.link} 
            onClick={(e) => {
              e.preventDefault()
              close()
            }}
          >
            <img src={steamImg} alt="steam" />
          </a>

          <a 
            href="#" 
            className={style.link} 
            onClick={(e) => {
              e.preventDefault()
              close()
            }}
          >
            <img src={faceitImg} alt="steam" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
