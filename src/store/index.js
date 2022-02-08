import {createStore} from 'vuex'

import {inject} from 'vue'


const playDataUrl = "https://gist.githubusercontent.com/brettphillips05/4b177fbf43b3e327cba60092d8df5b8f/raw/bc3001faca208301b37970d0aa072cddfe26126c/6a257880-bbd2-4d37-a79a-90fd6145e563.json";
const statsAPI = "https://statsapi.mlb.com/api/v1/people/"
//const savantURL = "https://baseballsavant.mlb.com/player/zone?player_id="

export default createStore({
    state: {
        data: null,
        pitcher: null,
        batter: null,
        stateFinal: false,
        velo: 0
    },
    mutations: {
        SAVE_DATA(state, data) {
            state.data = data;
        },
        SAVE_PITCHER(state, data) {
            state.pitcher = data;
        },
        SAVE_BATTER(state, data) {
            state.batter = data;
        },

        SET_VELO(state, data) {
            state.velo = data
        }
    },
    actions: {

        loadData({commit}) {
            console.log(this.state.stateFinal)
            const axios = inject('axios')  // inject axios
            axios.get(playDataUrl).then(result => {
                commit('SAVE_DATA', result.data);

                function getStrikeZoneInfo(data) {
                    return data.type_id == 1028;
                }

                let info = result.data.measurements.statistics.filter(getStrikeZoneInfo)[0]
                let velo = info.value + " " + info.unit;
                commit('SET_VELO', velo);
                return axios.get(statsAPI + this.state.data.gameMetaData.FPitcherID)

            }).then(result => {
                commit('SAVE_PITCHER', result.data.people[0]);
                return axios.get(statsAPI + this.state.data.gameMetaData.FBatterID)
            }).then(result => {
                commit('SAVE_BATTER', result.data.people[0]);
                //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                this.state.stateFinal = true;
                // return axios.get(savantURL+ this.state.data.gameMetaData.FBatterID)
            })
                .catch(error => {
                    throw new Error(`API ${error}`);
                });


        }


    },
    modules: {}
})
