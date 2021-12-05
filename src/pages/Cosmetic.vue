<template>
  <q-page v-if="infoItem" padding class="text-white">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Loja de Hoje" icon="shop" to="/fortnite-shop" />
      <q-breadcrumbs-el :label="infoData.name" icon="people" />
    </q-breadcrumbs>
    <!-- INFO ITEM SHOP -->
    <InfoItemShop
      :infoItem="infoItem"
      :info="infoData"/>
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
      infoData: {}
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
        // console.log(that.infoData)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        Loading.hide()
        this.infoItem = true
      })
    }
  }
}
</script>
