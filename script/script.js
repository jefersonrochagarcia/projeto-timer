let minutes = document.getElementById("minutes");
let contMinutes = 0;

let seconds = document.getElementById("seconds");
let contSeconds = 0;

let start = document.getElementById("btn-iniciar");

let stop = document.getElementById("btn-parar");

let zerar = document.getElementById("btn-zerar");

let intervalMinutes;
let intervalSeconds;

start.addEventListener('click',function(){
  intervalMinutes = setInterval(function(){
  contMinutes++;
  minutes.textContent = contMinutes;  
  },1000);
  function segundos(){
  intervalSeconds = setInterval(function(){
    contSeconds++;
    seconds.textContent = contSeconds;
  },1000);
}   
});

stop.addEventListener('click',function(){
  clearInterval(intervalMinutes);
  clearInterval(intervalSeconds);
});

zerar.addEventListener('click',function(){
  clearInterval(intervalMinutes);
  clearInterval(intervalSeconds);
  
  contMinutes = 0;
  contSeconds = 0;
  
  minutes.textContent = "00";
  seconds.textContent = "00";
});

minutos();
segundos();

