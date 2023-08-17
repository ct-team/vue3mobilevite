<template>
  <div class="content">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="state.active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="tv-o">视频</van-tabbar-item>
    <van-tabbar-item icon="send-gift-o" badge="5">会员</van-tabbar-item>
    <van-tabbar-item icon="user-o" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import useCommon from '@/hooks/use-common';
const { route, router } = useCommon();
const state = reactive({
  active: -1
});

switch (route.path) {
  case '/Home':
    state.active = 0;
    break;
  case '/Play':
    state.active = 1;
    break;
  case '/Member':
    state.active = 2;
    break;
  case '/Main':
    state.active = 3;
    break;
}

watch(
  () => state.active,
  (a) => {
    switch (a) {
      case 0:
        router.push('/Home');
        break;
      case 1:
        router.push('/Play');
        break;
      case 2:
        router.push('/Member');
        break;
      case 3:
        router.push('/Main');
        break;
      default:
        break;
    }
  }
);
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 94%;
  overflow: hidden;
  // background-color: pink;
}
.tabbar {
  width: 100%;
  height: 20%;
}
</style>
