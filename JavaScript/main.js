let letters = "abcdefghijklmnopqrstuvwxyz";

let lettesArrary = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettesArrary.forEach(letter =>{

    let span = document.createElement("span");

    let theletter = document.createTextNode(letter);

    span.appendChild(theletter);

    span.className = "letter-box";

    lettersContainer.appendChild(span);
});

// ===========================================================================//

const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["nancy emad"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allkeys = Object.keys(words);

let RandomPropNumber = Math.floor(Math.random() * allkeys.length);

let RandomPropName = allkeys[RandomPropNumber];

let RandomPropValue = words[RandomPropName];

let RandomNumber = Math.floor(Math.random() * RandomPropValue.length);

let RandomName = RandomPropValue[RandomNumber];

document.querySelector(".game-info .category span").innerHTML = RandomPropName ;

// ===========================================================================//

let LettersGuessContainer = document.querySelector(".guess-letters");

let NameArray = Array.from(RandomName);

NameArray.forEach(letter =>{

    let emptyspan = document.createElement("span");

    if(letter === ' '){

        emptyspan.className = 'with-space';
    }
    LettersGuessContainer.appendChild(emptyspan);
});

// ====================================OK=======================================//
let guessspan = document.querySelectorAll('.guess-letters span')

let wrong = 0;

let thedraw = document.querySelector('.hangman-draw')

document.addEventListener("click", e =>{

    let thestatus = false;

    if(e.target.className === 'letter-box'){

        e.target.classList.add("clicked");

        let theclickedletter = e.target.innerHTML.toLowerCase();

        let TheChoosenWord = Array.from(RandomName.toLowerCase());// the choosen word
        
        // console.log(theclickedletter)     //the choosen letter
    
        TheChoosenWord.forEach((wordletter , wordindex) =>{

            if(theclickedletter == wordletter){

                thestatus = true;

              
            
                guessspan.forEach((span , spanIndex) =>{

                    if(wordindex == spanIndex){

                        span.innerHTML = wordletter;
                    }
                })

            }
             
        });
        // Outside Loop
        if(thestatus !==true){

            wrong++;

            thedraw.classList.add(`wrong-${wrong}`)

            // document.getElementById("wrong").play();
            if(wrong === 8){

                EndGame();
                lettersContainer.classList.add("finshed");
            }

        }else{

            //  document.getElementById("success").play();
             

        }
    }

});
function EndGame(){

    let div = document.createElement("div");

    div.innerHTML = `<span class = "game-over-title">Game Over </span><br><span> The Word is <span class = "theword">${RandomName}</span></span>`;
    
    div.className = "gameover";

    document.body.appendChild(div);

}
function success(){
        let div = document.createElement("div");

    div.innerHTML = `<span class = "game-over-title">Game Over </span><br><span> The Word is <span class = "theword">${RandomName}</span></span>`;
    
    div.className = "gameover";

    document.body.appendChild(div);
}