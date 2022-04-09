import React from "react";
import editIcon from "../html-css-template/imagens/edit-icon.png"; // importando imagem com ícone de EDITAR como uma variável para ser utilizada
import deleteIcon from "../html-css-template/imagens/delete-icon.png"; // importando imagem com ícone de DELETAR como uma variável para ser utilizada

function ItemMusica(props) { // componente ItemMusica que recebe parâmetros como "props" e retorna fragmento JSX
  return (
    <>
      <div className="card-music">  {/* componente com classe "card-music", utilizando className do React pois class é reservada do sistema */}
        <div className="icons">  {/* componente com classe "icons", utilizando className do React pois class é reservada do sistema */}
          <img src={editIcon} alt="" /> {/* utilizando variável que representa a imagem com ícone de EDITAR */}
          <img src={deleteIcon} alt="" /> {/* utilizando variável que representa a imagem com ícone de DELETAR */}
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