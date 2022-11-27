<template>
  <div class="month-fortune-format-view">
    <div>
      <div class="fortune">월운 (1개월)</div>
      <table>
        <tbody>
          <td>
            <tr>
              <td class="month">{{ monthFortune["11"]["month"] }}월</td>
              <td class="month">{{ monthFortune["10"]["month"] }}월</td>
              <td class="month">{{ monthFortune["9"]["month"] }}월</td>
              <td class="month">{{ monthFortune["8"]["month"] }}월</td>
              <td class="month">{{ monthFortune["7"]["month"] }}월</td>
              <td class="month">{{ monthFortune["6"]["month"] }}월</td>
              <td class="month">{{ monthFortune["5"]["month"] }}월</td>
              <td class="month">{{ monthFortune["4"]["month"] }}월</td>
              <td class="month">{{ monthFortune["3"]["month"] }}월</td>
              <td class="month">{{ monthFortune["2"]["month"] }}월</td>
              <td class="month">{{ monthFortune["1"]["month"] }}월</td>
              <td class="month">{{ monthFortune["0"]["month"] }}월</td>
            </tr>
            <tr>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['11'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["11"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["11"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["11"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['10'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["10"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["10"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["10"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['9'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["9"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["9"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["9"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['8'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["8"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["8"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["8"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['7'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["7"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["7"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["7"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['6'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["6"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["6"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["6"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['5'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["5"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["5"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["5"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['4'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["4"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["4"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["4"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['3'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["3"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["3"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["3"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['2'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["2"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["2"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["2"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['1'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["1"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["1"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["1"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['0'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["0"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["0"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["0"]["sky"]["tenStar"] }}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['11'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["11"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["11"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["11"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['10'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["10"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["10"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["10"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['9'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["9"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["9"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["9"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['8'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["8"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["8"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["8"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['7'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["7"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["7"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["7"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['6'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["6"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["6"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["6"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['5'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["5"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["5"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["5"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['4'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["4"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["4"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["4"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['3'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["3"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["3"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["3"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['2'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["2"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["2"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["2"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['1'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["1"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["1"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["1"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td>
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: monthFortune['0'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ monthFortune["0"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ monthFortune["0"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ monthFortune["0"]["ground"]["tenStar"] }}
                </div>
              </td>
            </tr>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "monthFortuneFormatView",
  props: {
    monthFortune: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.chinese {
  font-size: 12px;
}
.fortune {
  margin: 5px;
}
.block {
  background-color: #90a4ae;
}
.ten-star {
  background-color: #90a4ae;
  font-size: 8px;
}
.korean {
  font-size: 8px;
}
.month {
  font-size: 10px;
}
.minusPlus {
  font-size: 7px;
}
.bottom {
  font-size: 12px;
}
table {
  border-collapse: collapse;
  width: 350px;
  border: 1px solid black;
  margin: 10px;
}
th,
td {
  width: 35px;
  border: 1px solid black;
}
</style>
