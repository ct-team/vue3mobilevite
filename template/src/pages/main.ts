import '@/style/index.scss';
import { createApp } from 'vue';
import pinia from '@/stores/store';
import router from '@/router';
import App from './App.vue';
import VConsole from 'vconsole';
import { Toast } from 'vant';
import 'vant/es/toast/style';
const app = createApp(App);
if (import.meta.env.MODE !== 'production') {
  new VConsole();
}
app.use(pinia).use(router).use(Toast);
app.mount('#app');
