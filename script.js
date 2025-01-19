const btnStart=document.querySelector('.start')
const btnStop=document.querySelector('.stop')
const btnreset=document.querySelector('.reset')
const btnlap=document.querySelector('.lap')

let hrs=min=sec=ms=0
let startTimer
let laps=[]  // To store lap times

btnStart.addEventListener('click',() =>{
    btnStart.classList.add('start-active')
    btnStop.classList.remove('stop-active')
    startTimer=setInterval(()=>{
        ms++//ms=ms+1;
        if(ms==100){
            sec++;
            ms=0
        }
        if(sec==60){
            min++
            sec=0
        }
        if(min==60){
            hrs++
            min=0
        }
        updateDisplay();
    },10)
});

btnStop.addEventListener('click',() =>{
    btnStart.classList.remove('start-active')
    btnStop.classList.add('stop-active')
    clearInterval(startTimer)
});

btnreset.addEventListener('click',() =>{
    btnStart.classList.remove('start-active')
    btnStop.classList.remove('stop-active')
    hrs=min=sec=ms=0;
    clearInterval(startTimer)
    updateDisplay(); 

    // Clear laps
    laps = [];
    clearLapDisplay();
});

btnlap.addEventListener('click', () => {
    // Store current lap time in a formatted string
    const lapTime = `${hrs < 10 ? '0' + hrs : hrs}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}.${ms < 10 ? '0' + ms : ms}`;
    laps.push(lapTime); // Add the formatted lap time to the laps array
    displayLaps(); // Update the lap display
});


function updateDisplay(){
    //formated display
    phrs=hrs<10?'0' + hrs:hrs
    pmin=min<10?'0' + min:min
    psec=sec<10?'0' + sec:sec
    pms=ms<10?'0' + ms:ms
    document.querySelector('.hrs').innerText=phrs
    document.querySelector('.min').innerText=pmin
    document.querySelector('.sec').innerText=psec
    document.querySelector('.ms').innerText=pms
}

function displayLaps() {
    const btnlap = document.querySelector('.laps');
    btnlap.innerHTML = ''; // Clear previous lap display

    laps.forEach((lap, index) => {
        const lapElement = document.createElement('div');
        lapElement.classList.add('lap-time');
        lapElement.innerText = `Lap ${index+1}: ${lap}`
        btnlap.appendChild(lapElement);
    });
}

// Clear Lap Display
function clearLapDisplay() {
    const lapContainer = document.querySelector('.laps');
    lapContainer.innerHTML = '';  // Clear displayed laps
}
