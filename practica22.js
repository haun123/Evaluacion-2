"use strict";
var titulo = document.getElementById("titulo");
var subtitulo = document.getElementById("subtitulo");
console.log("Titulo: " + titulo.innerHTML + "\nSubtitulo: " + subtitulo.innerHTML);

var tarjetas = document.querySelectorAll("#tarjetas .p-4");
tarjetas.forEach((tarjeta, index) => {
var titulo = tarjeta.querySelector("h2");
var texto = tarjeta.querySelector("label");
var boton = tarjeta.querySelector("button");
console.log("Titulo: " + titulo.innerHTML + "\nTexto: " + texto.innerHTML + "\nBoton: " + boton.innerHTML);
});

var tablas = document.querySelectorAll("#tabla tr");
tablas.forEach((tabla, index) => {
var valores = "";
var elementos = tabla.querySelectorAll("td");
elementos.forEach((elemento, index) => {
var valor = elemento.innerHTML;
valores = valores + "|" + valor;
});
console.log(valores);
});

var form = document.getElementById("formulario");
var opciones = form.querySelectorAll("#radio .form-check");

var cantidad = opciones.length;
var elementos = form.querySelectorAll("*");

console.log("Cantidad de opciones: " + cantidad + "\nNumero total de elementos: " + elementos.length);