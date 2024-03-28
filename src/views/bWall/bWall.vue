<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao
 * @LastEditTime: 2024-03-28 15:44:35
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bWall">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <img src="/assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>

        <!-- 图片 -->
        <div class="img_one"></div>
        <div class="img_two"></div>
        <div class="img_three"></div>
        <div class="img_four"></div>
        <!-- 边框 -->
        <div class="img_box1" @click="showDialog2(5)"></div>
        <div class="img_box2" @click="showDialog2(6)"></div>
        <div class="img_box3" @click="showDialog2(7)"></div>
        <div class="img_box4" @click="showDialog"></div>
        <div class="center_text" @click="goAWall">全场景通信网络防护体系</div>
      </div>
    </div>
    <customImageDialog v-if="isShowDialog" :urlList="urlList" @closeDialog="closeDialog"> </customImageDialog>
    <customVideoDialog v-if="isShowDialog2" :code="videoCode" @closeDialog="closeDialog2"> </customVideoDialog>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import commonCharts from '../../components/commonCharts.vue';
import customImageDialog from '../../components/customImageDialog.vue';
import customVideoDialog from '../../components/customVideoDialog.vue';
export default {
  name: 'bWall',
  components: {
    customText,
    widgetImage,
    verticalText,
    commonCharts,
    customImageDialog,
    customVideoDialog,
  },
  data() {
    return {
      isShowDialog: false,
      isShowDialog2: false,
      urlList: '',
      videoCode: '',
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
      textList: [
        {
          text: '机房设备台账I600 2.0平台',
          fontSize: 60,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 736,
          left: 308,
          top: 371,
        },
        {
          text: '综合网管系统',
          fontSize: 60,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 736,
          left: 3200,
          top: 375,
        },
        {
          text: '机房动环系统',
          fontSize: 60,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 736,
          left: 308,
          top: 1235,
        },
        {
          text: '统一机房三维全景智能可视化运维系统',
          fontSize: 60,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 939,
          left: 2593,
          top: 1231,
        },
      ],
    };
  },
  methods: {
    showDialog() {
      this.urlList = ['/assets/images/lunbo10.png'];
      this.isShowDialog = true;
    },
    closeDialog() {
      this.isShowDialog = false;
      this.urlList = [];
    },
    showDialog2(code) {
      this.videoCode = code;
      this.isShowDialog2 = true;
    },
    closeDialog2() {
      this.isShowDialog2 = false;
      this.videoCode = '';
    },
    goAWall() {
      this.$router.push({
        path: '/aWall',
      });
    },
    // 窗口变化
    onWindowResize() {
      let clientWidth = document.getElementsByClassName('devopsBigScreen')[0].clientWidth;
      let clientHeight = document.getElementsByClassName('devopsBigScreen')[0].clientHeight;
      const scale = Math.min(clientWidth / this.width, clientHeight / this.height);
      this.bigScreenStyle.transform = `scale(${scale}, ${scale})`;
    },
    setBigScreenStyle() {
      this.bigScreenStyle = {
        width: this.width + 'px',
        height: this.height + 'px',
        transform: `scale(1, 1)`,
        overflow: 'hidden',
        'background-image': 'url(' + require('./images/bg.png') + ')',
        'background-position': '0% 0%',
        'background-size': '100% 100%',
        'background-repeat': 'initial',
        'background-attachment': 'initial',
        'background-origin': 'initial',
        'background-clip': 'initial',
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
.bWall {
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
    .center_text {
      position: absolute;
      font-size: 82px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      text-align: center;
      color: #fcb52b;
      width: 924px;
      height: 210px;
      line-height: 210px;
      left: 1464px;
      top: 462px;
      cursor: pointer;
    }
    .img_box1 {
      position: absolute;
      width: 1166px;
      height: 804px;
      left: 128px;
      top: 298px;
      cursor: pointer;
      z-index: 9999;
      &:hover {
        background: url('./images/left1.png');
      }
    }
    .img_box2 {
      position: absolute;
      width: 1166px;
      height: 804px;
      left: 2546px;
      top: 298px;
      cursor: pointer;
      z-index: 9999;
      &:hover {
        background: url('./images/right1.png');
      }
    }
    .img_box3 {
      position: absolute;
      width: 1166px;
      height: 804px;
      left: 128px;
      top: 1158px;
      cursor: pointer;
      z-index: 9999;
      &:hover {
        background: url('./images/left2.png');
      }
    }
    .img_box4 {
      position: absolute;
      width: 1166px;
      height: 804px;
      left: 2546px;
      top: 1158px;
      cursor: pointer;
      z-index: 9999;
      &:hover {
        background: url('./images/right2.png');
      }
    }
    .img_one {
      position: absolute;
      width: 896px;
      height: 524px;
      left: 178px;
      top: 528px;
      background: url('./images/img01.png');
    }
    .img_two {
      position: absolute;
      width: 896px;
      height: 524px;
      left: 2766px;
      top: 528px;
      background: url('./images/img03.png');
    }
    .img_three {
      position: absolute;
      width: 896px;
      height: 524px;
      left: 178px;
      top: 1388px;
      background: url('./images/img02.png');
    }
    .img_four {
      position: absolute;
      width: 896px;
      height: 524px;
      left: 2766px;
      top: 1388px;
      background: url('./images/img04.png');
    }
  }
}
</style>
