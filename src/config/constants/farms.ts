import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'VIV',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '0x946BA928443C9b672089576E0E2FF4FaCC33852A', /* 0x4666E77FA1A7F6749E48B533EF500587B094F61c */
  //   },
  //   token: tokens.viv,
  //   quoteToken: tokens.busd,
  // },
  {
    pid: 1,
    lpSymbol: 'VIV-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x946BA928443C9b672089576E0E2FF4FaCC33852A',
    },
    token: tokens.viv,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'VIV-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5E67af5F802a6F029Bcf1FC0dad9650D7C428Ef6',
    },
    token: tokens.viv,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'RVL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x16f3a9794D3CC7ea7fbdf9a460D026db14d6AdAb',
    },
    token: tokens.rvl,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'RVL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe936ddDB3a61527Be338670b1Eb9c79bE9C148f6',
    },
    token: tokens.rvl,
    quoteToken: tokens.busd,
  },
  {
    pid: 6,
    lpSymbol: 'RVL-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xE5704e41C478344745e7BecE777BD6919D2d87De',
    },
    token: tokens.rvl,
    quoteToken: tokens.usdt,
  },
  {
    pid: 7,
    lpSymbol: 'RVL-VIV LP',
    lpAddresses: {
      97: '',
      56: '0x83acf5d1e7542e6bb2755bd64035789611f39217',
    },
    token: tokens.rvl,
    quoteToken: tokens.viv,
  },

]

export default farms