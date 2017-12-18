<template>
  <div>
    <h1>Previous Workouts</h1>
    <section id="previous-workouts">
      <workout-card />
      <workout-card />
      <workout-card />
      <workout-card />
      <workout-card />
    </section>
  </div>
</template>

<script>
import WorkoutCard from '@/components/WorkoutCard'

export default {
  name: 'HelloWorld',
  components: { WorkoutCard },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#previous-workouts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  margin: 1em 2em 1em 2em;
  padding: 1em;
}
h1 {
  text-align: center;
}
</style>
