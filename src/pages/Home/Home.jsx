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

const Home2 = () => {
  const [sectionInView, setSectionInView] = useState(1);
  const [navActive, setNavActive] = useState('intro');
  const [showModal, toggleShowModal] = useState(false);
  const [ruleNum, setRulNum] = useState(1);
  const [blockScrolling, setBlockScrolling] = useState(false);

  const intro = useRef();
  const rewards = useRef();
  const rules = useRef();
  const showmatch = useRef();
  const join = useRef();
  const bottom = useRef();

  const enableBlockScrolling = () => {
    if (blockScrolling) return;
    setBlockScrolling(true);

    setTimeout(() => {
      setBlockScrolling(false);
    }, 1000);
  };

  const navHandler = (value) => {
    switch (value) {
      case 'intro':
        setSectionInView(1);
        setNavActive('intro');
        break;
      case 'rewards':
        setSectionInView(2);
        setNavActive('intro');
        break;
      case 'rules':
        setSectionInView(3);
        setNavActive('rules');
        break;
      case 'showmatch':
        setSectionInView(4);
        setNavActive('showmatch');
        break;
      case 'join':
        setSectionInView(5);
        setNavActive('join');
        break;

      default:
        setNavActive(null);
        break;
    }
  };

  const handleOpenModal = () => {
    toggleShowModal(true);
    setBlockScrolling(true);
  };

  const scrollDown = (sectionInView) => {
    if (blockScrolling) return;

    switch (sectionInView) {
      case 1:
        setSectionInView(2);
        enableBlockScrolling();
        break;

      case 2:
        if (rewards.current.scrollTop + window.innerHeight === rewards.current.scrollHeight) {
          setSectionInView(3);
          setRulNum(1);
          enableBlockScrolling();
        }
        break;

      case 3:
        if (ruleNum === 3) {
          setSectionInView(4);
          setRulNum(1);
        }

        switch (ruleNum) {
          case 1:
            setRulNum(2);
            enableBlockScrolling();
            break;
          case 2:
            setRulNum(3);
            enableBlockScrolling();
            break;
          case 3:
            enableBlockScrolling();
            break;

          default:
            break;
        }
        break;

      case 4:
        setSectionInView(5);
        enableBlockScrolling();
        break;

      case 5:
        setSectionInView(6);
        enableBlockScrolling();
        document.body.classList.remove('no-scroll');
        break;

      case 6:
        enableBlockScrolling();
        break;

      default:
        break;
    }
  };

  const scrollUp = (sectionInView) => {
    if (blockScrolling) return;

    switch (sectionInView) {
      case 1:
        break;

      case 2:
        if (rewards.current.scrollTop === 0) {
          setSectionInView(1);
        }
        break;

      case 3:
        if (ruleNum === 1) {
          setSectionInView(2);
        }

        switch (ruleNum) {
          case 1:
            break;
          case 2:
            setRulNum(1);
            enableBlockScrolling();
            break;
          case 3:
            setRulNum(2);
            enableBlockScrolling();
            break;

          default:
            break;
        }
        break;

      case 4:
        setSectionInView(3);
        enableBlockScrolling();
        break;

      case 5:
        setSectionInView(4);
        enableBlockScrolling();
        break;

      case 6:
        if (bottom.current.getBoundingClientRect().top >= 0) {
          enableBlockScrolling();
          setSectionInView(5);
        }
        break;

      default:
        break;
    }
  };

  const handleOnWheel = (e) => {
    const direction = e.deltaY > 0 ? 'down' : 'up';

    if (blockScrolling === true) return;

    if (direction === 'down') {
      scrollDown(sectionInView);
    } else if (direction === 'up') {
      scrollUp(sectionInView);
    }
  };

  const handleScrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scrollbar');

    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scrollbar');
    };
  }, []);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    switch (sectionInView) {
      case 1:
        handleScrollToRef(intro);
        setNavActive('intro');
        break;
      case 2:
        handleScrollToRef(rewards);
        rewards.current.scrollTo(0, 5);
        setNavActive('rewards');
        break;
      case 3:
        handleScrollToRef(rules)
        setNavActive('rules');
        break;
      case 4:
        handleScrollToRef(showmatch)
        setNavActive('showmatch');
        break;
      case 5:
        handleScrollToRef(join)
        setNavActive('join');
        break;
      case 6:        
        handleScrollToRef(bottom)
        document.body.classList.remove('no-scroll');
        setNavActive('');
        break;

      default:
        break;
    }
  }, [sectionInView]);

  return (
    <main onWheel={handleOnWheel}>
      <div className={clsx('section', style.bg)}>
        <div className={clsx(style.bg__inner, style[`bg__inner-${sectionInView}`])}>
          <div className={clsx(style.circle, style.circle__t1)}></div>
          <div className={clsx(style.circle, style.circle__t2)}></div>
        </div>
      </div>

      <div className={style.nav}>
        <Navbar btnCallback={navHandler} activeBtnValue={navActive} />
      </div>

      <div className={clsx(style.intro)} ref={intro}>
        <Intro showSect={sectionInView === 1 ? true : false} />
      </div>

      <div className={clsx(style.rewards, 'no-scrollbar')} ref={rewards}>
        <Rewards showSect={sectionInView === 2 ? true : false} />
      </div>

      <div className={clsx(style.rules)} ref={rules}>
        <Rules showSect={sectionInView === 3 ? true : false} ruleNum={ruleNum} />
      </div>

      <div className={clsx(style.showmatch)} ref={showmatch}>
        <Showmatch showSect={sectionInView === 4 ? true : false} />
      </div>

      <div className={clsx(style.join)} ref={join}>
        <Join
          showSect={sectionInView === 5 ? true : false}
          btn1OnClick={handleOpenModal}
          btn2OnClick={handleOpenModal}
        />
        <Modal
          isOpen={showModal}
          onClose={() => {
            toggleShowModal(false);
            setBlockScrolling(false);
          }}
        />
      </div>

      <div className={clsx(style.bottom, sectionInView === 6 && style.show)} ref={bottom}>
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

export default Home2;
