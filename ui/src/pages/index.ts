import type { RouteRecordRaw } from 'vue-router'
import { MainPage } from './main'
import { CommentPage } from './comment'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/:commentId/comment',
    name: 'comment',
    component: CommentPage
  },
]