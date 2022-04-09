import React from "react";
import ItemMusica from "../components/ItemMusica"; // importando o componente de card de música como "ItemMusica"
import Menu from "../components/Menu"; // importando o componente de header como "Menu"

function Musicas() { // componente Musicas que retorna fragmento JSX
  return (
    <>
      <Menu /> {/* utilizando componente de Menu */}
      <div className="container"> {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
        <div className="filter"> {/* componente com classe "filter", utilizando className do React pois class é reservada do sistema */}
          <button className="btn">Adicionar</button> {/* componente com classe "btn", utilizando className do React pois class é reservada do sistema */}
        </div>
      </div>

      <div className="container"> {/* componente com classe "container", utilizando className do React pois class é reservada do sistema */}
        <div className="music-boxes"> {/* componente com classe "music-boxes", utilizando className do React pois class é reservada do sistema */}

            <ItemMusica 
                musica="In the end" 
                artista="Linkin Park"
                categoria="Rock"
                ano={2001}
            /> {/* utilizando componente de ItemMusica passando os parâmetros "musica", "artista", "categoria" e "ano" como props de componente */}
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