<template class="bg-dark">
  <q-page class="temp q-mt-xl bg-dark">
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
        to: '/fortnite-shop'
      },
      dataMap: {
        image: 'https://fortnite-api.com/images/cosmetics/br/cid_a_261_athena_commando_m_headband/featured.png',
        label: 'MAPA',
        to: '/fortnite-shop'
      },
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.temp {
  font-family: 'Anton', sans-serif;
}
</style>