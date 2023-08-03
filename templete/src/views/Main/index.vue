<template>
  <div>
    <van-button type="primary" @click="logout">退出登陆</van-button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const logout = () => {
  router.push('login');
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 20px;
  background-color: rgb(245, 243, 243);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  font-size: 18px;
}
.box:hover {
  background-color: rgb(68, 219, 144);
}
</style>
