<template>
  <div v-if="item">
    <q-carousel v-model="slide" animated :autoplay="autoplay" transition-prev="slide-right" transition-next="slide-left"
      @mouseenter="autoplay = false" @mouseleave="autoplay = true">
      <q-carousel-slide v-for="(img, index) in item.newDisplayAsset.materialInstances" :key="index" :name="index"
        :img-src="treatImgBackground(img)" />
      <template v-slot:control>
        <q-carousel-control position="top-left" :offset="[0, 0]">
          <q-chip v-if="item.banner" size="9px" square text-color="white"
            :style="'background-color: ' + bgColor(item.newDisplayAsset.materialInstances[0].colors.FallOff_Color)">
            {{ item.banner.value }}
          </q-chip>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data() {
    return {
      slide: 0,
      autoplay: true
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
    treatImgBackground(item) {
      return item.images.Background
    }
  }
}
</script>