<template>
  <div class="q-ma-md" :style="dataCard.label != 'LOJA DE HOJE' ? 'padding-top: 17%' : 'padding-top: 7%'">
    <q-card class="my-card" style="height: 200px; background: radial-gradient(circle, #fff -10%, #1492FF 70%)">
      <!-- IMG -->
      <img class="absolute-center" style="width: 268px; padding-bottom: 19%" :src="dataCard.image">
      <!-- BUTTON -->
      <q-card-actions class="absolute-bottom">
        <q-btn class="full-width" color="yellow" :to="dataCard.to">
          <div class="row items-center no-wrap">
            <div class="text-dark text-weight-bolder text-h5">
              {{ dataCard.label }}
            </div>
          </div>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['dataCard'],
  data () {
    return {}
  }
}
</script>
