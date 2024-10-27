import type { RouteRecordRaw } from 'vue-router'
import { MainPage } from './main'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
]