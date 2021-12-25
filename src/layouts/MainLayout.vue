<template>
  <q-layout class="bg-dark" view="lHh Lpr lFF">
    <q-header reveal elevated height-hint="98">
        <q-toolbar class="bg-dark">
          <div class="row justify-center full-height full-width text-center q-my-sm">
            <div class="title text-h4 text-center text-primary">
              <template>
                <img src="images/tealagames.png" class="logoTeala">
              </template>
            </div>
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.title {
  font-family: 'Anton', sans-serif;
}
.logoTeala {
  max-width: 300px;
  max-height: 150px;
  width: auto;
  height: auto;
}
</style>