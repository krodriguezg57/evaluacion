import {generarDatos} from "./generarDatos.js"

let dietas = generarDatos()

function recibirDieta(dietas, sumarNiveles){
    console.log(dietas)
    setTimeout(function(){
        let alimentosFiltrados = dietas.filter(function(dieta){
            return (dieta.nivelEner > 200 && dieta.tipo == "vegetal")
        })
        sumarNiveles(alimentosFiltrados)
    },1000)
}

recibirDieta(dietas, function(alimentosFiltrados){
    let acomulador=0
    alimentosFiltrados.forEach(function(alimentoFiltrado){
        acomulador += alimentoFiltrado.nivelEner
    });
    console.log(acomulador)
})
