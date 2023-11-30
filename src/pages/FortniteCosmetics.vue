<template>
  <q-page padding>
    <!-- TITLE -->
    <div class="row-12 title text-primary text-center text-h3 q-pa-md">
      ITENS
    </div>
    <div class="row items-center justify-center text-center">
      <div class="col">
        <q-select :dense="true" :dark="true" filled v-model="select" :options="buttons" label="Selecionar tipo" emit-value
          map-options @input="changeType(select)" />
      </div>
    </div>
    <div class="row items-center justify-center text-center q-my-md">
      <div class="col">
        <q-input :dark="true" v-model="search" label="Pesquisar" filled :dense="true">

          <template v-slot:hint>
            Pesquisar
          </template>

          <template v-slot:after>
            <q-btn :dark="true" color="primary" size="md" @click="searchItens(search)" icon="search" />
            <q-btn :disabled="items.length == 0" :dark="true" color="orange" size="md" @click="reset()"
              icon="clear_all" />
          </template>
        </q-input>
      </div>
    </div>
    <div v-if="notItem" class="row items-center justify-center text-center q-my-md">
      <q-chip size="md" square color="orange" text-color="white" icon-right="sentiment_very_dissatisfied">
        Item não encontrado, tente novamente!
      </q-chip>
    </div>
    <!-- Outfit -->
    <div v-if="mode" class="row">
      <div class="col">
        <Outfit :data="items" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Outfit from 'components/Fortnite/Cosmetics/Outfit.vue'

import { Loading } from 'quasar'
export default {
  components: {
    Outfit
  },
  data() {
    return {
      items: [],
      buttons: [
        {
          label: 'Estandartes',
          value: 'banner',
        },
        {
          label: 'Trajes',
          value: 'outfit',
        },
        {
          label: 'Mochilas',
          value: 'backpack',
        },
        {
          label: 'Picaretas',
          value: 'pickaxe',
        },
        {
          label: 'Asa-Delta',
          value: 'glider',
        },
        {
          label: 'Envelopamentos',
          value: 'wrap',
        },
        {
          label: 'Rastro de Fumaça',
          value: 'contrail',
        },
        {
          label: 'Gestos',
          value: 'emote',
        },
        {
          label: 'Emoticons',
          value: 'emoji',
        },
        {
          label: 'Tela de Carregamento',
          value: 'loadingscreen',
        },
        {
          label: 'Músicas',
          value: 'music',
        },
        {
          label: 'Mascotes',
          value: 'petcarrier',
        },
        {
          label: 'Sprays',
          value: 'spray',
        },
      ],
      select: null,
      mode: false,
      search: '',
      notItem: false,
    }
  },
  created() {
    this.getShop()
  },
  methods: {
    getShop(type = null) {
      const that = this
      that.reset()
      Loading.show()
      let url = that.$fortniteAPI + '/cosmetics/br'
      if (type != null) {
        url += '/search/all?type=' + type + '&searchLanguage=pt-BR'
      }
      that.$axios.get(url)
        .then(response => {
          that.items = response.data.data
          that.mode = true
        }).catch(error => {
          that.notItem = true
        }).finally(() => {
          Loading.hide()
        })
    },
    searchItens(item) {
      const that = this
      that.reset()
      Loading.show()
      that.$axios.get(that.$fortniteAPI + '/cosmetics/br/search/all?language=pt-BR&name=' + item)
        .then(response => {
          that.items = response.data.data
          that.mode = true
        }).catch(error => {
          that.notItem = true
          console.log(error)
        }).finally(() => {
          Loading.hide()
        })
    },
    changeType(select) {
      this.reset()
      this.getShop(select)
    },
    reset() {
      this.notItem = false
      this.mode = false
      this.items = []
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