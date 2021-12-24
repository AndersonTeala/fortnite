<template>
  <div :dark="true" class="text-primary">
    <div class="display-flex">
      <div v-for="(item, index) in getData" :key="index" class="warp">
        <q-card :dark="true" :square="false" :bordered="false" class="text-white">
          <!-- ITEM -->
          <div class="bg-info text-center">
            <q-img
            @click="show(item.id)"
            :style="'background: radial-gradient(circle, #fff -80%, ' + bgColor(item.rarity.value) +  ' 70%)'"
            :src="item.images.featured != null ? item.images.icon : item.images.icon" />
            <q-card-section class="text-center bg-info">
              <div class="text-subtitle2 text-center">{{ item.name }}</div>
              <!-- <div class="text-subtitle2 text-center">{{ item.description }}</div> -->
              <q-btn class="full-width" color="primary" label="Visualizar" @click="show(item.id)"/>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
    <div class="row justify-center item-center">
      <div v-if="pageAll == false" class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="page"
          color="primary"
          :min="currentPage"
          :max="Math.ceil(data.length/totalPages)"
          input-class="text-orange-10"
          :max-pages="6"
          size="sm"
          boundary-numbers
          direction-links
          @click="getTopoMobile()"
        />
      </div>
      <div v-if="pageAll == true" class="row-12 q-my-sm flex flex-center">
        <q-pagination
          v-model="page"
          color="primary"
          :min="currentPage"
          :max="Math.ceil(data.length/totalPages)"
          input-class="text-orange-10"
          size="md"
          direction-links
        />
      </div>
    </div>
    <div class="row-12 q-my-sm flex flex-center">
      <q-btn
        color="primary"
        :label="pageAll == false ? 'Ver páginas' : 'Minimizar páginas'"
        size="md"
        icon="dialpad"
        @click="pageAll = !pageAll" />
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['data'],
  data () {
    return {
      page: 1,
      currentPage: 1,
      nextPage: null,
      totalPages: 10,
      pageAll: false
    }
  },
  computed: {
    getData(){
			return this.data.slice((this.page-1)*this.totalPages,(this.page-1)*this.totalPages+this.totalPages)
		}
  },
  mounted () {
    // console.log(this.data)
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
          color = 'dark'
          break;
      }
      return color
    },
    show(id){
      this.$router.push({
        path: '/cosmetic/' + id
      })
    },
    getTopoMobile(){
      window.scrollTo(0, 0)
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