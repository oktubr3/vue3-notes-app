<template>
    <Navbar />
    <div class="container is-max-desktop px-2 py-4">
        <RouterView />
    </div>
</template>

<script setup>
// Imports
import { onMounted } from 'vue';
import Navbar from '@/components/Layout/Navbar.vue'
import { useNotesStore } from '@/stores/storeNotes'

/*
Store notes
*/
const storeNotes = useNotesStore()

/*
On mount
*/
onMounted(() => {
    storeNotes.getNotes()
})


</script>


<style>
@import "bulma/css/bulma.min.css";

</style>
