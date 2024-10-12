import { createContext, useMemo, useReducer } from 'react'

import { buildActions } from './actions'
import { initialInvitationState } from './const'
import { TAction, TInvitationContextProps, TInvitationProviderProps, TInvitationState } from './type'

export const InvitationContext = createContext<TInvitationContextProps>(undefined)

export const InvitationProvider = ({ children }: TInvitationProviderProps) => {
  const [state, dispatch] = useReducer(invitationReducer, initialInvitationState)

  const actions = buildActions(dispatch)

  const value = useMemo(
    () => ({
      state,
      dispatch,
      actions,
    }),
    [state, actions],
  )

  return <InvitationContext.Provider value={value}>{children}</InvitationContext.Provider>
}

export const invitationReducer = (state: TInvitationState, action: TAction): TInvitationState => {
  switch (action.type) {
    case 'update_scroll_lock': {
        return {
            ...state,
            isScrollLock: action.payload,
        }
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}