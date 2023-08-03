import '@/style/index.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import mitt from 'mitt';
import App from './App.vue';
import VConsole from 'vconsole';
import { Toast } from 'vant';
import 'vant/es/toast/style';

const app = createApp(App);
if (import.meta.env.MODE !== 'production') {
  new VConsole();
}
app.config.globalProperties.$bus = mitt();
app.use(createPinia()).use(router).use(Toast);
app.mount('#app');
