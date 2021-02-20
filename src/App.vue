<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@300;400;600;700;800;900&family=Poppins:wght@200;300;400;700&family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quantico:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100vh;
}

button {
  border: none;
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: inherit;
}

.container {
  max-width: 378px;
  min-height: inherit;
  margin: 0 auto;
}
</style>
