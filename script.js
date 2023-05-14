
//console.log('Hola mundo');
// h1 { color:red };
// .parr_cl { ... };
// #parr_id { ... }

/*
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parr_cl = document.getElementsByClassName('parr_cl');
const parr_id = document.getElementById('parr_id');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parr_cl,
    parr_id,
    input
});

h1.innerHTML = 'Nuevo <br> Texto';
h1.innerText = 'Nuevo <br> Texto';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'new_h1_cl');

h1.classList.add('rojo');
h1.classList.remove('new_h1_cl');

input.value= "12345";
const img = document.createElement('img');
img.setAttribute('src', 'https://images.ecestaticos.com/mPfi7oK7u_tYJOHUyvioOhwHVVc=/0x0:2272x1245/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F543%2Ff3d%2F890%2F543f3d890c2eb102de7a618124f78cf1.jpg');
console.log(img);

parr_id.appendChild(img);

*/

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}