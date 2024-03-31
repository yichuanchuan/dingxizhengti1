<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-28 10:15:26
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-28 11:36:49
-->
<template>
  <div class="swiperBox3">
    <swiper :options="swiperOption" ref="mySwiper2">
      <swiper-slide v-for="(item, index) in urlList" :key="index">
        <img :src="item" alt="" class="img_box" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'swiperBox3',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      urlList: [
        '../assets/images/aWindow/thirdlunbo1.png',
        '../assets/images/aWindow/thirdlunbo2.png',
        '../assets/images/aWindow/thirdlunbo3.png',
        '../assets/images/aWindow/thirdlunbo4.png',
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        autoplay: { delay: 6000 },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.swiperBox3 {
  width: 840px;
  height: 370px;
  position: absolute;
  left: 2866px;
  top: 789px;
  overflow: hidden;
  .swiper_item {
    width: 260px;
    height: 370px;
    .img_box {
      width: 260px;
      height: 320px;
      object-fit: contain;
    }
  }
  .swiper-container {
    height: 370px;
  }
  .swiper-pagination {
    left: 0;
    bottom: -5px;
    .swiper-pagination-bullet {
      width: 22px;
      height: 22px;
      background: rgba(255, 255, 255, 0.9) !important;
    }
    .swiper-pagination-bullet-active {
      background: rgba(255, 255, 255, 1) !important;
    }
  }
}
</style>
