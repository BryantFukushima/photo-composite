import { MODAL_DATA } from './mutation-types.js'

const stateMutations = () => ({
  [MODAL_DATA] (state, data) {
    state.modalData = data
  }
})

export default stateMutations
