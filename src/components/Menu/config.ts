import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  // {
  //   label: 'Games',
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  // {
  //   label: t('Vault'),
  //   icon: 'NftIcon',
  //   href: '/staking',
  // },
  {
    label: t('Charts'),
    icon: 'InfoIcon',
    items: [
      {
        label: ' VIV Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x4666E77FA1A7F6749E48B533EF500587B094F61c',
      },
      {
        label: 'VIV Poocoin',
        href: 'https://poocoin.app/tokens/0x4666E77FA1A7F6749E48B533EF500587B094F61c',
      },
      {
        label: ' RVL Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x7EaeE60040135F20f508A393ca400dEd339d654e',
      },
      {
        label: 'RVL Poocoin',
        href: 'https://poocoin.app/tokens/0x7EaeE60040135F20f508A393ca400dEd339d654e',
      },
    ],
  },
  {
    label: t('Community'),
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://www.t.me/revivaldefi',
      },
      {
        label: 'Discord',
        href: 'https://www.discord.gg/revivaldefi',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/revivaldefi',
      },
      {
        label: 'Twitter',
        href: 'https://www.twitter.com/revivaldefi',
      },
      {
        label: 'Reddit',
        href: 'https://www.reddit.com/r/RevivalDefi',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Doc',
        href: 'https://docs.revivaldefi.com',
      },
    ],
  }
]

export default config
