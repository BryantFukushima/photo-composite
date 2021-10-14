import { TOGGLE_MODAL } from './mutation-types'

const stateActions = () => ({
  TOGGLE_MODAL ({ commit }, data) {
    commit(TOGGLE_MODAL, data)
  }
})

export default stateActions
