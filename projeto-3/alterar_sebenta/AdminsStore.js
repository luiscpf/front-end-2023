import { defineStore } from 'pinia';
import {onSnapshot, collection, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';//não lia
import { db } from '@/main';

export const useAdminsStore = defineStore('AdminsStore',{
    getters:{
        totalText: (state) =>{
            return state.Admins.length;
        },
        totalCarateres: (state)=>{
            let contador = 0;
            state.Admins.forEach( inserido => { 
                contador += inserido.content.length;
            });
            return contador;
        },
        getAdminContent: state=>{
            return(id) => {
            return state.Admins.filter( inserido => inserido.id === id)[0].content;
            }
        }

    },
    actions: {
        
        async getAdmin() {
            onSnapshot(collection(db, 'Admins'), (querySnapshot)=>{
                let Admins = []
                querySnapshot.forEach((doc)=>{
                    let inserido = {
                        id: doc.id,
                        content: doc.data().content
                    }
                    Admins.push(inserido)
                })
                this.Admins = Admins
            })
        },
        async updateAdmin(id, content){
            
            await updateDoc(doc(db, 'Admins', id), {
                content
            })
        },
        async deleteAdmin(idToDelete) {
            
            await deleteDoc(doc(db, 'Admins', idToDelete));
        },
        async addAdmin(newAdmin) {
            let id = new Date().getTime().toString()

          
            await setDoc(doc(db,'Admins',id), {
                content:newAdmin
            })
        }
    },
    state: () => {
        return {
            Admins: [
                {
                    id: 'id1',
                    content: 'tghikpç xperience.'
                },
                {
                    id: 'id2',
                    content: 'ajoisilksniudbt.'
                },
                {
                    id: 'id3',
                    content: 'kjicvbnmsp98fytgbwnmpyt7fyh mc.'
                }
            ]
        }
    }
});