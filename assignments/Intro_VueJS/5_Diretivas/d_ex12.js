const app = Vue.createApp({
    data() {
        return{
            tentativas: '',
            numero_inseridos_a: [],
            //ARREDONDA E GERA NUMERO ALEATORIO DE 0-1 *100 GERA INTERVALO 1-100
            numero: Math.round(Math.random()*100),
            Alto: false,
            Baixo: false,
            numero_tentativas: 0,
            Acertou: false,
        }
    },
    methods:{
        jogoAdivinha(n){
            if (this.numero < n){
                this.Alto = true;
                this.Baixo = false;
                if (!this.numero_inseridos_a.includes(n)) {
                    this.numero_inseridos_a.push(n);
                    this.tentativas= '';
                    this.numero_tentativas++;
                }       
            }
            else if(this.numero > n){
                this.Alto = false;
                this.Baixo = true;
                if (!this.numero_inseridos_a.includes(n)) {
                    this.numero_inseridos_a.push(n);
                    this.tentativas= '';
                    this.numero_tentativas++;
                }
            }
            else if(this.numero == n){
                if (!this.numero_inseridos_a.includes(n)) {
                    this.numero_inseridos_a.push(n);
                    this.Acertou = true;
                    this.numero_tentativas++;
                }
                this.Alto = false;
                this.Baixo = false;
            }
        },
    },
});