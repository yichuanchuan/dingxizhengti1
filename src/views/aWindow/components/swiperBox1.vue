<!--
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-28 10:15:26
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-28 12:00:26
-->
<template>
  <div class="swiperBox1">
    <swiper :options="swiperOption" ref="mySwiper">
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
  name: 'swiperBox1',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      urlList: [
        'assets/images/aWindow/firstlunbo1.png',
        'assets/images/aWindow/firstlunbo2.png',
        'assets/images/aWindow/firstlunbo3.png',
        'assets/images/aWindow/firstlunbo4.png',
        'assets/images/aWindow/firstlunbo5.png',
        'assets/images/aWindow/firstlunbo6.png',
        'assets/images/aWindow/firstlunbo7.png',
      ],
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
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
.swiperBox1 {
  width: 820px;
  height: 600px;
  position: absolute;
  left: 139px;
  top: 793px;
  overflow: hidden;
  .swiper_item {
    width: 774px;
    height: 290px !important;
    .img_box {
      width: 774px;
      height: 290px;
      object-fit: contain;
    }
  }
  .swiper-pagination {
    top: 270px;
    right: 0;
    .swiper-pagination-bullet {
      width: 22px;
      height: 22px;
      background: rgba(255, 255, 255, 0.4);
    }
    .swiper-pagination-bullet-active {
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
