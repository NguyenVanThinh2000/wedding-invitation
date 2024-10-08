export type TParam = {
  invitationId: 'thoan' | 'thinh' | undefined
  guestId: string
}

export interface PropsParams {
  mainName: 'thoan' | 'thinh'
}

export type TGuest = {
  id: string
  name: string
  nameInInvitation: string
  isAttending: boolean
  wishes: string
}

export type TResponse<T> = {
  error: string | null
  statusCode: number
  data: T
}

export type TGuestUpdate = {
  name?: string
  nameInInvitation?: string
  isAttending?: boolean
  wishes?: string
}

export type TMainName = 'thoan' | 'thinh'
