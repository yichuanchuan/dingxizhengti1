<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-28 18:49:06
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="entrance">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <video id="entrancevideo" src="/assets/video/entrance.mp4" class="entrance_box" type="video/mp4" @ended="videoEnded"></video>
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
  name: 'entrance',
  data() {
    return {
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
      isPlay: false,
    };
  },
  methods: {
    videoEnded() {
      this.$router.push({
        path: '/entrancePage',
      });
    },
    playVideo() {
      if (!this.isPlay) {
        this.isPlay = true;
        document.getElementById('entrancevideo').play();
      } else {
        this.isPlay = false;
        document.getElementById('entrancevideo').pause();
      }
    },
    // 窗口变化
    onWindowResize() {
      let clientWidth = document.getElementsByClassName('devopsBigScreen')[0].clientWidth;
      let clientHeight = document.getElementsByClassName('devopsBigScreen')[0].clientHeight;
      const scale = Math.min(clientWidth / this.width, clientHeight / this.height);
      this.bigScreenStyle.transform = `scale(${scale}, ${scale})`;
      this.playVideo();
    },
    setBigScreenStyle() {
      this.bigScreenStyle = {
        width: this.width + 'px',
        height: this.height + 'px',
        transform: `scale(1, 1)`,
        overflow: 'hidden',
        'flex-shrink': 0,
      };
      this.onWindowResize();
    },
  },
  created() {},
  mounted() {
    this.setBigScreenStyle();
    window.addEventListener('resize', this.onWindowResize, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
};
</script>

<style lang="scss" scoped>
.entrance {
  width: 100%;
  height: 100%;
  .devopsBigScreen {
    background: #001f35;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .entrance_box {
      width: 100%;
      height: 100%;
    }
    .btn_box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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
      background: url('../../static/images/play.png');
      background-size: 100% 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease; /* 添加过渡效果 */
    }
    .stop_btn {
      width: 200px;
      height: 200px;
      background: url('../../static/images/stop.png');
      background-size: 100% 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease; /* 添加过渡效果 */
    }
  }
}
</style>
