<template>
    <div class="notes">
        <AddEditNote
            @keyup.ctrl.enter.prevent="addNote"
            v-model="newNote"
            textareaColor="info"
            ref="addEditNoteRef"
        >
            <template #buttons>
                <button
                    :disabled="!newNote"
                    @click="addNote"
                    class="button is-link"
                    ref="newNoteRef"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>

        <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useNotesStore } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
Store
*/

const notesStore = useNotesStore()

/*
Notes
*/

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    notesStore.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}

/*
Watch characters
*/

useWatchCharacters(newNote)

</script>