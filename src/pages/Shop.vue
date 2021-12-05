<template>
  <q-page padding>
    <!-- SHOP FEATURED -->
    <RoyaleShop
      v-if="load == true"
      titleType="Destaques"
      :data="dataFeatured"
      :vbuckIcon="vbuckIcon"/>
    <!-- SHOP DAILY -->
    <RoyaleShop
      v-if="load == true"
      titleType="Diária"
      :data="dataDaily"
      :vbuckIcon="vbuckIcon"/>
    <!-- SHOP SPECIAL FEATURED -->
    <RoyaleShop
      v-if="load == true"
      titleType="Destaques Especiais"
      :data="dataSpecialFeatured"
      :vbuckIcon="vbuckIcon"/>
  </q-page>
</template>

<script>
import RoyaleShop from 'components/Fortnite/RoyaleShop.vue'
import { Loading } from 'quasar'
export default {
  components: {
    RoyaleShop
  },
  data () {
    return {
      dataDaily: [],
      dataFeatured: [],
      dataSpecialFeatured: [],
      vbuckIcon: '',
      load: false
    }
  },
  created(){
    this.getShop()
  },
  methods: {
    getShop(){
      const that = this
      Loading.show()
      that.$axios.get(that.$fortniteAPI + '/shop/br/?language=pt-BR')
      .then(response => {
        that.dataDaily = response.data.data.daily.entries
        that.dataFeatured = response.data.data.featured.entries
        that.dataSpecialFeatured = response.data.data.specialFeatured.entries
        that.vbuckIcon = response.data.data.vbuckIcon
        // console.log(response)
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
