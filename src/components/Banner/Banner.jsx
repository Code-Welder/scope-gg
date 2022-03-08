import React from 'react';
import style from './banner.module.scss';

const Banner = (props) => {
  const { img, imgWebp, alt = 'banner', link } = props

  return (
    <div className='section'>
        <a className={style.link} href={link}>
          <picture className={style.pic}>
            <source srcSet={imgWebp} type="image/webp" />
            <img src={img} alt={alt} className={style.img} loading="lazy"/>
          </picture>
        </a>      
    </div>
  );
};

export default Banner;