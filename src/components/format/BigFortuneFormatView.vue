<template>
  <div class="big-fortune-format-view">
    <div>
      <div class="fortune">대운 (10년)</div>
      <table>
        <tbody>
          <td>
            <tr>
              <td :style="[bigFortuneTop10]" @click="onClickBigFortune(10)">
                {{ bigFortune["10"]["number"] }}
              </td>
              <td :style="[bigFortuneTop9]" @click="onClickBigFortune(9)">
                {{ bigFortune["9"]["number"] }}
              </td>
              <td :style="[bigFortuneTop8]" @click="onClickBigFortune(8)">
                {{ bigFortune["8"]["number"] }}
              </td>
              <td :style="[bigFortuneTop7]" @click="onClickBigFortune(7)">
                {{ bigFortune["7"]["number"] }}
              </td>
              <td :style="[bigFortuneTop6]" @click="onClickBigFortune(6)">
                {{ bigFortune["6"]["number"] }}
              </td>
              <td :style="[bigFortuneTop5]" @click="onClickBigFortune(5)">
                {{ bigFortune["5"]["number"] }}
              </td>
              <td :style="[bigFortuneTop4]" @click="onClickBigFortune(4)">
                {{ bigFortune["4"]["number"] }}
              </td>
              <td :style="[bigFortuneTop3]" @click="onClickBigFortune(3)">
                {{ bigFortune["3"]["number"] }}
              </td>
              <td :style="[bigFortuneTop2]" @click="onClickBigFortune(2)">
                {{ bigFortune["2"]["number"] }}
              </td>
              <td :style="[bigFortuneTop1]" @click="onClickBigFortune(1)">
                {{ bigFortune["1"]["number"] }}
              </td>
            </tr>
            <tr>
              <td :style="[bigFortuneMiddle10]" @click="onClickBigFortune(10)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['10'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["10"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["10"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["10"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle9]" @click="onClickBigFortune(9)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['9'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["9"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["9"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["9"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle8]" @click="onClickBigFortune(8)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['8'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["8"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["8"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["8"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle7]" @click="onClickBigFortune(7)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['7'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["7"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["7"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["7"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle6]" @click="onClickBigFortune(6)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['6'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["6"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["6"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["6"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle5]" @click="onClickBigFortune(5)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['5'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["5"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["5"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["5"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle4]" @click="onClickBigFortune(4)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['4'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["4"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["4"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["4"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle3]" @click="onClickBigFortune(3)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['3'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["3"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["3"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["3"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle2]" @click="onClickBigFortune(2)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['2'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["2"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["2"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["2"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneMiddle1]" @click="onClickBigFortune(1)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['1'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["1"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["1"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["1"]["sky"]["tenStar"] }}
                </div>
              </td>
            </tr>
            <tr>
              <td :style="[bigFortuneBottom10]" @click="onClickBigFortune(10)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['10'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["10"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["10"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["10"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom9]" @click="onClickBigFortune(9)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['9'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["9"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["9"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["9"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom8]" @click="onClickBigFortune(8)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['8'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["8"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["8"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["8"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom7]" @click="onClickBigFortune(7)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['7'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["7"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["7"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["7"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom6]" @click="onClickBigFortune(6)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['6'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["6"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["6"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["6"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom5]" @click="onClickBigFortune(5)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['5'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["5"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["5"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["5"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom4]" @click="onClickBigFortune(4)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['4'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["4"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["4"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["4"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom3]" @click="onClickBigFortune(3)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['3'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["3"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["3"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["3"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom2]" @click="onClickBigFortune(2)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['2'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["2"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["2"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["2"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[bigFortuneBottom1]" @click="onClickBigFortune(1)">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: bigFortune['1'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ bigFortune["1"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ bigFortune["1"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ bigFortune["1"]["ground"]["tenStar"] }}
                </div>
              </td>
            </tr>
            <tr class="jijangan">
              <!-- 10대운 -->

              <td>
                <span>{{ bigFortune["10"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[10].ground.jijangGan.second">{{
                  bigFortune["10"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["10"].ground.jijangGan.third.chinese }}</span>
              </td>
              <!-- 9대운 -->

              <td>
                <span>{{ bigFortune["9"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[9].ground.jijangGan.second">{{
                  bigFortune["9"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["9"].ground.jijangGan.third.chinese }}</span>
              </td>
              <!-- 8대운 -->

              <td>
                <span>{{ bigFortune["8"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[8].ground.jijangGan.second">{{
                  bigFortune["8"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["8"].ground.jijangGan.third.chinese }}</span>
              </td>
              <!-- 7대운 -->
              <td>
                <span>{{ bigFortune["7"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[7].ground.jijangGan.second">{{
                  bigFortune["7"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["7"].ground.jijangGan.third.chinese }}</span>
              </td>

              <!-- 6대운 -->
              <td>
                <span>{{ bigFortune["6"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[6].ground.jijangGan.second">{{
                  bigFortune["6"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["6"].ground.jijangGan.third.chinese }}</span>
              </td>
              <!-- 5대운 -->
              <td>
                <span>{{ bigFortune["5"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[5].ground.jijangGan.second">{{
                  bigFortune["5"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["5"].ground.jijangGan.third.chinese }}</span>
              </td>

              <!-- 4대운 -->
              <td>
                <span>{{ bigFortune["4"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[4].ground.jijangGan.second">{{
                  bigFortune["4"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["4"].ground.jijangGan.third.chinese }}</span>
              </td>

              <!-- 3대운  -->
              <td>
                <span>{{ bigFortune["3"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[3].ground.jijangGan.second">{{
                  bigFortune["3"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["3"].ground.jijangGan.third.chinese }}</span>
              </td>

              <!-- 2대운 -->
              <td>
                <span>{{ bigFortune["2"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[2].ground.jijangGan.second">{{
                  bigFortune["2"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["2"].ground.jijangGan.third.chinese }}</span>
              </td>

              <!-- 1대운 -->
              <td>
                <span>{{ bigFortune["1"].ground.jijangGan.first.chinese }}</span>
                <span v-if="bigFortune[1].ground.jijangGan.second">{{
                  bigFortune["1"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ bigFortune["1"].ground.jijangGan.third.chinese }}</span>
              </td>
            </tr>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BigFortuneFormatView",
  data() {
    return {
      number: "",
      bigFortuneTop10: {
        border: "",
      },
      bigFortuneMiddle10: {
        border: "",
      },
      bigFortuneBottom10: {
        border: "",
      },
      bigFortuneTop9: {
        border: "",
      },
      bigFortuneMiddle9: {
        border: "",
      },
      bigFortuneBottom9: {
        border: "",
      },
      bigFortuneTop8: {
        border: "",
      },
      bigFortuneMiddle8: {
        border: "",
      },
      bigFortuneBottom8: {
        border: "",
      },
      bigFortuneTop7: {
        border: "",
      },
      bigFortuneMiddle7: {
        border: "",
      },
      bigFortuneBottom7: {
        border: "",
      },
      bigFortuneTop6: {
        border: "",
      },
      bigFortuneMiddle6: {
        border: "",
      },
      bigFortuneBottom6: {
        border: "",
      },
      bigFortuneTop5: {
        border: "",
      },
      bigFortuneMiddle5: {
        border: "",
      },
      bigFortuneBottom5: {
        border: "",
      },
      bigFortuneTop4: {
        border: "",
      },
      bigFortuneMiddle4: {
        border: "",
      },
      bigFortuneBottom4: {
        border: "",
      },
      bigFortuneTop3: {
        border: "",
      },
      bigFortuneMiddle3: {
        border: "",
      },
      bigFortuneBottom3: {
        border: "",
      },
      bigFortuneTop2: {
        border: "",
      },
      bigFortuneMiddle2: {
        border: "",
      },
      bigFortuneBottom2: {
        border: "",
      },
      bigFortuneTop1: {
        border: "",
      },
      bigFortuneMiddle1: {
        border: "",
      },
      bigFortuneBottom1: {
        border: "",
      },
    };
  },
  props: {
    memberId: {
      type: Number,
    },
    bigFortune: {
      type: Object,
    },
    bigNumber: { type: Number },
  },
  created() {
    this.number = this.bigNumber;
    this.clearBorder();
    this.setBorder(this.bigNumber);
  },
  methods: {
    async onClickBigFortune(number) {
      this.number = number;
      this.clearBorder();
      this.setBorder(this.number);
      this.getManse(this);
    },
    clearBorder() {
      this.bigFortuneTop10.border = "";
      this.bigFortuneMiddle10.border = "";
      this.bigFortuneBottom10.border = "";
      this.bigFortuneTop9.border = "";
      this.bigFortuneMiddle9.border = "";
      this.bigFortuneBottom9.border = "";
      this.bigFortuneTop8.border = "";
      this.bigFortuneMiddle8.border = "";
      this.bigFortuneBottom8.border = "";
      this.bigFortuneTop7.border = "";
      this.bigFortuneMiddle7.border = "";
      this.bigFortuneBottom7.border = "";
      this.bigFortuneTop6.border = "";
      this.bigFortuneMiddle6.border = "";
      this.bigFortuneBottom6.border = "";
      this.bigFortuneTop5.border = "";
      this.bigFortuneMiddle5.border = "";
      this.bigFortuneBottom5.border = "";
      this.bigFortuneTop4.border = "";
      this.bigFortuneMiddle4.border = "";
      this.bigFortuneBottom4.border = "";
      this.bigFortuneTop3.border = "";
      this.bigFortuneMiddle3.border = "";
      this.bigFortuneBottom3.border = "";
      this.bigFortuneTop2.border = "";
      this.bigFortuneMiddle2.border = "";
      this.bigFortuneBottom2.border = "";
      this.bigFortuneTop1.border = "";
      this.bigFortuneMiddle1.border = "";
      this.bigFortuneBottom1.border = "";
    },
    async setBorder(number) {
      switch (number) {
        case 10:
          this.bigFortuneTop10.border = "4px solid black";
          this.bigFortuneMiddle10.border = "4px solid black";
          this.bigFortuneBottom10.border = "4px solid black";
          break;
        case 9:
          this.bigFortuneTop9.border = "4px solid black";
          this.bigFortuneMiddle9.border = "4px solid black";
          this.bigFortuneBottom9.border = "4px solid black";
          break;
        case 8:
          this.bigFortuneTop8.border = "4px solid black";
          this.bigFortuneMiddle8.border = "4px solid black";
          this.bigFortuneBottom8.border = "4px solid black";
          break;
        case 7:
          this.bigFortuneTop7.border = "4px solid black";
          this.bigFortuneMiddle7.border = "4px solid black";
          this.bigFortuneBottom7.border = "4px solid black";
          break;
        case 6:
          this.bigFortuneTop6.border = "4px solid black";
          this.bigFortuneMiddle6.border = "4px solid black";
          this.bigFortuneBottom6.border = "4px solid black";
          break;
        case 5:
          this.bigFortuneTop5.border = "4px solid black";
          this.bigFortuneMiddle5.border = "4px solid black";
          this.bigFortuneBottom5.border = "4px solid black";
          break;
        case 4:
          this.bigFortuneTop4.border = "4px solid black";
          this.bigFortuneMiddle4.border = "4px solid black";
          this.bigFortuneBottom4.border = "4px solid black";
          break;
        case 3:
          this.bigFortuneTop3.border = "4px solid black";
          this.bigFortuneMiddle3.border = "4px solid black";
          this.bigFortuneBottom3.border = "4px solid black";
          break;
        case 2:
          this.bigFortuneTop2.border = "4px solid black";
          this.bigFortuneMiddle2.border = "4px solid black";
          this.bigFortuneBottom2.border = "4px solid black";
          break;
        case 1:
          this.bigFortuneTop1.border = "4px solid black";
          this.bigFortuneMiddle1.border = "4px solid black";
          this.bigFortuneBottom1.border = "4px solid black";
          break;
      }
    },
    ...mapActions(["getManse"]),
  },
};
</script>

<style scoped>
.fortune {
  margin: 5px;
}
.block {
  background-color: #90a4ae;
}
.ten-star {
  background-color: #90a4ae;
  font-size: 10px;
}
.korean {
  font-size: 12px;
}
.minusPlus {
  font-size: 7px;
}
.bottom {
  font-size: 10px;
}
.chinese {
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
.jijangan {
  font-size: 8px;
}
</style>
