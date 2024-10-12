import { InvitationProvider } from '@/context/invitation/reducer'
import { combineComponents } from '@/utils'

const providers = [InvitationProvider]
export const AppContextProvider = combineComponents(...providers)
