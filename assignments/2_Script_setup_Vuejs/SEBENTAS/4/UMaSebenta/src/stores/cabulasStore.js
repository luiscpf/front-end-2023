import { defineStore } from 'pinia';

export const useCabulasStore = defineStore('cabulasStore',{
    getters:{
        totalApontamentos: (state) =>{
            return state.apontamentos.length;
        },
        totalCarateres: (state)=>{
            let contador = 0;
            state.apontamentos.forEach( cabula => { 
                contador += cabula.content.length;
            });
            return contador;
        },
        getApontamentoContent: state=>{
            return(id) => {
            return state.apontamentos.filter( cabula => cabula.id === id)[0].content;
            }
        }

    },
    actions: {
        updateApontamento(id, content){
            let index = this.apontamentos.findIndex( cabula => cabula.id === id);
            this.apontamentos[index].content = content;
        },
        deleteApontamento(idToDelete) {
            this.apontamentos = this.apontamentos.filter(cabula => { return cabula.id !== idToDelete });
        },
        addApontamento(newApontamento) {
            let id = new Date().getTime().toString();

            this.apontamentos.unshift({
                id,
                content:newApontamento
            });
        }
    },
    state: () => {
        return {
            apontamentos: [
                {
                    id: 'id1',
                    content: 'Luís Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi et cum a assumenda laboriosam dolorem expedita quis eligendi blanditiis.'
                },
                {
                    id: 'id2',
                    content: 'Milana Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi et cum a assumenda laboriosam dolorem expedita quis eligendi blanditiis.'
                },
                {
                    id: 'id3',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit eum saepe tenetur tempora sequi deleniti porro perspiciatis, illum, incidunt animi, natus corporis asperiores sunt minus hic. Eaque, quidem, eligendi dolorem unde iste obcaecati tenetur doloremque velit porro eum corporis.'
                }
            ]
        }
    }
});