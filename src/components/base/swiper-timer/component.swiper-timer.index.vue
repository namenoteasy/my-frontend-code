<template>
  <!-- swiper -->
  <div>
    <div class="timer-line">
      <swiper :options="swiperOption" ref="timerSwiper" v-if="swiperData.length">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <div class="timer-text">
            {{item.time}}
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!--/swiper -->

</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="scss" scoped>
  @import "./index.scss";
  .swiper-img {
    max-width: 100%;
  }
</style>
