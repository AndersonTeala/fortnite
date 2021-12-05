import Vue from 'vue'
import axios from 'axios'

const fortniteAPI = 'https://fortnite-api.com/v2'

Vue.prototype.$axios = axios
Vue.prototype.$fortniteAPI = fortniteAPI