<template>
  <div class="mobile-only">
    <q-tabs
      v-model="tabRoute"
      indicator-color="yellow"
      class="bg-dark text-primary shadow-2"
      align="justify"
      outside-arrows
      mobile-arrows
    >
      <q-tab name="/" icon="fas fa-home" @click="goTo('/')" />
      <q-tab name="/fortnite-shop" icon="fas fa-shopping-cart" @click="goTo('/fortnite-shop')" />
      <q-tab name="/fortnite-news" icon="fas fa-newspaper" @click="goTo('/fortnite-news')" />
      <q-tab name="/fortnite-cosmetics" icon="fas fa-shopping-bag" @click="goTo('/fortnite-cosmetics')" />
      <q-tab name="/fortnite-map" icon="fas fa-map" @click="goTo('/fortnite-map')" />
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
