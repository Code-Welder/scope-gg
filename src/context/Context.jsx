import React from 'react';
import avatar from '../assets/userAvatar.png';

export const Context = React.createContext({
  event: {
    status: 'started', // started, end, waiting
    day: 2,
    map: 'de_dust2',

    startAt: {
      date: '27/02/2022',
      time: '0:00 CET',
    },

    showmatchStart: {
      date: 'March 10',
      time: '18:00 CET',
    },
  },

  user: {
    isAuth: true,
    avatar: avatar,
    team: 1,
    place: 1533,
    name: 'Evkon',
    link: '#',
    score: 11
  },

  teams: {
    1: {
      name: 'Novke',
      wins: [true, false, false],
      matches: 2529,
      top10: new Array(10).fill({
        place: 0,
        name: 'Ekvon', 
        avatar: avatar, 
        link: '#', 
        score: 0
      }).map((user, i) =>  ({...user, place: ++i}))
    },

    2: {
      name: 'Deni TV',
      wins: [false, false, false],
      matches: 1334,
      top10: new Array(10).fill({
        place: 0,
        name: 'Ekvon', 
        avatar: avatar, 
        link: '#', 
        score: 0
      }).map((user, i) =>  ({...user, place: ++i}))
    },

    winner: 'Novke'
  },

  showmatch: {
    link: '#',
    start: {
      day: 'March 10',
      time: '18:00 CET'
    },

    leaders: {
      1: new Array(5).fill({
        steam: '#',
        name: 'Ekvon',
        avatar: avatar
      }),
      2: new Array(5).fill({
        steam: '#',
        name: 'Ekvon2',
        avatar: avatar
      }),
    }
  },

  totalPlayers: 2500,
});
