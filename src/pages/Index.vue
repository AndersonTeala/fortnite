<template class="bg-dark">
  <q-page class="temp bg-dark">
    <div class="">
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
    </div>
    <!-- <div class="row justify-center full-height full-width text-center q-mb-lg desktop-only text-primary">
      <h4>Visualização somente em dispositivos móveis</h4>
    </div> -->
  </q-page>
</template>

<script>
import Card from 'src/components/Fortnite/Card.vue'
import * as html2canvas from 'html2canvas'

import { Plugins } from '@capacitor/core'
const { LocalNotifications } = Plugins

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
      smallIcon: ''
    }
  },
  mounted(){
    this.getShop('outfit')
    this.pushNot('outfit')
    // this.getNotTimeout()
  },
  beforeDestroy() {
    // this.getNotTimeout()
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
            var smallIcon = that.items[random1].images.smallIcon
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
    pushNot(){
      const canSend = LocalNotifications.requestPermission()
      var now = new Date();
      if (canSend) {
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'Corre aqui!',
              body: 'A loja atualizou!',
              id: 1,
              schedule: { at: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0, 0), repeats: true },
              attachments: null,
              actionTypeId: '',
              extra: null,
              smallIcon: '',
              iconColor: '#488AFF',
              sound: 'beep.wav'
            },
          ],
        })
      }
      // console.log('scheduled notifications', LocalNotifications);
    },
    getNotTimeout(){
      var now = new Date();
      var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0, 0) - now;
      if (millisTill10 < 0) {
          millisTill10 += 86400000;
      }
      setTimeout(this.pushNot(), millisTill10);
    },
    testt(){
      html2canvas(document.querySelector("#capture")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        var a = document.createElement("a");
        a.href = img;
        a.download = "test.png";
        a.click();
      });
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