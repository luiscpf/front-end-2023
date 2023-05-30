import { defineStore } from 'pinia'

export const useCabulasStore = defineStore('cabulasStore', {
    actions: {
        deleteApontamento(idToDelete){
            this.apontamentos = this.apontamentos.filter(cabula => {return cabula.id !== idToDelete})
        },
        addApontamento (newApontamento){
            let id = new Date().getTime().toString()
            this.apontamentos.unshift({
                id,
                content: newApontamento
            })
        }
    },
    state: () => {
        return{
            apontamentos: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque iusto pariatur sunt repellendus magnam nihil fugiat cum rem odio fuga ipsam, voluptatibus corrupti provident nesciunt veniam quam, vero necessitatibus.'
                },
                {
                    id: 'id2',
                    content: 'MIMIIIIIIII ipsum dolor sit amet consectetur adipisicing elit. In itaque iusto pariatur sunt repellendus magnam nihil fugiat cum rem odio fuga ipsam, voluptatibus corrupti provident nesciunt veniam quam, vero necessitatibus.'
                },
                {
                    id: 'id3',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorem soluta modi, quidem nam amet mollitia quos voluptatem, odit iste voluptas porro explicabo vel aspernatur impedit cum est! Suscipit quia cumque inventore unde quo assumenda quam enim nihil nam rem.'
                },
            ]
            
        }
    }
})
  