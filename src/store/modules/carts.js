import { INITCART } from '../types/actionTypes'
// import cartApi from '../../apis/cartApi'

export default {
  state: {
    cartInfo: []
  },
  mutations: {
    'INIT': (state, data) => {
      // console.log('#3 mutations: init'+data)
      // state.cartInfo = data
        state.cartInfo.push(data)
    }
  },
  actions: {
    [INITCART]: async ({ commit },data) => {
      // let data = await cartApi.getCarData()
      // console.log('#2 actions: data'+data)
      commit('INIT', data)
    }
  },
  getters: {
    'GETCART': ({ cartInfo }) => {
      return cartInfo
    }
  }
}
