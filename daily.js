let word1 = [];
let word2 = [];
let word3 = [];
let word4 = [];
let word5 = [];
let word6 = [];
let word7 = [];
let guessMsg = "";
let dictionary = "";
let dictionaryArray = [];
let word = "";
let random = "";
let randomArray = [];
let randomWord = "";
let randomWordArray = [];

const date = new Date();
const day = date.getDay();
const date_num = date.getDate();
const month = date.getMonth();
const year = date.getFullYear() - 2000;
const today = `${date_num}-${month}-${year}`;
let todayDate = "";
let localToday = localStorage.getItem("shoWordleDate");
let localTodayObj = JSON.parse(localToday);
if(localToday == null)
{
    todayDate = today;
    localStorage.setItem("shoWordleDate", JSON.stringify(todayDate));  
}
else
{
    todayDate = localTodayObj;
    if(todayDate != today)
    {
        localStorage.removeItem("shoWordleDaily");
        localStorage.setItem("shoWordleDate", JSON.stringify(today));
    }
}

let board = document.getElementById("board");
let keyBoard = document.getElementById("keyBoard");
let progress = false;
let globalWin = false;
let daily = document.getElementById("daily");
let practice = document.getElementById("practice");
daily.style.backgroundColor = "rgb(214, 225, 225)";
daily.style.color = "rgb(63, 62, 61)";
practice.style.backgroundColor = "rgb(63, 62, 61)";
practice.style.color = "rgb(214, 225, 225)";
practice.addEventListener("click", function(){
    location.href = "/practice.html"
})


let true0 = true;
let true1 = false;
let true2 = false;
let true3 = false;
let true4 = false;
let true5 = false;
let true6 = false;
let true7 = false;
let showBoardBool = false;

let shoObj = {};
sureObj = localStorage.getItem("shoWordleDaily");
shoDaily = JSON.parse(sureObj);
if(sureObj == null)
{
    shoObj["boardHtml"] = board.innerHTML;
    shoObj["keyBoardHtml"] = keyBoard.innerHTML;
    shoObj["true1"] = false;
    shoObj["true2"] = false;
    shoObj["true3"] = false;
    shoObj["true4"] = false;
    shoObj["true5"] = false;
    shoObj["true6"] = false;
    shoObj["true7"] = false;
    shoObj["progress"] = false;
    shoObj["guessMsg"] = guessMsg;
    shoObj["randomWord"] = randomWord;
    shoObj["showBoardBool"] = showBoardBool;
    localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
}
else
{
    board.innerHTML = shoDaily["boardHtml"];
    keyBoard.innerHTML = shoDaily["keyBoardHtml"];
    true1 = shoDaily["true1"];
    true2 = shoDaily["true2"];
    true3 = shoDaily["true3"];
    true4 = shoDaily["true4"];
    true5 = shoDaily["true5"];
    true6 = shoDaily["true6"];
    true7 = shoDaily["true7"];
    progress = shoDaily["progress"];
    guessMsg = shoDaily["guessMsg"];
    randomWord = shoDaily["randomWord"];
    showBoardBool = shoDaily["showBoardBool"];
    shoObj["boardHtml"] = shoDaily["boardHtml"];
    shoObj["keyBoardHtml"] = shoDaily["keyBoardHtml"];
    shoObj["true1"] = shoDaily["true1"];
    shoObj["true2"] = shoDaily["true2"];
    shoObj["true3"] = shoDaily["true3"];
    shoObj["true4"] = shoDaily["true4"];
    shoObj["true5"] = shoDaily["true5"];
    shoObj["true6"] = shoDaily["true6"];;
    shoObj["true7"] = shoDaily["true7"];
    shoObj["progress"] = shoDaily["progress"];
    shoObj["guessMsg"] = shoDaily["guessMsg"];
    shoObj["randomWord"] = shoDaily["randomWord"];
    shoObj["showBoardBool"] = shoDaily["shoBoardBool"];
}

if(showBoardBool == true)
{
    showBoard();
}


let xhr = new XMLHttpRequest();

xhr.open("GET", "haha.txt", true)

xhr.onload = function()
{
    if(this.status == 200)
    {
        random = this.responseText;
        let dictArray = random.split('"');
        for(let i = 1; i < random.length; i += 2)
        {
            randomArray.push(dictArray[i]);
        }
        word = randomArray[(day * day) + date_num * month - year + 100]
        randomWord = word.toUpperCase();
        shoObj["randomWord"] = randomWord;
        localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
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


let buttons = keyBoard.getElementsByTagName("button");
let buttonArr = Array.from(buttons);

let wordButtons = board.getElementsByTagName("button");
let wordButtonsArr = Array.from(wordButtons);
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

        if(winner == true)
        {
            globalWin = true;
            win();
        }
        progress = true;
        shoObj["progress"] = true;
        shoObj["boardHtml"] =  board.innerHTML;
        shoObj["keyBoardHtml"] = keyBoard.innerHTML;
        localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));

    }
    else if(!dictionary.includes(elementString.toLowerCase()))
    {
        for(let i = index; i < index +  5; i++)
        {
            wordButtonsArr[i].innerHTML = " ";
        }
        progress = false;
        shoObj["progress"] = false;
        localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));


    }
    else if(elementString.length < 5)
    {
        for(let i = index; i < index +  5; i++)
        {
            wordButtonsArr[i].innerHTML = " ";
        }
        progress = false;
        shoObj["progress"] = false;
        console.log(shoObj);
        localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
        console.log(localStorage["shoWordleDaily"]);

    }
}

let enter = document.getElementById("enter");
if(enter != null)
{
    enter.addEventListener("click", function()
{
    if(true0 == true && true1 == false)
    {
        enterWord(word1, 0)
        elementString = "";
        if(progress == true){
            true1 = true;
            shoObj["true1"] = true;
            progress = false;
            shoObj["progress"] = false;
        }
    }
    else if(true1 == true && true2 == false)
    {
        enterWord(word2, 5)
        elementString = "";
        if(progress == true){
            true2 = true;
            shoObj["true2"] = true;
            progress = false;
            shoObj["progress"] = false;
        }
    }
    else if(true2 == true && true3 == false)
    {
        enterWord(word3, 10)
        elementString = "";
        if(progress == true){
            true3 = true;
            shoObj["true3"] = true;
            progress = false;
            shoObj["progress"] = false;
        }
    }
    else if(true3 == true && true4 == false)
    {
        enterWord(word4, 15)
        elementString = "";
        if(progress == true){
            true4 = true;
            shoObj["true4"] = true;
            progress = false;
            shoObj["progress"] = false;
        }
    }
    else if(true4 == true && true5 == false)
    {
        enterWord(word5, 20)
        elementString = "";
        if(progress == true){
            true5 = true;
            shoObj["true5"] = true;
            progress = false;
            shoObj["progress"] = false;
        }
    }
    else if(true5 == true && true6 == false)
    {
        enterWord(word6, 25)
        elementString = "";
        if(progress == true)
        {
            true6 = true;
            shoObj["true6"] = true;
            if(globalWin == false)
            {
                lose();
            }
        }
    } 
    localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
})

let back = document.getElementById("back");

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

}
else if(enter == null)
{
    showBoard();    
}




function showBoard()
{
    let shoWordle = localStorage.getItem("shoWordle");
    let shoWordleArr = JSON.parse(shoWordle);
    shoObj["boardHtml"] = board.innerHTML;
    shoObj["keyBoardHtml"] = keyBoard.innerHTML;
    shoObj["showBoardBool"] = true;
    localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
    function shareCard()
    {
        board.innerHTML = shoObj["boardHtml"];
        keyBoard.innerHTML =
        `
        <div class="d-flex justify-content-center">
        <h4 class = "h4" style="color: green;">WINS: ${shoWordleArr[6]}</h4>
        <h4 class = "h4" style="color: red;">LOSSES: ${shoWordleArr[7]}</h4>
        <h4 class = "h4" style="color: grey;">WORD:  ${randomWord}</h4>
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
        <div class="d-flex justify-content-center">
        <div id="share" type="button" class="btn btn-last">SHARE</div>
        </div>
        </div>
        `
        let share = document.getElementById("share");
        share.addEventListener("click", function(){
            let wordsArr = Array.from(wordButtons);
            wordsArr.forEach(function(element){
                element.innerText = "";
            })
            keyBoard.innerHTML = 
            `
            <div class="d-flex justify-content-center">
            <h4 class = "h4" style="color: grey;">${guessMsg}</h4>
            </div>
            <div class="d-flex justify-content-center">
            <h4 class = "h4" style="color: grey;">Take a screenshot quickly!</h4>
            </div>
    
            `;
            setTimeout(() => {
                shareCard();
            }, 5000);
        })
    }
    shareCard();   
}


let guess1 = 0;
let guess2 = 0;
let guess3 = 0;
let guess4 = 0;
let guess5 = 0;
let guess6 = 0;
let wins = 0;
let losses = 0;
let guessArr = [];
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
    guessArr= [0, 0, 0, 0, 0, 0, 0, 0]
    localStorage.setItem("shoWordle", JSON.stringify(guessArr));
}
else
{
    guessArr = JSON.parse(shoWordle);
    guess1 = guessArr[0];
    guess2 = guessArr[1];
    guess3 = guessArr[2];
    guess4 = guessArr[3];
    guess5 = guessArr[4];
    guess6 = guessArr[5];
    wins = guessArr[6];
    losses = guessArr[7];
    localStorage.setItem("shoWordle", JSON.stringify(guessArr));
}

function win()
{
    wins += 1;
    if(true1 == false)
    {
        guess1 += 1;
        guessMsg = "SHOWORDLE 1/6";
        shoObj["guessMsg"] = guessMsg;
    }
    else if(true1 == true && true2 == false)
    {
        guess2 += 1;
        guessMsg = "SHOWORDLE 2/6"
        shoObj["guessMsg"] = guessMsg;
    }
    else if(true2 == true && true3 == false)
    {
        guess3 += 1;
        guessMsg = "SHOWORDLE 3/6"
        shoObj["guessMsg"] = guessMsg;
    }
    else if(true3 == true && true4 == false)
    {
        guess4 += 1;
        guessMsg = "SHOWORDLE 4/6"
        shoObj["guessMsg"] = guessMsg;
    }
    else if(true4 == true && true5 == false)
    {
        guess5 += 1;
        guessMsg = "SHOWORDLE 5/6"
        shoObj["guessMsg"] = guessMsg;
    }
    else if(true5 == true && true6 == false)
    {
        guess6 += 1;
        guessMsg = "SHOWORDLE 6/6"
        shoObj["guessMsg"] = guessMsg;
    }
    guessArr = [guess1, guess2, guess3, guess4, guess5, guess6, wins, losses];
    localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
    localStorage.setItem("shoWordle", JSON.stringify(guessArr));
    showBoard();
}

function lose()
{
    losses += 1;
    guessArr = [guess1, guess2, guess3, guess4, guess5, guess6, wins, losses];
    localStorage.setItem("shoWordle", JSON.stringify(guessArr));
    guessMsg = "SHOWORDLE X/6";
    shoObj["guessMsg"] = guessMsg;
    localStorage.setItem("shoWordleDaily", JSON.stringify(shoObj));
    showBoard();
}

