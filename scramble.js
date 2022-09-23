const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const score = document.querySelector('.score');
let initialScore = 0;
let newWords = "";
let randScrambledWords = "";

let words = [
    "newsdealer",
    "acted",
    "alert",
    "feminine",
    "sour",
    "kirk",
    "lier",
    "calm",
    "till",
    "army",
    "blog",
    "pair",
    "tarn",
    "nova",
    "meal",
    "unit",
    "until",
    "hide",
    "bite",
    "acne",
    "herd",
    "know",
    "weep",
    "eyes",
    "flux",
    "fun",
    "see",
    "roar",
    "zig",
    "she",
    "big",
    "human",
    "fatal",
    "fall",
    "sleep",
    "cycle",
    "hello",
    "super",
    "manly",
    "flows",
    "carrot",
    "banana",
    "potato",
    "crocks",
    "cab",
    "scooter",
    "bicycle",
    "copy",
    "bike",
    "book",
    "paste",
    "hairdryer",
    "dress",
    "dressing",
    "table",
    "laptop",
    "keyboard",
    "mouse",
    "time",
    "smart",
    "watch",
    "skates",
    "skating",
    "cycling",
    "driving",
    "diving",
    "swimming",
    "killing",
    "running",
    "gymnasium",
    "club",
    "english",
    "french",
    "turkish",
    "arabic",
    "indian",
    "korean",
    "cabby",
    "jeans",
    "picks",
    "font",
    "sold",
    "hope",
    "fled",
    "farm",
    "fear",
    "lower",
    "alien",
    "section",
    "education",
    "system",
    "hacking",
    "error",
    "syntax",
    "mathematics",
    "geography",
    "science",
    "biology",
    "chemistry",
    "physics",
    "artist",
    "singer",
    "actor",
    "actress",
    "waiter",
    "matter",
    "oval",
    "shape",
    "rectangle",
    "circle",
    "rounded",
    "grounded",
    "kick",
    "shot",
    "rickshaw",
    "stand",
    "cartoon",
    "character",
    "gaming",
    "code",
    "coding",
    "programming",
    "programmer",
    "hacker",
    "cyber",
    "security",
    "cafeteria",
    "lunch",
    "tiffin",
    "canteen",
    "colddrink",
    "softdrink",
    "beer",
    "pepsi",
    "coke",
    "chocolate",
    "biscuit",
    "bread",
    "almond",
    "honey"
  ];


const getRandomWords = () => {
    let randNum = Math.floor(Math.random() * words.length);
    // console.log(randNum);
    let randWords = words[randNum];
    return randWords;
}

let play = false;

const getScrambledWords = (arr) => {
    for (let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        // console.log(temp);
        let scrambledRandIndex = Math.floor(Math.random() * (i+1));
        // console.log(i);
        // console.log(scrambledRandIndex);

        /* Swapping normal indices to scrambled Random indices */
        arr[i] = arr[scrambledRandIndex];
        arr[scrambledRandIndex] = temp;
    }
    return arr;
}

btn.addEventListener('click', function(){
    score.classList.toggle('score');
    if(!play){
        // console.log("game is running");
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = getRandomWords();
        // console.log(newWords.split(""));
        randScrambledWords = getScrambledWords(newWords.split(""));
        while (randScrambledWords.join("") == newWords){
            randScrambledWords = getScrambledWords(newWords.split(""));
        }
        // console.log(randScrambledWords.join(""))
        document.getElementById('msgg').style.color = "#000000";
        msg.innerHTML = `Guess the word : ${randScrambledWords.join("")}`;
    } else {    
        // console.log("game is not running");
        let enteredWord = guess.value;
        if(enteredWord == newWords){
            play = false;
            document.getElementById('msgg').style.color = "#00ff00";
            msg.innerHTML = `You Guessed it Correct! It's ${newWords}`;
            btn.innerHTML = "Next Guess";
            guess.value = "";
            guess.classList.toggle('hidden');
            initialScore = initialScore + 100;
            score.value = `Score: ${initialScore}`;
            score.innerHTML = score.value;
            console.log("correct");
        } else {
            if(enteredWord == ""){
                alert("Please enter the word!");
            } else {
                console.log("incorrect");
                msg.innerHTML = `Oops! The word was ${newWords}`;
                initialScore = 0
                score.value = `Score: ${initialScore}`;
                score.innerHTML = score.value;
                document.getElementById('msgg').style.color = "#FFA500"
                play = false;
                btn.innerHTML = "Guess Again?";
                guess.value = "";
                guess.classList.toggle('hidden');
            }
        }
    }
})
