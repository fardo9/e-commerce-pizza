import { create } from 'zustand'

type State = {
  activeId: number | null
  setActiveId: (id: number) => void
}

export const useCategoryStore = create<State>(set => ({
  activeId: 1,
  setActiveId: id => set({ activeId: id })
}))
