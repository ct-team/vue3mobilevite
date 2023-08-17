<template>
  <div class="list">
    <div class="flex">
      <div>
        <div class="LineCenter title">
          <img src="../../assets/tou.png" alt="" class="portrait" />
          <span style="margin-left: 10px">{{ title }}</span>
        </div>
        <div class="con LineCenter">
          <div class="text">
            在易经中，只有乾坤两卦有用九·用六的断语。九是阳的极数，所以这个时候，要解决的方法就是从极阳转化为阴。至极的阳刚只有变得阴柔，才能安定吉祥。用九，即是不为九所用。也即是
            天的美德在于不自居首位。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '文章标题'
    }
  }
});
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 20px;
  // background-color: pink;
}
.portrait {
  width: 40px;
}
.title {
  height: 20%;
}
.con {
  height: 7vh;
}
.fenmian {
  width: 100px;
}
.text {
  font-size: 28px;
  line-height: 32px;
}
</style>
