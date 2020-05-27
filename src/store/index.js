import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		cssTypeA: false,
		cssTypeB: false,
		cssTypeC: false,
		ifShowLessonArr: false,
		ifShowAccountComponent: false,
		initialYear: 0,
		initialMonth: 0,
		initialDate: '',
  },
  mutations: {
		ensureCssType(state){
			let width = window.screen.width
			if(width < 1200){
				state.cssTypeA = true
			}else if(width < 1450){
				state.cssTypeB = true
			}else{
				state.cssTypeC = true
			}
		},
		changeIfShowLessonArr(state){
			state.ifShowLessonArr = !state.ifShowLessonArr
		},
		changeIfShowAccountComponent(state){
			state.ifShowAccountComponent = !state.ifShowAccountComponent
		},
		setInitialDate(state){
			let nowDate = new Date();
			let date = {
				y : nowDate.getFullYear(),
				m : nowDate.getMonth() + 1,
				d : nowDate.getDate(),
			}
			date.m = date.m < 10 ? "0" + date.m : date.m;
			date.d = date.d < 10 ? "0" + date.d : date.d;
			state.initialYear = date.y;
			state.initialMonth = date.m;
			state.initialDate = date.y + '-' + date.m + '-' + date.d;
			console.log(state.initialDate)
		}
  },
  actions: {
  },
  modules: {
  }
})
