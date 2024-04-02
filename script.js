
input_div = document.getElementById("input-div");
the_container = document.getElementById("the_container");
input_div.value = '';
result_div = document.getElementById("centered-div-placeholder");
var input_div = document.getElementById('input-div');
var rightSideDiv = document.getElementById('side-div right-side');
var leftSideDiv = document.getElementById('side-div left-side');
var streak = 0;
top1000Words = [
    "the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "but", "some", "what", "there", "we", "can", "out", "other", "were", "all", "your", "when", "up", "use", "how", "said", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "them", "would", "like", "so", "her", "long", "make", "see", "him", "two", "has", "look", "more", "day", "could", "come", "did", "my", "sound", "most", "who", "over", "know", "than", "call", "first", "may", "down", "been", "find", "any", "work", "part", "take", "made", "live", "where", "after", "back", "only", "round", "came", "show", "every", "good", "give", "our", "under", "very", "just", "form", "much", "great", "think", "say", "help", "line", "before", "turn", "cause", "same", "mean", "move", "right", "does", "tell", "want", "well", "also", "play", "small", "even", "land", "must", "high", "such", "follow", "went", "light", "kind", "need", "house", "picture", "again", "ask", "then", "show", "near", "build", "earth", "stand", "own", "page", "should", "found", "answer", "still", "learn", "plant", "cover", "food", "four", "thought", "keep", "last", "door", "city", "tree", "cross", "since", "hard", "might", "story", "left", "late", "don't", "while", "press", "close", "night", "real", "life", "few", "stop", "open", "seem", "next", "white", "begin", "walk", "paper", "music", "both", "mark", "book", "until", "mile", "river", "care", "took", "rain", "room", "idea", "fish", "north", "hear", "horse", "sure", "watch", "color", "face", "main", "girl", "usual", "above", "ever", "feel", "talk", "soon", "body", "dog", "pose", "song", "state", "black", "short", "class", "wind", "ship", "area", "half", "rock", "order", "fire", "piece", "told", "knew", "pass", "farm", "whole", "king", "size", "best", "during", "hundred", "early", "hold", "reach", "fast", "five", "sing", "listen", "six", "table", "travel", "less", "war", "lay", "against", "slow", "love", "road", "fall", "town", "fine", "certain", "fly", "unit", "lead", "dark", "note", "wait", "plan", "star", "rest", "able", "done", "drive", "stood", "front", "teach", "week", "final", "gave", "green", "quick", "sleep", "warm", "free", "minute", "strong", "special", "mind", "clear", "tail", "fact", "street", "inch", "lot", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "deep", "moon", "foot", "busy", "test", "record", "boat", "gold", "dry", "ago", "game", "heat", "snow", "bed", "bring", "sit", "fill", "east", "among"
]


// top1000Words = [word for word in top1000Words if len(word) <= 5]


window.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('input-div');
    inputField.focus();

});

    document.addEventListener('keydown', (event) => {
    if (event.target === input_div && (event.key === " " || event.code === "Space"))  {


        
        event.stopPropagation(); // Stop event propagation
        event.preventDefault();

}
});

var startbit = 0;
var gameoverbit =1 ;
var pagereload = 0;

document.addEventListener('keyup', (event) => {
    if (event.key == ' ') {

        
        if(pagereload){
            
            location.reload();
        }else{
            
            spacebar(); 


            }
            
            
            

            console.log(gameoverbit, 'game over bit');
     

        
          }
    
});
function clearInputAndShowPlaceholder() {
    var inputElement = document.getElementById('input-div');
    inputElement.value = '';
    inputElement.value = inputElement.value.slice(0, -1);
    inputElement.blur();
}

function validator(){

    inputElement = document.getElementById("input-div");
    if(inputElement.value == helloarray[2]){
        return true;
    }else{
        return false;
    }
}


word1 = '';
word2 = '';
word3 = '';
i = Math.floor(Math.random() * (322));
word4 = top1000Words[i];
i = Math.floor(Math.random() * (322));
word5 = top1000Words[i];
function moveTextToLeft() {
    rightSideDiv.classList.add('move-left');
    leftSideDiv.classList.add('move-left');
    }


function moveTextToCenter() {
    rightSideDiv.classList.add('move-right');
    leftSideDiv.classList.add('move-right');

            rightSideDiv.addEventListener('animationend', function() {
                rightSideDiv.classList.remove('move-right');
            }, { once: true });
            leftSideDiv.addEventListener('animationend', function() {
                leftSideDiv.classList.remove('move-right');
            }, { once: true });

  

        





}

function swapper(){

    
    function executeFunctionsWithDelay() {
        
        setTimeout(() => {
            document.getElementById("side-div left-side").innerText= helloarray[1];
            document.getElementById("side-div right-side").innerText= helloarray[3];
            
            
            
        }, 250); 
    }
    executeFunctionsWithDelay();
    input_div.placeholder = helloarray[2] ; 

    

}

function gameover(){

    rightSideDiv.classList.add('game-over');
    leftSideDiv.classList.add('game-over');


    
    // input_div.value = score;
    input_div.disabled = "true";
    console.log(result_div.classList,result_div.innerText);
    input_div.blur();
    function executeFunctionsWithDelay() {
        
        
        input_div.classList.add("hidden");
        
        
        setTimeout(() => {
            
            input_div.placeholder = '';
            
            document.documentElement.classList.add('paint-the-town-red');
            rightSideDiv.classList.add('paint-the-town-red');
            leftSideDiv.classList.add('paint-the-town-red');
            input_div.classList.add('paint-the-town-red');
            the_container.classList.add('paint-the-town-red'); 
            document.body.classList.add('paint-the-town-red');
            document.body.classList.add('paint-the-town-red');
            // document.body.classList.toggle("changed");
            console.log(document.body.classList)
            leftSideDiv.classList.remove("hidden");
            rightSideDiv.classList.remove("hidden");
            
            leftSideDiv.classList.add("visible");
            rightSideDiv.classList.add("visible");
            // result_div.remove('hidden');
            result_div.classList.remove("hidden");
            result_div.classList.add("visible");





            rightSideDiv.innerText = "over";
            leftSideDiv.innerText = "game";

            
            
            
        }, 1000); 
    }
    executeFunctionsWithDelay();

    console.log(streak,'helll');

    scoreupdator(streak);






    }


function scoreupdator(streak){


    
var counter = 0;
console.log(streak,"final streak");

var intervalId = setInterval(function() {    
    result_div.innerText = counter;
     counter++;
    if (counter >= streak) {
        console.log("clear interval ");
        clearInterval(intervalId);
    }
},  125);








    

    





 









    
}

function all_functions_for_swapping(){
    moveTextToCenter();
    swapper();
    input_div.focus() ;

}


let helloarray = [word1,word2,word3,word4,word5]

function spacebar() {

    if(startbit==0){
            
    clearInputAndShowPlaceholder();


    console.log(helloarray);
    helloarray.shift();
    i = Math.floor(Math.random() * (322));
    helloarray.push(top1000Words[i]);

    all_functions_for_swapping(); 

    startbit++;



    }else{

       if(validator()){

    clearInputAndShowPlaceholder();


    console.log(helloarray);
    helloarray.shift();
    i = Math.floor(Math.random() * (322));
    helloarray.push(top1000Words[i]);

    all_functions_for_swapping(); 
    var gameoverbit = 0;

    streak++;

    // console.log()



       }else{
        if(!gameoverbit){

            console.log("kaboom");
            gameoverbit = 1;
            pagereload = 1;
            gameover();
            
        }

       }


        


    }





    
}

{
    // var nextword ="hello";
    
    // lefttext = document.getElementById("side-div left-side");
    // righttext = document.getElementById("side-div right-side");
    // centertext = document.getElementById("input-div").value;
    

// if(startindex==0){
//     console.log(startindex);  
//     input_div.placeholder = "streak"; 
// }
// else{
//     input_div.placeholder = nextword;
// }




// i = Math.floor(Math.random() * (500));
// nextword = top1000Words[i];
// document.getElementById("side-div right-side").innerText= nextword;

// startindex++;

}