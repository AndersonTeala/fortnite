<template>
  <div>
    <!-- TITLE -->
    <div class="row-12 title text-primary text-center text-h3 q-pa-md">
      {{ titleType }}
    </div>
    <!-- SHOP -->
    <div class="row q-col-gutter-sm">
      <div class="col-12" v-for="(item, index) in dataShop" :key="index">
        <q-card :dark="true" :square="false" :bordered="false" class="text-white" @click="dataItem(item)">
          <!-- IMG -->
          <CarouselImgShop :item="item" />
          <q-card-section class="bg-info">
            <!-- NOME -->
            <div class="row justify-center text-center">
              <div v-if="item.items.length <= 3" class="text-h6">
                {{ item.items[0].name }}
              </div>
              <div v-else class="text-h6">
                Pacotão - {{ item.items[0].name.slice(0, 6) }}...
              </div>
            </div>
            <!-- PRICES -->
            <div class="row justify-center text-center items-center">
              <div v-if="item.regularPrice != item.finalPrice" class="col-2">
                <div class="text-subtitle2 strike-through">
                  {{ item.regularPrice }}
                </div>
              </div>
              <div class="col-2">
                <div :class="item.regularPrice != item.finalPrice ? 'text-subtitle2 text-right' : 'text-subtitle2'">
                  {{ item.finalPrice }}
                </div>
              </div>
              <img style="width: 27px;" :src="vbuckImage">
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- INFO ITEM SHOP -->
    <InfoItemShop v-if="infoItem" :infoItem="infoItem" :info="infoData" :vbuckImage="vbuckImage" @back="back" />
  </div>
</template>

<script>
import Vue from 'vue'

const eventHub = new Vue()
import InfoItemShop from 'components/Fortnite/InfoItemShop.vue'
import CarouselImgShop from 'components/Fortnite/CarouselImgShop.vue'

export default {
  // name: 'ComponentName',
  props: ['data', 'vbuckIcon', 'titleType'],
  components: {
    InfoItemShop,
    CarouselImgShop
  },
  data() {
    return {
      dataShop: this.data,
      vbuckImage: this.vbuckIcon,
      infoItem: false,
      infoData: {},
      eventHub: eventHub,
      slide: 0,
      autoplay: true
    }
  },
  created() {
    // console.log(VueRouter)
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
          color = value
          break;
      }

      if (color == undefined || color == null) {
        color = '#1492FF'
      } else {
        color = '#' + value
      }

      return color
    },
    dataItem(item) {
      console.log(item)
      this.infoData = item
      this.infoItem = true
    },
    back(event) {
      this.infoItem = event
      this.infoData = {}
    },
  },
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

.strike-through {
  font-size: 14px;
  text-decoration: line-through;
}
</style>