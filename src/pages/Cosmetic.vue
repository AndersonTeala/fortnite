<template>
  <q-page v-if="infoItem" padding class="text-white">
    <!-- <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Loja de Hoje" icon="shop" to="/fortnite-shop" />
      <q-breadcrumbs-el :label="infoData.name" icon="people" />
    </q-breadcrumbs> -->
    <!-- INFO ITEM SHOP -->
    <!-- <InfoItemShop
      :infoItem="infoItem"
      :info="infoData"/> -->
    <!-- ITEM -->
    <div class="bg-info">
      <q-img
      :style="'background: radial-gradient(circle, #fff 5%, ' + bgColor(infoData.rarity.value) +  ' 70%)'"
      :src="infoData.images.featured != null ? infoData.images.featured : infoData.images.icon" />
      <q-card-section class="text-center bg-info">
        <div class="text-h6">{{ infoData.name }}</div>
        <div class="text-h6">{{ infoData.description }}</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 q-mt-sm q-mb-xs text-primary">Raridade:</div>
        <div class="text-caption text-white">
          {{ infoData.rarity.displayValue }}
        </div>
        <div class="text-h6 q-mt-sm q-mb-xs text-primary">Lançamento:</div>
        <div class="text-caption text-white">
          {{ infoData.introduction.text }}
        </div>
        <div class="text-h6 q-mt-sm q-mb-xs text-primary">Última aparição na loja:</div>
        <div class="text-caption text-white">
          {{ infoData.shopHistory[position] | formatarData }}
        </div>
      </q-card-section>
      <q-btn
          icon="star"
          text-color="dark"
          color="amber-9"
          label="Adicionar favoritos"
          class="full-width text"
        />
    </div>
  </q-page>
</template>

<script>
import InfoItemShop from 'components/Fortnite/InfoItemShop.vue'
import { Loading } from 'quasar'
export default {
  // name: 'PageName',
  components: {
    InfoItemShop
  },
  data () {
    return {
      id: this.$route.params.id,
      infoItem: false,
      infoData: {},
      position: null
    }
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id
    }
  },
  mounted(){
    this.getItem()
  },
  methods: {
    getItem(){
      const that = this
      Loading.show()
      that.$axios.get(that.$fortniteAPI + '/cosmetics/br/' + this.id + '?language=pt-BR')
      .then(response => {
        that.infoData = response.data.data
        this.position = response.data.data.shopHistory.length - 2
        console.log(that.infoData)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        Loading.hide()
        this.infoItem = true
      })
    },
    bgColor(value){
      let color
      switch (value) {
        case 'uncommon':
          color = 'grey'
          break;
        case 'common':
          color = 'green'
          break;
        case 'rare':
          color = 'blue'
          break;
        case 'epic':
          color = 'purple'
          break;
        case 'legendary':
          color = 'orange'
          break;

        default:
          color = 'white'
          break;
      }
      return color
    },
  }
}
</script>
