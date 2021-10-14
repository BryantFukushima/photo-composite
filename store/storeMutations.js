import { TOGGLE_MODAL } from './mutation-types.js'

const stateMutations = () => ({
  [TOGGLE_MODAL] (state, data) {
    state.modalActive = data
  }
})

export default stateMutations
