import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';
import Home from '../components/Home.vue';
import NProgress from 'nprogress';
import store from '../store/index';
import _default from 'vuex';

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
    component: EventList,
    props: true
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
      store
        .dispatch('event/fetchEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event;
          next();
        })
        // on error redirect to 404 with name of the missing resource
        .catch(error => {
          if (error.response && error.response.status == 404) {
            next({ name: '404', params: { resource: 'event' } });
          } else {
            next({ name: 'network-issue' });
          }
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
    path: '/404',
    name: '404',
    props: true,
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: () =>
      import(
        /* webpackChunkName: "network-issue" */ '../views/NetworkIssue.vue'
      )
  },
  {
    path: '*',
    redirect: {
      name: '404',
      params: {
        resource: 'page'
      }
    }
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
