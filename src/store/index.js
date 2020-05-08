import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		ifShowLessonArr: false,
		ifShowAccountController: false,
  },
  mutations: {
		changeIfShowLessonArr(state){
			state.ifShowLessonArr = !state.ifShowLessonArr
		},
		ChangeIfShowAccountController(state){
			state.ifShowAccountController = !state.ifShowAccountController
		},
  },
  actions: {
  },
  modules: {
  }
})
