/*
* @roll-num.vue
* @deprecated
* @author czh
* @update (czh 2022/1/5)
*/
<template>
    <div class="box-item">
        <ul>
            <li :class="{'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
                v-for="(item,index) in orderNum"
                :key="index">
                <span v-if="!isNaN(item)">
                 <i ref="numberItem" :class="`number-item-i` + uid">0123456789</i>
                </span>
                <span class="comma" v-else>{{ item }}</span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import {computed, defineComponent, getCurrentInstance, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {TimeoutHandle} from "../utils/types";

export default defineComponent({
    name: "roll-num",
    props: {
        value: {
            type: Number, // 具体数值
            default:0
        },
        time: {
            type: Number, // 滚动要花的时间，单位秒
            default:3
        },
    },
    setup(props) {
        const orderNum = ref<Array<string>>([ '0',',','0','0', '0'])
        const uid = getCurrentInstance()?.uid
        let timer:TimeoutHandle
        let newNumber:number = 0
        // 定时增长数字
        const increaseNumber = (time: number): void => {
            timer = setInterval(() => {
                newNumber = newNumber + getRandomNumber(1, 100)
                setNumberTransform()
            }, time * 1000)
        }
        // 设置文字滚动
        const setNumberTransform = (): void => {
            const numberItems:NodeList = document.querySelectorAll('.number-item-i' + uid) // 拿到数字的ref，计算元素数量
            const numberArr:Array<string> = orderNum.value.filter((item: string) => !isNaN(Number(item)))
            // 结合CSS 对数字字符进行滚动,显示订单数量
            for (let index = 0; index < numberItems.length; index++) {
                const elem = numberItems[index] as HTMLElement
                const numberArrIndex:string = numberArr[index]
                elem.style.transform = `translate(-50%, -${Number(numberArrIndex) * 10}%)`
            }
        }
        const getRandomNumber = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        // 处理传过来的具体值value
        const toOrderNum = (num: number | string): void => {
            num = num.toString()
            // 把具体值value变成字符串
            if (num.length < 4) {
                num = '0' + num // 如未满八位数，添加"0"补位
                toOrderNum(num) // 递归添加"0"补位
            } else if (num.length === 4) {
                // 具体值value中加入逗号
                num = num.slice(0, 1) + ',' + num.slice(1, 4)
                orderNum.value = num.split('') // 将其便变成数据，渲染至滚动数组

            } else {
                // 具体值value数字超过八位显示异常
               console.error('显示异常，请联系后台管理员')
            }
        }
        const propsVal = computed(()=>{return props.value})
        watch(propsVal,(nVal)=>{
            toOrderNum(nVal)
        })
        onBeforeUnmount(()=>{
            clearInterval(timer)
        })
        onMounted(() => {
            toOrderNum(props.value) // 这里输入数字即可调用
            increaseNumber(props.time);
        })
        return {
            orderNum,
            uid
        }
    }
})
</script>
<style scoped>
/* 具体值value总量滚动数字设置 */

.box-item {
  position: relative;
  height: 56px;
  font-size: 54px;
  line-height: 41px;
  text-align: center;
  list-style: none;

  /* 文字禁止编辑 */
  -moz-user-select: none; /* 火狐 */
  -webkit-user-select: none; /* webkit浏览器 */
  -ms-user-select: none; /* IE10 */
  -khtml-user-select: none; /* 早期浏览器 */
  user-select: none;
  writing-mode: vertical-lr;
  text-orientation: upright;

  /* overflow: hidden; */
}

/* 默认逗号设置 */

.mark-item {
  position: relative;

  /* width: 10px; */
  height: 100px;
  margin-right: 5px;
  font-size: 48px;
  line-height: 10px;
}

.mark-item > span {
  position: absolute;
  bottom: 34px;
  width: 100%;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* 滚动数字设置 */

.number-item {
  width: 30px;
  height: 54px;
  margin-right: 5px;
  list-style: none;
  border-radius: 4px;
  @apply bg-white
}

.number-item > span {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  overflow: hidden;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.number-item > span > i {
  position: absolute;
  top: 11px;
  left: 50%;
  font-style: normal;
  letter-spacing: 10px;
  transition: transform 1s ease-in-out;
  transform: translate(-50%, 0);
}

.number-item:last-child {
  margin-right: 0;
}
</style>
