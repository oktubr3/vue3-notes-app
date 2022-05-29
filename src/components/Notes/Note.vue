<template>
    <div  class="card mb-4">
        <div class="card-content">
            <div class="content">{{ note.content }}</div>
            <div class="has-text-right has-text-grey-light mt-2">
                <small>{{ note.content.length }} {{(note.content.length === 1) ? 'character' : 'characters'}}</small>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editNote/${ note.id }`"
                class="card-footer-item"
                href="#"
            >
                Edit
            </RouterLink>
            <a
                @click.prevent="modals.deleteNote = true"
                class="card-footer-item"
                href="#"
            >Delete
            </a>
        </footer>
        <ModalDeleteNote
            v-if="modals.deleteNote"
            v-model="modals.deleteNote"
            :noteId="note.id"
        />
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
import { useNotesStore } from '@/stores/storeNotes'

/*
Store
*/

const notesStore = useNotesStore()

/*
 Props
*/

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

/*
 Handle Delete Clicked
*/

const handleDeleteClicked = () => {
    emit('deleteClicked', props.note.id)
}

/*
Modals
*/

const modals = reactive({
    deleteNote: false
})



</script>