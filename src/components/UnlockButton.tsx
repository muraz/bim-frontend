import React from 'react'
import { Button, useWalletModal } from 'bim-uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{backgroundColor: "#fab016", color: "#000"}}>
      {t('Unlock')}
    </Button>
  )
}

export default UnlockButton
