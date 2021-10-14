import storeActions from './storeActions'
import storeMutations from './storeMutations'

export const state = () => ({
  modalActive: false
})

export const actions = storeActions()

export const mutations = storeMutations()
