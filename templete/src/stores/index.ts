import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('index', () => {
  const listData = ref({ 1: 10 });
  const num = ref(10);
  function setData(value: any) {
    listData.value = value;
  }
  function addNum() {
    num.value = num.value + 10;
  }
  return { listData, num, addNum, setData };
});
