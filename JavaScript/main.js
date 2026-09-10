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
  people: [
  "adel imam",
  "mohamed salah",
  "amr diab",
  "tamer hosny",
  "mohamed henedy",
  "ahmed helmy",
  "karim abdel aziz",
  "ahmed el saka",
  "khaled el sawy",
  "yousra",
  "menna shalaby",
  "sherihan",
  "sherine",
  "angham",
  "ruby",
  "dina el sherbiny",
  "mina el shalaby",
  "nour el sherif",
  "omar el sherif",
  "ahmed ezz",
  "mohamed ramadan",
  "hassan el radad",
  "mai ezz el din",
  "donia samir ghanem",
  "ragaa al gidawe",
  "khaled el nabawy",
  "youssef el sherif",
  "asala",
  "amr youssef",
  "ahmed mekky",
  "mohamed saad",
  "ashraf abdel baki",
  "hany ramzy",
  "mostafa shaban",
  "eyad nassar"
],
countries: [
  "egypt",
  "united states",
  "united kingdom",
  "canada",
  "australia",
  "germany",
  "france",
  "italy",
  "spain",
  "brazil",
  "argentina",
  "mexico",
  "japan",
  "china",
  "south korea",
  "india",
  "russia",
  "turkey",
  "saudi arabia",
  "united arab emirates",
  "qatar",
  "palestine",
  "israel",
  "greece",
  "switzerland",
  "netherlands",
  "sweden",
  "norway",
  "south africa",
  "thailand"
],
animals: ["lion", "tiger", "elephant", "giraffe", "monkey", "horse", "dog", "cat","wolf", "rabbit", "dolphin", "shark", "eagle"]
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
                    if (thestatus === true) {
            checkWin();
            }

        // Outside Loop
        if(thestatus !==true){

            wrong++;

            thedraw.classList.add(`wrong-${wrong}`)

            // document.getElementById("wrong").play();
            if(wrong === 10){

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

div.innerHTML = `<span class = "game-over-title">Game Over </span><br><span> The Word is <span class = "theword">${RandomName}</span></span><br><button onclick="location.reload()">New Game</button>`;

div.className = "gameover";

document.body.appendChild(div);
}
function checkWin() {
  let allFilled = true;

  guessspan.forEach(span => {
    if (!span.classList.contains('with-space') && span.innerHTML.trim() === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    WinGame();
    lettersContainer.classList.add("finshed");
  }
}

function WinGame(){
  let div = document.createElement("div");
  div.innerHTML = `<span class = "game-over-title win-title">Congratulations! </span><br><span> The Word is <span class = "theword2">${RandomName}</span></span><br><button class = "btn2" onclick="location.reload()">New Game</button>`;
  div.className = "gameover";
  document.body.appendChild(div);
}