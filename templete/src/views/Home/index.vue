<template>
  <div class="home">
    <van-row>
      <van-col span="3">
        <div class="Vcenter" @click="$router.push('live')">
          <van-icon name="setting-o" />
        </div>
      </van-col>
      <van-col span="18">
        <van-search @focus="focus" placeholder="请输入搜索关键词" />
      </van-col>
    </van-row>
    <van-tabs v-model:active="state.active">
      <van-tab v-for="index in state.TabDara" :title="index" :key="index" color="#0000FF">
      </van-tab>
    </van-tabs>
    <div class="count">
      <div class="Vcenter" style="height: 4vh" v-show="state.show">
        <van-loading type="spinner" color="#1989fa" />
      </div>
      <List v-for="item in state.listData" :key="item._id" :title="item.title"></List>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import List from '@/components/List/index.vue';
import useCommon from '@/hooks/use-common';
const { router } = useCommon();
interface TypeListDataItem {
  _id: number;
  title: string;
}

const state = reactive<{
  TabDara: Array<string>;
  active: number;
  listData: Array<TypeListDataItem>;
  show: boolean;
}>({
  TabDara: ['关注', '推荐', '热榜', '圈子', '职场', '高赞', '影视', '法律', '人文', '科学'],
  active: 1,
  listData: [],
  show: false
});
watch(
  () => state.active,
  (a, b) => {
    state.show = true;
    const list = Array.from({ length: 30 }).map((item, index) => {
      return {
        _id: index,
        title: `${index}`
      };
    });

    state.listData = list;
    state.show = false;
  },
  {
    immediate: true
  }
);
//获取数据

// 获取焦点触发
const focus = () => {
  router.push('/search');
};
</script>
<style>
.home {
  width: 100%;
  height: 100%;
}
.login {
  width: 100%;
  height: 100px;
  line-height: 100px;
  /* background-color: pink; */
}
.addImg {
  width: 30px;
  height: 30px;
}
.count {
  width: 100%;
  height: 90%;
  overflow-y: auto;
  background-color: #fff;
}
</style>
