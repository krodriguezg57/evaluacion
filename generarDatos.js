export function generarDatos(){
    var nombres=["Espinacas","Planchue","Cazuela","Boloñesa"]
    var tipos=["animal", "insecto", "vegetal", "vegetal"]

    let alimento={}
    let dietas=[]
    //let nombre, tipo, nivelEner=0

    for(let i=0; i<50; i++){
        alimento.nombre= nombres[Math.floor((Math.random()*(nombres.length)))]
        alimento.tipo= tipos[Math.floor((Math.random()*(tipos.length)))]
        alimento.nivelEner=Math.floor((Math.random()*(500-100+1))+100)
        dietas.push(alimento)
        alimento={}
    }
    return dietas
}