import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ProDetaile from '@/components/common/ProDetaile'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/create_project',
      name: 'ProDetaile',
      component: ProDetaile
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
