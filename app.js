// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 const nombresAmigos=[];

function agregarAmigo(){


       //validar los datos si se ingresa un nombre vacio enviar un alert diciendo que es
       //un dato erroneo
     
       //se debe de agregar un nombre 
     let amigo= document.getElementById("amigo").value;
     if(amigo==""){
       alert("Ingresa un dato valido");
     }
     console.log("-----Amigo agregado -------") 
     console.log(amigo); 
     //agregar el nombre a la lista definida de html
     const listaContenedora= document.querySelector("#listaAmigos");
     let amigoLista = document.createElement("li");
     amigoLista.textContent= amigo;
     listaContenedora.appendChild(amigoLista);
    //crear un arreglo de los nombres para poder generar el numero aleatorio
   
    nombresAmigos.push(amigo);

    
       
}

function limpiarCaja(){
       document.querySelector("#amigo").value="";

}

function sortearAmigo(){
       //esta funcion sortea la lista de amigos que se genero dinamicamente
       let amigoAleatorio="";
       let totalElementosArreglos= nombresAmigos.length;
       console.log(totalElementosArreglos);
       const numeroAleatorio= Math.floor(Math.random()*totalElementosArreglos);
       console.log("Numero aleatorio generado");
       console.log(numeroAleatorio);
         console.log("Amigo aleatorio:");
       console.log(nombresAmigos[numeroAleatorio]);
       amigoAleatorio= nombresAmigos[numeroAleatorio];

       while(nombresAmigos.length>0){
         //aqui se iran eliminando los elementos de mi arreglo de Javascript     
         nombresAmigos.pop();
          console.log(nombresAmigos);

       }
       
       console.log(amigoAleatorio);
       //limpiar la pantalla donde esta la lista de usuarios y mostrar el amigo aleatorio generado
        const elementoEliminar= document.getElementById("listaAmigos");
        if(elementoEliminar){
              elementoEliminar.remove();

        }


       const amigoSorteado= document.querySelector("#resultado");
       let amigoSorteado1 = document.createElement("li");
       amigoSorteado1.textContent= `El amigo sorteado es: ${amigoAleatorio}`;
       amigoSorteado.appendChild(amigoSorteado1);

       limpiarCaja();


}

function limpiarLista(){
      
       const elementoEliminar= document.getElementById("listaAmigos");
        if(elementoEliminar){
              elementoEliminar.remove();
        }
}


