import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/components/Home';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import Review from '@/components/Review';
import Register from '@/components/Register';
import About from '@/components/About';
import CreateDeck1 from '@/components/CreateDeck1';
import UpdateDeck from '@/components/UpdateDeck';
import Upload from '@/components/Upload';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }, {
    path: '/signup',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/new',
    name: 'CreateDeck1',
    component: CreateDeck1
  },
  {
    path: '/update',
    name: 'UpdateDeck',
    component: UpdateDeck,
  }, {
    path: '/upload',
    name: Upload,
    component: Upload
  }, {
    path: '/review',
    component: Review
  }
];

const router = new VueRouter({
  routes,
});

export default router;
