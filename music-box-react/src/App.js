import React from "react";
import Rotas from './Rotas'; // importando componente de ROTAS, que renderizará uma página correspondente com o endereço acessado
import "./html-css-template/css/reset.css"; // importando o arquivo reset.css para remover as estilizações padrão dos elementos
import "./html-css-template/css/style.css"; // importando o arquivo style.css com nossas classes de estilização
// como o App.js implementa o componente Musicas.jsx dentro dele, a estilização importada no app também se aplica no componente Musicas.jsx 

function App() { // componente App que retorna fragmento JSX
  return (
    <>
      <Rotas /> {/* renderizando componente de Rotas.jsx, que irá renderizar uma página correspondente à rota acessada*/}
    </>
  );
}

export default App; // exportando função App para usarmos o componente em outros arquivos