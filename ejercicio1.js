function recibirPadawan(nombre, planeta, edad, estatura, asignacionActividades){
    setTimeout(function(){
        padawans={
            nombre: nombre,
            planeta: planeta,
            edad: edad,
            estatura: estatura
        }
        asignacionActividades(padawans)
    },1000)
}


recibirPadawan("Karen", "Tierra", 13, 1.62, function(padawans){
    let actividad
    if(padawans.edad<=15){
       actividad="Manejo de la fuerza"
    }else{
        actividad="Manejo del sable de luz"
    }
    console.log(`El padawan ${padawans.nombre} tiene la actividad: ${actividad}`)
})
