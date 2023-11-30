<template>
  <div>
    <q-dialog :maximized="true" v-model="infoItem">
      <q-card class="bg-dark text-white">
        <div class="row">
          <q-btn @click="yourCallBackFunction(true)" icon="arrow_back" flat dense color="primary" label="Voltar"
            class="col-auto q-ma-sm" />
        </div>
        <div v-for="(item, index) in data.items" :key="index">
          <!-- ITEM -->
          <div class="bg-info text-center" v-if="index === 0">
            <q-img :style="'background: radial-gradient(circle, #fff 5%, ' + bgColor(item.rarity.value) + ' 70%)'"
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
          <div v-if="index > 0" class="warp">
            <!-- IMG -->
            <q-img :style="'background: radial-gradient(circle, #fff -80%, ' + bgColor(item.rarity.value) + ' 70%)'"
              :src="item.images.featured != null ? item.images.featured : item.images.icon">
              <div class="absolute-bottom text-subtitle2 text-center">
                {{ item.name }}
              </div>
            </q-img>
          </div>
        </div>
        <q-card-section>
          <div class="text-h6 q-mt-sm q-mb-xs text-primary">Raridade:</div>
          <div class="text-caption text-white">
            {{ data.items[0].rarity.displayValue }}
          </div>
          <div class="text-h6 q-mt-sm q-mb-xs text-primary">Lançamento:</div>
          <div class="text-caption text-white">
            {{ data.items[0].introduction.text }}
          </div>
          <div v-if="data.items[0].shopHistory != null" class="text-h6 q-mt-sm q-mb-xs text-primary">Última aparição na
            loja:</div>
          <div v-if="data.items[0].shopHistory != null" class="text-caption text-white">
            {{ data.items[0].shopHistory[position] | formatarData }}
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { Loading } from 'quasar'
export default {
  name: 'InfoItemShop',
  props: ['info', 'infoItem'],
  data() {
    return {
      data: this.info,
      position: 0,
      next: false,
    }
  },
  watch: {
    info() {
      this.data = this.info
    },
  },
  created() {
    Loading.show()
    if (this.data.items == undefined) {
      var arrObj = [
        this.data
      ];
      this.data.items = arrObj
      if (this.data.items[0].shopHistory != null) {
        this.position = this.data.items[0].shopHistory.length - 2
      }
    } else {
      if (this.data.items[0].shopHistory != null) {
        this.position = this.data.items[0].shopHistory.length - 2
      }
    }
    Loading.hide()
  },
  mounted() {
    // console.log(this.info)
  },
  beforeDestroy() {
    if (this.infoItem) {
      if (this.$router.currentRoute.path != '/fortnite-cosmetics') {
        this.$router.push({
          path: '/fortnite-cosmetics'
        })
      }
    }
  },
  methods: {
    bgColor(value) {
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
          color = 'purple'
          break;
      }
      return color
    },
    back() {
      this.$emit('back', false)
    },
    show(id) {
      // console.log(id)
      this.$router.push({
        path: '/cosmetic/' + id
      })
    },
    yourCallBackFunction(event = false) {
      if (event == true) {
        this.back()
      }
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