// Recriando o componente Votacao utilizando a extensão de arquivo .jsx, que indica que utilizaremos a sintaxe de JS XML (tags HTML dentro do JS utilizadas como açúcar sintático)

// Ao criarmos um arquivo .jsx, ele possui o mesmo comportamento de um arquivo JS comum, a única diferença, é em como a IDE vai interpretá-lo;
// Com um arquivo JSX, o VSCode interpreta as tags que digitamos dentro das functions de componentes, então ele irá sugerir para completar suas tags

import React from 'react'; // importando biblioteca React das dependências do projeto

function Votacao(props) { // recebendo props como parâmetro do componente
  const [votos, setVotos] = React.useState(0); // criando estado (state) para contador de votos

  // função para incrementar os votos
  function votar() {
    setVotos(votos + 1); // invocando Setter do estado (state) votos para incrementar 1 em seu valor
  }

  return (
    /* React.Fragment serve para englobarmos um conteúdo sem necessariamente termos um elemento (ao renderizar, ele é removido do código)  */
    <React.Fragment>
      <h1>{props.titulo}</h1> {/* utilizando atributo "titulo" do objeto de props (parâmetros recebidos pelo componente) */}
      <h2>Votos: {votos}</h2>
      <button onClick={votar}>Votar</button>
    </React.Fragment>
    /* React.Fragment serve para englobarmos um conteúdo sem necessariamente termos um elemento (ao renderizar, ele é removido do código)  */
  );
}
export default Votacao;
