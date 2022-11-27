<template>
  <div class="fortune-format-view">
    <div>
      <table>
        <tbody>
          <td>
            <tr>
              <td>대운</td>
              <td>세운</td>
              <td>월운</td>
              <td>일운</td>
            </tr>
            <tr>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.bigFortune.sky.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.bigFortune.sky.chinese }}</span
                  >
                  {{ fortune.bigFortune.sky.korean }}
                </div>
                <div class="ten-star">{{ fortune.bigFortune.sky.tenStar }}({{ fortune.bigFortune.sky.minusPlus }})</div>
              </td>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.smallFortune.sky.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.smallFortune.sky.chinese }}</span
                  >
                  {{ fortune.smallFortune.sky.korean }}
                </div>
                <div class="ten-star">
                  {{ fortune.smallFortune.sky.tenStar }}({{ fortune.smallFortune.sky.minusPlus }})
                </div>
              </td>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.monthFortune.sky.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.monthFortune.sky.chinese }}</span
                  >
                  {{ fortune.monthFortune.sky.korean }}
                </div>
                <div class="ten-star">
                  {{ fortune.monthFortune.sky.tenStar }}({{ fortune.monthFortune.sky.minusPlus }})
                </div>
              </td>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.dayFortune.sky.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.dayFortune.sky.chinese }}</span
                  >
                  {{ fortune.dayFortune.sky.korean }}
                </div>
                <div class="ten-star">{{ fortune.dayFortune.sky.tenStar }}({{ fortune.dayFortune.sky.minusPlus }})</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.bigFortune.ground.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.bigFortune.ground.chinese }}</span
                  >
                  {{ fortune.bigFortune.ground.korean }}
                </div>
                <div class="ten-star">
                  {{ fortune.bigFortune.ground.tenStar }}({{ fortune.bigFortune.ground.minusPlus }})
                </div>
              </td>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.smallFortune.ground.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.smallFortune.ground.chinese }}</span
                  >
                  {{ fortune.smallFortune.ground.korean }}
                </div>
                <div class="ten-star">
                  {{ fortune.smallFortune.ground.tenStar }}({{ fortune.smallFortune.ground.minusPlus }})
                </div>
              </td>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.monthFortune.ground.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.monthFortune.ground.chinese }}</span
                  >
                  {{ fortune.monthFortune.ground.korean }}
                </div>
                <div class="ten-star">
                  {{ fortune.monthFortune.ground.tenStar }}({{ fortune.monthFortune.ground.minusPlus }})
                </div>
              </td>
              <td>
                <div>
                  <span
                    :style="[
                      {
                        backgroundColor: fortune.dayFortune.ground.fiveCircleColor,
                      },
                    ]"
                    >{{ fortune.dayFortune.ground.chinese }}</span
                  >
                  {{ fortune.dayFortune.ground.korean }}
                </div>
                <div class="ten-star">
                  {{ fortune.dayFortune.ground.tenStar }}({{ fortune.dayFortune.ground.minusPlus }})
                </div>
              </td>
            </tr>
            <tr class="bottom">
              <td>{{ fortune.bigFortune.number }}세</td>
              <td>{{ fortune.smallFortune.number }}년</td>
              <td>{{ fortune.monthFortune.number }}월</td>
              <td>{{ fortune.dayFortune.number }}일</td>
            </tr>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "FortuneFormatView",
  props: {
    fortune: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.block {
  background-color: #90a4ae;
}
.ten-star {
  background-color: #90a4ae;
  font-size: 10px;
}
.bottom {
  font-size: 10px;
}
table {
  border-collapse: collapse;
  width: 160px;
  border: 1px solid black;
  margin: 5px;
}
th,
td {
  width: 40px;
  border: 1px solid black;
}
</style>
