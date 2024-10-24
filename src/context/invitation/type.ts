import { buildActions } from './actions'

export type TInvitationContextProps =
  | {
      state: TInvitationState
      dispatch: TDispatch
      actions: ReturnType<typeof buildActions>
    }
  | undefined

export type TDispatch = (action: TAction) => void

export type TInvitationState = {
  isScrollLock: boolean
  isLoading: boolean
  error: string | null
  scroll_trigger: string
}

export type TInvitationProviderProps = { children: React.ReactNode }

export type TAction =
  | {
      type: 'update_scroll_lock'
      payload: boolean
    }
  | {
      type: 'update_is_touch'
      payload: string
    }
