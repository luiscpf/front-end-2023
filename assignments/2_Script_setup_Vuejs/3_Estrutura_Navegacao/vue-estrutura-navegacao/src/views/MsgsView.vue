<template>
  <div class="about">
    <h1>Messages</h1>
    <ul>
      <!-- Usando v-for para percorrer o ArrayMsgs dentro do array -->
      <li v-for="item in data.ArrayMsgs" :key="item.id">
        <!-- Usando a interpolação {{ }} para exibir o nome -->
        <RouterLink :to="'/Msgs/'+item.id">{{ item.nome }}</RouterLink>
      </li>

    </ul>

    <textarea name="" id="" cols="30" rows="10"></textarea>

    <!-- <ul>
      <li>
        <RouterLink to="/Msgs/1">1ºst Message</RouterLink>
      </li>
      <li>
        <RouterLink to="/Msgs/2">2ºnd Message</RouterLink>
      </li>
      <li>
        <RouterLink to="/Msgs/3">3ºrd Message</RouterLink>
      </li>
    </ul> -->
  
  </div>
</template>

<script setup>

  import {reactive} from 'vue'

  const data = reactive ({
    ArrayMsgs: [
      {
     id:1,
     nome: 'Mensagem 1'
    },
    {
      id:2,
      nome: 'Mensagem 2'
    },
    //ROTA altera com id ERRADO
    {
      id:3,
      nome: 'Mensagem 3'
    }],

    })


  /*  CASO FIZESSE EM CIMA EM INGLES
  export default {
    data() {
      return {
        ArrayMsgs: [
          // Criar um Array de objetos com os dados dos links
          { title: '1st', path: '/Msgs/1' },
          { title: '2nd', path: '/Msgs/2' },
          { title: '3rd', path: '/Msgs/3' }
        ]
      }
    },
    methods: {
      // Função para obter o sufixo ordinal com base no índice
      getOrdinalSuffix(index) {

        const suffixes = ['st', 'nd', 'rd','th'];
        // O resto da divisão de index por 10. Isso é usado para determinar qual sufixo ordinal
        // usar com base no último dígito do número de entrada.

        const remainder = index % 10;
        //Essa função calcula o sufixo ordinal pegando o resto do índice e subtraindo 20, 
        //e então usando o resultado como índice para acessar o sufixo ordinal correspondente no array suffixes. 
        //Se o índice calculado estiver fora dos limites (por exemplo, para números de entrada maiores que 3), 
        //ele volta para o sufixo padrão "th" usando o operador lógico OU (||) com suffixes[0].

        const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
        return suffix;
      }
    }
  }*/
</script>


