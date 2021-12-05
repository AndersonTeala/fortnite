<template class="bg-dark">
  <q-page class="temp q-mt-xl bg-dark">
    <!-- SHOP -->
    <Card
      :dataCard="data"/>
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