interface puntos {
    punto: number 
}

let TribuRoja: puntos={
    punto:0
}

let TribuNegra: puntos={
    punto:0
}

const Handball_Input_TribuRoja = document.getElementById ('Handball-r') as HTMLInputElement;
const Resistencia_Input_TribuRoja = document.getElementById ('Resistencia-r') as HTMLInputElement;
const Ajedrez_Input_TribuRoja = document.getElementById ('Ajedrez-r') as HTMLInputElement;

const Handball_Input_TribuNegra = document.getElementById ('Handball-n') as HTMLInputElement;
const Resistencia_Input_TribuNegra = document.getElementById ('Resistencia-n') as HTMLInputElement;
const Ajedrez_Input_TribuNegra = document.getElementById ('Ajedrez-n') as HTMLInputElement;


const resultadoOutput = document.getElementById('Resultados') as HTMLElement;


function AgregarPuntos(equipo: string): void {
    if (equipo === 'TribuRoja') {
        TribuRoja.punto += parseInt(Handball_Input_TribuRoja.value,10) || 0;
        TribuRoja.punto += parseInt(Resistencia_Input_TribuRoja.value,10) || 0;
        TribuRoja.punto += parseInt(Ajedrez_Input_TribuRoja.value,10) || 0;
    } else if (equipo === 'TribuNegra') {
        TribuNegra.punto += parseInt(Handball_Input_TribuNegra.value,10) || 0;
        TribuNegra.punto += parseInt(Resistencia_Input_TribuNegra.value,10) || 0;
        TribuNegra.punto += parseInt(Ajedrez_Input_TribuNegra.value,10) || 0;
    }
    

}
function MostrarLosResultados(): void {
    let resultado='';
    if (TribuRoja.punto > TribuNegra.punto){
        resultado = 'Tribu Roja es el ganador con ' + TribuRoja.punto + 'puntos';
    } else if (TribuRoja.punto < TribuNegra.punto) {
        resultado = 'Tribu Negra es el ganador con ' + TribuNegra.punto + 'puntos';
    } else{
        resultado  = 'Ambos equipos estan empatados con' + TribuRoja.punto + 'puntos';
    }
    
    resultadoOutput.innerText = resultado;
}

