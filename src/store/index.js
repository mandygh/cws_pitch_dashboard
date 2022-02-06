import { createStore } from 'vuex'
//import Vue from "vue";
//import Vuex from "vuex";
//import axios from "axios";
//import VueAxios from "vue-axios";

import { inject } from 'vue'



const playDataUrl = "brettphillips05/4b177fbf43b3e327cba60092d8df5b8f/raw/bc3001faca208301b37970d0aa072cddfe26126c/6a257880-bbd2-4d37-a79a-90fd6145e563.json";


export default createStore({
  state: {
    data:null
  },
  mutations: {
    SAVE_DATA(state, data) {
      state.data = data;
    }
  },
  actions: {

    loadData({commit}) {
      const axios = inject('axios')  // inject axios
      axios.defaults.baseURL = "https://gist.githubusercontent.com/";


      axios.get(playDataUrl).then(result => {
        commit('SAVE_DATA', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
