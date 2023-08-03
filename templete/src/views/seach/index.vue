<template>
  <van-row>
    <van-col span="21">
      <van-search v-model="state.value" placeholder="请输入搜索关键词" />
    </van-col>
    <van-col span="3">
      <div class="Vcenter" @click="$router.push('/')">取消</div>
    </van-col>
  </van-row>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
const state = reactive({
  value: ''
});
</script>
