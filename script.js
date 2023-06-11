const menu = document.querySelector('#menu');
const cross = document.querySelector('#cross');
const respNev = document.querySelector('#respNev');


menu.addEventListener('click', function(){
    menu.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    respNev.classList.toggle('invisible');
})

cross.addEventListener('click', function(){
    menu.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    respNev.classList.toggle('invisible');
})