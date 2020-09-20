import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/event-list',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () =>
      import(/* webpackChunkName: "event-create" */ '../views/EventCreate.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFoundComponent.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
