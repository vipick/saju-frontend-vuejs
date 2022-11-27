<template>
  <div class="saju-format-view">
    <div>
      <table>
        <tbody>
          <td>
            <tr>
              <td>시</td>
              <td>일</td>
              <td>월</td>
              <td>년</td>
            </tr>
            <tr>
              <td v-if="saju.timeSky">
                <div>
                  <span :style="[{ backgroundColor: saju.timeSky.fiveCircleColor }]">{{ saju.timeSky.chinese }}</span>
                  {{ saju.timeSky.korean }}
                </div>

                <div class="ten-star">{{ saju.timeSky.tenStar }}({{ saju.timeSky.minusPlus }})</div>
              </td>
              <td v-else class="block"></td>
              <td>
                <div>
                  <span :style="[{ backgroundColor: saju.daySky.fiveCircleColor }]">{{ saju.daySky.chinese }}</span>
                  {{ saju.daySky.korean }}
                </div>
                <div class="ten-star">{{ saju.daySky.tenStar }}({{ saju.daySky.minusPlus }})</div>
              </td>
              <td>
                <div>
                  <span :style="[{ backgroundColor: saju.monthSky.fiveCircleColor }]">{{ saju.monthSky.chinese }}</span>
                  {{ saju.monthSky.korean }}
                </div>
                <div class="ten-star">{{ saju.monthSky.tenStar }}({{ saju.monthSky.minusPlus }})</div>
              </td>
              <td>
                <div>
                  <span :style="[{ backgroundColor: saju.yearSky.fiveCircleColor }]">{{ saju.yearSky.chinese }}</span>
                  {{ saju.yearSky.korean }}
                </div>
                <div class="ten-star">{{ saju.yearSky.tenStar }}({{ saju.yearSky.minusPlus }})</div>
              </td>
            </tr>
            <tr>
              <td v-if="saju.timeGround">
                <div>
                  <span :style="[{ backgroundColor: saju.timeGround.fiveCircleColor }]">{{
                    saju.timeGround.chinese
                  }}</span>
                  {{ saju.timeGround.korean }}
                </div>
                <div class="ten-star">{{ saju.timeGround.tenStar }}({{ saju.timeGround.minusPlus }})</div>
              </td>
              <td v-else class="block"></td>
              <td>
                <div>
                  <span :style="[{ backgroundColor: saju.dayGround.fiveCircleColor }]">{{
                    saju.dayGround.chinese
                  }}</span>
                  {{ saju.dayGround.korean }}
                </div>
                <div class="ten-star">{{ saju.dayGround.tenStar }}({{ saju.dayGround.minusPlus }})</div>
              </td>
              <td>
                <div>
                  <span :style="[{ backgroundColor: saju.monthGround.fiveCircleColor }]">{{
                    saju.monthGround.chinese
                  }}</span>
                  {{ saju.monthGround.korean }}
                </div>
                <div class="ten-star">{{ saju.monthGround.tenStar }}({{ saju.monthGround.minusPlus }})</div>
              </td>
              <td>
                <div>
                  <span :style="[{ backgroundColor: saju.yearGround.fiveCircleColor }]">{{
                    saju.yearGround.chinese
                  }}</span>
                  {{ saju.yearGround.korean }}
                </div>
                <div class="ten-star">{{ saju.yearGround.tenStar }}({{ saju.yearGround.minusPlus }})</div>
              </td>
            </tr>

            <tr class="bottom">
              <td v-if="saju.timeGround">
                <span>{{ saju.timeGround.jijangGan.first.chinese }}</span>
                <span v-if="saju.timeGround.jijangGan.second">{{ saju.timeGround.jijangGan.second.chinese }}</span>
                <span v-else>#</span>
                <span>{{ saju.timeGround.jijangGan.third.chinese }}</span>
              </td>
              <td v-else class="block"></td>
              <td>
                <span>{{ saju.dayGround.jijangGan.first.chinese }}</span>
                <span v-if="saju.dayGround.jijangGan.second">{{ saju.dayGround.jijangGan.second.chinese }}</span>
                <span v-else>#</span>
                <span>{{ saju.dayGround.jijangGan.third.chinese }}</span>
              </td>

              <td>
                <span>{{ saju.monthGround.jijangGan.first.chinese }}</span>
                <span v-if="saju.monthGround.jijangGan.second">{{ saju.monthGround.jijangGan.second.chinese }}</span>
                <span v-else>#</span>
                <span>{{ saju.monthGround.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ saju.yearGround.jijangGan.first.chinese }}</span>
                <span v-if="saju.yearGround.jijangGan.second">{{ saju.yearGround.jijangGan.second.chinese }}</span>
                <span v-else>#</span>
                <span>{{ saju.yearGround.jijangGan.third.chinese }}</span>
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
  name: "SajuFormatView",
  props: {
    saju: {
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
  font-size: 12px;
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
