<template>
  <div class="manse-format-view">
    <div v-if="manse">
      <v-row>
        <v-col>
          {{ manse.member.birthday }}({{ manse.member.age }}세, <span v-if="manse.member.gender === 'MALE'">남</span
          ><span v-else>여</span>, <span v-if="manse.member.birthdayType === 'SOLAR'">양력</span
          ><span v-else>음력</span>)
          <span v-if="manse.member.time"> {{ manse.member.time }}</span>
        </v-col>
      </v-row>

      <saju-format-view :saju="manse.saju" />
      <v-row>
        <big-fortune-format-view :bigFortune="manse.list.bigFortune" :bigNumber="number" :memberId="memberId" />
        <small-fortune-format-view
          :smallFortune="manse.list.smallFortune"
          :age="manse.member.age"
          :number="number"
          :memberId="memberId"
        />
        <month-fortune-format-view :monthFortune="manse.list.monthFortune" />
      </v-row>
    </div>
  </div>
</template>

<script>
import SajuFormatView from "../format/SajuFormatView";
import BigFortuneFormatView from "../format/BigFortuneFormatView";
import SmallFortuneFormatView from "../format/SmallFortuneFormatView";
import MonthFortuneFormatView from "../format/MonthFortuneFormatView";

export default {
  name: "ManseFormatView",
  components: {
    SajuFormatView,
    BigFortuneFormatView,
    SmallFortuneFormatView,
    MonthFortuneFormatView,
  },
  props: {
    manse: {
      type: Object,
    },
    number: {
      type: Number,
    },
    memberId: {
      type: Number,
    },
  },
};
</script>
