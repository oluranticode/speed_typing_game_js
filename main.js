window.addEventListener('load', init);
// Globals
let time = 5;
let score = 0;
let isPlaying;
let timeChange;

//DOM Elements
const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const message = document.getElementById('message');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');

const words = [
    'father', 'parents','presidents','health',
    'ambitious','kingsly', 'column', 'viva',
    'technology', 'electrical', 'engineering',
    'electronic', 'education', 'physical', 'soapy'
];

function init(){
console.log("init");
//load words from the array
showWord(words);
//countDown
setInterval(countDown, 1000);
//check status
setInterval(checkStatus, 50);
// match the words
wordInput.addEventListener("input", startMatch) 
}

//start Match
function startMatch(){
    var val = document.getElementById("levelChange").value;

    if(val == "easy"){
        
        timeChange = 6;
        document.getElementById("textLevel").innerHTML = "EASY";
        document.getElementById("seconds").innerHTML = "5";
    } 
    
    if(val == "medium"){
        timeChange = 4;
        document.getElementById("textLevel").innerHTML = "MEDIUM";
        document.getElementById("seconds").innerHTML = "3";
    } 
    
    if(val == "hard"){
        timeChange = 3;
        document.getElementById("textLevel").innerHTML = "HARD";
        document.getElementById("seconds").innerHTML = "2";
    } 

    if(matchWords()){ 
        
        isPlaying = true;
        time = timeChange;
        showWord(words);
        wordInput.value = '';
        score++;
        console.log(score);      
    }
    if(score === -1 ){
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score;
    }
    
    }
    document.getElementById("regForm").addEventListener("click", startMatch, false);


//match input words with current words
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        document.getElementById('message').innerHTML = "CORRECT!!!";
       
        return true;
    } else{
        document.getElementById('message').innerHTML = "";
        return false;
    }
    
}
//Pick & show random word
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

function countDown(){
    // make sure the time does not run out of 0
    if(time > 0){
        //decrement
        time--;
    } else if(time===0){
        //Game Over
        isPlaying = false;
        // document.getElementById('message').innerHTML = "GAME OVER";
    }
    // show time
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying & time===0){
        document.getElementById('message').innerHTML = "GAME OVER!!!";
         score = -1;
    }
}

