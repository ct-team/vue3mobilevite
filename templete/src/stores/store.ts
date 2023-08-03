import { createPinia } from 'pinia';
import { useStore } from '@/stores';

const pinia = createPinia();

const store = useStore(pinia);
export default store;
