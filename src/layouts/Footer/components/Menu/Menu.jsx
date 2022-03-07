import React from 'react';
import style from './menu.module.scss'

const firstBlockList = [
  {
    link: '#',
    name: 'Grenade prediction'
  },
  {
    link: '#',
    name: 'Strategy board'
  },
  {
    link: '#',
    name: 'Find a teammate'
  }
]

const secondBlockList = [
  {
    link: '#',
    name: 'Cookie Policy'
  },
  {
    link: '#',
    name: 'Privacy policy'
  },
  {
    link: '#',
    name: 'Terms of Use'
  }
]

const contacts = [
  'partnership@scope.gg',
  'support@scope.gg'
]

const Menu = () => {
  return (
    <ul className={style.container}>
      <li className={style.block}>
        <h3 className={style.title}>Product</h3>

        <ul className={style.blockList}>
          {
            firstBlockList.map((item, i) => {
              const { name, link } = item

              return (
                <li key={i}>
                  <a href={link}>{name}</a>
                </li>
              )
            })
          }
        </ul>
      </li>

      <li className={style.block}>
        <h3 className={style.title}>Legal</h3>

        <ul className={style.blockList}>
          {
            secondBlockList.map((item, i) => {
              const { name, link } = item

              return (
                <li key={i}>
                  <a href={link}>{name}</a>
                </li>
              )
            })
          }
        </ul>
      </li>

      <li className={style.block}>
        <h3 className={style.title}>Contact us</h3>

        <ul className={style.blockList}>
          {
            contacts.map((item, i) => {
              return (
                <li key={i}>
                  <a href={`mailto:${item}`} className={style.email}>{item}</a>
                </li>
              )
            })
          }
        </ul>
      </li>
    </ul>
  );
};

export default Menu;