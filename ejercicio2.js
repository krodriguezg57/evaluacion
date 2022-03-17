function ingresarPlanos(revisarPlanos){
    setTimeout(function(){
        let planos = []
    
        for(i =0;i <10;i++){
            planos.push(Math.floor((Math.random() * (50-1)) +1))
        }
        revisarPlanos(planos)
    },1000)
}

ingresarPlanos(function(planos){
    planos.forEach(function(plano){
        if(plano>=1 && plano<=10){
            console.log("el plano "+plano+": el plano es de una estrella de la muerte")  
        }else{
            console.log("el plano "+plano+": el plano es falso")
        }
    })
   
})
