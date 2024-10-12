import { useContext } from 'react'

import { InvitationContext } from '@/context/invitation/reducer'

export const useInvitationContext = () => {
  const context = useContext(InvitationContext)
  if (context === undefined) {
    throw new Error('useInvitationContext must be used within a InvitationProvider')
  }
  return context
}
