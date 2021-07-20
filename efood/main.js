console.log('It worked!');

let time = document.getElementsByClassName('text-green');

time = time[0].textContent;

time = time.replace(/\D/g,'');

let div = document.createElement('div');
div.className = 'col-12 rounded mb-5';

let header = document.createElement('h1');
header.className = "display-3 font-weight-bold px-7";

let span = document.createElement('span');
span.className = 'text-green px-4 py-3 d-inline-block rounded thankyou-time';
span.id = 'counter-time';

div.appendChild(header);
header.appendChild(span);

let timeDiv = document.getElementsByClassName('row  mt-11');
timeDiv[0].appendChild(div);

let counterTime = document.getElementById('counter-time');

let startingMinutes = time * 60;

setInterval(updateCountdown,1000);

function updateCountdown(){
    const minutes = Math.floor(startingMinutes / 60);
    let seconds = startingMinutes % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    counterTime.innerHTML = `${minutes} : ${seconds}`;
    startingMinutes--;
}

/*

This is the structure we want to replicate with js 

<div class="col-12 rounded">
    <h1 class="display-3 font-weight-bold px-7">    
        <span id= "counter-time" class="text-green px-4 py-3 d-inline-block rounded thankyou-time"> </span>
    </h1>  
</div>

document.getElementById('counter-time').innerHTML(time)

https://youtu.be/x7WJEmxNlEs
*/