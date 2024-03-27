<!--
 * @Author: yichuanhao 1274816963@qq.com
 * @Date: 2024-03-20 21:42:51
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-27 22:59:03
 * @FilePath: \pingxiproject\src\src\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="aBeam">
    <div class="devopsBigScreen">
      <div :style="bigScreenStyle">
        <img src="/assets/images/back.png" alt="" class="back_image" @click="$router.back()" />
        <!-- 静态文本 -->
        <customText v-for="(item, index) in textList" :options="item" :key="'customText' + index"></customText>
        <!-- 柱状图 -->
        <commonCharts :option="chartOption1" :chartIndex="0" :cssStyle="cssStyle1"></commonCharts>
        <!-- 折线图 -->
        <commonCharts :option="chartOption2" :chartIndex="1" :cssStyle="cssStyle2"></commonCharts>
        <!-- 双折线图 -->
        <commonCharts :option="chartOption3" :chartIndex="2" :cssStyle="cssStyle3"></commonCharts>
        <!-- 饼图 -->
        <commonCharts :option="chartOption4" :chartIndex="3" :cssStyle="cssStyle4"></commonCharts>
        <!-- 饼图 -->
        <commonCharts :option="chartOption5" :chartIndex="4" :cssStyle="cssStyle5"></commonCharts>
      </div>
    </div>
    <customImageDialog v-if="isShowDialog" url="/assets/images/yimianqiang.png" @closeDialog="closeDialog"> </customImageDialog>
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
export default {
  name: 'aBeam', // 一道梁
  components: {
    customText,
    widgetImage,
    verticalText,
    commonCharts,
    customImageDialog,
  },
  data() {
    return {
      isShowDialog: false,
      bigScreenStyle: null,
      changeBig: false,
      width: 3840,
      height: 2160,
      chartOption1: {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 22,
          },
        },
        xAxis: {
          type: 'category',
          data: ['办公室', '调度', '发展策划部', '设备专业', '审计', '数字化', '营销专业', '指挥中心'],
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontSize: 14,
            },
          },
          axisLine: {
            lineStyle: {
              color: '#3B4C5A',
            },
          },
          axisTick: {
            show: false,
          },
        },

        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#BCE3FF',
              fontSize: 22,
            },
          },
          splitLine: {
            lineStyle: {
              color: '#BCE3FF',
              type: 'dashed',
            },
          },
        },
        series: [
          {
            data: [3, 1, 1, 12, 1, 5, 36, 13],
            type: 'bar',
            barWidth: 40,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#FBC706', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#F5814C', // 100% 处的颜色
                    },
                  ],
                  false,
                ),
              },
            },
          },
        ],
      },
      cssStyle1: {
        width: 950,
        height: 500,
        left: 100,
        top: 950,
      },
      chartOption2: {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 22,
          },
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
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
      chartOption3: {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 22,
          },
        },
        grid: {
          top: '30%',
        },
        legend: {
          show: true,
          itemGap: 400,
          textStyle: {
            fontSize: 22,
            color: '#FFF',
          },
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
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
            name: '已建成报表数',
            type: 'line',
            yAxisIndex: 0,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 14, //标记的大小
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
          {
            name: '报表使用次数',
            type: 'line',
            yAxisIndex: 0,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 14, //标记的大小

            itemStyle: {
              //折线拐点标志的样式
              color: {
                type: 'radial',
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(246, 86, 102, 1)',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(246, 86, 102, 1)',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(246, 86, 102, 0.5)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(246, 86, 102, 0.5)',
                  },
                ],
              },
              borderColor: 'rgba(246, 86, 102, 0.5)',
              borderWidth: 8,
            },
            lineStyle: {
              width: 2,
              color: 'rgba(246, 86, 102, 1)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 0.8,
            },
            z: 5,
            data: [2, 5, 8, 5, 12, 11, 15, 6, 5],
          },
        ],
      },
      cssStyle3: {
        width: 950,
        height: 426,
        left: 1918,
        top: 1570,
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
          bottom: 60,
          left: 120,
          itemGap: 100,
          textStyle: {
            fontSize: 28,
            color: '#fff',
          },
          data: ['人资', '物资', '财务', '营销'],
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
            color: ['rgba(8, 241, 234, 0.3)', 'rgba(8, 185, 255, 0.3)', 'rgba(10, 101, 255, 0.3)', 'rgba(50, 213, 146, 0.3)'],
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
                value: 20,
                name: '',
              },
              {
                value: 25,
                name: '',
              },
              {
                value: 15,
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
            color: ['rgba(8, 241, 234, 1)', 'rgba(8, 185, 255, 1)', 'rgba(10, 101, 255, 1)', 'rgba(50, 213, 146, 1)'],
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
                name: '人资',
                label: {
                  color: 'rgba(8, 241, 234, 1',
                },
              },
              {
                value: 20,
                name: '物资',
                label: {
                  color: 'rgba(8, 185, 255, 1)',
                },
              },
              {
                value: 25,
                name: '财务',
                label: {
                  color: 'rgba(10, 101, 255, 1)',
                },
              },
              {
                value: 15,
                name: '营销',
                label: {
                  color: 'rgba(50, 213, 146, 1)',
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
      chartOption5: {
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
          bottom: 60,
          left: 120,
          itemGap: 100,
          textStyle: {
            fontSize: 28,
            color: '#fff',
          },
          data: ['人资', '物资', '财务', '营销'],
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
            color: ['rgba(8, 241, 234, 0.3)', 'rgba(8, 185, 255, 0.3)', 'rgba(10, 101, 255, 0.3)', 'rgba(50, 213, 146, 0.3)'],
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
                value: 20,
                name: '',
              },
              {
                value: 25,
                name: '',
              },
              {
                value: 15,
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
            color: ['rgba(8, 241, 234, 1)', 'rgba(8, 185, 255, 1)', 'rgba(10, 101, 255, 1)', 'rgba(50, 213, 146, 1)'],
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
                name: '人资',
                label: {
                  color: 'rgba(8, 241, 234, 1',
                },
              },
              {
                value: 20,
                name: '物资',
                label: {
                  color: 'rgba(8, 185, 255, 1)',
                },
              },
              {
                value: 25,
                name: '财务',
                label: {
                  color: 'rgba(10, 101, 255, 1)',
                },
              },
              {
                value: 15,
                name: '营销',
                label: {
                  color: 'rgba(50, 213, 146, 1)',
                },
              },
            ],
          },
        ],
      },
      cssStyle5: {
        width: 950,
        height: 500,
        left: 2860,
        top: 1550,
      },
      textList: [
        {
          text: 'RPA场景(个)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 169,
          top: 429,
        },
        {
          text: '涉及专业(个)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 463,
          top: 429,
        },
        {
          text: '运行次数(w/次)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 223,
          left: 757,
          top: 429,
        },
        {
          text: '节约时长(时)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 169,
          top: 590,
        },
        {
          text: '效率提升(%)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 474,
          top: 590,
        },

        {
          text: '应用报表(张)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 2899,
          top: 429,
        },
        {
          text: '制作时间(时)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 3193,
          top: 429,
        },
        {
          text: '人工负担(次)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 3487,
          top: 429,
        },
        {
          text: '报表总计(w/次)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 223,
          left: 2899,
          top: 590,
        },
        {
          text: '效率提升(%)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 3204,
          top: 590,
        },
        {
          text: '准确率达(%)',
          fontSize: 32,
          fontFamily: 'PingFangSC, PingFang SC',
          fontWeight: 500,
          textAlign: 'left',
          color: '#9CBBDB',
          width: 182,
          left: 3487,
          top: 590,
        },
      ],
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
.aBeam {
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
  }
}
</style>
