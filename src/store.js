import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    classes: {
      spm: [
        {
          date: '2020-05-13',
          link: '2020-05-13 online class link',
        },
        {
          date: '2020-05-14',
          link: '2020-05-14 online class link',
        },
        {
          date: '2020-05-15',
          link: '2020-05-15 online class link',
        },
        {
          date: '2020-05-16',
          link: '2020-05-16 online class link',
        },
        {
          date: '2020-05-17',
          link: '2020-05-17 online class link',
        },
      ],
      co: [
        {
          date: '2020-05-13',
          link: '2020-05-13 online class link',
        },
        {
          date: '2020-05-14',
          link: '2020-05-14 online class link',
        },
        {
          date: '2020-05-15',
          link: '2020-05-15 online class link',
        },
        {
          date: '2020-05-16',
          link: '2020-05-16 online class link',
        },
        {
          date: '2020-05-17',
          link: '2020-05-17 online class link',
        },
      ],
      sna: [
        {
          date: '2020-05-13',
          link: '2020-05-13 online class link',
        },
        {
          date: '2020-05-14',
          link: '2020-05-14 online class link',
        },
        {
          date: '2020-05-15',
          link: '2020-05-15 online class link',
        },
        {
          date: '2020-05-16',
          link: '2020-05-16 online class link',
        },
        {
          date: '2020-05-17',
          link: '2020-05-17 online class link',
        },
      ],
    },
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    CREATE_CLASS (state, payload) {
      state.classes[payload.course].push({
        date: payload.date,
        link: `${payload.date} online class link`,
      },
      )
    },
  },
  actions: {
    createClass ({ commit, state }, payload) {
      const selectedClass = state.classes[payload.course].find(cls => cls.date === payload.date)
      if (!selectedClass) {
        commit('CREATE_CLASS', payload)
        return true
      }
      return false
    },
  },
})
