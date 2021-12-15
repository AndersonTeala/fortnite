<template>
  <div>
    <q-tabs
      v-model="tabRoute"
      indicator-color="primary"
      class="bg-dark text-primary shadow-2"
      align="justify"
      outside-arrows
      mobile-arrows
      no-caps
    >
      <q-tab name="/" icon="fas fa-home" @click="goTo('/')" />
      <q-tab name="/fortnite-shop" icon="fas fa-shopping-cart" @click="goTo('/fortnite-shop')" />
      <q-tab name="news" icon="fas fa-newspaper" />
      <q-tab name="bag" icon="fas fa-shopping-bag" />
      <q-tab name="map" icon="fas fa-map" />
      <q-tab name="youtube" icon="fab fa-youtube" />
      <q-tab name="twitch" icon="fab fa-twitch" />
    </q-tabs>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      tabRoute: '/'
    }
  },
  watch: {
    '$route' (to, from) {
      this.tabRoute = to.path
    },
  },
  created () {
    this.tabRoute = this.$route.path
  },
  methods: {
    goTo (url) {
      if(this.$router.history.current.path !== url) {
        this.$router.push(url)
      }
    }
  }
}
</script>
