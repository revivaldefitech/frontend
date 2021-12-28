import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Revival DeFi',
  description:
    'The most popular AMM on BSC by user count! Earn VIV through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens!',
  image: 'https://dex.rvl.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Revival DeFi')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Revival DeFi')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Revival DeFi')}`,
      }
    case '/vault':
      return {
        title: `${t('Vault')} | ${t('Revival DeFi')}`,
      }
    default:
      return null
  }
}
