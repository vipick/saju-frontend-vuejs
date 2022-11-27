<template>
  <div class="small-fortune-format-view">
    <div>
      <div class="fortune">세운 (1년)</div>
      <table>
        <tbody>
          <td>
            <tr>
              <td :style="[smallFortuneTop10]" class="year" @click="onClickSmallFortune(String(9))">
                {{ smallFortune["9"]["year"] }}<br />({{ smallFortune["9"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop9]" class="year" @click="onClickSmallFortune(String(8))">
                {{ smallFortune["8"]["year"] }}<br />({{ smallFortune["8"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop8]" class="year" @click="onClickSmallFortune(String(7))">
                {{ smallFortune["7"]["year"] }}<br />({{ smallFortune["7"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop7]" class="year" @click="onClickSmallFortune(String(6))">
                {{ smallFortune["6"]["year"] }}<br />({{ smallFortune["6"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop6]" class="year" @click="onClickSmallFortune(String(5))">
                {{ smallFortune["5"]["year"] }}<br />({{ smallFortune["5"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop5]" class="year" @click="onClickSmallFortune(String(4))">
                {{ smallFortune["4"]["year"] }}<br />({{ smallFortune["4"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop4]" class="year" @click="onClickSmallFortune(String(3))">
                {{ smallFortune["3"]["year"] }}<br />({{ smallFortune["3"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop3]" class="year" @click="onClickSmallFortune(String(2))">
                {{ smallFortune["2"]["year"] }}<br />({{ smallFortune["2"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop2]" class="year" @click="onClickSmallFortune(String(1))">
                {{ smallFortune["1"]["year"] }}<br />({{ smallFortune["1"]["year"] - currentYear + age }})
              </td>
              <td :style="[smallFortuneTop1]" class="year" @click="onClickSmallFortune(String(0))">
                {{ smallFortune["0"]["year"] }}<br />({{ smallFortune["0"]["year"] - currentYear + age }})
              </td>
            </tr>
            <tr>
              <td :style="[smallFortuneTop10]" @click="onClickSmallFortune(String(9))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['9'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["9"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["9"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["9"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop9]" @click="onClickSmallFortune(String(8))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['8'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["8"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["8"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["8"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop8]" @click="onClickSmallFortune(String(7))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['7'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["7"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["7"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["7"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop7]" @click="onClickSmallFortune(String(6))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['6'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["6"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["6"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["6"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop6]" @click="onClickSmallFortune(String(5))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['5'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["5"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["5"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["5"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop5]" @click="onClickSmallFortune(String(4))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['4'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["4"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["4"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["4"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop4]" @click="onClickSmallFortune(String(3))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['3'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["3"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["3"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["3"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop3]" @click="onClickSmallFortune(String(2))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['2'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["2"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["2"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["2"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop2]" @click="onClickSmallFortune(String(1))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['1'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["1"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["1"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["1"]["sky"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop1]" @click="onClickSmallFortune(String(0))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['0'].sky.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["0"]["sky"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["0"]["sky"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["0"]["sky"]["tenStar"] }}
                </div>
              </td>
            </tr>
            <tr>
              <td :style="[smallFortuneTop10]" @click="onClickSmallFortune(String(9))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['9'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["9"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["9"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["9"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop9]" @click="onClickSmallFortune(String(8))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['8'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["8"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["8"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["8"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop8]" @click="onClickSmallFortune(String(7))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['7'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["7"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["7"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["7"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop7]" @click="onClickSmallFortune(String(6))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['6'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["6"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["6"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["6"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop6]" @click="onClickSmallFortune(String(5))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['5'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["5"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["5"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["5"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop5]" @click="onClickSmallFortune(String(4))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['4'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["4"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["4"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["4"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop4]" @click="onClickSmallFortune(String(3))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['3'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["3"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["3"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["3"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop3]" @click="onClickSmallFortune(String(2))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['2'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["2"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["2"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["2"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop2]" @click="onClickSmallFortune(String(1))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['1'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["1"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["1"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["1"]["ground"]["tenStar"] }}
                </div>
              </td>
              <td :style="[smallFortuneTop1]" @click="onClickSmallFortune(String(0))">
                <div>
                  <span
                    class="chinese"
                    :style="[
                      {
                        backgroundColor: smallFortune['0'].ground.fiveCircleColor,
                      },
                    ]"
                    >{{ smallFortune["0"]["ground"]["chinese"] }}</span
                  >
                  <span class="korean">{{ smallFortune["0"]["ground"]["korean"] }}</span>
                </div>
                <div class="ten-star">
                  {{ smallFortune["0"]["ground"]["tenStar"] }}
                </div>
              </td>
            </tr>
            <tr class="jijangan">
              <td>
                <span>{{ smallFortune["9"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[9].ground.jijangGan.second">{{
                  smallFortune["9"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["9"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["8"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[8].ground.jijangGan.second">{{
                  smallFortune["8"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["8"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["7"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[7].ground.jijangGan.second">{{
                  smallFortune["7"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["7"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["6"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[6].ground.jijangGan.second">{{
                  smallFortune["6"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["6"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["5"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[5].ground.jijangGan.second">{{
                  smallFortune["5"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["5"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["4"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[4].ground.jijangGan.second">{{
                  smallFortune["4"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["4"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["3"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[3].ground.jijangGan.second">{{
                  smallFortune["3"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["3"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["2"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[2].ground.jijangGan.second">{{
                  smallFortune["2"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["2"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["1"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[1].ground.jijangGan.second">{{
                  smallFortune["1"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["1"].ground.jijangGan.third.chinese }}</span>
              </td>
              <td>
                <span>{{ smallFortune["0"].ground.jijangGan.first.chinese }}</span>
                <span v-if="smallFortune[0].ground.jijangGan.second">{{
                  smallFortune["0"].ground.jijangGan.second.chinese
                }}</span>
                <span v-else>#</span>
                <span>{{ smallFortune["0"].ground.jijangGan.third.chinese }}</span>
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
  name: "SmallFortuneFormatView",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      smallFortuneTop10: {
        border: "",
      },
      smallFortuneMiddle10: {
        border: "",
      },
      smallFortuneBottom10: {
        border: "",
      },
      smallFortuneTop9: {
        border: "",
      },
      smallFortuneMiddle9: {
        border: "",
      },
      smallFortuneBottom9: {
        border: "",
      },
      smallFortuneTop8: {
        border: "",
      },
      smallFortuneMiddle8: {
        border: "",
      },
      smallFortuneBottom8: {
        border: "",
      },
      smallFortuneTop7: {
        border: "",
      },
      smallFortuneMiddle7: {
        border: "",
      },
      smallFortuneBottom7: {
        border: "",
      },
      smallFortuneTop6: {
        border: "",
      },
      smallFortuneMiddle6: {
        border: "",
      },
      smallFortuneBottom6: {
        border: "",
      },
      smallFortuneTop5: {
        border: "",
      },
      smallFortuneMiddle5: {
        border: "",
      },
      smallFortuneBottom5: {
        border: "",
      },
      smallFortuneTop4: {
        border: "",
      },
      smallFortuneMiddle4: {
        border: "",
      },
      smallFortuneBottom4: {
        border: "",
      },
      smallFortuneTop3: {
        border: "",
      },
      smallFortuneMiddle3: {
        border: "",
      },
      smallFortuneBottom3: {
        border: "",
      },
      smallFortuneTop2: {
        border: "",
      },
      smallFortuneMiddle2: {
        border: "",
      },
      smallFortuneBottom2: {
        border: "",
      },
      smallFortuneTop1: {
        border: "",
      },
      smallFortuneMiddle1: {
        border: "",
      },
      smallFortuneBottom1: {
        border: "",
      },
    };
  },
  props: {
    smallFortune: {
      type: Object,
    },
    age: { type: Number },
    memberId: { type: Number },
    number: { type: Number }, //대운
  },
  watch: {
    number: {
      // the callback will be called immediately after the start of the observation
      deep: true,
      async handler() {
        this.clearBorder();
        this.setBorder("0");
      },
    },
  },
  created() {
    this.clearBorder();
    this.setBorder("0");
  },
  methods: {
    async onClickSmallFortune(num) {
      this.clearBorder();
      this.number2 = this.smallFortune[num]["year"];
      this.setBorder(num);
      this.getManse(this);
    },
    clearBorder() {
      this.smallFortuneTop10.border = "";
      this.smallFortuneMiddle10.border = "";
      this.smallFortuneBottom10.border = "";
      this.smallFortuneTop9.border = "";
      this.smallFortuneMiddle9.border = "";
      this.smallFortuneBottom9.border = "";
      this.smallFortuneTop8.border = "";
      this.smallFortuneMiddle8.border = "";
      this.smallFortuneBottom8.border = "";
      this.smallFortuneTop7.border = "";
      this.smallFortuneMiddle7.border = "";
      this.smallFortuneBottom7.border = "";
      this.smallFortuneTop6.border = "";
      this.smallFortuneMiddle6.border = "";
      this.smallFortuneBottom6.border = "";
      this.smallFortuneTop5.border = "";
      this.smallFortuneMiddle5.border = "";
      this.smallFortuneBottom5.border = "";
      this.smallFortuneTop4.border = "";
      this.smallFortuneMiddle4.border = "";
      this.smallFortuneBottom4.border = "";
      this.smallFortuneTop3.border = "";
      this.smallFortuneMiddle3.border = "";
      this.smallFortuneBottom3.border = "";
      this.smallFortuneTop2.border = "";
      this.smallFortuneMiddle2.border = "";
      this.smallFortuneBottom2.border = "";
      this.smallFortuneTop1.border = "";
      this.smallFortuneMiddle1.border = "";
      this.smallFortuneBottom1.border = "";
    },
    async setBorder(number) {
      switch (number) {
        case "9":
          this.smallFortuneTop10.border = "4px solid black";
          this.smallFortuneMiddle10.border = "4px solid black";
          this.smallFortuneBottom10.border = "4px solid black";
          break;
        case "8":
          this.smallFortuneTop9.border = "4px solid black";
          this.smallFortuneMiddle9.border = "4px solid black";
          this.smallFortuneBottom9.border = "4px solid black";
          break;
        case "7":
          this.smallFortuneTop8.border = "4px solid black";
          this.smallFortuneMiddle8.border = "4px solid black";
          this.smallFortuneBottom8.border = "4px solid black";
          break;
        case "6":
          this.smallFortuneTop7.border = "4px solid black";
          this.smallFortuneMiddle7.border = "4px solid black";
          this.smallFortuneBottom7.border = "4px solid black";
          break;
        case "5":
          this.smallFortuneTop6.border = "4px solid black";
          this.smallFortuneMiddle6.border = "4px solid black";
          this.smallFortuneBottom6.border = "4px solid black";
          break;
        case "4":
          this.smallFortuneTop5.border = "4px solid black";
          this.smallFortuneMiddle5.border = "4px solid black";
          this.smallFortuneBottom5.border = "4px solid black";
          break;
        case "3":
          this.smallFortuneTop4.border = "4px solid black";
          this.smallFortuneMiddle4.border = "4px solid black";
          this.smallFortuneBottom4.border = "4px solid black";
          break;
        case "2":
          this.smallFortuneTop3.border = "4px solid black";
          this.smallFortuneMiddle3.border = "4px solid black";
          this.smallFortuneBottom3.border = "4px solid black";
          break;
        case "1":
          this.smallFortuneTop2.border = "4px solid black";
          this.smallFortuneMiddle2.border = "4px solid black";
          this.smallFortuneBottom2.border = "4px solid black";
          break;
        case "0":
          this.smallFortuneTop1.border = "4px solid black";
          this.smallFortuneMiddle1.border = "4px solid black";
          this.smallFortuneBottom1.border = "4px solid black";
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
.year {
  font-size: 12px;
}
.minusPlus {
  font-size: 7px;
}
.bottom {
  font-size: 5px;
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
