<template class="bg-dark">
  <q-page class="temp bg-dark mobile-only">
    <div class="row justify-center full-height full-width text-center q-mb-lg">
      <img
        class="logoFortnite"
        alt="Fortnite logo"
        src="images/logo_fortnite_white.png"
      />
    </div>
    <div v-if="mode" class="q-pa-md">
      <q-card flat :dark="true" :square="false" :bordered="false">
        <q-skeleton style="height: 200px; background: radial-gradient(circle, #fff -10%, #1492FF 70%)" square />
        <q-skeleton type="QToolbar" class="text-subtitle1 bg-yellow absolute-bottom" />
      </q-card>
    </div>
    <div v-if="mode == false">
      <!-- SHOP -->
      <Card
        :dataCard="data"/>
      <!-- NEWS -->
      <Card
        :dataCard="dataNews"/>
      <!-- ITENS -->
      <Card
        :dataCard="dataItens"/>
      <!-- MAP -->
      <Card
        :dataCard="dataMap"/>
    </div>
  </q-page>
</template>

<script>
import Card from 'src/components/Fortnite/Card.vue'
export default {
  name: 'PageIndex',
  components: {
    Card
  },
  data () {
    return {
      data: {
        image: 'https://fortnite-api.com/images/cosmetics/br/cid_527_athena_commando_f_streetfashionred/featured.png',
        label: 'LOJA DE HOJE',
        to: '/fortnite-shop'
      },
      dataNews: {
        image: 'https://fortnite-api.com/images/cosmetics/br/cid_934_athena_commando_m_vertigo/featured.png',
        label: 'NOVIDADES',
        to: '/fortnite-news'
      },
      dataItens: {
        image: 'https://fortnite-api.com/images/cosmetics/br/cid_a_262_athena_commando_m_headbandk/featured.png',
        label: 'TODOS OS ITENS',
        to: '/fortnite-cosmetics'
      },
      dataMap: {
        image: 'https://fortnite-api.com/images/cosmetics/br/cid_a_261_athena_commando_m_headband/featured.png',
        label: 'MAPA',
        to: '/fortnite-map'
      },
      items: [],
      mode: true,
    }
  },
  mounted(){
    this.getShop('outfit')
  },
  methods: {
    getShop(type){
      const that = this
      that.$axios.get(that.$fortniteAPI + '/cosmetics/br/search/all?language=pt-BR&type=' + type)
      .then(response => {
        that.items = response.data.data
        for (let i = 0; i < that.items.length; i++) {
          var n = 1
          let min = Math.ceil(1)
          let max = Math.floor(that.items.length - 50)
          let random1 = Math.floor(Math.random() * (max - min + 1)) + min
          let random2 = Math.floor(Math.random() * (max - min + 1)) + min
          let random3 = Math.floor(Math.random() * (max - min + 1)) + min
          let random4 = Math.floor(Math.random() * (max - min + 1)) + min
          if(that.items[random1]){
            var image1 = that.items[random1].images.featured != null ? that.items[random1].images.featured : that.items[random1].images.icon
          }
          if(that.items[random2]){
            var image2 = that.items[random2].images.featured != null ? that.items[random2].images.featured : that.items[random2].images.icon
          }
          if(that.items[random3]){
            var image3 = that.items[random3].images.featured != null ? that.items[random3].images.featured : that.items[random3].images.icon
          }
          if(that.items[random4]){
            var image4 = that.items[random4].images.featured != null ? that.items[random4].images.featured : that.items[random4].images.icon
          }
          that.mode = false
          that.data.image = image1
          that.dataNews.image = image2
          that.dataItens.image = image3
          that.dataMap.image = image4
          break
        }
      }).catch(error => {
        console.log(error)
      })
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.temp {
  font-family: 'Anton', sans-serif;
}
.logoFortnite {
  max-width: 200px;
  max-height: 150px;
  width: auto;
  height: auto;
}
</style>