import {
	createStore
} from 'vuex'
// import getter from './getters.js'
// import actions from './actions.js'
// import mutations from './mutations.js'
// import state from './state.js'

const store = createStore({
	state() {
		return {
			count: 0,
			username: 'lisi'
		}
	},
	mutations: {
		increment(state) {
			state.count++
		},
		updatename(state, username) {
			state.username = username
		}
	},
	actions: {
		updatename({
			commit
		}, pa) {
			setTimeout(() => {
				console.log(111111)
				commit('updatename', pa)
			}, 1000)

		}
	},
	getters: {

	}
})

export default store
