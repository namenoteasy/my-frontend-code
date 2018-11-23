<template>
  <!-- swiper -->
  <div>
    <t-viewer>
      <div class="swiper-container-wrapper">
        <swiper :options="swiperOption" ref="myswiper" v-if="swiperData.length">
          <swiper-slide v-for="(item,index) in swiperData" :key="index" :style="`height:${slideHeight}px`">
            <img :data-src="item.imgPath" :src="item.imgPath" class="swiper-lazy swiper-img" :alt="item.time">
            <div class="swiper-lazy-preloader"></div>
            <div class="snapshot">
              <span v-if="item.isSnap">抓拍</span>
              <span v-else>定时</span>
            </div>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </t-viewer>
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
<style lang="scss">
  @import "./index.scss";
</style>
<style lang="scss" scoped>
  .swiper-img {
    max-width: 100%;
  }
</style>
