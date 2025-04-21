// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import HomePage from '../views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import Signup from '@/views/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;