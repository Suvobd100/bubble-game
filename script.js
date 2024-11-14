let timer=10;
let score=0;
let ntNum = 0;

function hitScore(){
    score += 10;
    document.querySelector('#Hit-Score').textContent=score;
}


function newTargetNumber(){
    ntNum = Math.floor(Math.random()*10)
    document.querySelector('#hit-Number').textContent=ntNum
    // console.log(ntNum);
    
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
           else {clearInterval(timerEnd);
            document.querySelector('#panelBottom')
            .innerHTML=`<h1 class='text-5xl items-center text-red-500'>Game Over</h1>`;

                    }

                },1000 );        
        
}


document.querySelector('#panelBottom')
.addEventListener('click',function(ans){
   let clickNumber = (Number(ans.target.textContent));
    if(clickNumber===ntNum){
        hitScore()
        makeBubble()
        newTargetNumber()
    }
    // console.log(ntNum);
})
runTimer();
makeBubble();
newTargetNumber()



