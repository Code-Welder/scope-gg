import React from 'react';
import SocialsItem from './SocialIstem';

import discord from './icons/Discord.svg';
import inst from './icons/Instagram.svg';
import twit from './icons/Twitter.svg';
import vk from './icons/VK.svg';
import youtube from './icons/Youtube.svg';

import socialsLinks from '../../constants/socialLinks';

const list = [
  {
    name: 'twitter',
    link: socialsLinks.twitter,
    icon: twit,
  },
  {
    name: 'vk',
    link: socialsLinks.vk,
    icon: vk,
  },
  {
    name: 'discord',
    link: socialsLinks.discord,
    icon: discord,
  },
  {
    name: 'youtube',
    link: socialsLinks.youtube,
    icon: youtube,
  },
  {
    name: 'instagram',
    link: socialsLinks.instagram,
    icon: inst,
  },
];

const Socials = () => {
  return (
    <ul>
      {list.map((item) => {
        const { name, link, icon } = item;

        return <SocialsItem key={name} icon={icon} link={link} name={name} />;
      })}
    </ul>
  );
};

export default Socials;
