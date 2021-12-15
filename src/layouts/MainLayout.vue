<template>
  <q-layout class="bg-dark" view="lHh Lpr lFF">
    <q-header reveal elevated height-hint="98">
        <q-toolbar class="bg-dark">
          <div class="row justify-center full-height full-width text-center">
            <img
              alt="Fortnite logo"
              src="images/logo_fortnite_white.png"
              style="width: 200px;"
            />
          </div>
        </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      OI
    </q-drawer> -->

    <q-footer elevated>
      <Footer />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Footer from 'components/Container/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Footer
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
