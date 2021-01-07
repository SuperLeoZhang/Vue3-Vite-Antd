import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count:0
  },
  mutations: {
    SET_COUNT(state,msg){
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
});
