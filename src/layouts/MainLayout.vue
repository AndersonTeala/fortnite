<template>
  <q-layout class="bg-dark" view="lHh Lpr lFF">
    <q-header reveal elevated height-hint="98">
        <q-toolbar class="bg-dark">
          <div class="row justify-center full-height full-width text-center">
            <img
              alt="Quasar logo"
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
