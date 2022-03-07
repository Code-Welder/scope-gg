import React from 'react';
import SkinItem from './SkinItem';
import style from './skins.module.scss'

import weapon1Png from '../../assets/Player_Two.png'
import weapon1Webp from '../../assets/Player_Two.webp'

import weapon2Png from '../../assets/Pinky_Eyes.png'
import weapon2Webp from '../../assets/Pinky_Eyes.webp'

import weapon3Png from '../../assets/Acid_House.png'
import weapon3Webp from '../../assets/Acid_House.webp'

import weapon4Png from '../../assets/For_butter.png'
import weapon4Webp from '../../assets/For_butter.webp'

import weapon5Png from '../../assets/Dragonlore.png'
import weapon5Webp from '../../assets/Dragonlore.webp'

import weapon6Png from '../../assets/Neo_Noir.png'
import weapon6Webp from '../../assets/Neo_Noir.webp'

import weapon7Png from '../../assets/Anarchy.png'
import weapon7Webp from '../../assets/Anarchy.webp'

const skins = [
  {
    weapon: 'M4A1-S',
    skin: 'Player Two',
    img: {
      png: weapon1Png,
      webp: weapon1Webp
    },
    link: '#',
  },
  {
    weapon: 'Glock',
    skin: 'Pinky Eyes',
    img: {
      png: weapon2Png,
      webp: weapon2Webp
    },
    link: '#',
  },
  {
    weapon: 'USP-S',
    skin: 'Acid House',
    img: {
      png: weapon3Png,
      webp: weapon3Webp
    },
    link: '#',
  },
  {
    weapon: 'Knife',
    skin: 'For butter',
    img: {
      png: weapon4Png,
      webp: weapon4Webp
    },
    link: '#',
  },
  {
    weapon: 'AWP',
    skin: 'Dragonlore',
    img: {
      png: weapon5Png,
      webp: weapon5Webp
    },
    link: '#',
  },
  {
    weapon: 'AWP',
    skin: 'Neo Noir',
    img: {
      png: weapon6Png,
      webp: weapon6Webp
    },
    link: '#',
  },
  {
    weapon: 'AK-47',
    skin: 'Anarchy',
    img: {
      png: weapon7Png,
      webp: weapon7Webp
    },
    link: '#',
  }
]

/*  grid for items by items[i]
    0 0
    1 2
    3 2
    4 4
    5 5
    6 6
*/

const SkinList = () => {
  return (
    <div className={style.content}>
      <ul className={style.list}>
        {
          skins.map((skins, i) => {
            return (
              <SkinItem 
                key={i} 
                weaponName={skins.weapon} 
                skinName={skins.skin}
                imgPng={skins.img.png}
                imgWebp={skins.img.webp}
                link={skins.link}
              />
            )
          })
        }
      </ul>
    </div>
  );
};

export default SkinList;