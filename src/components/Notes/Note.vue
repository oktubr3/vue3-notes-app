<template>
    <div  class="card mb-4">
        <div class="card-content">
            <div class="content">{{ note.content }}</div>
            <div class="columns is-mobile has-text-grey-light mt-2">
                <small class="column">{{dateFormatted}}</small>
                <small class="column has-text-right">{{ note.content.length }} {{(note.content.length === 1) ? 'character' : 'characters'}}</small>
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
import { reactive, computed } from 'vue';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
import { useNotesStore } from '@/stores/storeNotes'
import { useDateFormat } from '@vueuse/core';

/*
Store
*/

const notesStore = useNotesStore()

/*
Date Formatted
*/

const dateFormatted = computed(() => {
    let date = new Date(parseInt(props.note.date))
    let formattedDate = useDateFormat(date, 'MM DD, YYYY @ HH:mm')
    return formattedDate.value
})


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