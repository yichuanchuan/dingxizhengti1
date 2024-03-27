<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-27 20:29:07
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aLight">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <img src="/assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 翻牌数字 -->
        <flipclock :val="3" class="filp1"> </flipclock>
        <flipclock :val="3" class="filp2"> </flipclock>
        <flipclock :val="10" class="filp3"> </flipclock>
        <!-- 静态图片 -->
        <div class="image_box1"></div>
        <div class="image_box2"></div>
        <div class="image_box3"></div>
        <div class="image_box4"></div>
        <!-- 中间跳动的box -->
        <div class="number_box1" @click="showDialog(1)"></div>
        <div class="number_box2" @click="showDialog(2)"></div>
        <div class="number_box3" @click="showDialog(3)"></div>
        <div class="number_box4" @click="showDialog(4)"></div>
        <!-- 边框 -->
        <div class="border_box1"></div>
        <div class="border_box2"></div>
        <div class="border_box3"></div>
        <div class="border_box4"></div>
        <!-- 旋转 -->
        <div class="animation_box"></div>
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
import flipclock from './components/flipclock.vue';
import customImageDialog from '../../components/customImageDialog.vue';
import customVideoDialog from '../../components/customVideoDialog.vue';
export default {
  name: 'aLight',
  components: {
    customText,
    widgetImage,
    verticalText,
    commonCharts,
    customImageDialog,
    flipclock,
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
          text: '“劳”谋“审”算',
          fontSize: 36,
          fontFamily: 'yaoshe',
          letterSpacing: 4,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 683,
          left: 271,
          top: 338,
        },
        {
          text: '劳动用工数字化审计',
          fontSize: 36,
          fontFamily: 'yaoshe',
          letterSpacing: 4,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 683,
          left: 288,
          top: 378,
        },
        {
          text: '追光逐日-分布式光伏功率预测',
          fontSize: 36,
          fontFamily: 'yaoshe',
          letterSpacing: 4,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 683,
          left: 2985,
          top: 357,
        },
        {
          text: '《劳谋审算》视频',
          fontSize: 36,
          fontFamily: 'yaoshe',
          letterSpacing: 4,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 303,
          left: 277,
          top: 1204,
        },
        {
          text: '《分布式光伏功率预测场景》视频',
          fontSize: 36,
          fontFamily: 'yaoshe',
          letterSpacing: 4,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 563,
          left: 2985,
          top: 1319,
        },
        {
          text: '创新构建和应用劳动用工数字化审计模型',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 656,
          left: 235,
          top: 480,
        },
        {
          text: '率先构建和应用分布式光伏功率预测模型',
          fontSize: 36,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#BCE3FF',
          width: 656,
          left: 2985,
          top: 434,
        },
        {
          text: '国内外发表论文：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 256,
          left: 2985,
          top: 519,
        },
        {
          text: '篇',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 256,
          left: 3315,
          top: 519,
        },
        {
          text: '获得专利：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 288,
          left: 2985,
          top: 599,
        },
        {
          text: '项',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 256,
          left: 3219,
          top: 599,
        },
        {
          text: '系统内外宣传报告：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 288,
          left: 2985,
          top: 679,
        },
        {
          text: '余次',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 256,
          left: 3368,
          top: 679,
        },
        {
          text: '数智+基建',
          fontSize: 70,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#FCB52B',
          width: 350,
          left: 1089,
          top: 1111,
        },
        {
          text: '数智+设备',
          fontSize: 70,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#FCB52B',
          width: 350,
          left: 1480,
          top: 732,
        },
        {
          text: '数智+物资',
          fontSize: 70,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#FCB52B',
          width: 350,
          left: 2046,
          top: 732,
        },
        {
          text: '数智+财务',
          fontSize: 70,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#FCB52B',
          width: 350,
          left: 2429,
          top: 1111,
        },
      ],
    };
  },
  methods: {
    showDialog(code) {
      if (code === 1) {
        this.urlList = ['/assets/images/lunbo1.png', '/assets/images/lunbo2.png'];
      } else if (code === 2) {
        this.urlList = ['/assets/images/lunbo3.png', '/assets/images/lunbo4.png'];
      } else if (code === 3) {
        this.urlList = ['/assets/images/lunbo5.png'];
      } else {
        this.urlList = ['/assets/images/lunbo6.png'];
      }
      this.isShowDialog = true;
    },
    closeDialog() {
      this.isShowDialog = false;
      this.urlList = [];
    },
    showDialog2() {
      this.isShowDialog2 = true;
    },
    closeDialog2() {
      this.isShowDialog2 = false;
      this.videoCode = '';
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
.aLight {
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
    .image_box1 {
      position: absolute;
      width: 400px;
      height: 480px;
      left: 363px;
      top: 554px;
      background: url('./images/light1.png');
    }
    .image_box2 {
      position: absolute;
      width: 748px;
      height: 392px;
      left: 2903px;
      top: 763px;
      background: url('./images/light2.png');
    }
    .image_box3 {
      position: absolute;
      width: 802px;
      height: 554px;
      left: 162px;
      top: 1331px;
      background: url('./images/light3.png');
    }
    .image_box4 {
      position: absolute;
      width: 800px;
      height: 440px;
      left: 2877px;
      top: 1445px;
      background: url('./images/light4.png');
    }
    .filp1 {
      position: absolute;
      width: 52px;
      height: 60px;
      left: 3251px;
      top: 504px;
      text-align: left;
    }
    .filp2 {
      position: absolute;
      width: 52px;
      height: 60px;
      left: 3155px;
      top: 584px;
      text-align: left;
    }
    .filp3 {
      position: absolute;
      width: 100px;
      height: 60px;
      left: 3270px;
      top: 664px;
      text-align: left;
    }
    .border_box1 {
      position: absolute;
      width: 885px;
      height: 800px;
      left: 116px;
      top: 286px;
      cursor: pointer;
      border-radius: 14px;
      border: 5px solid rgba(234, 184, 88, 0);
      &:hover {
        border: 5px solid rgb(234, 184, 88);
      }
    }
    .border_box2 {
      position: absolute;
      width: 885px;
      height: 906px;
      left: 2830px;
      top: 286px;
      cursor: pointer;
      border-radius: 14px;
      border: 5px solid rgba(234, 184, 88, 0);
      &:hover {
        border: 5px solid rgb(234, 184, 88);
      }
    }
    .border_box3 {
      position: absolute;
      width: 885px;
      height: 800px;
      left: 116px;
      top: 1132px;
      cursor: pointer;
      border-radius: 14px;
      border: 5px solid rgba(234, 184, 88, 0);
      &:hover {
        border: 5px solid rgb(234, 184, 88);
      }
    }
    .border_box4 {
      position: absolute;
      width: 885px;
      height: 676px;
      left: 2830px;
      top: 1252px;
      cursor: pointer;
      border-radius: 14px;
      border: 5px solid rgba(234, 184, 88, 0);
      &:hover {
        border: 5px solid rgb(234, 184, 88);
      }
    }
    .animation_box {
      position: absolute;
      width: 1060px;
      height: 1060px;
      left: 1383px;
      top: 911px;
      background: url('./images/xuanzhuan.png');
      animation: rotate 12s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .number_box1 {
      position: absolute;
      width: 283px;
      height: 283px;
      left: 1109px;
      top: 810px;
      background: url('./images/num1.png');
      animation: bounce 5s infinite;
    }
    .number_box2 {
      position: absolute;
      width: 283px;
      height: 283px;
      left: 1502px;
      top: 432px;
      background: url('./images/num2.png');
      animation: bounce 5s infinite;
    }
    .number_box3 {
      position: absolute;
      width: 283px;
      height: 283px;
      left: 2066px;
      top: 432px;
      background: url('./images/num3.png');
      animation: bounce 5s infinite;
    }
    .number_box4 {
      position: absolute;
      width: 283px;
      height: 283px;
      left: 2448px;
      top: 810px;
      background: url('./images/num4.png');
      animation: bounce 5s infinite;
    }
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50px);
      }
    }
  }
}
</style>
