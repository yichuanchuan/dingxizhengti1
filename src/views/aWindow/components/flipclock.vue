<template>
  <div :key="compKey" class="count-flop">
    <div v-for="(item, index) in value" :key="index" :class="item !== '.' && item !== ',' ? 'count-flop-box' : 'count-flop-point'">
      <div v-if="item === '.'" class="count-flop-content count-flop-content-symbol">.</div>
      <div v-else-if="item === ','" class="count-flop-content count-flop-content-symbol">,</div>
      <div v-else ref="countFlopContent" class="count-flop-content" :class="['rolling_' + item]">
        <div v-for="(item2, index2) in numberList" :key="index2" class="count-flop-num">{{ item2 }}</div>
      </div>
    </div>
    <div v-if="suffix" class="count-flop-unit">{{ suffix }}</div>
  </div>
</template>
<script>
/**
 * 数字翻页效果
 */
export default {
  props: {
    // 要显示的数值
    val: {
      type: [Number, String],
      required: true,
    },
    // 自定义
    suffix: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      value: [], // 把值转换为数组
      numberList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 用于翻页的数组
      compKey: 0, // 唯一标识，用于数字变化时重新渲染
      backups: null, // 用于备份数值
    };
  },
  watch: {
    // 监听数值变化
    val() {
      // 新数组
      const diffValueList = this.val
        .toString()
        .split('')
        .filter((item) => item !== '.' && item !== ',');

      // 老数组
      const valueList = this.value.filter((item) => item !== '.' && item !== ',');

      // 备份数组
      this.backups = this.val;

      // 判断新数组与老数组长度是否相等
      if (diffValueList.length === this.value.length) {
        for (const key in diffValueList) {
          // 获取到元素
          const element = this.$refs.countFlopContent[key];
          // 判断是否存在当前元素
          if (this.$refs.countFlopContent[key]) {
            // 获取当前的类名数组
            const classNames = element.className.split(' ');
            // .&, 不加入判断
            if (diffValueList[key] !== '.' && diffValueList[key] !== ',') {
              // 计算差值
              const diffValue = diffValueList[key] - valueList[key];
              // 判断是否有差值
              if (diffValue !== 0) {
                // 如果有差值那么将替换class
                classNames[1] = 'rolling_' + diffValueList[key];
              }
            }
            // 重新赋值类名
            element.className = classNames.join(' ');
          }
        }
      } else {
        // 赋值
        this.value = this.val.toString().split('');
        // 刷新
        this.compKey += 1;
      }
    },
  },
  // 初始化时加载数值
  created() {
    this.value = this.val.toString().split('');
    this.backups = this.val;
  },
};
</script>
<style scoped>
.count-flop {
  display: inline-block;
  font-size: 60px;
  font-family: zaozi;
  color: #d7e7f9;
}

.count-flop > div {
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 100%;
}

.count-flop-box {
  /* 可更改 */
  width: 50px;
}

.count-flop-point {
  /* 可更改 */
  margin-right: 5px;
  width: 10px;
}

.count-flop-content {
  font-family: zaozi;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-fill-mode: forwards !important;
}

.count-flop-content-symbol {
  /* line-height: 127px; */
}

.rolling_0 {
  animation: rolling_0 2.1s ease;
}

@keyframes rolling_0 {
  from {
    transform: translateY(-90%);
  }
  to {
    transform: translateY(0);
  }
}

.rolling_1 {
  animation: rolling_1 3s ease;
}

@keyframes rolling_1 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}

.rolling_2 {
  animation: rolling_2 2.1s ease;
}

@keyframes rolling_2 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20%);
  }
}

.rolling_3 {
  animation: rolling_3 3s ease;
}

@keyframes rolling_3 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30%);
  }
}

.rolling_4 {
  animation: rolling_4 2.1s ease;
}

@keyframes rolling_4 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-40%);
  }
}

.rolling_5 {
  animation: rolling_5 3s ease;
}

@keyframes rolling_5 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

.rolling_6 {
  animation: rolling_6 2.1s ease;
}

@keyframes rolling_6 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-60%);
  }
}

.rolling_7 {
  animation: rolling_7 3.1s ease;
}

@keyframes rolling_7 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-70%);
  }
}

.rolling_8 {
  animation: rolling_8 2.1s ease;
}

@keyframes rolling_8 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-80%);
  }
}

.rolling_9 {
  animation: rolling_9 3.6s ease;
}

@keyframes rolling_9 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-90%);
  }
}
</style>
