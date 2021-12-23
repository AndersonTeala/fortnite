<template>
  <q-page padding>
    <div class="row-12 title text-primary text-center text-h3 q-pa-md">
      NOVIDADES
    </div>
    <!-- <div class="row">
      <div class="col">
        <q-img
          :src="items.image" />
      </div>
    </div> -->
    <div v-for="(item, index) in items.motds" :key="index" class="row q-my-lg">
      <div class="col">
        <q-card class="bg-primary text-white title">
          <img :src="item.image">

          <q-card-section>
            <div class="text-h6">{{ item.title }}</div>
            <div class="text-subtitle2">{{ item.body }}</div>
          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
export default {
  data () {
    return {
      items: []
    }
  },
  created(){
    this.getShop()
  },
  methods: {
    getShop(){
      const that = this
      Loading.show()
      that.$axios.get(that.$fortniteAPI + '/news/br/?language=pt-BR')
      .then(response => {
        that.items = response.data.data
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        this.load = true
        Loading.hide()
      })
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.title {
  font-family: 'Anton', sans-serif;
}
</style>