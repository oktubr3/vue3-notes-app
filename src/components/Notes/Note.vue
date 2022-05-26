<template>
    <div  class="card mb-4">
        <div class="card-content">
            <div class="content">{{ note.content }}</div>
            <div class="has-text-right has-text-grey-light mt-2">
                <small>{{ note.content.length }} {{(note.content.length === 1) ? 'character' : 'characters'}}</small>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a
                @click.prevent="notesStore.deleteNote(note.id)"
                class="card-footer-item"
                href="#"
            >Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
// imports
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



</script>