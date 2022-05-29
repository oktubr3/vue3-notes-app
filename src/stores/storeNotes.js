import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useNotesStore = defineStore('notesStore', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, non quasi et laudantium assumenda sequi ipsam similique, quis tempora amet odit suscipit dolor minus nulla, ratione numquam officiis. Eum, consequatur.",
                }
            ],
        }
    },
    actions: {
        addNote(newNoteContent) {
            let id = uuidv4()

            let note = {
                id,
                content: newNoteContent
            }

            this.notes.unshift(note)
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter( note => note.id !== idToDelete )
        },
        editNote(idToUpdate, newNoteContent) {
            console.log(idToUpdate)
            console.log(newNoteContent);

            let index = this.notes.findIndex( note => note.id === idToUpdate )
            this.notes[index].content = newNoteContent
        }
    },
    getters: {
        getNote(state) {
            return (id) => {
                return state.notes.filter( note => note.id === id )[0].content
            }
        },
        totalNotes(state) {
            return state.notes.length
        },
        totalCharacters(state) {
            return state.notes.reduce( (acc, note) => {
                return acc + note.content.length
            }, 0)
        }
    }
})