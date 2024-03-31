<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-31 12:37:04
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aWindow">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <img src="assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <img src="assets/images/goover.png" alt="" class="over_image" @click="$router.push({ path: '/over' })" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 旋转 -->
        <div class="animation_box"></div>
        <!-- 翻转数字 -->
        <flipclock :val="16" class="filp1"> </flipclock>
        <flipclock :val="10" class="filp2"> </flipclock>
        <flipclock :val="20" class="filp3"> </flipclock>
        <flipclock :val="7" class="filp4"> </flipclock>
        <!-- 折线图 -->
        <commonCharts :option="chartOption2" :chartIndex="1" :cssStyle="cssStyle2"></commonCharts>
        <!-- 饼图 -->
        <commonCharts :option="chartOption4" :chartIndex="3" :cssStyle="cssStyle4"></commonCharts>
        <!-- 所有轮播 -->
        <swiperBox1 ref="swiperbox"></swiperBox1>
        <swiperBox2></swiperBox2>
        <swiperBox3></swiperBox3>
        <swiperBox4></swiperBox4>
        <swiperBox5></swiperBox5>
      </div>
    </div>
    <customImageDialog v-if="isShowDialog" url="assets/images/yimianqiang.png" @closeDialog="closeDialog"> </customImageDialog>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts'); //按需引入
import lottie from 'lottie-web';
import customText from '../../../src/components/customText.vue';
import widgetImage from '../../../src/components/widgetImage.vue';
import verticalText from '../../../src/components/verticalText.vue';
import commonCharts from '../../components/commonCharts.vue';
import customImageDialog from '../../components/customImageDialog.vue';
import flipclock from './components/flipclock.vue';
import swiperBox1 from './components/swiperBox1.vue';
import swiperBox2 from './components/swiperBox2.vue';
import swiperBox3 from './components/swiperBox3.vue';
import swiperBox4 from './components/swiperBox4.vue';
import swiperBox5 from './components/swiperBox5.vue';
export default {
  name: 'aWindow',
  components: {
    customText,
    widgetImage,
    verticalText,
    commonCharts,
    customImageDialog,
    flipclock,
    swiperBox1,
    swiperBox2,
    swiperBox3,
    swiperBox4,
    swiperBox5,
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
          text: '电眼看—特色产业',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 300,
          left: 2927,
          top: 725,
        },
        {
          text: '电眼看—工业',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 300,
          left: 2927,
          top: 1160,
        },
        {
          text: '电眼看—环保',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          textAlign: 'left',
          color: '#CDEEFF',
          width: 300,
          left: 2927,
          top: 1588,
        },
        {
          text: '数据“智”力',
          fontSize: 110,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 600,
          textAlign: 'left',
          color: '#FCB52B',
          width: 666,
          left: 1631,
          top: 412,
        },
        {
          text: '打造全景数据应用展示窗口',
          fontSize: 48,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 576,
          left: 1631,
          top: 566,
        },
        {
          text: '各专业监测大屏：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 256,
          left: 169,
          top: 444,
        },
        {
          text: '屏',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 32,
          left: 514,
          top: 444,
        },
        {
          text: '常态化监测分析主题：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 320,
          left: 169,
          top: 539,
        },
        {
          text: '项',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 32,
          left: 578,
          top: 539,
        },
        {
          text: '电眼看-监测分析场景：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 400,
          left: 2901,
          top: 444,
        },
        {
          text: '屏',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 32,
          left: 3353,
          top: 444,
        },
        {
          text: '获得政府领导批示：',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 320,
          left: 2901,
          top: 539,
        },
        {
          text: '项',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 32,
          left: 3254,
          top: 539,
        },
        {
          text: '用数据说话',
          fontSize: 60,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 300,
          left: 1076,
          top: 729,
        },
        {
          text: '用数据创新',
          fontSize: 60,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 300,
          left: 2478,
          top: 729,
        },
        {
          text: '用数据管理',
          fontSize: 60,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 300,
          left: 1076,
          top: 1217,
        },
        {
          text: '用数据决策',
          fontSize: 60,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 300,
          left: 2478,
          top: 1217,
        },
        {
          text: '快速集成',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 80,
          left: 1502,
          top: 821,
        },
        {
          text: '协作管理',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 80,
          left: 2267,
          top: 821,
        },
        {
          text: '智能分析',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 80,
          left: 1492,
          top: 1138,
        },
        {
          text: '动态展示',
          fontSize: 40,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#D7E7F9',
          width: 80,
          left: 2267,
          top: 1138,
        },
        {
          text: '全链路业务数据监测',
          fontSize: 48,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#BCE3FF',
          width: 432,
          left: 1705,
          top: 936,
        },

        {
          text: '业务现状',
          fontSize: 120,
          fontFamily: 'yaoshe',
          textAlign: 'left',
          color: 'rgb(214, 220, 252)',
          width: 442,
          left: 1695,
          top: 1003,
        },
      ],
      chartOption2: {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 22,
          },
        },
        xAxis: {
          data: ['7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月'],
          interval: 0,
          offset: 15,
          axisLine: {
            show: false, //隐藏X轴轴线
          },
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#BCE3FF', //X轴文字颜色
              fontSize: '22',
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(59, 76, 90, 1)',
                type: 'dashed', // ! 网格虚线设置
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#BCE3FF',
                fontSize: '22',
              },
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'line',
            yAxisIndex: 0,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 14, //标记的大小
            // showSymbol: false,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(0, 217, 192, 0.28)',
                },
                {
                  offset: 1,
                  color: 'rgba(0, 217, 193, 0)',
                },
              ]),
              origin: 'start',
            },
            itemStyle: {
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: '#00FFD3',
                  },
                  {
                    offset: 0.5,
                    color: '#00FFD3',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(73, 214, 202, 0.5)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(73, 214, 202, 0.5)',
                  },
                ],
              },
              borderColor: 'rgba(73, 214, 202, 0.5)',
              borderWidth: 8,
            },
            lineStyle: {
              width: 2,
              color: 'rgba(0, 255, 211, 1)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0.8,
            },
            z: 5,
            data: [7, 10, 5, 10, 7, 12, 20, 18, 14],
          },
        ],
      },
      cssStyle2: {
        width: 950,
        height: 370,
        left: 100,
        top: 1620,
      },
      chartOption4: {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0.9)',
          formatter: function (params) {
            return (
              params.seriesName +
              '<br/>' +
              params.marker +
              '<span style="color:' +
              params.color +
              '">' +
              params.data['name'] +
              '\n' +
              params.data['value'] +
              '</span>'
            );
          },
          textStyle: {
            fontSize: 22,
          },
        },
        legend: {
          itemWidth: 8,
          itemHeight: 8,
          icon: 'circle',
          bottom: 66,
          left: 250,
          itemGap: 100,
          textStyle: {
            fontSize: 28,
            color: '#fff',
          },
          data: ['政府批示', '公司领导批示'],
        },
        series: [
          {
            name: '',
            type: 'pie',
            zlevel: 2,
            cursor: 'default',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['37%', '50%'],
            center: ['45%', '50%'],
            color: ['rgba(8, 241, 234, 0.3)', 'rgba(10, 101, 255, 0.3)'],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 40,
                name: '',
              },
              {
                value: 60,
                name: '',
              },
            ],
          },
          {
            name: '',
            type: 'pie',
            zlevel: 3,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['43%', '50%'],
            center: ['45%', '50%'],
            color: ['rgba(8, 241, 234, 1)', 'rgba(10, 101, 255, 1)'],
            label: {
              show: true,
              formatter: (params) => {
                return `
                     ${params.percent}%
                     `;
              },
              alignTo: 'labelLine',
              textStyle: {
                fontSize: 28,
                fontFamily: 'zaozi',
              },
            },
            labelLine: {
              length: 0,
              length2: 80,
            },
            data: [
              {
                value: 40,
                name: '政府批示',
                label: {
                  color: 'rgba(8, 241, 234, 1)',
                },
              },
              {
                value: 60,
                name: '公司领导批示',
                label: {
                  color: 'rgba(10, 101, 255, 1)',
                },
              },
            ],
          },
        ],
      },
      cssStyle4: {
        width: 950,
        height: 500,
        left: 1045,
        top: 1550,
      },
    };
  },
  methods: {
    showDialog() {
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
.aWindow {
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
    .animation_box {
      position: absolute;
      width: 749px;
      height: 749px;
      left: 1549px;
      top: 678px;
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
    .filp1 {
      position: absolute;
      width: 100px;
      height: 60px;
      left: 410px;
      top: 425px;
      text-align: left;
    }
    .filp2 {
      position: absolute;
      width: 100px;
      height: 60px;
      left: 476px;
      top: 524px;
      text-align: left;
    }
    .filp3 {
      position: absolute;
      width: 100px;
      height: 60px;
      left: 3230px;
      top: 425px;
      text-align: left;
    }
    .filp4 {
      position: absolute;
      width: 50px;
      height: 60px;
      left: 3180px;
      top: 524px;
      text-align: left;
    }
  }
}
</style>
