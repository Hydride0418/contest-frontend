import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContestManage from '../views/contest_manage/ContestManage.vue'
import QualificationReview from '../views/team_manage/QualificationReview.vue'
import SelectionReview from '../views/team_manage/SelectionReview.vue'
import TeamManage from '../views/team_manage/TeamManage.vue'
import WorkManage from '../views/team_manage/WorkManage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contest_manage',
    component: ContestManage
  },
  {
    path: '/qualification_review',
    component: QualificationReview
  },
  {
    path: '/selection_review',
    component: SelectionReview
  },
  {
    path: '/team_manage',
    component: TeamManage
  },
  {
    path: '/work_manage',
    component: WorkManage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
