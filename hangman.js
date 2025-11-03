var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
// //test word list
// var POSSIBLE_WORDS = ["cat"];
var guess_count = MAX_GUESSES;
var word = "";
var guesses = "";
var MAX_GUESSES = 6;

function newGame() {
    //revert to default display style
    inputArea.style.display = "";
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    guesses = "";
    guess_count = MAX_GUESSES;
    updatePage();
}
function guessLetter() {

    var input = document.getElementById("guess");
    var letter = input.value;
    //condition return -1 if letter doesn't exist in word
    //if character guessed is not in the word and was not guesses before
    // add to hangman
    if (word.indexOf(letter) < 0 && guesses.indexOf(letter) < 0) {
        guess_count--;
        
    }
    //if the character guessed was not guess before
    //include in guessed list, don't add duplicates
    if (guesses.indexOf(letter) < 0){
        guesses += letter;
    }
    // guesses += letter;

    updatePage();
    input.value = "";
}

function updatePage() {
    var clueString = "";

    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }

    }
    //update clue string
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //update the guesses fom thr user
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    //update the image
    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";

    //input area
    var inputArea = document.getElementById("inputArea");
    //show when you lose or win
    if (clueString.indexOf("_") < 0){
        guessArea.innerHTML = "You Win!";
        inputArea.style.display = "none";
    }
    if (guess_count <= 0){
        guessArea.innerHTML = "You Lose!";
        inputArea.style.display = "none";
    }
    
}