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

makeBubble();