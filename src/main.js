// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newNoteId: 2,
    notes: [{ name: 'test', body: 'example', id: 1 }]
  },
  mutations: {
    addNote (state) {
      state.notes.push({ name: 'placeholder', body: 'edit', id: state.newNoteId++ })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
