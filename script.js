let timer=60;
let score=0;
function hitScore(){
    score += 2.5;
    document.querySelector('#Hit-Score').textContent=score;
}


function newTargetNumber(){
    let ntNum = Math.floor(Math.random()*10)
    // console.log(ntNum);
    document.querySelector('#hit-Number').textContent=ntNum
}

function makeBubble() {
    clutter='';
for(let i = 1; i <= 180; i++){
    let randomNum=Math.floor(Math.random()*10)
    clutter += `<div class="w-10 h-10 bg-slate-600 rounded-full">
                    <h6 class="text-white text-center p-2">${randomNum}</h6>
            </div>`

}

document.querySelector("#panelBottom").innerHTML=clutter;
}

function runTimer(){
        let timerEnd = setInterval(function(){
           
           if(timer>0){
            timer-- ;
            document.querySelector("#timerVal").textContent = timer;
           } 
           else {clearInterval(timerEnd);}

                },1000 );        
        
}


runTimer();
makeBubble();
newTargetNumber()


