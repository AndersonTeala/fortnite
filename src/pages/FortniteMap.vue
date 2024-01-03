<template>
  <q-page padding>
    <div class="row-12 title text-primary text-center text-h3 q-pa-md">
      MAPA e LOCAIS
    </div>
    <div v-if="carregado" class="row">
      <!-- <div class="col">
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

      </div> -->
      <img :src="maps.images.pois" id="noMapa" style="width: 100%; height: auto;" />
    </div>
    <div v-for="(item, index) in maps.pois" :key="index" class="row">
      <div class="col">
        <q-btn class="q-ma-sm" color="primary" @click="marcarPOIs(item)" :label="item.name" icon="location_on" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
export default {
  data() {
    return {
      maps: [],
      slide: 1,
      autoplay: true,
      carregado: false,
      listaDePOIs: []
    }
  },
  created() {
    this.getShop()
  },
  methods: {
    getShop() {
      const that = this
      Loading.show()
      that.$axios.get(that.$fortniteAPIV1 + '/map/?language=pt-BR')
        .then(response => {
          that.maps = response.data.data
          if (that.maps.pois.length > 0) {
            that.carregado = true
          }
          this.listaDePOIs = that.maps.pois
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          this.load = true
          Loading.hide()
        })
    },
    marcarPOIs2(poi) {
      let imagemMapa = document.getElementById('noMapa');

      if (!imagemMapa) {
        console.error("Elemento de imagem não encontrado.");
        return;
      }

      const marcador = document.createElement("img");
      marcador.src = "https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-red-pin-marker-png-image_6385786.png";
      marcador.width = 50;
      marcador.height = 50;

      imagemMapa.onload = function () {
        const posX = (poi.location.x / 100000) * imagemMapa.width;
        const posY = (poi.location.y / -100000) * imagemMapa.height;

        marcador.style.left = posX + "px";
        marcador.style.top = posY + "px";
      }

      imagemMapa.parentNode.appendChild(marcador);

      marcador.style.position = "absolute";
    },
    marcarPOIs(poi) {
      let imagemMapa = document.getElementById('noMapa');

      if (!imagemMapa) {
        console.error("Elemento de imagem não encontrado.");
        return;
      }

      const marcador = document.createElement("img");
      marcador.src = "https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-red-pin-marker-png-image_6385786.png";
      marcador.width = 50;
      marcador.height = 50;

      // const posX = (poi.location.x / 100000) * (imagemMapa.width / 2) + (imagemMapa.width / 2);
      // const posY = (poi.location.y / -100000) * (imagemMapa.height / 2) + (imagemMapa.height / 2);
      const posX = (poi.location.x / 100000) * imagemMapa.width;
      const posY = (poi.location.y / -100000) * imagemMapa.height;

      const altura = poi.location.z;

      marcador.style.position = "absolute";
      marcador.style.left = posX + "px";
      marcador.style.top = posY + "px";

      marcador.style.transform = `translate(0, 0, ${altura}px)`;

      imagemMapa.parentNode.appendChild(marcador);

      console.log(marcador);
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.title {
  font-family: 'Anton', sans-serif;
}

#noMapa {
  position: relative;
}
</style>