<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Workout Title</h3>
        <div>Workout Date</div>
      </div>
    </v-card-title>
    <v-card-text>
      <ul>
        <li>Workout - Weight</li>
        <li>Workout - Weight</li>
        <li>Workout - Weight</li>
        <li>Workout - Weight</li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn flat color="orange">View Workout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'WorkoutCard',
  data () {
    return {}
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>
