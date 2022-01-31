import { atom } from 'recoil'

export const selectedNavItemState = atom<string>({
  key: 'selectedNavItemState',
  default: '1',
})
