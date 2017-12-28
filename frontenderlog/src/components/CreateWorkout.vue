<template>
  <section>
    <h1>Create Workout</h1>
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        required
        ></v-text-field>
      <v-select
        label="Select Exercises"
        v-bind:items="exercises"
        v-model="selectedExercises"
        multiple
        max-height="400"
        hint="Select exercises to include in this workout"
        persistent-hint
        required
        ></v-select>
      <v-text-field
        label="Workout Notes"
        multi-line
      ></v-text-field>
      <v-btn
        @click="submit"
        :disabled="!valid">
        submit
      </v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'CreateWorkout',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      exercises: [
        'Bench Press',
        'Incline Press',
        'Military Press'
      ]
    }
  }
}
</script>

<style>
</style>
