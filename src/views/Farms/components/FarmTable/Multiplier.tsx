import React from 'react'
import styled from 'styled-components'
import { HelpIcon, Skeleton, useTooltip } from 'bim-uikit'
import { useTranslation } from 'contexts/Localization'

const ReferenceElement = styled.div`
  display: inline-block;
`

export interface MultiplierProps {
  multiplier: string
}

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  text-align: center;
  margin-right: 14px;
  background-color: #ffc426;
  color: #372206;
  border-radius: 10px;
  padding: 2px 5px;
  width: 40px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: center;
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Multiplier: React.FunctionComponent<MultiplierProps> = ({ multiplier }) => {
  const displayMultiplier = multiplier ? multiplier.toLowerCase() : <Skeleton width={30} />
  const { t } = useTranslation()
  const tooltipContent = (
    <div>
      {t('The multiplier represents the amount of CAKE rewards each farm gets.')}
      <br />
      <br />
      {t('For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.')}
    </div>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, {
    placement: 'top-end',
    tooltipOffset: [20, 10],
  })

  return (
    <Container>
      <MultiplierWrapper>{displayMultiplier}</MultiplierWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
  )
}

export default Multiplier
