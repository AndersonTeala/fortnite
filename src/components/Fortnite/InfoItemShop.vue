<template>
  <div>
    <q-dialog :maximized="true" persistent v-model="infoItem">
      <q-card class="bg-dark text-white">
        <div class="row">
          <div class="col">
            <q-btn size="md" icon="arrow_back" label="Voltar" color="primary" @click="back()"/>
            <q-btn size="md" icon="star" label="Favoritar" color="orange-9" @click="back()"/>
            <q-btn size="md" icon="home" label="Inicio" color="orange-9" @click="back()"/>
          </div>
        </div>
        <div v-for="(item, index) in data.items" :key="index">
          <!-- ITEM -->
          <div class="bg-info" v-if="index === 0">
            <q-img
            :style="'background: radial-gradient(circle, #fff 5%, ' + bgColor(item.rarity.value) +  ' 70%)'"
            :src="item.images.featured != null ? item.images.featured : item.images.icon" />
            <q-card-section class="text-center bg-info">
              <div class="text-h6">{{ item.name }}</div>
              {{ item.description }}
            </q-card-section>
          </div>
        </div>
        <!-- ITEMS -->
        <div v-if="data.items.length > 1" class="row-12 title text-white text-center text-h3 q-pa-md">
          Acompanha
        </div>
        <div v-for="(item, index) in data.items" :key="item.id" class="display-flex">
          <div v-if="index > 0" class="warp" >
            <!-- IMG -->
            <q-img
              :style="'background: radial-gradient(circle, #fff -80%, ' + bgColor(item.rarity.value) +  ' 70%)'"
              :src="item.images.featured != null ? item.images.featured : item.images.icon" >
              <div class="absolute-bottom text-subtitle2 text-center">
                {{ item.name }}
              </div>
            </q-img>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['info', 'infoItem'],
  data () {
    return {
      data: this.info
    }
  },
  watch: {
    info() {
      this.data = this.info
    }
  },
  created(){
    console.log(this.data.items)
  },
  methods: {
    bgColor(value){
      let color
      switch (value) {
        case 'uncommon':
          color = 'grey'
          break;
        case 'common':
          color = 'green'
          break;
        case 'rare':
          color = 'blue'
          break;
        case 'epic':
          color = 'purple'
          break;
        case 'legendary':
          color = 'orange'
          break;

        default:
          color = 'white'
          break;
      }
      return color
    },
    back(){
      this.$emit('back', false)
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
.title {
  font-family: 'Anton', sans-serif;
}
.display-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.warp {
  padding: 10px;
  flex-basis: 50%;
  flex-grow: 1;
}
</style>