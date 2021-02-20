import { Module } from 'vuex'

import { State } from '@/store/types'
import { NotesState } from '@/store/notes/types'

const notesModule: Module<NotesState, State> = {
  state: {
    notes: [],
  },
}

export default notesModule
