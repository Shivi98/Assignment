import Vue from 'vue'
import Router from 'vue-router'
import Student from './components/Registeration/Student.vue'
import Home from './components/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    }

  ]
})
