import { defineStore } from 'pinia'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/js/firebase'
import { v4 as uuidv4 } from 'uuid'



export const useNotesStore = defineStore('notesStore', {
    state: () => {
        return {
            notes: [],
        }
    },
    actions: {
        async getNotes() {
            try {
                onSnapshot(collection(db, 'notes'), (querySnapshot) => {
                    let notes = []
                    querySnapshot.forEach((doc) => {
                        let note = {
                            id: doc.id,
                            content: doc.data().content,
                        }
                        notes.push(note)
                    })
                    this.notes = notes
                })
                
            } catch (error) {
                console.log(error)
            }

        }
        ,
        addNote(newNoteContent) {
            let id = uuidv4()

            let note = {
                id,
                content: newNoteContent
            }

            this.notes.unshift(note)
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => note.id !== idToDelete)
        },
        editNote(idToUpdate, newNoteContent) {
            console.log(idToUpdate)
            console.log(newNoteContent);

            let index = this.notes.findIndex(note => note.id === idToUpdate)
            this.notes[index].content = newNoteContent
        }
    },
    getters: {
        getNote(state) {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content
            }
        },
        totalNotes(state) {
            return state.notes.length
        },
        totalCharacters(state) {
            return state.notes.reduce((acc, note) => {
                return acc + note.content.length
            }, 0)
        }
    }
})