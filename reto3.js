let btnAdd= document.getElementById('btnplus')
let popone = document.getElementById('to-do')
let modal = document.getElementById('sale')
let ficha = document.getElementById('ficha')
let agregar = document.getElementById('agregame-one')
//// Esto es el value de Nombre de Tarea ///
let nameTarea = document.getElementById('nomTarea')
let titulo = document.getElementById('soyh2')
//// Esto es el value de dropdown ///
let drop = document.getElementById('inputGroupSelect01')
let descripcion =  document.getElementById('soyunh4')
//// Esto es el value de Descripcion de Tarea ///
let txt = document.getElementById('exampleFormControlTextarea1')
let textarea =  document.getElementById('soyunh6')

btnAdd.addEventListener('click', function(){
   // alert("ANDA")
modal.classList.add('active')
 
})

btnAdd.addEventListener('click', function(){

    popone.classList.add('ninguno')

})


agregar.addEventListener('click', function(){
let tipo =  nameTarea.value
let selec = drop.value
let descrip = txt.value
titulo.innerHTML = tipo
descripcion.innerHTML = "Mi tarea es del tipo " + selec
textarea.innerHTML = descrip

ficha.classList.add('active')
modal.classList.add('ninguno')

})

