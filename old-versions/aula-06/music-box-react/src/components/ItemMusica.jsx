import React from "react";
import editIcon from "../html-css-template/imagens/edit-icon.png"; // importando imagem com ícone de EDITAR como uma variável para ser utilizada
import deleteIcon from "../html-css-template/imagens/delete-icon.png"; // importando imagem com ícone de DELETAR como uma variável para ser utilizada

import capaPadrao from "../html-css-template/imagens/capa.png"; // importando imagem de capa padrão para usarmos caso não haja um endereço de imagem na API

function ItemMusica(props) { // componente ItemMusica que recebe parâmetros como "props" e retorna fragmento JSX

  // constante que representa uma configuração de estilo CSS para alterar o background-image através do JS  
  const backgroundImage = {
    backgroundImage: `url(${props.imagem ? props.imagem : capaPadrao})` // interpolando a URL da imagem, utilizando um ternário para verificar se a URL da imagem deve ser a capaPadrao, caso a imagem da API (props.imagem) esteja vazia
  } 
  
  return (
    <>
      <div className="card-music" style={backgroundImage}>  {/* sobrescrevendo imagem de fundo com a configuração de estilo que criamos acima, renderizando a imagem da API ou a capa padrão caso a API não possua imagem */}
        <div className="icons">  {/* componente com classe "icons", utilizando className do React pois class é reservada do sistema */}
          <img src={editIcon} alt="" /> {/* utilizando variável que representa a imagem com ícone de EDITAR */}
          <img onClick={() => props.funcaoDeletar(props.id)} src={deleteIcon} alt="" /> {/* utilizando onClick para disparar a funcaoDeletar que recebemos como props do Musicas.jsx, passando o ID da música */}
        </div>
        <div className="info-music"> {/* componente com classe "info-music", utilizando className do React pois class é reservada do sistema */}
          <p>
            <strong className="card-title">música: </strong>  {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input className="input-music-enable" type="text" defaultValue={props.musica} /> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <p>
            <strong className="card-title">artista: </strong>  {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input className="input-music-enable" type="text" defaultValue={props.artista}/> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <p>
            <strong className="card-title">categoria: </strong> {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input className="input-music-enable" type="text" defaultValue={props.categoria}/> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <p>
            <strong className="card-title">ano: </strong> {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
            <input className="input-music-enable" type="text" defaultValue={props.ano}/> {/* componente com classe "input-music-enable", utilizando className do React pois class é reservada do sistema */}
            {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
          </p>
          <button className="btn-salvar-enable">Salvar</button> {/* componente com classe "btn-salvar-enable", utilizando className do React pois class é reservada do sistema */}
        </div>
      </div>
    </>
  );
}

export default ItemMusica; // exportando função ItemMusica para usarmos o componente em outros arquivos