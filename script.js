let timer = 60;
let score = 0;
let randomNumber = '';

function incereaseScore(){
    score += 10;
    document.querySelector("#scoreBox").innerHTML = score;
}

function makeBubbles(){
    let bubbles = ``;
 for(let i = 1; i < 217; i++){
    let num = Math.floor(Math.random()*10);
    bubbles += `<div class="bubble">${num}</div>`;
 }

 document.querySelector("#panel-bottom").innerHTML = bubbles;
};

makeBubbles();

(function runTimer(){
  let timeInterval = setInterval(() => {
    if(timer >= 0){
        document.querySelector("#timer").innerHTML = timer;
        timer--;
    }
    else{
        clearInterval(timeInterval);
       let bottom = document.querySelector('#panel-bottom');
       bottom.innerHTML ='';
       
       let h2 = document.createElement('h1');
       h2.textContent = `score : ${score}`;
       
       bottom.appendChild(h2);
    }
  }, 1000)
   
})();

function getNewHit(){
    randomNumber = Math.floor(Math.random()*10);
    document.querySelector("#hitBox").innerHTML = randomNumber;
};

getNewHit();

let target = document.querySelector('#panel-bottom');

target.addEventListener('click', (details) => {
        let curNum = Number(details.target.textContent);
        
        if(randomNumber === curNum){
            incereaseScore();
            makeBubbles();
            getNewHit();
        }
        
})



