<template>
  <main class="box-home">
    <div class="container container-home">
      <div class="content-home">
        <h1>Suas notas</h1>

        <div v-for="note in notes" :key="note" class="notes-home">
          <Note></Note>
        </div>

        <button type="button" class="add-note-home">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'

// import { State } from '@/store/types'

import Note from '@/components/Note.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Note,
  },

  setup() {
    const notes = [1, 2, 3]

    return {
      notes,
    }
  },
})
</script>
<style scoped lang="scss">
@import '../styles/variables.scss';

$module: 'home';

.box-#{$module} {
  min-height: 100vh;

  background: $background-color;
}

.container-#{$module} {
  display: flex;
  flex-direction: column;
}

.content-#{$module} {
  position: relative;

  margin: 60px 0;
  padding: 0 20px;

  display: flex;
  flex-direction: column;

  h1 {
    // margin-bottom: 20px;

    color: $primary-color;
    font-family: Quicksand;
    font-weight: bold;
    font-size: 42px;
  }
}

.notes-#{$module} {
  display: flex;
  flex-direction: column;
}

.add-note-#{$module} {
  $size: 60px;

  position: sticky;
  bottom: 20px;

  width: $size;
  height: $size;
  border-radius: 50%;

  align-self: flex-end;

  color: white;
  background-color: $secondary-color;

  font-size: 24px;

  &:hover {
    cursor: pointer;
    background-color: darken($secondary-color, 2%);
  }
}
</style>
