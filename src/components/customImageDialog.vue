<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-24 12:19:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-27 20:32:56
 * @FilePath: \pingliangproject\src\components\customVideoDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="custom_image_dialog">
    <div style="transform: scale(0.5)">
      <div class="dialog_content">
        <div class="close_icon" @click="closeDialog"><i class="el-icon-close"></i></div>
        <div class="center_image">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in urlList" :key="index">
              <img :src="item" alt="" class="img_box" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'customImageDialog', // 图片轮播组件
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    urlList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: false,
        spaceBetween: 10,
      },
    };
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
  },
  created() {
    if (this.urlList.length > 1) {
      this.swiperOption.autoplay = { delay: 3000 };
    }
  },
};
</script>

<style lang="scss">
.custom_image_dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .dialog_content {
    width: 2392px;
    height: 1306px;
    position: relative;
    background: url('../static/images/dialogbg.png');
    .center_image {
      width: 2094px;
      height: 783px;
      position: absolute;
      left: 156px;
      top: 257px;
    }
    .img_box {
      width: 2094px;
      height: 783px;
      object-fit: contain;
    }
  }
  .close_icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
    position: absolute;
    top: 100px;
    right: 200px;
    font-size: 50px;
    color: #fff;
    z-index: 9999999999;
    &:hover {
      color: rgba(70, 232, 255, 1);
    }
  }
}
</style>
