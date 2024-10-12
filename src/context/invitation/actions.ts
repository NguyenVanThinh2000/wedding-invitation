import { TDispatch } from './type'

export const buildActions = (dispatch: TDispatch) => {
  return {
    updateScrollLock: async (isLocked: boolean) => {
      dispatch({ type: 'update_scroll_lock', payload: isLocked })
    },
  }
}
