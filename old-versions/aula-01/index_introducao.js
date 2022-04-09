/*
Criando um elemento h1 através do Javascript

const container = document.getElementById("app");   // referencia o elemento com id "app" no HTML para servir de container
const titulo = document.createElement("h1");        // cria o componente
titulo.innerHTML = "Esse título foi criado com JS"; // adiciona um corpo ao componente
container.appendChild(titulo);                      // adiciona o componente criado dentro do elemento container 
*/

const container = document.getElementById("app");

function Titulo(props) {
    return (
        <div>
            <h1>{props.texto}</h1>
            <h3>Esse segundo título foi criado com React</h3>
        </div> );}
function Titulos() {
    return (
        <div>
            <Titulo texto="Eu sou o primeiro Título"></Titulo>
            <Titulo texto="Eu venho depois do primeiro Título"></Titulo>
            <Titulo texto="Eu sou o último Título"></Titulo>
        </div>
    );
}

ReactDOM.render(Titulos(), container);
