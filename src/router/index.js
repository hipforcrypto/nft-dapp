import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';
import Mint from '../vues/Mint.vue';
// import Mint2 from '../vues/Mint2.vue';
// import Admin from '../vues/Admin.vue';
import Test from '../vues/Test.vue';

const routes = [
  {
    name: 'Mint',
    path: '/',
    component: Mint,
    meta: {
      title: 'Nft Dapp',
    },
  },
  // {
  //   name: 'Mint2',
  //   path: '/mint2',
  //   component: Mint2,
  //   meta: {
  //     title: 'Nft Dapp',
  //   },
  // },
  {
    name: 'Test',
    path: '/test',
    component: Test,
    meta: {
      title: 'Nft Dapp',
    },
  },
  // {
  //   name: 'Admin',
  //   path: '/admin',
  //   component: Admin,
  //   meta: {
  //     title: 'Dapp Admins',
  //   },
  //   beforeEnter: (to, from) => {
  //     const { isOwner } = store.state;

  //     if (isOwner) {
  //       return true;
  //     } else {
  //       return { name: 'Mint' };
  //     }
  //   },
  // },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(to => {
  document.title = to.meta.title;
});

export default router;
