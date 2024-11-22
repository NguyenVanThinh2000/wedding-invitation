export type TParam = {
  invitationId: THost | undefined
  guestId: string
}

export interface PropsParams {
  host: THost
}

export type THost = 'thoan' | 'thinh'

export type TRole = 'thầy' | 'cô' | 'bạn' | 'anh' | 'chị' | 'ông' | 'bà' | 'em' | 'cháu' | 'anh/chị'

export type TGuest = {
  id: string
  name: string
  nameInInvitation: string
  isAttending: boolean
  wishes: string
  host: THost
  role: TRole
  location?: 'saigon'
  gift: string | null
  isSent: boolean
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
