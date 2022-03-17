import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import style from './home.module.scss';

import Intro from '../../sections/homePage/Intro/Intro';
import Rewards from '../../sections/homePage/Rewards/Rewards';
import Rules from '../../sections/homePage/Rules/Rules';
import Showmatch from '../../sections/homePage/Showmatch/Showmatch';
import Join from '../../sections/homePage/Join/Join';
import Discord from '../../sections/common/Discord/Discord';
import Advices from '../../sections/homePage/Advices/Advices';
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const [isVisibly, setIsVisibly] = useState(false)
  const [sectionInViewport, setSectionInViewport] = useState(1)
  const [canScroll, toggleCanScroll] = useState(true)
  const [ruleNum, setRulNum] = useState(1)
  const [showModal, toggleShowModal] = useState(false)
  const [navActive, setNavActive] = useState('intro');

  const intro = useRef();
  const rewards = useRef();
  const rules = useRef();
  const showmatch = useRef();
  const join = useRef();
  const bottom = useRef();

  const debounceScroll = (ms = 1000) => {
    if (canScroll === false) return

    toggleCanScroll(false)

    setTimeout(() => {
      toggleCanScroll(true)
    }, ms);
  }

  const handleNavToggle = (sectionName) => {
    switch (sectionName) {
      case 'intro':
        setSectionInViewport(1);
        setNavActive('intro');
        break;
      case 'rewards':
        setSectionInViewport(2);
        setNavActive('intro');
        break;
      case 'rules':
        setSectionInViewport(3);
        setNavActive('rules');
        break;
      case 'showmatch':
        setSectionInViewport(4);
        setNavActive('showmatch');
        break;
      case 'join':
        setSectionInViewport(5);
        setNavActive('join');
        break;

      default:
        setNavActive(null);
        break;
    }
  }

  const handleOpenModal = () => {
    toggleShowModal(true);
    toggleCanScroll(false);
  };

  const onScrollDown = (sectionInViewport) => {
    switch (sectionInViewport) {
      case 1:
        setSectionInViewport(2);
        break;

      case 2:
        if (rewards.current.scrollTop + window.innerHeight === rewards.current.scrollHeight) {
          setSectionInViewport(3);
          setRulNum(1);
        }
        break;

      case 3:
        if (ruleNum === 3) {
          setSectionInViewport(4);
          setRulNum(1);
        }

        switch (ruleNum) {
          case 1:
            setRulNum(2);
            break;
          case 2:
            setRulNum(3);
            break;
          case 3:
            break;

          default:
            break;
        }
        break;

      case 4:
        setSectionInViewport(5);
        break;

      case 5:
        setSectionInViewport(6);
        document.body.classList.remove('no-scroll');
        break;

      case 6:
        break;

      default:
        break;
    }
  }

  const onSrollUp = (sectionInViewport) => {
    switch (sectionInViewport) {
      case 1:
        break;

      case 2:
        if (rewards.current.scrollTop === 0) {
          setSectionInViewport(1);
        }
        break;

      case 3:
        if (ruleNum === 1) {
          setSectionInViewport(2);
        }

        switch (ruleNum) {
          case 1:
            break;
          case 2:
            setRulNum(1);
            break;
          case 3:
            setRulNum(2);
            break;

          default:
            break;
        }
        break;

      case 4:
        setSectionInViewport(3);
        break;

      case 5:
        setSectionInViewport(4);
        break;

      case 6:
        if (bottom.current.getBoundingClientRect().top >= 0) {
          setSectionInViewport(5);
        }
        break;

      default:
        break;
    }
  }

  const handleOnWheel = (e) => {
    if (canScroll === false) return

    debounceScroll()

    if (e.deltaY > 0) {
      onScrollDown(sectionInViewport)
    } else if (e.deltaY < 0) {
      onSrollUp(sectionInViewport)
    }
  }

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scrollbar');
    setIsVisibly(true)

    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scrollbar');
      setIsVisibly(false)
    };
  }, []);

  useEffect(() => {
    if (!document.body.classList.contains('no-scroll')) {
      document.body.classList.add('no-scroll');
    }

    switch (sectionInViewport) {
      case 1:
        scrollToRef(intro);
        setNavActive('intro');
        break;
      case 2:
        scrollToRef(rewards);
        rewards.current.scrollTo(0, 0);
        setNavActive('rewards');
        break;
      case 3:
        scrollToRef(rules)
        setNavActive('rules');
        break;
      case 4:
        scrollToRef(showmatch)
        setNavActive('showmatch');
        break;
      case 5:
        scrollToRef(join)
        setNavActive('join');
        break;
      case 6:        
        scrollToRef(bottom)
        setNavActive('');
        setTimeout(() => {
          document.body.classList.remove('no-scroll');
        }, 400);
        break;

      default:
        break;
    }
  }, [sectionInViewport]);

  return (
    <main onWheel={handleOnWheel} className={clsx(style.main, isVisibly && style.show)}>
      <div className={clsx('section', style.bg)}>
        <div className={clsx(style.bg__inner, style[`bg__inner-${sectionInViewport}`])}>
          <div className={clsx(style.circle, style.circle__t1)}></div>
          <div className={clsx(style.circle, style.circle__t2)}></div>
        </div>
      </div>

      <div className={style.nav}>
        <Navbar btnCallback={handleNavToggle} activeBtnValue={navActive} />
      </div>

      <div className={clsx(style.sect, sectionInViewport === 1 && style.show)} ref={intro}>
        <Intro />
      </div>

      <div 
        className={clsx(style.rewards, sectionInViewport === 2 && style.show, 'no-scrollbar section--100vh')} 
        ref={rewards}
      >
        <Rewards />
      </div>

      <div className={clsx(style.sect, sectionInViewport === 3 && style.show)} ref={rules}>
        <Rules ruleNum={ruleNum} />
      </div>

      <div className={clsx(style.sect, sectionInViewport === 4 && style.show)} ref={showmatch}>
        <Showmatch />
      </div>

      <div className={clsx(style.sect, sectionInViewport === 5 && style.show)} ref={join}>
        <Join
          btn1OnClick={handleOpenModal}
          btn2OnClick={handleOpenModal}
        />
        <Modal
          isOpen={showModal}
          onClose={() => {
            toggleShowModal(false);
            toggleCanScroll(true);
          }}
        />
      </div>

      <div className={clsx(style.bottom, sectionInViewport === 6 && style.show)} ref={bottom}>
        <div className={style.discord}>
          <Discord />
        </div>

        <div className={style.advices}>
          <Advices />
        </div>
      </div>
    </main>
  );
};

export default Home;
