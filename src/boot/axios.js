import Vue from 'vue'
import axios from 'axios'

const fortniteAPI = 'https://fortnite-api.com/v2'
const fortniteAPIV1 = 'https://fortnite-api.com/v1'

Vue.prototype.$axios = axios
Vue.prototype.$fortniteAPI = fortniteAPI
Vue.prototype.$fortniteAPIV1 = fortniteAPIV1