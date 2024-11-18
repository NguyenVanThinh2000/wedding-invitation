import { invitationInfo, invitationInfoSG } from '@/constants'

export const getInformation = (location?: 'saigon') => {
  if (location === 'saigon') {
    return invitationInfoSG
  }
  return invitationInfo
}
