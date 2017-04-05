//document.getElementById("botones").addEventListener("click",buttonClick);
var arreglosImagenes=[];

var claseBotones=document.getElementsByClassName("botones");

function crearClickEventos(claseBotones){
  for(var x=0;x<claseBotones.length;x++)
  {
    claseBotones[x].addEventListener("click",function(){
        buttonClick( this );
      });
  }
}
crearClickEventos(claseBotones);

function quitarClickEventos(claseBotones){
  for(var x=0;x<claseBotones.length;x++)
  {
    claseBotones[x].removeEventListener("click",function(){
        buttonClick( this );
      });
  }
}



function bombaInit(){
  var i=0;
  var random;
  for(i;i<16;i++){
    arreglosImagenes[i]="assets/img/punto.jpg"
  }
  for(i=0;i<4;i++){
    do{
      random=Math.floor(Math.random()*16);
      //console.log(random);

    }while (arreglosImagenes[random]!="assets/img/punto.jpg")

    arreglosImagenes[random]="assets/img/bomba.jpg"
  }

}

function buttonClick(imagen){
  //console.log(imagen);
  imagen.src=arreglosImagenes[imagen.id];
  if(arreglosImagenes[imagen.id]=="assets/img/bomba.jpg"){
    alert("Perdiste");
    quitarClickEventos(claseBotones);
    //event.stopPropagation()
  }
  //alert("hola");
}

var recarga =document.getElementById("recarga");
recarga.addEventListener("click",recargar);
function recargar(){
  location.reload();
}

document.addEventListener("click", mensaje);
document.getElementById("tablaBuscaminas").addEventListener("click",noMensaje);
document.getElementById("recarga").addEventListener("click",noMensaje);

function mensaje(){
  alert("sigue jugando");
}

function noMensaje(){
  event.stopPropagation();
}
