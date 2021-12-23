<template>
  <q-page padding>
    <div class="row-12 title text-primary text-center text-h3 q-pa-md">
      MAPA e LOCAIS
    </div>
    <div v-if="carregado" class="row">
      <div class="col">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          :autoplay="autoplay"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" :img-src="maps.images.pois" />
          <q-carousel-slide :name="2" :img-src="maps.images.blank" />
        </q-carousel>

      </div>
    </div>
    <div v-for="(item, index) in maps.pois" :key="index" class="row">
      <div class="col">
      <q-chip size="md" square color="primary" text-color="white" icon="location_on" >
        {{ item.name }}
      </q-chip>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
export default {
  data () {
    return {
      maps: [],
      slide: 1,
      autoplay: true,
      carregado: false,
    }
  },
  created(){
    this.getShop()
  },
  methods: {
    getShop(){
      const that = this
      Loading.show()
      that.$axios.get(that.$fortniteAPIV1 + '/map/?language=pt-BR')
      .then(response => {
        that.maps = response.data.data
        if(that.maps.pois.length > 0){
          that.carregado = true
        }
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