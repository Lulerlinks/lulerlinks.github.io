let fone = document.getElementById('j-uno')
let fdos = document.getElementById('j-dos')
let btnCalcu= document.getElementById('arecompati')
let pantalla1 = document.getElementById('pantalla1')
let pantalla2 = document.getElementById('espera')
let pantalla3 = document.getElementById('principal')
let placa = document.getElementById('placa')
let carrousel = document.getElementById('carouselExampleCaptions')
let jugadorescuenta = document.getElementById('jugadores')
let combo = document.getElementById('combo')
let result = document.getElementById('result')
let elem = 0;
let jugador1 = []
let jugador2 = []
let cartas = []
//obtener y guardar mazo de cartas :D //

const guardarMazo = (miMazo) => {
  console.log(miMazo);
  cartas = miMazo;
  localStorage.setItem('mazocartas', JSON.stringify(miMazo))
}

if (localStorage.getItem('mazocartas')){
  console.log('hay un mazo en el local')
  cartas = JSON.parse(localStorage.getItem
    ('mazocartas'));
} else {
  guardarMazo(miMazo)
}


btnCalcu.addEventListener('click', () =>  {
if(fdos.value.length > 0 && fone.value.length > 0){
pantalla1.style.display = 'none';
pantalla2.style.display = 'block';
setTimeout(tiempoCarga,3000)
iniciarJuego()
} else{
  alert('Los datos ingresados no son validos')
}
});


function tiempoCarga(){
    pantalla2.style.display = 'none';
    pantalla3.style.display = 'block'; 
   
   
}

function reset(){
fone.value = ' '
fdos.value = ' '
}


function volver(){
  pantalla3.style.display = 'none';
  pantalla1.style.display = 'block';
 reset()
}



const iniciarJuego = () => {
    
  const cartasJuego = []


    while (cartasJuego.length < 6){
      random = Math.floor(Math.random()*miMazo.length);
      if (cartasJuego.indexOf(miMazo[random]) == - 1){
        cartasJuego.push(miMazo[random])
      }
      }
      console.log('esto'+ JSON.stringify(cartasJuego))
 


let active = ''

cartasJuego.forEach((miMazo, index) => {
 if (index == 0){
   active = 'active'
  } else {active = ''
}
 carrousel.innerHTML += `<div class="carousel-item ${active}" class="org" data-id=${index + 1}>
           <img src=${miMazo.imagen} class="img-astro" class="d-block w-100" alt="...">          
          <h5>${miMazo.nombre}</h5>
          <p>${miMazo.descr}</p>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>`

})
jugadorescuenta.innerHTML = `<h3>Estas cartas son de ${fone.value}</h3>`

while (jugador1.length < 3){
jugador1.push(cartasJuego.slice(0,3))
}
console.log(jugador1)

while (jugador2.length < 3){
  jugador2.push(cartasJuego.slice(3,6))
  }
  console.log(jugador2)


  const myCarousel = document.getElementById('carouselExampleCaptions')
 
  myCarousel.addEventListener('slide.bs.carousel', event => {
    
  let elem = event.relatedTarget.getAttribute('data-id');
    if (elem < 4){
      jugadorescuenta.innerHTML = `<h3>Estas cartas son de ${fone.value}</h3>`
    } else {
      jugadorescuenta.innerHTML = `<h3>Estas cartas son de ${fdos.value}</h3>`
    }
    
   
      
  
  })
 
}
// cuenta = cuenta + miMazo.puntos
const resultados = () => {
  result.addEventListener('click' , () =>  {
    pantalla3.style.display = 'none';
    pantalla4.style.display = 'block';
   })

   function match(){
    if (cuenta % 2 == 0){
      match = true
      } else {
        match = false
      }
   }
   
}