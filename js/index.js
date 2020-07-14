window.addEventListener('unload',() => localStorage.setItem('valsInp', [...document.querySelectorAll('input[type="text"]')].map((e,i) => e.value)) );
window.addEventListener('unload',() => localStorage.setItem('valsArea', [...document.querySelectorAll('textarea')].map((e,i) => e.value)) );
window.addEventListener('unload',() => localStorage.setItem('checked', checkbox.checked))
window.addEventListener('DOMContentLoaded', () => localStorage.getItem('checked') == "true" ? checkbox.checked = true : checkbox.removeAttribute('checked'))
window.addEventListener('unload',() => localStorage.setItem('loaded',true))

let valsInp = localStorage.getItem('valsInp') ? localStorage.getItem('valsInp').split`,` : '';
let valsArea = localStorage.getItem("valsArea") ? localStorage.getItem("valsArea").split`,` : '';
let inp = document.querySelectorAll('input[type="text"]');
let tarea = document.querySelectorAll('textarea');
for(let i = 0; i < inp.length; i++) valsInp[i] ? inp[i].value = valsInp[i] : '';
for(let i = 0; i < tarea.length; i++) valsArea[i] ? tarea[i].value = valsArea[i] : '';
submit.addEventListener('click', () => allert.style.display = 'none')
