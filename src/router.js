import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import Profile from './components/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
