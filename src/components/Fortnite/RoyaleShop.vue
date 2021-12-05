<template>
  <div>
    <!-- TITLE -->
    <div class="row-12 title text-white text-center text-h3 q-pa-md">
      {{ titleType }}
    </div>
    <!-- SHOP -->
    <div class="display-flex">
      <!-- justify-center full-height full-width -->
      <div class="warp" v-for="(item, index) in dataShop" :key="index">
        <q-card :dark="true" :square="false" :bordered="false" class="text-white" @click="dataItem(item)">
          <!-- IMG -->
          <q-img
            :style="'background: radial-gradient(circle, #fff -80%, ' + bgColor(item.items[0].rarity.value) +  ' 70%)'"
            :src="item.items[0].images.icon" >
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ item.items[0].name }}
            </div>
          </q-img>
          <q-card-section class="bg-info">
            <div class="row justify-center text-center items-center">
              <img style="width: 27px; margin-right: 5px" :src="vbuckImage">
              <div class="text-subtitle2">
                {{ item.finalPrice }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- INFO ITEM SHOP -->
    <InfoItemShop
      v-if="infoItem"
      :infoItem="infoItem"
      :info="infoData"
      @back="back"/>
  </div>
</template>

<script>
import InfoItemShop from 'components/Fortnite/InfoItemShop.vue'
export default {
  // name: 'ComponentName',
  props: ['data', 'vbuckIcon', 'titleType'],
  components: {
    InfoItemShop
  },
  data () {
    return {
      dataShop: this.data,
      vbuckImage: this.vbuckIcon,
      infoItem: false,
      infoData: {}
    }
  },
  created(){
    // console.log(this.dataShop[0])
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
    dataItem(item){
      // console.log(item)
      this.infoData = item
      this.infoItem = true
    },
    back(event){
      this.infoItem = event
      this.infoData = {}
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