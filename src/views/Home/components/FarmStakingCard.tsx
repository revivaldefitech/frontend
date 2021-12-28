import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Flex } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { useMasterchef } from 'hooks/useContract'
import { harvestFarm } from 'utils/calls'
import UnlockButton from 'components/UnlockButton'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  // background-image: url('/images/home/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const {t} = useTranslation()
  const xhashBalance = useTokenBalance(getCakeAddress())
  const xhashUserBalance = xhashBalance.balance ? getBalanceNumber(xhashBalance.balance) : 0
  const xhashPrice = usePriceCakeBusd().toNumber()

  const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
    const tokenAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: `https://test.activswap.finance/logo.png`,
        },
      },
    })
  
    return tokenAdded
  }

  const { toastSuccess, toastError } = useToast()
  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 0).length
  const masterChefContract = useMasterchef()
  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of farmsWithStakedBalance) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
        toastSuccess(
          `${t('Harvested')}!`,
          t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'VIV' }),
        )
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [farmsWithStakedBalance, masterChefContract, toastSuccess, toastError, t])

  
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Farms & Staking')}
        </Heading>
        <Flex style={{verticalAlign: 'center'}}>
        <CardImage src="/logo.png" alt="cake logo" width={64} height={64} />
          <Button 
            variant="text"
            style={{height: 32, marginTop: 20, marginLeft: 16, backgroundColor: '#d9d7f2'}}
            onClick={() => registerToken('0x4666e77fa1a7f6749e48b533ef500587b094f61c', 'VIV', 18)}>
            +
            <img src='/images/metamask.png' alt='MetaMask Logo' style={{width: 16, height: 16, marginLeft: 4}}/>
          </Button>
        </Flex>
        <Block>
          <Label>{t('VIV to Harvest')}</Label>
          <CakeHarvestBalance earningsSum={farmEarningsSum}/>
          <Label>~${(xhashPrice * farmEarningsSum).toFixed(2)}</Label>
        </Block>
        <Block>
          <Label >{t('VIV in Wallet')}</Label>
          <CakeWalletBalance xhashBalance={xhashUserBalance} />
          <Label>~${(xhashPrice * xhashUserBalance).toFixed(2)}</Label>
        </Block>
        <Actions>
          {account ? (
          <Flex >
            <Button
              mr="8px"
              id="harvest-all"
              disabled={numFarmsToCollect <= 0 || pendingTx}
              onClick={harvestAllFarms}
            >
              {pendingTx ? t('Collecting VIV') : t(`Harvest all %farm%`, { farm : numFarmsToCollect })}
            </Button>
            <Button 
            style={{color:"#3952a8", background:"white"}}
            target="_blank"
            as='a' href="/swap">
              {t('Buy VIV token')}
              </Button>
            </Flex>
          ) : (
            <UnlockButton />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
