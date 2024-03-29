import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index.vue'
import Landing from './pages/Landing.vue'
import Login from './pages/Login.vue'
import Profile from './pages/Profile.vue'
import MainNavbar from './layout/MainNavbar.vue'
import MainFooter from './layout/MainFooter.vue'

const Portafolio = () => import('./pages/Portafolio.vue')
const Proyecto = () => import('./pages/Proyecto.vue')
//import Proyectos from './pages/Proyectos.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/portafolio',
      name: 'portafolio',
      components: {
        default: Portafolio,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/portafolio/:keyname',
      name: 'proyecto',
      components: {
        default: Proyecto,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
