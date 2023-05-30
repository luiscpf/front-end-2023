const app = Vue.createApp({
    data() {
        return{
            productTitle: 'Viajar pela Galaxia',
            productName: 'Reserve um cruzeiro para a lua',
            productDescription: 'Navegue até à lua na nossa luxuosa nave espacial e assista aos astronautas trabalhando no espaço.',
            productImage: './Space.jpg',
            productImageDescription: 'Um astronauta flutua do lado de fora da janela, enquanto você se senta confortavelmente',
            productImageStyle: {
                'border-radius': '15px',
                'width': '90vw',
                'height': '85vh',
                'margin-top': '5px',
                'justify-content': 'center',
                
            },

            text: {
                'align-text': 'center',
                'justify-content': 'center',
                'align-items': 'center'

            },
        }
    },  

}); 