/* eslint-disable quote-props */
/* eslint-disable max-len */
import {createSlice} from '@reduxjs/toolkit';
import {changeLike, fetchPhotos} from './action';
import {mergeArraysUnique} from '../../utils/mergeArrayUnique';

// const list = [
//   {
//     id: 'JzjLO92in88',
//     slug: 'a-woman-standing-on-a-platform-waiting-for-a-train-JzjLO92in88',
//     alternative_slugs: {
//       en: 'a-woman-standing-on-a-platform-waiting-for-a-train-JzjLO92in88',
//       es: 'una-mujer-parada-en-un-anden-esperando-un-tren-JzjLO92in88',
//       ja: '電車を待つプラットホームに立っている女性-JzjLO92in88',
//       fr: 'une-femme-debout-sur-un-quai-attendant-un-train-JzjLO92in88',
//       it: 'una-donna-in-piedi-su-una-piattaforma-in-attesa-di-un-treno-JzjLO92in88',
//       ko: '기차를-기다리는-플랫폼에-서-있는-여자-JzjLO92in88',
//       de: 'eine-frau-die-auf-einem-bahnsteig-steht-und-auf-einen-zug-wartet-JzjLO92in88',
//       pt: 'uma-mulher-em-pe-em-uma-plataforma-esperando-por-um-trem-JzjLO92in88',
//     },
//     created_at: '2023-06-07T07:20:30Z',
//     updated_at: '2024-07-06T07:14:15Z',
//     promoted_at: '2024-07-06T07:14:15Z',
//     width: 4000,
//     height: 6000,
//     color: '#d9d9d9',
//     blur_hash: 'LYG+N}od%Mt70LtRWCj[%LV@ogRk',
//     description: null,
//     alt_description: 'a woman standing on a platform waiting for a train',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1686121707209-a5494a50455f?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1686121707209-a5494a50455f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1686121707209-a5494a50455f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1686121707209-a5494a50455f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1686121707209-a5494a50455f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1686121707209-a5494a50455f',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-woman-standing-on-a-platform-waiting-for-a-train-JzjLO92in88',
//       html: 'https://unsplash.com/photos/a-woman-standing-on-a-platform-waiting-for-a-train-JzjLO92in88',
//       download:
//         'https://unsplash.com/photos/JzjLO92in88/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/JzjLO92in88/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMXx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 9,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {
//       'street-photography': {
//         status: 'approved',
//         approved_on: '2024-07-03T11:14:50Z',
//       },
//     },
//     asset_type: 'photo',
//     user: {
//       id: '2Mj4-kTQ5js',
//       updated_at: '2024-07-06T07:14:15Z',
//       username: 'incrprl',
//       name: 'Stepan Kalinin',
//       first_name: 'Stepan',
//       last_name: 'Kalinin',
//       twitter_username: null,
//       portfolio_url: null,
//       bio: 'experimental photography',
//       location: 'Novosibirsk, Russia',
//       links: {
//         self: 'https://api.unsplash.com/users/incrprl',
//         html: 'https://unsplash.com/@incrprl',
//         photos: 'https://api.unsplash.com/users/incrprl/photos',
//         likes: 'https://api.unsplash.com/users/incrprl/likes',
//         portfolio: 'https://api.unsplash.com/users/incrprl/portfolio',
//         following: 'https://api.unsplash.com/users/incrprl/following',
//         followers: 'https://api.unsplash.com/users/incrprl/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1637940408173-93b626b223aaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1637940408173-93b626b223aaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1637940408173-93b626b223aaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'incrprl',
//       total_collections: 0,
//       total_likes: 0,
//       total_photos: 130,
//       total_promoted_photos: 3,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: false,
//       social: {
//         instagram_username: 'incrprl',
//         portfolio_url: null,
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'BGzgZIzauiw',
//     slug: 'a-snow-covered-mountain-with-a-sky-background-BGzgZIzauiw',
//     alternative_slugs: {
//       en: 'a-snow-covered-mountain-with-a-sky-background-BGzgZIzauiw',
//       es: 'una-montana-cubierta-de-nieve-con-un-fondo-de-cielo-BGzgZIzauiw',
//       ja: '空を背景に雪に覆われた山-BGzgZIzauiw',
//       fr: 'une-montagne-enneigee-avec-un-fond-de-ciel-BGzgZIzauiw',
//       it: 'una-montagna-innevata-con-uno-sfondo-di-cielo-BGzgZIzauiw',
//       ko: '하늘을-배경으로-한-눈-덮인-산-BGzgZIzauiw',
//       de: 'ein-schneebedeckter-berg-mit-einem-himmelshintergrund-BGzgZIzauiw',
//       pt: 'uma-montanha-coberta-de-neve-com-um-fundo-do-ceu-BGzgZIzauiw',
//     },
//     created_at: '2024-06-20T18:20:44Z',
//     updated_at: '2024-07-06T07:59:49Z',
//     promoted_at: '2024-07-06T07:13:34Z',
//     width: 3144,
//     height: 4716,
//     color: '#c0f3f3',
//     blur_hash: 'LeEqXo.7nfoz_LxttRbI.6RlR.V@',
//     description:
//       '"Climb" Each night and morning, dozens of people embark on the challenging ascent to Mont Blanc, the highest peak in Europe. This photograph, taken from the western part of the mountain just before sunrise, captures the serene yet formidable landscape. The faint lights from the base camp and the headlamps of climbers are still visible, creating a beautiful contrast against the rugged, snow-covered slopes.',
//     alt_description: 'A snow covered mountain with a sky background',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1718906457196-3d3523107ef0?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1718906457196-3d3523107ef0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1718906457196-3d3523107ef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1718906457196-3d3523107ef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1718906457196-3d3523107ef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718906457196-3d3523107ef0',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-snow-covered-mountain-with-a-sky-background-BGzgZIzauiw',
//       html: 'https://unsplash.com/photos/a-snow-covered-mountain-with-a-sky-background-BGzgZIzauiw',
//       download:
//         'https://unsplash.com/photos/BGzgZIzauiw/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/BGzgZIzauiw/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzMnx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 58,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {
//       nature: {
//         status: 'rejected',
//       },
//       spirituality: {
//         status: 'rejected',
//       },
//       'textures-patterns': {
//         status: 'rejected',
//       },
//       travel: {
//         status: 'rejected',
//       },
//       wallpapers: {
//         status: 'approved',
//         approved_on: '2024-06-21T11:12:25Z',
//       },
//     },
//     asset_type: 'photo',
//     user: {
//       id: '2tXKaPcv9BI',
//       updated_at: '2024-07-06T07:18:25Z',
//       username: 'marekpiwnicki',
//       name: 'Marek Piwnicki',
//       first_name: 'Marek',
//       last_name: 'Piwnicki',
//       twitter_username: null,
//       portfolio_url: 'https://marpiwnicki.github.io',
//       bio: 'Hey! I have 2.5B+ views and 10M+ dwnl here.If my work has helped or inspired you, please consider supporting me (patreon.com/MarekPiwnicki or ko-fi.com/marekpiwnicki). Every bit helps me continue creating and sharing my photos for free. Thank you! ❤️',
//       location: 'Gdynia | Poland',
//       links: {
//         self: 'https://api.unsplash.com/users/marekpiwnicki',
//         html: 'https://unsplash.com/@marekpiwnicki',
//         photos: 'https://api.unsplash.com/users/marekpiwnicki/photos',
//         likes: 'https://api.unsplash.com/users/marekpiwnicki/likes',
//         portfolio: 'https://api.unsplash.com/users/marekpiwnicki/portfolio',
//         following: 'https://api.unsplash.com/users/marekpiwnicki/following',
//         followers: 'https://api.unsplash.com/users/marekpiwnicki/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'marekpiwnicki',
//       total_collections: 44,
//       total_likes: 1979,
//       total_photos: 3589,
//       total_promoted_photos: 722,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: true,
//       social: {
//         instagram_username: 'marekpiwnicki',
//         portfolio_url: 'https://marpiwnicki.github.io',
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'QA-DE5DxVJM',
//     slug: 'a-group-of-blue-and-white-flowers-with-green-leaves-QA-DE5DxVJM',
//     alternative_slugs: {
//       en: 'a-group-of-blue-and-white-flowers-with-green-leaves-QA-DE5DxVJM',
//       es: 'un-grupo-de-flores-azules-y-blancas-con-hojas-verdes-QA-DE5DxVJM',
//       ja: '青と白の花と緑の葉のグループ-QA-DE5DxVJM',
//       fr: 'un-groupe-de-fleurs-bleues-et-blanches-aux-feuilles-vertes-QA-DE5DxVJM',
//       it: 'un-gruppo-di-fiori-blu-e-bianchi-con-foglie-verdi-QA-DE5DxVJM',
//       ko: '녹색-잎이-있는-파란색과-흰색-꽃-그룹-QA-DE5DxVJM',
//       de: 'eine-gruppe-blau-weisser-bluten-mit-grunen-blattern-QA-DE5DxVJM',
//       pt: 'um-grupo-de-flores-azuis-e-brancas-com-folhas-verdes-QA-DE5DxVJM',
//     },
//     created_at: '2024-06-17T19:45:14Z',
//     updated_at: '2024-07-06T09:37:35Z',
//     promoted_at: '2024-07-06T07:12:47Z',
//     width: 3615,
//     height: 5422,
//     color: '#0c260c',
//     blur_hash: 'LHBN+tMa4mt8E4ROV?tT4Tng?wRk',
//     description: null,
//     alt_description: 'A group of blue and white flowers with green leaves',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1718653513135-c008f8d98752?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1718653513135-c008f8d98752?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1718653513135-c008f8d98752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1718653513135-c008f8d98752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1718653513135-c008f8d98752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718653513135-c008f8d98752',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-group-of-blue-and-white-flowers-with-green-leaves-QA-DE5DxVJM',
//       html: 'https://unsplash.com/photos/a-group-of-blue-and-white-flowers-with-green-leaves-QA-DE5DxVJM',
//       download:
//         'https://unsplash.com/photos/QA-DE5DxVJM/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/QA-DE5DxVJM/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzM3x8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 7,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {},
//     asset_type: 'photo',
//     user: {
//       id: 'SZsEU1OH8ME',
//       updated_at: '2024-07-06T07:13:57Z',
//       username: 'meinayin',
//       name: 'Meina Yin',
//       first_name: 'Meina',
//       last_name: 'Yin',
//       twitter_username: null,
//       portfolio_url: null,
//       bio: null,
//       location: null,
//       links: {
//         self: 'https://api.unsplash.com/users/meinayin',
//         html: 'https://unsplash.com/@meinayin',
//         photos: 'https://api.unsplash.com/users/meinayin/photos',
//         likes: 'https://api.unsplash.com/users/meinayin/likes',
//         portfolio: 'https://api.unsplash.com/users/meinayin/portfolio',
//         following: 'https://api.unsplash.com/users/meinayin/following',
//         followers: 'https://api.unsplash.com/users/meinayin/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1645417330703-0e08bdc2d373image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1645417330703-0e08bdc2d373image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1645417330703-0e08bdc2d373image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: null,
//       total_collections: 13,
//       total_likes: 696,
//       total_photos: 1560,
//       total_promoted_photos: 18,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: false,
//       social: {
//         instagram_username: null,
//         portfolio_url: null,
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'ZVOmh1qH098',
//     slug: 'a-large-ice-cave-with-a-light-coming-out-of-it-ZVOmh1qH098',
//     alternative_slugs: {
//       en: 'a-large-ice-cave-with-a-light-coming-out-of-it-ZVOmh1qH098',
//       es: 'una-gran-cueva-de-hielo-de-la-que-sale-una-luz-ZVOmh1qH098',
//       ja: '大きな氷の洞窟から光が差し込んでいます-ZVOmh1qH098',
//       fr: 'une-grande-grotte-de-glace-dou-sort-une-lumiere-ZVOmh1qH098',
//       it: 'una-grande-grotta-di-ghiaccio-da-cui-esce-una-luce-ZVOmh1qH098',
//       ko: '빛이-나오는-커다란-얼음-동굴-ZVOmh1qH098',
//       de: 'eine-grosse-eishohle-mit-einem-licht-das-aus-ihr-herauskommt-ZVOmh1qH098',
//       pt: 'uma-grande-caverna-de-gelo-com-uma-luz-saindo-dela-ZVOmh1qH098',
//     },
//     created_at: '2024-06-24T08:12:47Z',
//     updated_at: '2024-07-06T09:43:43Z',
//     promoted_at: '2024-07-06T07:11:53Z',
//     width: 2828,
//     height: 4242,
//     color: '#0c4059',
//     blur_hash: 'LQ4#XvU]Q,j[uPVYaej?VDbctSay',
//     description: null,
//     alt_description: 'A large ice cave with a light coming out of it',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1719216324621-af3512ec2766?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1719216324621-af3512ec2766?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1719216324621-af3512ec2766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1719216324621-af3512ec2766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1719216324621-af3512ec2766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719216324621-af3512ec2766',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-large-ice-cave-with-a-light-coming-out-of-it-ZVOmh1qH098',
//       html: 'https://unsplash.com/photos/a-large-ice-cave-with-a-light-coming-out-of-it-ZVOmh1qH098',
//       download:
//         'https://unsplash.com/photos/ZVOmh1qH098/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/ZVOmh1qH098/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNHx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 3,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {},
//     asset_type: 'photo',
//     user: {
//       id: 'jrCUu0aF6YQ',
//       updated_at: '2024-07-06T07:11:53Z',
//       username: 'malcoo',
//       name: 'Tomáš Malík',
//       first_name: 'Tomáš',
//       last_name: 'Malík',
//       twitter_username: null,
//       portfolio_url: 'http://www.maliktomas.com',
//       bio: 'If you like my work, please support me on my PayPal :)',
//       location: 'Slovakia, Bratislava',
//       links: {
//         self: 'https://api.unsplash.com/users/malcoo',
//         html: 'https://unsplash.com/@malcoo',
//         photos: 'https://api.unsplash.com/users/malcoo/photos',
//         likes: 'https://api.unsplash.com/users/malcoo/likes',
//         portfolio: 'https://api.unsplash.com/users/malcoo/portfolio',
//         following: 'https://api.unsplash.com/users/malcoo/following',
//         followers: 'https://api.unsplash.com/users/malcoo/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-fb-1539459502-03cef6b596c8.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-fb-1539459502-03cef6b596c8.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-fb-1539459502-03cef6b596c8.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'tomas_malco_malik',
//       total_collections: 0,
//       total_likes: 1,
//       total_photos: 689,
//       total_promoted_photos: 180,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: true,
//       social: {
//         instagram_username: 'tomas_malco_malik',
//         portfolio_url: 'http://www.maliktomas.com',
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'FQCJ5S6ZTpc',
//     slug: 'an-aerial-view-of-a-resort-pool-with-a-view-of-the-ocean-FQCJ5S6ZTpc',
//     alternative_slugs: {
//       en: 'an-aerial-view-of-a-resort-pool-with-a-view-of-the-ocean-FQCJ5S6ZTpc',
//       es: 'una-vista-aerea-de-la-piscina-de-un-resort-con-vista-al-oceano-FQCJ5S6ZTpc',
//       ja: '海を眺めながらリゾートプールを上空から眺める-FQCJ5S6ZTpc',
//       fr: 'une-vue-aerienne-dune-piscine-de-villegiature-avec-vue-sur-locean-FQCJ5S6ZTpc',
//       it: 'una-veduta-aerea-della-piscina-di-un-resort-con-vista-sulloceano-FQCJ5S6ZTpc',
//       ko: '바다가-보이는-리조트-수영장의-조감도-FQCJ5S6ZTpc',
//       de: 'eine-luftaufnahme-eines-resort-pools-mit-blick-auf-das-meer-FQCJ5S6ZTpc',
//       pt: 'vista-aerea-da-piscina-do-resort-com-vista-para-o-mar-FQCJ5S6ZTpc',
//     },
//     created_at: '2024-06-24T09:28:25Z',
//     updated_at: '2024-07-06T07:57:56Z',
//     promoted_at: '2024-07-06T07:11:35Z',
//     width: 5337,
//     height: 3778,
//     color: '#f3f3f3',
//     blur_hash: 'LnJbmkNKv|%3Dio0OYR+?wbvozsS',
//     description: null,
//     alt_description: 'An aerial view of a resort pool with a view of the ocean',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719221253506-57f70fadfd0d',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/an-aerial-view-of-a-resort-pool-with-a-view-of-the-ocean-FQCJ5S6ZTpc',
//       html: 'https://unsplash.com/photos/an-aerial-view-of-a-resort-pool-with-a-view-of-the-ocean-FQCJ5S6ZTpc',
//       download:
//         'https://unsplash.com/photos/FQCJ5S6ZTpc/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/FQCJ5S6ZTpc/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNXx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 4,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {},
//     asset_type: 'photo',
//     user: {
//       id: 'R6s8P8AjJiw',
//       updated_at: '2024-07-06T07:13:56Z',
//       username: 'jvich',
//       name: 'Jordi Vich Navarro',
//       first_name: 'Jordi',
//       last_name: 'Vich Navarro',
//       twitter_username: null,
//       portfolio_url: null,
//       bio: null,
//       location: null,
//       links: {
//         self: 'https://api.unsplash.com/users/jvich',
//         html: 'https://unsplash.com/@jvich',
//         photos: 'https://api.unsplash.com/users/jvich/photos',
//         likes: 'https://api.unsplash.com/users/jvich/likes',
//         portfolio: 'https://api.unsplash.com/users/jvich/portfolio',
//         following: 'https://api.unsplash.com/users/jvich/following',
//         followers: 'https://api.unsplash.com/users/jvich/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1542277360983-4e65d82536b4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1542277360983-4e65d82536b4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1542277360983-4e65d82536b4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'jordi_vich_fotografia',
//       total_collections: 1,
//       total_likes: 95,
//       total_photos: 172,
//       total_promoted_photos: 2,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: false,
//       social: {
//         instagram_username: 'jordi_vich_fotografia',
//         portfolio_url: null,
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'g9O5jfSj5rU',
//     slug: 'a-person-sitting-on-a-porch-with-a-book-g9O5jfSj5rU',
//     alternative_slugs: {
//       en: 'a-person-sitting-on-a-porch-with-a-book-g9O5jfSj5rU',
//       es: 'una-persona-sentada-en-un-porche-con-un-libro-g9O5jfSj5rU',
//       ja: 'ポーチに座って本を片手にしている人-g9O5jfSj5rU',
//       fr: 'une-personne-assise-sur-un-porche-avec-un-livre-g9O5jfSj5rU',
//       it: 'una-persona-seduta-su-un-portico-con-un-libro-g9O5jfSj5rU',
//       ko: '책을-들고-현관에-앉아-있는-사람-g9O5jfSj5rU',
//       de: 'eine-person-die-mit-einem-buch-auf-einer-veranda-sitzt-g9O5jfSj5rU',
//       pt: 'uma-pessoa-sentada-em-uma-varanda-com-um-livro-g9O5jfSj5rU',
//     },
//     created_at: '2024-06-25T12:29:15Z',
//     updated_at: '2024-07-06T07:11:32Z',
//     promoted_at: '2024-07-06T07:11:32Z',
//     width: 4000,
//     height: 6000,
//     color: '#a6a6a6',
//     blur_hash: 'LEEo=5v#xC-o%z01D%-;D*4nx]t8',
//     description: null,
//     alt_description: 'A person sitting on a porch with a book',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1719318538384-35391d8c3164?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1719318538384-35391d8c3164?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1719318538384-35391d8c3164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1719318538384-35391d8c3164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1719318538384-35391d8c3164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719318538384-35391d8c3164',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-person-sitting-on-a-porch-with-a-book-g9O5jfSj5rU',
//       html: 'https://unsplash.com/photos/a-person-sitting-on-a-porch-with-a-book-g9O5jfSj5rU',
//       download:
//         'https://unsplash.com/photos/g9O5jfSj5rU/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/g9O5jfSj5rU/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzNnx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 4,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {
//       pastels: {
//         status: 'rejected',
//       },
//       people: {
//         status: 'approved',
//         approved_on: '2024-06-27T13:01:57Z',
//       },
//     },
//     asset_type: 'photo',
//     user: {
//       id: 'fjYZsyKPyEU',
//       updated_at: '2024-07-06T07:13:56Z',
//       username: 'anamnesis33',
//       name: 'Andrey K',
//       first_name: 'Andrey',
//       last_name: 'K',
//       twitter_username: null,
//       portfolio_url: null,
//       bio: 'Please, follow me Instagram',
//       location: 'Россия Томск',
//       links: {
//         self: 'https://api.unsplash.com/users/anamnesis33',
//         html: 'https://unsplash.com/@anamnesis33',
//         photos: 'https://api.unsplash.com/users/anamnesis33/photos',
//         likes: 'https://api.unsplash.com/users/anamnesis33/likes',
//         portfolio: 'https://api.unsplash.com/users/anamnesis33/portfolio',
//         following: 'https://api.unsplash.com/users/anamnesis33/following',
//         followers: 'https://api.unsplash.com/users/anamnesis33/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1664512708016-de70551f7e77image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1664512708016-de70551f7e77image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1664512708016-de70551f7e77image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'Anamnesis33',
//       total_collections: 0,
//       total_likes: 3221,
//       total_photos: 754,
//       total_promoted_photos: 50,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: true,
//       social: {
//         instagram_username: 'Anamnesis33',
//         portfolio_url: null,
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'GEpXIOYH0Vw',
//     slug: 'a-person-standing-on-a-tennis-court-holding-a-racket-GEpXIOYH0Vw',
//     alternative_slugs: {
//       en: 'a-person-standing-on-a-tennis-court-holding-a-racket-GEpXIOYH0Vw',
//       es: 'una-persona-de-pie-en-una-cancha-de-tenis-sosteniendo-una-raqueta-GEpXIOYH0Vw',
//       ja: 'テニスコートに立ってラケットを持っている人-GEpXIOYH0Vw',
//       fr: 'une-personne-debout-sur-un-court-de-tennis-tenant-une-raquette-GEpXIOYH0Vw',
//       it: 'una-persona-in-piedi-su-un-campo-da-tennis-che-tiene-una-racchetta-GEpXIOYH0Vw',
//       ko: '테니스-코트에-라켓을-들고-서-있는-사람-GEpXIOYH0Vw',
//       de: 'eine-person-die-auf-einem-tennisplatz-steht-und-einen-schlager-halt-GEpXIOYH0Vw',
//       pt: 'uma-pessoa-em-pe-em-uma-quadra-de-tenis-segurando-uma-raquete-GEpXIOYH0Vw',
//     },
//     created_at: '2024-06-28T13:26:50Z',
//     updated_at: '2024-07-06T09:44:30Z',
//     promoted_at: '2024-07-06T07:10:40Z',
//     width: 3416,
//     height: 5186,
//     color: '#a6c0d9',
//     blur_hash: 'LfIYwzS%NGt7?wNHs.ay9HV@oLWB',
//     description: null,
//     alt_description: 'A person standing on a tennis court holding a racket',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1719581163959-edb5babd0288?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1719581163959-edb5babd0288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1719581163959-edb5babd0288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1719581163959-edb5babd0288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1719581163959-edb5babd0288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719581163959-edb5babd0288',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-person-standing-on-a-tennis-court-holding-a-racket-GEpXIOYH0Vw',
//       html: 'https://unsplash.com/photos/a-person-standing-on-a-tennis-court-holding-a-racket-GEpXIOYH0Vw',
//       download:
//         'https://unsplash.com/photos/GEpXIOYH0Vw/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/GEpXIOYH0Vw/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzN3x8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 3,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {
//       experimental: {
//         status: 'approved',
//         approved_on: '2024-07-01T12:29:16Z',
//       },
//       'fashion-beauty': {
//         status: 'rejected',
//       },
//       people: {
//         status: 'rejected',
//       },
//       sports: {
//         status: 'rejected',
//       },
//       wallpapers: {
//         status: 'rejected',
//       },
//     },
//     asset_type: 'photo',
//     user: {
//       id: '_E0btZ1TfMw',
//       updated_at: '2024-07-06T07:13:56Z',
//       username: 'alex_gruber',
//       name: 'Alex Gruber',
//       first_name: 'Alex',
//       last_name: 'Gruber',
//       twitter_username: 'm0c0000',
//       portfolio_url: 'http://www.lowfidelity.at',
//       bio: 'visual loving, art appreciating, maintitle admiring human.\r\nart stuff from my 365 daily challange on instagram: @will_willert my commercial film work on my company website: www.lowfidelity.at.',
//       location: 'Vienna',
//       links: {
//         self: 'https://api.unsplash.com/users/alex_gruber',
//         html: 'https://unsplash.com/@alex_gruber',
//         photos: 'https://api.unsplash.com/users/alex_gruber/photos',
//         likes: 'https://api.unsplash.com/users/alex_gruber/likes',
//         portfolio: 'https://api.unsplash.com/users/alex_gruber/portfolio',
//         following: 'https://api.unsplash.com/users/alex_gruber/following',
//         followers: 'https://api.unsplash.com/users/alex_gruber/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1537596850074-1b4b0ce97f33?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1537596850074-1b4b0ce97f33?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1537596850074-1b4b0ce97f33?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'will_willert',
//       total_collections: 5,
//       total_likes: 2228,
//       total_photos: 444,
//       total_promoted_photos: 100,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: false,
//       social: {
//         instagram_username: 'will_willert',
//         portfolio_url: 'http://www.lowfidelity.at',
//         twitter_username: 'm0c0000',
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: '0IN-5A5sY_0',
//     slug: 'two-spiral-shaped-objects-in-the-middle-of-the-night-sky-0IN-5A5sY_0',
//     alternative_slugs: {
//       en: 'two-spiral-shaped-objects-in-the-middle-of-the-night-sky-0IN-5A5sY_0',
//       es: 'dos-objetos-en-forma-de-espiral-en-medio-del-cielo-nocturno-0IN-5A5sY_0',
//       ja: '夜空の真ん中に浮かぶ2つの螺旋状の物体-0IN-5A5sY_0',
//       fr: 'deux-objets-en-forme-de-spirale-au-milieu-du-ciel-nocturne-0IN-5A5sY_0',
//       it: 'due-oggetti-a-forma-di-spirale-nel-mezzo-del-cielo-notturno-0IN-5A5sY_0',
//       ko: '밤하늘-한가운데에-있는-두-개의-나선형-물체-0IN-5A5sY_0',
//       de: 'zwei-spiralformige-objekte-mitten-am-nachthimmel-0IN-5A5sY_0',
//       pt: 'dois-objetos-em-forma-de-espiral-no-meio-do-ceu-noturno-0IN-5A5sY_0',
//     },
//     created_at: '2024-06-25T13:27:19Z',
//     updated_at: '2024-07-06T08:03:16Z',
//     promoted_at: '2024-07-06T07:10:03Z',
//     width: 3000,
//     height: 2000,
//     color: '#262626',
//     blur_hash: 'L02FV:of0KNGR%ayofj[4-ay^,t7',
//     description:
//       'Whirlpool Galaxy M 51. Spiral galaxy located 31 million light years away in Canes Venatici. NGC 5195 is a dwarf galaxy at the end of one of the arms and has actually been moving behind the Whirlpool Galaxy for millions of years.',
//     alt_description: 'Two spiral shaped objects in the middle of the night sky',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1719321920092-b02ca3c27d1f?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1719321920092-b02ca3c27d1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1719321920092-b02ca3c27d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1719321920092-b02ca3c27d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1719321920092-b02ca3c27d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719321920092-b02ca3c27d1f',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/two-spiral-shaped-objects-in-the-middle-of-the-night-sky-0IN-5A5sY_0',
//       html: 'https://unsplash.com/photos/two-spiral-shaped-objects-in-the-middle-of-the-night-sky-0IN-5A5sY_0',
//       download:
//         'https://unsplash.com/photos/0IN-5A5sY_0/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/0IN-5A5sY_0/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOHx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 4,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {},
//     asset_type: 'photo',
//     user: {
//       id: 'Y6clyIsU0kY',
//       updated_at: '2024-07-06T07:28:34Z',
//       username: 'sdbusch77',
//       name: 'Steve Busch',
//       first_name: 'Steve',
//       last_name: 'Busch',
//       twitter_username: null,
//       portfolio_url: 'http://www.cosmosteve.com',
//       bio: null,
//       location: null,
//       links: {
//         self: 'https://api.unsplash.com/users/sdbusch77',
//         html: 'https://unsplash.com/@sdbusch77',
//         photos: 'https://api.unsplash.com/users/sdbusch77/photos',
//         likes: 'https://api.unsplash.com/users/sdbusch77/likes',
//         portfolio: 'https://api.unsplash.com/users/sdbusch77/portfolio',
//         following: 'https://api.unsplash.com/users/sdbusch77/following',
//         followers: 'https://api.unsplash.com/users/sdbusch77/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'sdbusch77',
//       total_collections: 0,
//       total_likes: 3,
//       total_photos: 62,
//       total_promoted_photos: 41,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: false,
//       social: {
//         instagram_username: 'sdbusch77',
//         portfolio_url: 'http://www.cosmosteve.com',
//         twitter_username: null,
//         paypal_email: null,
//       },
//     },
//   },
//   {
//     id: 'RK_MT0Fd7WI',
//     slug: 'a-street-sign-in-front-of-a-tall-building-RK_MT0Fd7WI',
//     alternative_slugs: {
//       en: 'a-street-sign-in-front-of-a-tall-building-RK_MT0Fd7WI',
//       es: 'un-letrero-de-la-calle-frente-a-un-edificio-alto-RK_MT0Fd7WI',
//       ja: '高層ビル前の道路標識-RK_MT0Fd7WI',
//       fr: 'un-panneau-de-signalisation-devant-un-grand-immeuble-RK_MT0Fd7WI',
//       it: 'un-cartello-stradale-di-fronte-a-un-edificio-alto-RK_MT0Fd7WI',
//       ko: '고층-건물-앞의-도로-표지판-RK_MT0Fd7WI',
//       de: 'ein-strassenschild-vor-einem-hohen-gebaude-RK_MT0Fd7WI',
//       pt: 'uma-placa-de-rua-em-frente-a-um-predio-alto-RK_MT0Fd7WI',
//     },
//     created_at: '2024-06-25T15:22:55Z',
//     updated_at: '2024-07-06T07:09:59Z',
//     promoted_at: '2024-07-06T07:09:59Z',
//     width: 3615,
//     height: 4519,
//     color: '#8ca6c0',
//     blur_hash: 'LXGl-e.TVrflxuNGt7V?o#NGWBWB',
//     description: null,
//     alt_description: 'A street sign in front of a tall building',
//     breadcrumbs: [],
//     urls: {
//       raw: 'https://images.unsplash.com/photo-1719328376016-437ea808f6ab?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3',
//       full: 'https://images.unsplash.com/photo-1719328376016-437ea808f6ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=85',
//       regular:
//         'https://images.unsplash.com/photo-1719328376016-437ea808f6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=1080',
//       small:
//         'https://images.unsplash.com/photo-1719328376016-437ea808f6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=400',
//       thumb:
//         'https://images.unsplash.com/photo-1719328376016-437ea808f6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8&ixlib=rb-4.0.3&q=80&w=200',
//       small_s3:
//         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719328376016-437ea808f6ab',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/a-street-sign-in-front-of-a-tall-building-RK_MT0Fd7WI',
//       html: 'https://unsplash.com/photos/a-street-sign-in-front-of-a-tall-building-RK_MT0Fd7WI',
//       download:
//         'https://unsplash.com/photos/RK_MT0Fd7WI/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//       download_location:
//         'https://api.unsplash.com/photos/RK_MT0Fd7WI/download?ixid=M3w2Mjg5NTZ8MHwxfGFsbHwzOXx8fHx8fDJ8fDE3MjAyNTk4NjR8',
//     },
//     likes: 1,
//     liked_by_user: false,
//     current_user_collections: [],
//     sponsorship: null,
//     topic_submissions: {},
//     asset_type: 'photo',
//     user: {
//       id: 'CuivGPONdE8',
//       updated_at: '2024-07-06T07:09:59Z',
//       username: 'georgebale',
//       name: 'George Bale',
//       first_name: 'George',
//       last_name: 'Bale',
//       twitter_username: 'georgebale',
//       portfolio_url: 'http://www.georgebale.com',
//       bio: 'Travel and Automotive Photographer',
//       location: 'UK',
//       links: {
//         self: 'https://api.unsplash.com/users/georgebale',
//         html: 'https://unsplash.com/@georgebale',
//         photos: 'https://api.unsplash.com/users/georgebale/photos',
//         likes: 'https://api.unsplash.com/users/georgebale/likes',
//         portfolio: 'https://api.unsplash.com/users/georgebale/portfolio',
//         following: 'https://api.unsplash.com/users/georgebale/following',
//         followers: 'https://api.unsplash.com/users/georgebale/followers',
//       },
//       profile_image: {
//         small:
//           'https://images.unsplash.com/profile-1566325052798-075cee98082aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//         medium:
//           'https://images.unsplash.com/profile-1566325052798-075cee98082aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//         large:
//           'https://images.unsplash.com/profile-1566325052798-075cee98082aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
//       },
//       instagram_username: 'georgebale',
//       total_collections: 0,
//       total_likes: 17,
//       total_photos: 115,
//       total_promoted_photos: 22,
//       total_illustrations: 0,
//       total_promoted_illustrations: 0,
//       accepted_tos: true,
//       for_hire: true,
//       social: {
//         instagram_username: 'georgebale',
//         portfolio_url: 'http://www.georgebale.com',
//         twitter_username: 'georgebale',
//         paypal_email: null,
//       },
//     },
//   },
// ];

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    page: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = mergeArraysUnique(state.list, action.payload, 'id');
        state.page += 1;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action?.error?.message || action.payload;
      })
      .addCase(changeLike.fulfilled, (state, action) => {
        const updatedPhoto = action.payload.photo;
        const existingIndex = state.list.findIndex(
          (photo) => photo.id === updatedPhoto.id
        );

        if (existingIndex !== -1) {
          state.list[existingIndex] = updatedPhoto;
        }
      })
      .addCase(changeLike.rejected, (state, action) => {
        console.error(action?.error?.message || action.payload);
      });
  },
});

export default photosSlice.reducer;
