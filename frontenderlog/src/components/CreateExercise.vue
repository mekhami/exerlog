<template>
  <section>
    <h1>Create Exercise</h1>
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        required
        ></v-text-field>
        <v-text-field
          label="Exercise Notes"
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
  name: 'CreateExercise',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ]
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>

<style>
</style>
