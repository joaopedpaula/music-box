import React, { useState, useEffect } from "react";
import ItemMusica from "../components/ItemMusica"; // importando o componente de card de música como "ItemMusica"
import Menu from "../components/Menu"; // importando o componente de header como "Menu"

import { useNavigate } from 'react-router-dom'; // importando componente para navegar entre as rotas da biblioteca "react-router-dom"

import api from "../api"; // importando a instância do axios que criamos em api.js

// componente Musicas que retorna fragmento JSX
function Musicas() {

  const navegador = useNavigate(); // criando instância do useNavigate para navegarmos entre as rotas

  /* 
    - o useState serve para definirmos estados em nossos componentes React
    - precisamos do useState caso a gente queira utilizar valores dinâmicos e REATIVOS
    - um estado é observado pelo React, então ao alterarmos seu valor, o React observará aquela alteração e utilizará o valor atualizado 
    - definimos um useState utilizando um vetor de 2 posições, onde na primeira posição, temos a definição do getter e na segunda posição, o setter do estado
    - o useState recebe como argumento qual será o valor inicial do estado (state)
  */
  const [musicas, setMusicas] = useState(new Array()); // useState para definirmos um estado (state) de músicas com getter "musicas" e setter "setMusicas" que é iniciado como um vetor vazio (new Array())
  const [numero, setNumero] = useState(0); // useState para definirmos um estado (state) de número com getter "numero" e setter "setNumero" que é iniciado como 0


  /* 
  - useEffect é referente a um efeito que adicionamos em nosso componente Musicas.jsx 
  - podemos utilizar de diversos useEffect diferentes em nosso código, cada um tendo um efeito isolado
  - cada efeito, recebe como argumentos uma função de callback (que será executada quando o efeito for atingido) e o estado que será observado
  - o useEffect tem o comportamento padrão de ser invocado quando o componente é montado (renderizado na tela pela primeira vez) e quando possui alguma alteração de estado (ou seja, quando algum useState do componente for alterado)
  - caso o useEffect esteja observando algum estado, o efeito será invocado sempre que o estado observado tiver seu valor alterado (como ao observar um contador, que a cada incremento, invocará um efeito diferente)
  */

  // primeiro exemplo, sem observação de NENHUM estado (passei uma lista vazia, dizendo que não haverá nenhum estado para ser o "gatilho" do efeito), onde será executado SOMENTE QUANDO A PÁGINA FOR MONTADA
  useEffect(() => {
    console.log("OLÁ, MUNDO!");
    buscarDados();
  }, []); // observando uma lista vazia, o que significa que não desejamos observar nenhum estado

  // segundo exemplo, com observação do estado "numero", onde SOMENTE caso o ESTADO NUMERO seja alterado, irá disparar o efeito
  useEffect(() => {
    console.log("CHAMADO QUANDO O COMPONENTE É MONTADO, E QUANDO O ESTADO 'numero' É ALTERADO, SOMENTE!");
  }, [numero]); // observando o estado "numero", que será o gatilho do efeito

  // terceiro exemplo, com observação de TODOS os estados (pois não defini nenhum observador), onde qualquer estado alterado irá disparar o efeito
  useEffect(() => {
    console.log("CHAMADO QUANDO O COMPONENTE É MONTADO, E QUANDO 'QUALQUER ESTADO' DO COMPONENTE FOR ALTERADO!");
  }); // não está observando nada, ou seja, QUALQUER ALTERAÇÃO DE ESTADO irá disparar o efeito


  // função para buscar os dados da API utilizando a nossa instância do axios no arquivo api.js
  function buscarDados() {
   // exibindo no console a requisição GET feita utilizando a API, porém sem o tratamento da resposta 
    console.log(api.get()); // mostra no console o resultado da requisição Get feita pela instância axios - por enquanto, a resposta é somente uma PROMISE (promessa) de que a nossa requisição será resolvida
    // Lembra do exemplo da pizza? Na linha acima, fizemos o pedido da pizza e recebemos a confirmação de que irão entregar, mas a pizza ainda não chegou (uma Promise seria como o pedido que foi confirmado e "irá chegar em alguns instantes")

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

        // aqui, usamos o setter do estado de musicas para atribuir os valores do vetor de dados da respostaObtida da requisição
        setMusicas(respostaObtida.data);
      })
      .catch(function (erroOcorrido) {
        // .catch() executa um bloco de código caso ocorra algum ERRO durante a execução da requisição, tanto por termos acessado o endereço errado ou por algum erro da parte do servidor (como a pizzaria ficar sem ingredientes; ou o motoboy cair da moto; ou perderem sua pizza)
        console.log(erroOcorrido); // exibindo no console o erro que ocorreu durante a execução da requisição
      });
  }

  return (
    <>
      {/* 
        <Menu /> comentando componente de Menu, pois ele já está sendo renderizado em "Rotas.jsx", sendo padrão para todas as páginas
      */}
      <div className="container">
        {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
        <div className="filter"> {/* componente com classe "filter", utilizando className do React pois class é reservada do sistema */}
          <button onClick={() => { navegador('/adicionar') }} className="btn">Adicionar</button> {/* componente com classe "btn", utilizando className do React pois class é reservada do sistema */}
          {/* 
            Ao clicar no botão, ele chama uma arrow function para executar uma chamada na instância do useNavigate, navegando para a rota "/adicionar", assim, o BrowserRouter irá verificar a chamada, e renderizar o componente correspondente àquela rota 
            OBS: useNavigate() só funciona se o componente Musicas.jsx estiver dentro do BrowserRouter, senão ele não conseguirá referenciar uma das rotas da aplicação 
          */}
        </div>
      </div>
      <div className="container">
        {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
        <div className="music-boxes">
          {/* componente com classe "music-boxes", utilizando className do React pois class é reservada do sistema */}
          
          { // {} servem para invocar o javascript dentro do fragmento JSX que será retornado 

            /* 
            - .map() serve para iterarmos um vetor, ou seja, percorrer todos os elementos do vetor de forma separada
            - o map recebe como argumentos uma função de callback (que será executada para cada iteração de um elemento do vetor)
            - essa função de callback receberá como parâmetro o próprio elemento que está sendo percorrido naquela iteração do vetor (pode utilizar o nome que quiser para o parâmetro, nesse caso, usamos "item" como identificação do elemento do vetor)
            - essa função .map() retornará alguma coisa, de acordo com o que foi implementado na funçao de callback 
            */
           
            // utilizando o estado de musicas que possui um vetor para renderizarmos o componente ItemMusica para cada um dos elementos que tivemos dentro do estado
            musicas.map((item) => { // pega o vetor de músicas, e mapeia música por música, chamando aquele objeto de música do vetor como "item"
              return ( // retornando 1 componente item música para cada iteração que foi feita no vetor de musicas, utilizando o "item" como parâmetro recebido do elemento iterado
                <ItemMusica  
                  key={item.id}             // utilizando o id do elemento atual como chave do elemento que está sendo iterado
                  musica={item.titulo}      // utilizando o atributo "titulo" do item atual do vetor como parâmetro "musica" 
                  artista={item.artista}    // utilizando o atributo "artista" do item atual do vetor como parâmetro "artista"
                  categoria={item.genero}   // utilizando o atributo "genero" do item atual do vetor como parâmetro "categoria"
                  imagem={item.imagem}      // utilizando o atributo "imagem" do item atual do vetor como parâmetro "imagem"
                  ano={item.ano}            // utilizando o atributo "ano" do item atual do vetor como parâmetro "ano"
                />
              );
            })

          }


          {/* elementos que já existiam na página, sem serem iterados com o musicas.map() */}
          <ItemMusica
            musica="In the end"
            artista="Linkin Park"
            categoria="Rock"
            ano={2001}
          />
          {/* utilizando componente de ItemMusica passando os parâmetros "musica", "artista", "categoria" e "ano" como props de componente */}
          <ItemMusica /> {/* utilizando componente de ItemMusica */}
          <ItemMusica /> {/* utilizando componente de ItemMusica */}
          <ItemMusica /> {/* utilizando componente de ItemMusica */}
          <ItemMusica /> {/* utilizando componente de ItemMusica */}
        </div>
      </div>
    </>
  );
}

export default Musicas; // exportando função Musicas para usarmos o componente em outros arquivos
