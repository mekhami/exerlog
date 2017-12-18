import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import NewWorkout from '@/components/NewWorkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/new_workout',
      name: 'NewWorkout',
      component: NewWorkout
    },
    {
      path: '/create_workout',
      name: 'CreateWorkout',
      component: NewWorkout
    },
    {
      path: '/workouts',
      name: 'MyWorkouts',
      component: NewWorkout
    },
    {
      path: '/create_exercise',
      name: 'CreateExercise',
      component: NewWorkout
    },
    {
      path: '/progress',
      name: 'Progress',
      component: NewWorkout
    }
  ]
})
