import React from 'react';
import api from './api';
import Votacao from './components/Votacao';

function App() {

  const [musicas, setMusicas] = React.useState("");

  function buscar() {
    console.log(api.get());

    api.get()
    .then((respostaObtida) => {
      console.log("Resposta: ", respostaObtida)
      console.log("Dados: ", respostaObtida.data);

      setMusicas(respostaObtida.data[29].titulo);
    })
    .catch(function (erroOcorrido) {
      console.log(erroOcorrido)
    })
  }

  return (
    <React.Fragment>
      <h1>Músicas</h1>
      <h1>{musicas}</h1>
      <button onClick={buscar}>Buscar Dados</button>
      <Votacao />
      <Votacao />
      <Votacao />
      <Votacao />
    </React.Fragment>
  );
}

export default App;