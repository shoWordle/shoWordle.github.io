let word1 = [];
let word2 = [];
let word3 = [];
let word4 = [];
let word5 = [];
let word6 = [];
let word7 = [];
let dictionary = "";
let dictionaryArray = [];
let word = "";
let random = "";
let randomArray = [];
let randomWord = "";
let randomWordArray = [];
let back = document.getElementById("back");
let keyBoard = document.getElementById("keyBoard");
let progress = false;
let globalWin = false;



let xhr = new XMLHttpRequest();

xhr.open("GET", "random.txt", true)

xhr.onload = function()
{
    if(this.status == 200)
    {
        random = this.responseText;
        for(let i = 0; i < random.length; i += 5)
        {
            randomArray.push(random.slice(i, i+5));
            i+=2;
        }
        word = randomArray[Math.floor(Math.random()*randomArray.length)]
        randomWord = word.toUpperCase()
        randomWordArray  = [];
        for(let i = 0; i < word.length; i++)
        {
            randomWordArray.push(randomWord[i]);
        }

    }
    else
    {

    }
    
}
xhr.send();

let xml = new XMLHttpRequest();

xml.open("GET", "words.txt", true);

xml.onload = function()
{
    if(this.status = 200)
    {

        dictionary = this.responseText;

        for(let i = 0; i < dictionary.length; i+=5)
        {
            dictionaryArray.push(dictionary.slice(i, i + 5));
            i+=2;
        }
    }
}
xml.send();


let buttons = document.getElementsByClassName("btn-danger");
let buttonArr = Array.from(buttons);

let str0 = "HAPPY";
let str1 = "";
let str2 = "";
let str3 = "";
let str4 = "";
let str5 = "";
let str6 = "";

let true0 = true;
let true1 = false;
let true2 = false;
let true3 = false;
let true4 = false;
let true5 = false;
let true6 = false;
let true7 = false;

let wordButtons = document.getElementsByClassName("btn-light")
let wordButtonsArr = Array.from(wordButtons);

let enter = document.getElementById("enter");
let elementString = "";


buttonArr.forEach(element => 
{
    element.addEventListener("click", function(){
        let elementId = element.id;
        function appendLetter(index)
        {
            if(elementString.length < 5)
            {
                elementString += elementId;
                for(let i = index; i < elementString.length + index; i++)
                {
                    wordButtonsArr[i].innerHTML = `<b style="font-size: bold">${elementString[i - index]}</b style="font-size: bold">`

                }
            }
        }
        if(true0 == true && true1 == false)
        {
            appendLetter(0);
        }
        else if(true1 == true && true2 == false)
        {
            appendLetter(5)
        }
        else if(true2 == true && true3 == false)
        {
            appendLetter(10)
        }
        else if(true3 == true && true4 == false)
        {
            appendLetter(15)
        }
        else if(true4 == true && true5 == false)
        {
            appendLetter(20)
        }
        else if(true5 == true && true6 == false)
        {
            appendLetter(25)
        }       
    })
        
    
})
    

function enterWord(string, index)
{

    if(elementString.length == 5 && dictionary.includes(elementString.toLowerCase()))
    {
        let winner = true;
        let loser = false;
        for(let i = 0; i < elementString.length; i++)
        {
            string.push(elementString.charAt(i));
            if(randomWordArray.includes(elementString[i]))
            {
                wordButtonsArr[i + index].className = "btn-Bwarning"
                document.getElementById(elementString[i]).className = "btn-warning";
            }
            if(randomWordArray[i] == elementString[i])
            {
                wordButtonsArr[i + index].className = "btn-Bsuccess"
                document.getElementById(elementString[i]).className = "btn-success";
            }
            else if(!randomWordArray.includes(elementString[i]))
            {
                wordButtonsArr[i + index].className = "btn-Bsecondary";
                document.getElementById(elementString[i]).className = "btn-Blight";
            }
            if(wordButtonsArr[i + index].className != "btn-Bsuccess")
            {
                winner = false;
            }
        }
        if(winner == true){
            globalWin = true;
            win();
        }
        progress = true;

    }
    else if(!dictionary.includes(elementString.toLowerCase()))
    {
        for(let i = index; i < index +  5; i++)
        {
            wordButtonsArr[i].innerHTML = " ";
        }
        progress = false;
    }
    else if(elementString.length < 5)
    {
        for(let i = index; i < index +  5; i++)
        {
            wordButtonsArr[i].innerHTML = " ";
        }
        progress = false;
    }
}


enter.addEventListener("click", function()
{
    if(true0 == true && true1 == false)
    {
        enterWord(word1, 0)
        elementString = "";
        if(progress == true){
            true1 = true;
        }
    }
    else if(true1 == true && true2 == false)
    {
        enterWord(word2, 5)
        elementString = "";
        if(progress == true){
            true2 = true;
        }
    }
    else if(true2 == true && true3 == false)
    {
        enterWord(word3, 10)
        elementString = "";
        if(progress == true){
            true3 = true;
        }
    }
    else if(true3 == true && true4 == false)
    {
        enterWord(word4, 15)
        elementString = "";
        if(progress == true){
            true4 = true;
        }
    }
    else if(true4 == true && true5 == false)
    {
        enterWord(word5, 20)
        elementString = "";
        if(progress == true){
            true5 = true;
        }
    }
    else if(true5 == true && true6 == false)
    {
        enterWord(word6, 25)
        elementString = "";
        if(progress == true)
        {
            true6 = true;
            if(globalWin == false)
            {
                lose();
            }
        }
        
    } 

    
function backSpace(index)
{
    if(elementString.length <= 5)
    {
        elementString = elementString.substring(0, elementString.length-1);    
        for(let i = 0; i <= 5; i++)
        {    
            wordButtonsArr[i + index].innerHTML = `<b style="font-size: bold">${elementString[i]}</b style="font-size: bold">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + index].innerText == "undefined"){
                wordButtonsArr[i + index].innerText = " ";
            }
        }
    }
}

back.addEventListener("click", function()
{
    if(true0 == true && true1 == false)
    {
        backSpace(0)
    }
    else if(true1 == true && true2 == false)
    {
        backSpace(5)
    }
    else if(true2 == true && true3 == false)
    {
        backSpace(10)
    }
    else if(true3 == true && true4 == false)
    {
        backSpace(15)
    }
    else if(true4 == true && true5 == false)
    {
        backSpace(20)
    }
    else if(true5 == true && true6 == false)
    {
        backSpace(25)
    }

})


function showBoard()
{
    let shoWordle = localStorage.getItem("shoWordle");
    let shoWordleArr = JSON.parse(shoWordle);
    console.log(shoWordleArr);
    keyBoard.innerHTML =
    `
    <div class="d-flex justify-content-center">
    <h4 class = "h4" style="color: green;">WINS: ${shoWordleArr[6]}</h4>
    <h4 class = "h4" style="color: red;">LOSSES: ${shoWordleArr[7]}</h4>
    </div>
    <div class="d-flex justify-content-center">
    <h5 class="d-flex justify-content-center">GUESS DISTRIBUTION</h5>
    </div>
    <div class="bot">
        <div class="justify-content-center">
            <div id="guess1">
            <button type="button" class="btn btn-primary">1 Guess</button>
            <button type="button" class="btn btn-third">${shoWordleArr[0]}</button>
            </div>
            <div id="guess2">
                <button type="button" class="btn btn-primary">2 Guess</button>
                <button type="button" class="btn btn-third">${shoWordleArr[1]}</button>
            </div>
            <div id="guess3">
                <button type="button" class="btn btn-primary">3 Guess</button>
                <button type="button" class="btn btn-third">${shoWordleArr[2]}</button>
            </div>
            </div>
            <div class="j2">
                <div id="guess4">
                    <button type="button" class="btn btn-primary">4 Guess</button>
                    <button type="button" class="btn btn-third">${shoWordleArr[3]}</button>
                    </div>
                    <div id="guess5">
                        <button type="button" class="btn btn-primary">5 Guess</button>
                        <button type="button" class="btn btn-third">${shoWordleArr[4]}</button>
                    </div>
                    <div id="guess6">
                        <button type="button" class="btn btn-primary">6 Guess</button>
                        <button type="button" class="btn btn-third">${shoWordleArr[5]}</button>
                    </div>
            </div>
           
    </div>
    </div>

   
    <div class="d-flex justify-content-center">
    <button id="newGame" type="button" class="btn btn-last">NEW GAME</button>
    </div>
    `
    let newGame = document.getElementById("newGame");
    newGame.addEventListener("click", function(){
    window.location.reload();
})
}


let guess1 = 0;
let guess2 = 0;
let guess3 = 0;
let guess4 = 0;
let guess5 = 0;
let guess6 = 0;
let wins = 0;
let losses = 0;

let shoWordle = localStorage.getItem("shoWordle")


if(shoWordle == null)
{
    guess1 = 0;
    guess2 = 0;
    guess3 = 0;
    guess4 = 0;
    guess5 = 0;
    guess6 = 0;
    wins = 0;
    losses = 0;
    guessArr = [0, 0, 0, 0, 0, 0, 0, 0]
}
else
{
    let guessArr = JSON.parse(shoWordle);
    guess1 = guessArr[0];
    guess2 = guessArr[1];
    guess3 = guessArr[2];
    guess4 = guessArr[3];
    guess5 = guessArr[4];
    guess6 = guessArr[5];
    wins = guessArr[6];
    losses = guessArr[7];
}

function win()
{
    wins += 1;
    if(true1 == false)
    {
        guess1 += 1;
    }
    else if(true1 == true && true2 == false)
    {
        guess2 += 1;
    }
    else if(true2 == true && true3 == false)
    {
        guess3 += 1;
    }
    else if(true3 == true && true4 == false)
    {
        guess4 += 1;
    }
    else if(true4 == true && true5 == false)
    {
        guess5 += 1;
    }
    else if(true5 == true && true6 == false)
    {
        guess6 += 1;
    }
    guessArr = [guess1, guess2, guess3, guess4, guess5, guess6, wins, losses]
    localStorage.setItem("shoWordle", JSON.stringify(guessArr))
    showBoard();
}

function lose()
{
    losses += 1;
    guessArr = [guess1, guess2, guess3, guess4, guess5, guess6, wins, losses]
    localStorage.setItem("shoWordle", JSON.stringify(guessArr))
    showBoard();
}

