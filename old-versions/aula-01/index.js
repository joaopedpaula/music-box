// criando variável para buscar o elemento do HTML que serão implementados os componentes react 
const container = document.getElementById("app"); 

// criando função que será um componente (LEMBRE-SE DO NOME EM PascalCase!)
function Votacao(props) { // recebendo props, que são parâmetros para o componente
    // let contador = 0; -> não podemos utilizar variáveis, pois elas não são observadas pelo gerenciador de estados do React
    const [contador, setContador] = React.useState(0); // -> precisamos criar um State (estado) para que o React consiga gerenciar aquele estado
    
    function votarMais() { // uma função dentro de um componente pode ser utilizada normalmente em qualquer lugar do componente
        setContador(contador + 1); // utilizando o setter do state "contador" para incrementar 1 em seu valor
    }
    
    function votarMenos() { // outra funçao que pode ser utilizada em qualquer lugar dentro do componente
        setContador(contador - 1); // utilizando o setter do state "contador" para decrementar 1 em seu valor
    }

    // o return é fundamental para os componentes React, uma vez que irão retornar o fragmento JSX com os elementos que deverão ser renderizados
    return (
        <div> {/* componente pai que irá servir como container para os outros elementos do componente */}
            <h3>{props.titulo}</h3> {/* utilizando os parâmetros recebidos, acessando a propriedade "titulo" do objeto de props */}
            Votos: {contador}  <br /> {/* utilizando o getter do estado (state) contador */}
            <button onClick={votarMenos}>-</button>  {/* chamando a função local "votarMenos" */}
            {/* repare na sintaxe do onClick={} do React, que é diferente do onclick="" do HTML */}
            <button onClick={votarMais}>+</button>  {/* chamando a função local "votarMais" */} 
        </div>
    );
}

// função que é o componente App, que está utilizando o componente Votacao
function App () {
    return (
        <div> {/* componente pai que irá servir como container para os outros elementos do componente */}
            <Votacao titulo="Lua Nova"/> {/* invocando o componente Votacao, passando como parâmetro o título "Lua Nova" */}
            <Votacao titulo="Dois filhos de Francisco"/> {/* invocando o componente Votacao, passando outro título como parâmetro */}
            <Votacao titulo="Batman"/> {/* invocando o componente Votacao, passando outro título como parâmetro */}
            <Votacao titulo="Gente Grande"/> {/* invocando o componente Votacao, passando outro título como parâmetro */}
            <Votacao titulo="Shrek"/> {/* invocando o componente Votacao, passando outro título como parâmetro */}
        </div>
    );
}

// invocando a biblioteca do ReactDOM para renderizarmos o componente react utilizando a função .render()
ReactDOM.render(App(), container); // "Renderize o componente App() dentro do elemento HTML container"