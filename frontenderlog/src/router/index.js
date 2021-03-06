import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import NewWorkout from '@/components/NewWorkout'
import CreateExercise from '@/components/CreateExercise'
import CreateWorkout from '@/components/CreateWorkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/start_workout',
      name: 'NewWorkout',
      component: NewWorkout
    },
    {
      path: '/create_workout',
      name: 'CreateWorkout',
      component: CreateWorkout
    },
    {
      path: '/workouts',
      name: 'MyWorkouts',
      component: NewWorkout
    },
    {
      path: '/create_exercise',
      name: 'CreateExercise',
      component: CreateExercise
    },
    {
      path: '/progress',
      name: 'Progress',
      component: NewWorkout
    }
  ]
})
