import React from "react"; // importando biblioteca React das dependências do projeto
import ReactDOM from "react-dom/client"; // importando biblioteca ReactDOM das dependências do projeto
import App from "./App"; // importanto componente App

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// invocando a biblioteca do ReactDOM (versão 18.0, a mais recente) para renderizarmos o componente React utilizando a função .createRoot().render()
// .createRoot() serve para criar uma raíz no elemento identificado como root
// .render() serve para renderizar o componente App()
// Interpretação do comadando: "Renderize o componente <App /> dentro do elemento HTML identificado pelo id 'root', criando uma raiz (createRoot) naquele elemento"
