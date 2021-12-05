<template>
  <q-layout class="bg-dark" view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar class="bg-dark">
          <div class="row items-center">
            <div class="col-3">
              <q-btn
                flat
                dense
                round
                icon="menu"
                aria-label="Menu"
                @click="leftDrawerOpen = !leftDrawerOpen"
                size="xl"
                color="primary"
              />
            </div>
            <div class="col text-center">
              <img
                alt="Quasar logo"
                src="images/logo_fortnite_white.png"
                style="width: 220px;"
              >
            </div>
          </div>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      OI
    </q-drawer>

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
