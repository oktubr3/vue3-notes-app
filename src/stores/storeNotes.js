import { defineStore } from 'pinia'
import {
    collection, onSnapshot,
    doc, deleteDoc, updateDoc, addDoc,
    query, orderBy
} from 'firebase/firestore'
import { db } from '@/js/firebase'
// import { v4 as uuidv4 } from 'uuid'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

export const useNotesStore = defineStore('notesStore', {
    state: () => {
        return {
            notes: [],
            notesLoaded: false,
        }
    },
    actions: {
        async getNotes() {
            this.notesLoaded = false;
            try {
                onSnapshot(notesCollectionQuery, (querySnapshot) => {
                    let notes = []
                    querySnapshot.forEach((doc) => {
                        let note = {
                            id: doc.id,
                            content: doc.data().content,
                            date: doc.data().date
                        }
                        notes.push(note)
                    })
                    this.notes = notes
                    this.notesLoaded = true
                })

            } catch (error) {
                console.log(error)
            }

        },
        async addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
                date = currentDate.toString()

            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                date,
            });

        },
        async deleteNote(idToDelete) {
            // this.notes = this.notes.filter(note => note.id !== idToDelete)
            await deleteDoc(doc(notesCollectionRef, idToDelete));
        },
        async editNote(idToUpdate, newNoteContent) {
            await updateDoc(doc(notesCollectionRef, idToUpdate), {
                content: newNoteContent
            })
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