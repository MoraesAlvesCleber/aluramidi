function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio );
    if(elemento === null){
       // alert('Elemento não encontrado');
       
    }
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
         console.log('Elemento não encontrado');

    }
}
//document.querySelector('.tecla_pom').onclick=tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

 
//

//enquanto = while
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
 
    const instrumento = tecla.classList[1];

    /*console.log(instrumento);*/

    const idAudio = `#som_${instrumento}`;

    /*console.log(idAudio);*/

     tecla.onclick = function(){
       tocaSom(idAudio);
    
    }
       tecla.onkeydown = function(evento){

     if(evento.code =='Space'|| evento.code === 'Enter'){
            
            tecla.classList.add('ativa');

        }

        tecla.onkeyup = function(){
           tecla.classList.remove('ativa');
       }
    }
}