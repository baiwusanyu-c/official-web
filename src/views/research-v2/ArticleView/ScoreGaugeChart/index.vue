<template>
  <div id="score-chart"></div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import * as echarts from 'echarts/core'
  import { GaugeChart } from 'echarts/charts'
  import { CanvasRenderer } from 'echarts/renderers'

  echarts.use([GaugeChart, CanvasRenderer])
  export default defineComponent({
    name: 'ScoreGaugeChart',
    props: {
      value: {
        type: Number,
      },
    },
    setup(props) {
      onMounted(() => {
        const chartDom: HTMLElement | null = document.getElementById('score-chart')
        const myChart = echarts.init(chartDom as any)
        const option = {
          grid: {
            left: '0%',
            right: '0%',
            top: '0%',
          },

          series: [
            {
              type: 'gauge',
              progress: {
                show: true,
                width: 15,
                itemStyle: {
                  color: '#1CD2A9',
                },
              },
              axisLine: {
                lineStyle: {
                  width: 15,
                },
              },
              axisTick: {
                show: false,
              },
              pointer: false,
              splitLine: {
                show: false,
              },
              axisLabel: {
                show: false,
                distance: 25,
                color: '#999',
                fontSize: 20,
              },
              title: {
                show: true,
                fontSize: 14,
                fontWeight: 400,
                color: '#050B37',
                offsetCenter: [0, 0],
              },
              detail: {
                valueAnimation: true,
                fontSize: 40,
                color: '#050B37',
                offsetCenter: [0, '-40%'],
              },
              startAngle: 180,
              endAngle: 0,
              data: [
                {
                  value: props.value,
                  name: 'Security Score',
                },
              ],
            },
          ],
        }

        option && myChart.setOption(option)
      })
    },
  })
</script>
