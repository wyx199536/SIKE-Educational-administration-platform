import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		cssTypeA: false,
		cssTypeB: false,
		cssTypeC: false,
		ifShowLessonArr: false,
		ifShowAccountController: false,
  },
  mutations: {
		ensureCssType(state){
			let width = window.screen.width
			console.log(width)
			if(width < 1200){
				state.cssTypeA = true
			}else if(width < 1450){
				state.cssTypeB = true
			}else{
				state.cssTypeC = true
			}
			console.log('a'+state.cssTypeA)
			console.log('b'+state.cssTypeB)
			console.log('c'+state.cssTypeC)
		},
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
