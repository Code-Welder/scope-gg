import React from 'react';
import clsx from 'clsx';
import style from './advice.module.scss'

const Advice = (props) => {
  const {
    headerDirection = 'rtl',
    titleTop, 
    titleBottom, 
    underHeading, 
    descr, 
    link = '#', 
    linkText, 
    ...others
  } = props

  const titleTopStyle = {
    textAlign: headerDirection === 'rtl' ? 'right' : 'left'
  }

  const underHeadingStyle = {
    textAlign: headerDirection === 'rtl' ? 'left' : 'right'
  }


  return (
    <div className={style.container} {...others}>
      <div className={style.header}>
        <h3 className={style.title}>
          <span className={clsx(style.titleTop, 'title title--sm')} style={titleTopStyle}>{titleTop}</span>
          <span className={clsx(style.titleBottom, 'title title--sm text--stroke text--light')}>{titleBottom}</span>
        </h3>
        <p className={style.underHeading} style={underHeadingStyle}>{underHeading}</p>

        <p className={style.descr}>{descr}</p>

        <a href={link} className="btn btn--neutral" style={{padding: '13px 41px'}}>{linkText}</a>
      </div>
    </div>
  );
};

export default Advice;