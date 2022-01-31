import { atom } from 'recoil'

export const selectedNavItemState = atom<number>({
  key: 'selectedNavItemState',
  default: 1,
})
