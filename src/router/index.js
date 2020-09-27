import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';
import Home from '../components/Home.vue';
import NProgress from 'nprogress';
import store from '../store/index';

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
    component: () => import('../views/EventShow.vue'),
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('event/fetchEvent', routeTo.params.id).then(event => {
        routeTo.params.event = event;
        next();
      });
    }
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

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
