const eventDate = new Date('2026-11-26T09:00:00-04:00');
function updateCountdown(){const diff=Math.max(0,eventDate.getTime()-Date.now());document.getElementById('days').textContent=String(Math.floor(diff/86400000)).padStart(2,'0');document.getElementById('hours').textContent=String(Math.floor(diff/3600000)%24).padStart(2,'0');document.getElementById('minutes').textContent=String(Math.floor(diff/60000)%60).padStart(2,'0');}
updateCountdown();setInterval(updateCountdown,30000);document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const BANK_DETAILS = { banco:'Banreservas', beneficiario:'ASOCIACION NACIONAL DE DIRECTORES DE CENTROS EDUCATIVOS DE LA REPUBLICA DOMINICANA', cuenta:'9605825810 (cuenta corriente)', monto:'RD$ 2,500.00' };
for (const [key,id] of [['banco','bankName'],['beneficiario','bankHolder'],['cuenta','bankAccount'],['monto','bankAmount']]) document.getElementById(id).textContent=BANK_DETAILS[key];
// Demostración pública: recepción de formularios deshabilitada.
