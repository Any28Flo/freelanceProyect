/*
 * Archivo principal de JS
 */
var efectoMenu = document.getElementsByClassName('menu');
[].forEach.call(efectoMenu,function(elemento){
  elemento.addEventListener("mouseover",cambiaColor);
  elemento.addEventListener("mouseout",colorOriginal);
})

function cambiaColor(){
  this.style.background="#18bc9c";
}
function colorOriginal(){
  this.style.background="#2c3e50";
}
