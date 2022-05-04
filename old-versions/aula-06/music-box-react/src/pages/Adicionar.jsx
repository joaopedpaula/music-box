import React, { useState } from "react";
import Menu from "../components/Menu";
import api from "../api";

import circleImage from "../html-css-template/imagens/half-circles-pink-blue.png" // importando imagem dos círculos

function Adicionar() {
  const [musicaInput, setMusicaInput] = useState("");   // criando estado (getter & setter do useState) correspondente à input de Musica
  const [artistaInput, setArtistaInput] = useState(""); // criando estado (getter & setter do useState) correspondente à input de Artista
  const [generoInput, setGeneroInput] = useState("");   // criando estado (getter & setter do useState) correspondente à input de Genero
  const [anoInput, setAnoInput] = useState("");         // criando estado (getter & setter do useState) correspondente à input de Ano
  const [imagemInput, setImagemInput] = useState("");   // criando estado (getter & setter do useState) correspondente à input de Imagem

  function setarMusica(evento) { // exemplo de recebimento de evento por função
    setMusicaInput(evento.target.value); // setando o estado de música como o valor do alvo (a tag que manipulou o evento) do evento 
  }

  function enviarDados(evento) { // exemplo de recebimento de dados ao enviar (onSubmit) o formulário
    evento.preventDefault(); // prevenindo o comportamento padrão do <form>, que é o evento de enviar os dados para outra página
    console.log("Enviando dados!");
    console.log("musica: ", musicaInput);   // exibindo no console o estado de musica 
    console.log("artista: ", artistaInput); // exibindo no console o estado de artista
    console.log("genero: ", generoInput);   // exibindo no console o estado de genero
    console.log("ano: ", anoInput);         // exibindo no console o estado de ano
    console.log("imagem: ", imagemInput);   // exibindo no console o estado de imagem

    // criando objeto para enviar os dados para a API
    const objetoFormatado = { // objeto JSON {}
      titulo: musicaInput,    // atributo "título" com o valor do estado musicaInput
      artista: artistaInput,  // atributo "artista" com o valor do estado artistaInput  
      genero: generoInput,    // atributo "genero" com o valor do estado generoInput
      ano: anoInput,          // atributo "ano" com o valor do estado anoInput
      imagem: imagemInput,    // atributo "imagem" com o valor do estado imagemInput
    };

    console.log("FORMATAÇÂO: ", objetoFormatado); // exibindo objeto formatado no console
 
    // criando requisição de post, para enviarmos os dados para a API
    api.post("/", objetoFormatado) // basicamente, dizemos "api, faça um post no endereço do baseURL passando esse objeto formatado como parâmetro"
    .then((respostaObtida) => { // ao terminar a requisição, recebemos uma resposta trazendo os dados que foram inseridos na API, inclusive o status
        console.log("resposta obtida: ", respostaObtida) // exibindo resposta com os dados que foram inseridos na API, inclusive o status
    })
    .catch((erroOcorrido) => { // caso ocorra algum erro na requisição, irá disparar o catch, que "pegará" o erro
        console.log("erro ocorrido: ", erroOcorrido) // exibindo erro ocorrido no console
    })
  }

  return (
    <>
      {/* <Menu /> */}
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form onSubmit={enviarDados}> {/* ao enviar (onSubmit) o formulário, dispara a função enviarDados(), passando o evento padrão para ele como parâmetro*/}
              <label>
                Música: <br />
                <input onInput={setarMusica} type="text" /> {/* ao inserir dados no campo (onInput), dispara a função setarMusica(), passando o evento padrão para ele como parâmetro  */}
              </label>
              <br />
              <label>
                Artista: <br />
                <input
                  onInput={(evento) => {
                    setArtistaInput(evento.target.value); 
                  }} 
                  type="text"
                />
                {/* ao inserir dados no campo (onInput), chamamos uma arrow function que recebe o evento disparado, e já chama o setter do estado Artista para atribuir seu valor */}
              </label>
              <br />
              <label>
                Genêro: <br />
                <input
                  onInput={(evento) => {
                    setGeneroInput(evento.target.value);
                  }}
                  type="text"
                />
                {/* ao inserir dados no campo (onInput), chamamos uma arrow function que recebe o evento disparado, e já chama o setter do estado Genero para atribuir seu valor */}
                </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input
                  onInput={(evento) => {
                    setAnoInput(evento.target.value);
                  }}
                  type="text"
                />
                {/* ao inserir dados no campo (onInput), chamamos uma arrow function que recebe o evento disparado, e já chama o setter do estado Ano para atribuir seu valor */}
                </label>
              <br />
              <label>
                Imagem (url): <br />
                <input
                  onInput={(evento) => {
                    setImagemInput(evento.target.value);
                  }}
                  type="text"
                />
                {/* ao inserir dados no campo (onInput), chamamos uma arrow function que recebe o evento disparado, e já chama o setter do estado Imagem para atribuir seu valor */}
              </label>
              <br />
              <button type="submit" className="btn"> {/* ao adicionar type="submit" no botão, ele vira o "enviador" do formulário, e irá disparar a função onSubmit colocada na tag <form> */}
                Enviar
              </button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={circleImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar; // exportando função de Adicionar para usarmos em outros componentes