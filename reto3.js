let btnAdd= document.getElementById('btnplus')
let sintarea = document.getElementById('to-do')
let modal = document.getElementById('sale')
let ficha = document.getElementById('ficha')
let agregar = document.getElementById('agregame-one')
let cancelar = document.getElementById('cancelame-one')
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

    sintarea.classList.add('ninguno')

})

cancelar.addEventListener('click', function(){
    if(ficha=='active'){
  alert('ficha ta activa') 
    } else{
    sintarea.classList.remove('ninguno')
    modal.classList.remove('active')
    }  
   

})

agregar.addEventListener('click', function(){
let tipo =  nameTarea.value
let selec = drop.value
let descrip = txt.value

//let fichadoble = `<div class="ficha" id="ficha">
  //                  <img src="img/list_Mesa de trabajo 1.png" alt="Icono de acompañamiento" class="listi">  
    //                <div class="texto">
      //              <h2 id="soyh2">${tipo}</h2>
        //            <h4 id="soyunh4">${selec}</h4>
          //          <h6 id="soyunh6">${descrip}</h6>
            //    </div>
              //  </div>`  
//ficha.innerHTML += fichadoble                

let title = document.createElement('h2')
let  txth2= document.createTextNode(tipo)
title.appendChild(txth2)
titulo.appendChild(title)

let dropping = document.createElement('h4')
let  txth4= document.createTextNode("Mi tarea es del tipo: " + selec)
dropping.appendChild(txth4)
descripcion.appendChild(dropping)

let areatexto = document.createElement('h6')
let  txth6= document.createTextNode(descrip)
areatexto.appendChild(txth6)
textarea.appendChild(areatexto)


modal.classList.remove('active')
ficha.classList.add('active')


})

