var TribuRoja = {
    punto: 0
};
var TribuNegra = {
    punto: 0
};
var Handball_Input_TribuRoja = document.getElementById('Handball-r');
var Resistencia_Input_TribuRoja = document.getElementById('Resistencia-r');
var Ajedrez_Input_TribuRoja = document.getElementById('Ajedrez-r');
var Handball_Input_TribuNegra = document.getElementById('Handball-n');
var Resistencia_Input_TribuNegra = document.getElementById('Resistencia-n');
var Ajedrez_Input_TribuNegra = document.getElementById('Ajedrez-n ');
var resultadoOutput = document.getElementById('Resultados');
function AgregarPuntos(equipo) {
    if (equipo === 'Tribu Roja') {
        TribuRoja.punto += parseInt(Handball_Input_TribuRoja.value, 10) || 0;
        TribuRoja.punto += parseInt(Resistencia_Input_TribuRoja.value, 10) || 0;
        TribuRoja.punto += parseInt(Ajedrez_Input_TribuRoja.value, 10) || 0;
    }
    else if (equipo === 'Tribu Negra') {
        TribuNegra.punto += parseInt(Handball_Input_TribuNegra.value, 10) || 0;
        TribuNegra.punto = parseInt(Resistencia_Input_TribuNegra.value, 10) || 0;
        TribuNegra.punto = parseInt(Ajedrez_Input_TribuNegra.value, 10) || 0;
    }
}
function MostrarlosResultados() {
    var resultado = '';
    if (TribuRoja.punto > TribuNegra.punto) {
        resultado = 'Tribu Roja es el ganador con ' + TribuRoja.punto + 'puntos';
    }
    else if (TribuRoja.punto < TribuNegra.punto) {
        resultado = 'Tribu Negra es el ganador con ' + TribuNegra.punto + 'puntos';
    }
    else {
        resultado = 'Ambos equipos estan empatados con' + TribuRoja.punto + 'puntos';
    }
    resultadoOutput.innerText = resultado;
}
