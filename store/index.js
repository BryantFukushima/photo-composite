import storeActions from './storeActions'
import storeMutations from './storeMutations'

export const state = () => ({
  modalData: null
})

export const actions = storeActions()

export const mutations = storeMutations()
