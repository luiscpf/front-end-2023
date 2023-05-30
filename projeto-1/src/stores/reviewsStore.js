import { defineStore } from 'pinia';
import {onSnapshot, collection, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';

export const useReviewsStore = defineStore('reviewsStore',{
    getters:{
        totalText: (state) =>{
            return state.reviews.length;
        },
        totalCarateres: (state)=>{
            let contador = 0;
            state.reviews.forEach( inserido => { 
                contador += inserido.content.length;
            });
            return contador;
        },
        getReviewContent: state=>{
            return(id) => {
            return state.reviews.filter( inserido => inserido.id === id)[0].content;
            }
        }

    },
    actions: {
        
        async getReview() {
            onSnapshot(collection(db, 'reviews'), (querySnapshot)=>{
                let reviews = []
                querySnapshot.forEach((doc)=>{
                    let inserido = {
                        id: doc.id,
                        content: doc.data().content
                    }
                    reviews.push(inserido)
                })
                this.reviews = reviews
            })
        },
        async updateReview(id, content){
            
            await updateDoc(doc(db, 'reviews', id), {
                content
            })
        },
        async deleteReview(idToDelete) {
            
            await deleteDoc(doc(db, 'reviews', idToDelete));
        },
        async addReview(newReview) {
            let id = new Date().getTime().toString()

          
            await setDoc(doc(db,'reviews',id), {
                content:newReview
            })
        }
    },
    state: () => {
        return {
            reviews: [
                {
                    id: 'id1',
                    content: 'This discotheque is a vibrant and energetic hotspot in the heart of the city. With its modern decor, captivating lighting, and pulsating music, it creates an electrifying atmosphere that keeps the dance floor alive. The staff is friendly and attentive, ensuring a memorable night out. The DJ spins a mix of catchy beats and immersive melodies, making it impossible to resist moving to the rhythm. Whether you are looking for a fun night with friends or a place to let loose and dance, this discotheque is the perfect destination for a memorable experience.'
                },
                {
                    id: 'id2',
                    content: 'Step into this vibrant discotheque and prepare to be swept away by its infectious energy. The sleek and modern ambiance sets the stage for an unforgettable night of dancing and fun. The dazzling lights and mesmerizing visuals create an immersive atmosphere that ignites your senses. The talented DJs curate a playlist that seamlessly blends pulsating beats and irresistible melodies, keeping the dance floor packed all night long. The attentive and friendly staff ensures you have everything you need to make your night one to remember. Whether you are a seasoned partygoer or simply looking for a place to unwind and let loose, this discotheque is the ultimate destination for a night of pure excitement and enjoyment.'
                },
                {
                    id: 'id3',
                    content: 'Prepare to be transported to a mesmerizing world as you step into this enchanting discotheque. From the moment I entered, I was immediately captivated by the pulsating energy that filled the air. The vibrant atmosphere and stunning decor created an ambiance that was both glamorous and inviting. The dance floor was a spectacle in itself, bathed in dazzling lights that moved and grooved with the rhythm of the music. The beats were infectious, and the DJs expertly curated playlist kept the crowd moving and grooving all night long. From classic hits to the latest chart-toppers, there was something for everyone, ensuring that the dance floor was never empty.The service was exceptional, with the staff exuding warmth and hospitality. The bartenders skillfully crafted delicious cocktails that perfectly complemented the vibrant atmosphere. The waitstaff was attentive and friendly, making sure that every need was met, allowing me to fully immerse myself in the experience.The crowd was a mix of energy and excitement, creating an inclusive and welcoming environment. Whether you came with a group of friends or on your own, it was easy to connect with fellow revelers and share the joy of dancing the night away.Overall, my experience at this discotheque was nothing short of extraordinary. It transported me to a world of music, lights, and pure exhilaration. If you are looking for an unforgettable night out, this discotheque is a must-visit. Get ready to lose yourself in the rhythm and create memories that will last a lifetime.'
                }
            ]
        }
    }
});