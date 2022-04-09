import React from 'react'; // importando biblioteca React das dependências do projeto
// Lembrando que "./" indica que o arquivo a seguir está no mesmo diretório && "../" indica que o arquivo está no diretório anterior
import api from "./api"; // importando a instância do Axios que criamos em api.js
import Votacao from "./components/Votacao"; // importando o componente Votacao que está no diretório "components"

// criando função PascalCase, que indica a criação de um componente React utilizando JSX
function App() {
  const [musicas, setMusicas] = React.useState(""); // criando estado (state) para buscar popular com músicas

  // função que utiliza a instância do Axios para realizar uma requisição de Get (COMO VIMOS NO POSTMAN!)
  function buscar() {
    console.log("Iniciando requisição: ");
    console.log(api.get()); // mostra no console o resultado da requisição Get feita pela instância axios - por enquanto, a resposta é somente uma PROMISE (promessa) de que a nossa requisição será resolvida
    // Lembra do exemplo da pizza? Na linha 13 pedimos a pizza e recebemos a confirmação de que irão entregar, mas a pizza ainda não chegou (uma Promise seria como o pedido que foi confirmado e "irá chegar em alguns instantes")

    //  Uma Promise é um objeto de "promessa" que será resolvida em algum momento, mas por enquanto, apenas nos deu a confirmação de que a requisição será processada EM ALGUM MOMENTO (depende de quando encontrar todos os resultados na base e se a internet vai colaborar).
    // Essa Promise irá nos devolver uma resposta após o término do processamento da requisição, onde temos duas possibilidades:
    //  1. Essa Promise será resolvida corretamente, conseguindo processar a requisição (como a pizza chegando na sua casa quentinha e saborosa)
    //  2. Ou irá nos indicar algum erro ocorrido durante esse processo (como o motoboy cair da moto ou perderem sua pizza?);

    // COMEÇANDO A UTILIZAR A INSTÂNCIA AXIOS PARA REALIZAR A REQUISIÇÃO!
    api
      .get() // realiza a requisição Get para buscar os dados (recebendo uma Promise que será resolvida)
      .then((respostaObtida) => {
        // .then() executa um trecho de código assim que a Promise recebida ao fazermos a requisição for resolvida (ou seja, deixou de ser somente o pedido, e a pizza FINALMENTE chegou, sendo a respostaObtida!)
        console.log("Resposta obtida: ");
        console.log(respostaObtida); // exibindo objeto de resposta que recebemos após a Promise da requisição ser resolvida
        console.log("Dados da resposta: ");
        console.log(respostaObtida.data); // exibindo atributo data, que possui um vetor com os dados obtidos com a requisição Get

        // aqui, usamos o Setter do estado que criamos na linha 8 para atribuir ao estado musicas o valor do TÍTULO da ocorrência de ÍNDICE 29 do atributo DATA (vetor de dados recebidos) da RESPOSTA OBTIDA!
        setMusicas(respostaObtida.data[29].titulo);
        // No React, não podemos renderizar um objeto {atributo: valor}, então, precisamos acessar o atributo título para renderizar somente a String (ele dá erro e trava a aplicação caso tentemos renderizar um objeto ou vetor diretamente na tela)
      })
      .catch(function (erroOcorrido) {
        // .catch() executa um bloco de código caso ocorra algum ERRO durante a execução da requisição, tanto por termos acessado o endereço errado ou por algum erro da parte do servidor (como a pizzaria ficar sem ingredientes; ou o motoboy cair da moto; ou perderem sua pizza)
        console.log(erroOcorrido); // exibindo no console o erro que ocorreu durante a execução da requisição
      });
  }

  return (
    /* React.Fragment serve para englobarmos um conteúdo sem necessariamente termos um elemento (ao renderizar, ele é removido do código)  */
    <>
      <h1>Músicas</h1>
      <h1>{musicas}</h1>
      <button onClick={buscar}>Buscar Dados</button>
      <Votacao titulo="Lua Nova" /> {/* invocando o componente Votacao, passando como parâmetro o título "Lua Nova" */}
      <Votacao titulo="Dois filhos de Francisco" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
      <Votacao titulo="Batman" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
      <Votacao titulo="Gente Grande" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
      <Votacao titulo="Shrek" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
    </>
    /* React.Fragment serve para englobarmos um conteúdo sem necessariamente termos um elemento (ao renderizar, ele é removido do código)  */
  );
}

export default App;
