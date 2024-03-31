<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-29 19:53:28
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aWall">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/goover.png" alt="" class="over_image" @click="$router.push({ path: '/over' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>

        <!-- 特殊文本 -->
        <div class="special_text text_one">全景可视化</div>
        <div class="special_text text_two">容量可视化</div>
        <div class="special_text text_three">监控可视化</div>
        <div class="special_text text_four">巡检可视化</div>

        <flipclock :val="100" suffix="%" class="filp1"> </flipclock>
        <flipclock :val="10" suffix="%" class="filp2"> </flipclock>
        <flipclock :val="70" suffix="%" class="filp3"> </flipclock>
        <flipclock :val="50" suffix="%" class="filp4"> </flipclock>

        <div class="center_text" @click="goBWall">网络“智”理</div>
        <div class="bottom_text" @click="showDialog(1)">三维可视化 及智能应用</div>
      </div>
    </div>
    <customVideoDialog v-if="isShowDialog" :code="1" @closeDialog="closeDialog"> </customVideoDialog>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import commonCharts from '../../components/commonCharts.vue';
import flipclock from './components/flipclock.vue';
import customVideoDialog from '../../components/customVideoDialog.vue';
export default {
  name: 'aWall',
  components: {
    customText,
    widgetImage,
    verticalText,
    commonCharts,
    flipclock,
    customVideoDialog,
  },
  data() {
    return {
      isShowDialog: false,
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
      textList: [
        {
          text: '通信数智化运维高级应用',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#FCB52B',
          width: 440,
          left: 350,
          top: 452,
        },
        {
          text: '多级浏览',
          fontSize: 70,
          fontFamily: 'yaoshe',
          fontWeight: 500,
          textAlign: 'left',
          color: 'rgb(244,246,255)',
          width: 440,
          left: 435,
          top: 917,
        },
        {
          text: '三维全景展示',
          fontSize: 70,
          fontFamily: 'yaoshe',
          fontWeight: 500,
          textAlign: 'left',
          color: 'rgb(161,182,254)',
          width: 440,
          left: 375,
          top: 990,
        },
        {
          text: '大楼、机房',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 223,
          top: 1263,
        },
        {
          text: '3D虚拟',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 630,
          top: 1263,
        },
        {
          text: '人、场、物与',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 220,
          top: 1566,
        },
        {
          text: '数字',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 630,
          top: 1566,
        },
        {
          text: '机柜、设备建模',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 300,
          left: 223,
          top: 1320,
        },
        {
          text: '仿真技术',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 300,
          left: 620,
          top: 1320,
        },
        {
          text: '三维视图映射建模',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 350,
          left: 192,
          top: 1620,
        },
        {
          text: '可视化技术',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 300,
          left: 630,
          top: 1620,
        },
        {
          text: '三维“一张图”',
          fontSize: 70,
          fontFamily: 'yaoshe',
          fontWeight: 500,
          textAlign: 'left',
          color: 'rgb(244,246,255)',
          width: 480,
          left: 3064,
          top: 917,
        },
        {
          text: '感知全量数据',
          fontSize: 70,
          fontFamily: 'yaoshe',
          fontWeight: 500,
          textAlign: 'left',
          color: 'rgb(161,182,254)',
          width: 440,
          left: 3070,
          top: 990,
        },
        {
          text: '通信电源运行工',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 2914,
          top: 1263,
        },
        {
          text: '打通机房动环',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 3325,
          top: 1263,
        },
        {
          text: '获取设备运行状',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 2914,
          top: 1566,
        },
        {
          text: '打通传输网管',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(244,246,255)',
          width: 280,
          left: 3325,
          top: 1566,
        },
        {
          text: '况温湿度等数据',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 280,
          left: 2914,
          top: 1320,
        },
        {
          text: '系统数据链路',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 280,
          left: 3325,
          top: 1320,
        },
        {
          text: '态及告警信息等数据',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 380,
          left: 2864,
          top: 1620,
        },
        {
          text: '北向数据接口',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'center',
          color: 'rgb(161,182,254)',
          width: 280,
          left: 3325,
          top: 1620,
        },
        {
          text: '对应率',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 96,
          left: 3060,
          top: 306,
        },
        {
          text: '能力提升',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 136,
          left: 3492,
          top: 306,
        },
        {
          text: '查询效率',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 136,
          left: 3060,
          top: 526,
        },
        {
          text: '减少人员',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 136,
          left: 3492,
          top: 526,
        },
      ],
    };
  },
  methods: {
    goBWall() {
      this.$router.push({
        path: '/bWall',
      });
    },
    showDialog(index) {
      this.isShowDialog = true;
    },
    closeDialog() {
      this.isShowDialog = false;
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
.aWall {
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

    .special_text {
      width: 254px;
      height: 88px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 40px;
      color: rgb(212, 218, 248);
      line-height: 88px;
      text-align: center;
      font-style: normal;
      position: absolute;
      cursor: pointer;
      border-radius: 14px;
      border: 5px solid rgba(0, 0, 0, 0);
      &:hover {
        border: 5px solid rgb(252, 183, 31);
      }
    }
    .text_one {
      left: 203px;
      top: 293px;
    }
    .text_two {
      left: 673px;
      top: 293px;
    }
    .text_three {
      left: 203px;
      top: 576px;
    }
    .text_four {
      left: 673px;
      top: 576px;
    }
    .filp1 {
      position: absolute;
      width: 180px;
      height: 50px;
      left: 3060px;
      top: 364px;
      text-align: left;
    }
    .filp2 {
      position: absolute;
      width: 180px;
      height: 50px;
      left: 3492px;
      top: 364px;
      text-align: left;
    }
    .filp3 {
      position: absolute;
      width: 180px;
      height: 50px;
      left: 3060px;
      top: 584px;
      text-align: left;
    }
    .filp4 {
      position: absolute;
      width: 180px;
      height: 50px;
      left: 3492px;
      top: 584px;
      text-align: left;
    }
    .center_text {
      position: absolute;
      font-size: 110px;
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
    .bottom_text {
      position: absolute;
      font-size: 52px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      text-align: center;
      color: #fcb52b;
      width: 288px;
      left: 1775px;
      top: 1846px;
      cursor: pointer;
    }
  }
}
</style>
