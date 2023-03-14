let btnAdd= document.getElementById('btnplus')
let sintarea = document.getElementById('to-do')
let modal = document.getElementById('sale')
let ficha = document.getElementById('listadeTareas')
let agregar = document.getElementById('agregame-one')
let cancelar = document.getElementById('cancelame-one')
let pop = document.getElementById('pop-uno')
let check = document.getElementById('check')
let cont = document.getElementById('cont')
//// Esto es el value de Nombre de Tarea ///
let nameTarea = document.getElementById('nombre-tarea')

//// Esto es el value de dropdown ///
let drop = document.getElementById('tipotarea')

//// Esto es el value de Descripcion de Tarea ///
let txt = document.getElementById('areadetext')

let blue = document.getElementById('btn-gris')
let green = document.getElementById('btn-verde')

btnAdd.addEventListener('click', function(){
   // alert("ANDA")
modal.classList.add('active')
})

cancelar.addEventListener('click', () => {
 if (sintarea.disabled = true){
   modal.classList.remove('active')
 } else {
   sintarea.classList.add('ninguno')
 }

})

agregar.addEventListener('click', () => {
let fichadoble = `<div class="cont" id="cont">
<img src="img/list_Mesa de trabajo 1.png"
alt="Icono de acompañamiento" class="listi">  
<div class="texto">
<h2 id="soyh2">${nameTarea.value}</h2>
<h4 id="soyunh4">${drop.value}</h4>
<h6 id="soyunh6">${txt.value}</h6>
</div>
</div>
` 

ficha.innerHTML += fichadoble              
modal.classList.remove('active')
sintarea.classList.add('ninguno')
nameTarea.value=' '
drop.value=' '
txt.value=' '
})

blue.addEventListener('click' ,()  => {
  ficha.classList.add('pop-blue')

})

green.addEventListener('click' ,()  => {
  ficha.classList.add('pop-green')

})
