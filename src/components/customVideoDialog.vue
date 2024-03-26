<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-24 12:19:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-26 21:59:39
 * @FilePath: \pingliangproject\src\components\customVideoDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="custom_video_dialog">
    <div style="transform: scale(0.5)">
      <div class="dialog_content">
        <div class="close_icon" @click="closeDialog"><i class="el-icon-close"></i></div>
        <video id="video" width="1466" height="933" class="video_box" type="video/mp4" loop></video>
        <div class="btn_box" @click="playVideo">
          <div class="play_btn" v-if="!isPlay"></div>
          <div class="stop_btn" v-if="isPlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customVideoDialog', // 视频播放组件
  props: {
    code: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      title: '',
      url: '',
      isPlay: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
    playVideo() {
      if (!this.isPlay) {
        this.isPlay = true;
        document.getElementById('video').play();
      } else {
        this.isPlay = false;
        document.getElementById('video').pause();
      }
    },
  },
  created() {
    let codeObj = {
      1: '/assets/video/right1.mp4',
      2: '/assets/video/right2.mp4',
      3: '/assets/video/left1.mp4',
      4: '/assets/video/left2.mp4',
      5: '/assets/video/left3.mp4',
      6: '/assets/video/left4.mp4',
      7: '/assets/video/right7.mp4',
      8: '/assets/video/right8.mp4',
      9: '/assets/video/right9.mp4',
      10: '/assets/video/right10.mp4',
      11: '/assets/video/right11.mp4',
      12: '/assets/video/right12.mp4',
      13: '/assets/video/right13.mp4',
    };
    let titleObj = {
      1: '碳普惠推广',
      2: '碳服务体验',
      3: '无人机+网格协同',
      4: '无人机+北斗',
      5: '无人机+孪生电网',
      6: '无人机+控制平台',
      7: '配网感知能力',
      8: '移动作业能力',
      9: '供电服务全资源管控看板',
      10: '设计',
      11: '建设',
      12: '运行',
      13: '检修',
    };
    this.title = titleObj[this.code];
    this.url = codeObj[this.code];
  },
  mounted() {
    document.getElementById('video').src = this.url;
  },
};
</script>

<style lang="scss">
.custom_video_dialog {
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
    .btn_box {
      position: absolute;
      top: 233px;
      left: 283px;
      width: 1466px;
      height: 933px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        .play_btn {
          opacity: 1;
          visibility: visible;
        }
        .stop_btn {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    .play_btn {
      width: 200px;
      height: 200px;
      background: url('../static/images/play.png');
      background-size: 100% 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease; /* 添加过渡效果 */
    }
    .stop_btn {
      width: 200px;
      height: 200px;
      background: url('../static/images/stop.png');
      background-size: 100% 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease; /* 添加过渡效果 */
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
    width: 1918px;
    height: 808px;
    position: absolute;
    top: 249px;
    left: 243px;
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
