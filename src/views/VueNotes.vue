<template>
    <div class="notes">
        <div class="mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model="newNote"
                        @keyup.enter="addNote"
                        class="textarea"
                        placeholder="Add New Note"
                        ref="newNoteRef"
                    />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                        class="button is-link"
                        @click="addNote"
                        :disabled="!newNote"
                    >Add New Note</button>
                </div>
            </div>
        </div>
        <Note
            v-for="note in notesStore.notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useNotesStore } from '@/stores/storeNotes'

/*
Store
*/

const notesStore = useNotesStore()

/*
Notes
*/

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {
    notesStore.addNote(newNote.value)
    newNote.value= ""
    newNoteRef.value.focus()
}

onMounted(() => {
    newNoteRef.value.focus()
})

</script>