<template>
  <nav>
    <v-navigation-drawer 
      clipped
      fixed
      v-model="drawer"
      app>
      <v-list dense>
        <router-link to="/">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/new_workout">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>directions_run</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Start Workout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/create_workout">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>accessibility</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Create Workout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/workouts">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>rowing</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>My Workouts</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/create_exercise">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>fitness_center</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Create Exercise</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/progress">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>hourglass_empty</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>My Progress</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Exerlog</v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
