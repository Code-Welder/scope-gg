import React from 'react';
import SocialsItem from './SocialIstem';

import discord from './icons/Discord.svg'
import inst from './icons/Instagram.svg'
import twit from './icons/Twitter.svg'
import vk from './icons/VK.svg'
import youtube from './icons/Youtube.svg'

const list = [
  {
    name: 'twitter',
    link: 'https://twitter.com/scope_gg',
    icon: twit,
  },
  {
    name: 'vk',
    link: 'https://vk.com/scopegg',
    icon: vk,
  },
  {
    name: 'discord',
    link: 'https://discord.com/invite/fPZkGHw',
    icon: discord,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCAJJOQv8ZEJEuMuM3d3qD4g',
    icon: youtube,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/scope_gg/',
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