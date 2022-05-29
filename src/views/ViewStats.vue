<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ notesStore.totalNotes }}</td>
                </tr>
                <tr>
                    <td>Number of characters</td>
                    <td>{{ notesStore.totalCharacters }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" class="input" placeholder="Do you love Notedamus?" v-autofocus v-model="loveNotedamus" maxlength="50">
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
Store
*/

const notesStore = useNotesStore()

/*
Love Notedamus Ref
*/

const loveNotedamus = ref('')

/*
Watch Characters
*/

useWatchCharacters(loveNotedamus, 50)

</script>