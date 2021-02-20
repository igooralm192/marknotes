import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

import { State } from '@/store/types'

declare module '@vue/runtime-core' {
  // fornece tipagem para `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
