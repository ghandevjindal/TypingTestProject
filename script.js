//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;
let timer;
let seconds = 30;
document.getElementById('start-btn').addEventListener('click',function(){
    document.getElementById('input').removeAttribute('disabled');
    document.getElementById('input').focus();
    document.getElementById('sentence').textContent = sentences;
    document.getElementById('start-btn').disabled = true;
    timer = setInterval(()=>{
        seconds--;
        document.getElementById('timer').textContent = `00:${seconds}`;
        if(seconds <= 0){
            endTest(30);
        }
        else if(document.getElementById('input').value.length == sentences.length){
            endTest(30-seconds);
        }
    },1000);
});

function endTest(t){
    clearInterval(timer);
    calculateResult(t);
    document.getElementById('input').disabled = true;
    document.getElementById('start-btn').disabled = true;
    document.getElementById('result').style.display = 'block';
}

document.getElementById('retry-btn').addEventListener('click',function(){
    document.getElementById('start-btn').disabled = false;
    document.getElementById('result').style.display = 'none';
    document.getElementById('input').value = '';
    document.getElementById('sentence').textContent = ''
    seconds = 30;
    document.getElementById('timer').textContent = `00:${seconds}`;
});

function calculateResult(t){
    let input = document.getElementById('input').value;
    let count = 0;
    for(let i=0; i<input.length; i++){
        if(input[i]===sentences[i]){
            count++;
        }
    }
    let speed = (count/t)*60;
    let accuracy = (count/sentences.length)*100;
    document.getElementById('speed').textContent = `${speed}`;
    document.getElementById('accuracy').textContent = `${accuracy}`;
}
