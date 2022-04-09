import React from "react";
import Votacao from "../components/Votacao"; // importando o componente Votacao que está no diretório "components"

function Votacoes() {
    return (
        <>
            <Votacao titulo="Lua Nova" /> {/* invocando o componente Votacao, passando como parâmetro o título "Lua Nova" */}
            <Votacao titulo="Dois filhos de Francisco" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
            <Votacao titulo="Batman" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
            <Votacao titulo="Gente Grande" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
            <Votacao titulo="Shrek" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
        </>
    );
}

export default Votacoes;