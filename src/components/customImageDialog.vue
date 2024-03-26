<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-24 12:19:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-26 21:57:05
 * @FilePath: \pingliangproject\src\components\customVideoDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="custom_image_dialog">
    <div style="transform: scale(0.5)">
      <div class="dialog_content">
        <div class="close_icon" @click="closeDialog"><i class="el-icon-close"></i></div>
        <img :src="url" alt="" class="center_image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customVideoDialog', // 视频播放组件
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      url: '',
    };
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
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
      background: #fff;
      position: absolute;
      left: 156px;
      top: 257px;
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
  .video_box {
    width: 1466px;
    height: 933px;
    position: absolute;
    top: 233px;
    left: 283px;
  }
  .dialog_title {
    font-family: alibaba;
    font-size: 50px;
    color: #ffffff;
    line-height: 40px;
    letter-spacing: 2px;
    text-align: left;
    position: absolute;
    top: 30px;
    left: 100px;
  }
}
</style>
