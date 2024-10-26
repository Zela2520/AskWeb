import { createApp } from 'vue';
import { VueQueryPlugin } from 'vue-query';

import { router, pinia } from './providers';
import App from './App.vue';
import 'aos/dist/aos.css';
export const app = createApp(App).use(pinia).use(VueQueryPlugin).use(router);
