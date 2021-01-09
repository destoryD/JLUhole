<template>
    <v-bottom-navigation
      fixed
      horizontal
      v-model="value"
      :input-value="active"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>
<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      msg: '123',
      active: true,
      value: 1
    }
  }
}
</script>
