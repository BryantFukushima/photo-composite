import { MODAL_DATA } from './mutation-types'

const stateActions = () => ({
  MODAL_DATA ({ commit }, data) {
    commit(MODAL_DATA, data)
  }
})

export default stateActions
