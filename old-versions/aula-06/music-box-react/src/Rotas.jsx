import React from 'react';
import Home from './pages/Home'; 
import Menu from './components/Menu'; 
import Musicas from "./pages/Musicas";
import NotFound from './pages/NotFound';
import Adicionar from "./pages/Adicionar";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // importando os componentes da biblioteca "react-router-dom"
/*
    BrowserRouter é o componente que representa o nosso roteador, que também é um navegador, e serve para navegar entre as rotas do nosso projeto, onde serão inseridas dentro desse componente 
    Routes (plural) é o componente que serve para agrupar as rotas que teremos dentro do nosso BrowserRouter, para que ele saiba em quais rotas poderá navegar
    Route (singular) é o componente que representa uma rota do nosso projeto, onde recebe como atributos: 
        - path: é o atributo que indica qual é o caminho do endereço daquela rota, vinculando Route e endereço
        - element: atributo que recebe o componente que deverá ser renderizado, correspondente ao caminho (path) do endereço que ele acessou 
    
    Um componente Routes recebe vários Route
*/

function Rotas() {
    return (
    <>
        <BrowserRouter> {/* Este é o navegador de rotas, do react-router-dom */}
            
            <Menu /> {/* Utilizando o menu em todas as páginas, pois elas serão renderizadas de acordo com o Route correspondente ao endereço acessado */}
            
            <Routes> {/* Este é o agrupador de rotas, do react-router-dom */}
                <Route path="/" element={<Home />}/> {/* Rota com o caminho "/", que ao acessar "http://localhost:3000/", renderizará o elemento/componente "Home.jsx" */}
                <Route path="/musicas" element={<Musicas />}/> {/* Rota com o caminho "/musicas", que ao acessar "http://localhost:3000/musicas", renderizará o elemento/componente "Musicas.jsx" */}
                <Route path="/adicionar" element={<Adicionar />} /> {/* Rota com o caminho "/", que ao acessar "http://localhost:3000/adicionar", renderizará o elemento/componente "Adicionar.jsx" */}
                <Route path="*" element={<NotFound />} /> {/* Rota com caminho "*", que renderizará o componente NotFound caso o navegador acesse qualquer rota diferente das rotas declaradas na aplicação (como /moranguete, por exemplo, retornará o NotFound) */}
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default Rotas;  // exportando função de Adicionar para usarmos em outros componentes