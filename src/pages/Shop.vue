<template>
  <q-page padding>
    <!-- SHOP FEATURED -->
    <div v-if="load == true">
      <RoyaleShop v-if="dataFeatured != null" titleType="Destaques" :data="dataFeatured" :vbuckIcon="vbuckIcon" />
      <!-- SHOP DAILY -->
      <RoyaleShop v-if="dataDaily != null" titleType="Diária" :data="dataDaily" :vbuckIcon="vbuckIcon" />
      <!-- SHOP SPECIAL FEATURED -->
      <RoyaleShop v-if="dataSpecialFeatured != null" titleType="Destaques Especiais" :data="dataSpecialFeatured"
        :vbuckIcon="vbuckIcon" />
    </div>
  </q-page>
</template>

<script>
import RoyaleShop from 'components/Fortnite/RoyaleShop.vue'
import { Loading } from 'quasar'

export default {
  components: {
    RoyaleShop
  },
  data() {
    return {
      dataDaily: null,
      dataFeatured: null,
      dataSpecialFeatured: null,
      vbuckIcon: '',
      load: false
    }
  },
  created() {
    this.getShop()
  },
  methods: {
    getShop() {
      const that = this
      Loading.show()
      that.$axios.get(that.$fortniteAPI + '/shop/br/?language=pt-BR')
        .then(response => {
          this.traitData(response.data.data)
          that.vbuckIcon = response.data.data.vbuckIcon
        }).catch(error => {
          // console.log(error)
        }).finally(() => {
          this.load = true
          Loading.hide()
        })
    },
    traitData(data) {
      if (data.daily) {
        this.dataDaily = data.daily.entries
      }
      if (data.specialFeatured) {
        this.dataSpecialFeatured = data.specialFeatured.entries
      }
      if (data.featured) {
        this.dataFeatured = data.featured.entries
      }
    }
  }
}
</script>
