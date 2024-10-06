import { axiosInstance } from '@/config/axios'
import { TGuest, TGuestUpdate, TResponse } from '@/types'

const apiEndPoint = '/guests'
export const invitationApiEndPoints = {
  getGuest: (id: string) => axiosInstance.get<TResponse<TGuest>>(`${apiEndPoint}/${id}`),
  addWishes: (id: string, wishes: string) =>
    axiosInstance.patch<TResponse<TGuest>>(`${apiEndPoint}/${id}`, { wishes }),
  updateGuest: (id: string, guest: TGuestUpdate) =>
    axiosInstance.patch<TResponse<TGuest>>(`${apiEndPoint}/${id}`, guest),
  findAndUpdateGuest: (guest: TGuestUpdate) =>
    axiosInstance.patch<TResponse<TGuest>>(`${apiEndPoint}/findAndUpdate`, guest),
}
