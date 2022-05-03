import React from "react";
import logo from "../html-css-template/imagens/logo-verde.png"; // importando imagem com LOGO VERDE como uma variável para ser utilizada
import avatar from "../html-css-template/imagens/avatar.png"; // importando imagem com AVATAR como uma variável para ser utilizada

import { Link } from 'react-router-dom'; // importando componente Link da biblioteca react-router-dom

function Menu() {
  return (
    <>
      <nav>
        <div className="container"> {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
          {/* 
            Utilizando link para navegar para a rota "/", assim, o BrowserRouter irá verificar a chamada, e renderizar o componente correspondente àquela rota 
            OBS: Link só funciona se o componente Menu estiver dentro do BrowserRouter, senão ele não conseguirá referenciar uma das rotas da aplicação 
          */}
          <Link to="/"> {/* Link indo "para" a rota "/" */}
            <img src={logo} alt="Logo" className="logo" /> {/* utilizando variável que representa a imagem com LOGO VERDE */}
          </Link>
          <img src={avatar} alt="Avatar" className="avatar" /> {/* utilizando variável que representa a imagem com AVATAR */}
        </div>
      </nav>
    </>
  );
}

export default Menu; // exportando função ItemMusica para usarmos o componente em outros arquivos