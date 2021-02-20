<template>
  <div>Home</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { State } from '@/store/types'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const store = useStore<State>()

    console.log(store.state.notes.notes)
  },
})
</script>
<style></style>
