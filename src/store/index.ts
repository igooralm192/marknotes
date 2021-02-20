import { createStore } from 'vuex'

import notesModule from '@/store/notes'
import { State } from '@/store/types'

const store = createStore<State>({
  modules: {
    notes: notesModule,
  },
})

export default store
