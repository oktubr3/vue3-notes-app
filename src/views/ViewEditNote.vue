<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            ref="addEditNoteRef"
            placeholder="Edit Note"
        >
            <template #buttons>
                <button
                    @click="$router.back()"
                    class="button is-danger mr-3"
                >
                    Cancel
                </button>
                <button
                    @click="handleSaveClicked"
                    class="button is-success"
                    :disabled="!noteContent"
                >
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from "@/components/Notes/AddEditNote.vue"
import { useNotesStore } from '@/stores/storeNotes';

/*
Router
*/

const route = useRoute()
const router = useRouter()

/*
Store
*/

const storeNotes = useNotesStore()

/*
Note
*/

const noteContent = ref('')

noteContent.value = storeNotes.getNote(route.params.id)

/*
Save Clicked
*/

const handleSaveClicked = () => {
    storeNotes.editNote(route.params.id, noteContent.value)
    router.push('/')
}


</script>