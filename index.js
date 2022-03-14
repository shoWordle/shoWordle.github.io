let word1 = [];
let word2 = [];
let word3 = [];
let word4 = [];
let word5 = [];
let word6 = [];

let dictionary = "";
let dictionaryArray = [];
let word = "";
let randomWord = "";
let randomWordArray = [];
let back = document.getElementById("back");
let progress = false;

const xhr = new XMLHttpRequest();

xhr.open("GET", "words.txt", true);

xhr.onload = function()
{
    if(this.status = 200)
    {

        dictionary = this.responseText;

        for(let i = 0; i < dictionary.length; i+=5)
        {
            dictionaryArray.push(dictionary.slice(i, i + 5));
            i+=2;
        }


    word = dictionaryArray[Math.floor(Math.random()*dictionaryArray.length)]
    randomWord = word.toUpperCase();
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


let buttons = document.getElementsByClassName("btn btn-danger m-1");
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

let wordButtons = document.getElementsByClassName("btn btn-light m-1")
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
        for(let i = 0; i < elementString.length; i++)
        {
            string.push(elementString.charAt(i));
            if(randomWordArray.includes(elementString[i]))
            {
                wordButtonsArr[i + index].className = "btn btn-warning m-1"
                document.getElementById(elementString[i]).className = "btn btn-warning m-1";
            }
            if(randomWordArray[i] == elementString[i])
            {
                wordButtonsArr[i + index].className = "btn btn-success m-1"
                document.getElementById(elementString[i]).className = "btn btn-success m-1";
            }
            else if(!randomWordArray.includes(elementString[i]))
            {
                wordButtonsArr[i + index].className = "btn btn-secondary m-1";
                document.getElementById(elementString[i]).className = "btn btn-secondary m-1";
            }
        }
        progress = true;
    }
    else if(!dictionary.includes(elementString.toLowerCase()))
    {
        for(let i = index; i < index +  5; i++){
            wordButtonsArr[i].innerHTML = "";
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
        if(progress == true){
            true6 = true;
        }
    }   
    if(true6 == true)
    {
        setTimeout(() => {

            document.body.className = "bg-info"
            document.body.innerHTML = `
            <div class="container card my-4 p-4 bg-light">
            <h1>Sorry, You lost. The word was:</h1>
            <h2>${randomWord}</h2>
            </div>
            `
            setTimeout(() => {
                window.location.reload();
            }, 3000); 
        }, 2000);
        
    }

    if(str1 == randomWord || str2 == randomWord || str3 == randomWord || str4 == randomWord || str5 == randomWord || str6 == randomWord)
    {
        setTimeout(() => {
            let win = document.getElementById("win");
            document.body.className = "bg-info"
            document.body.innerHTML = `
            <div class="container card my-4 p-4 bg-light">
            <h1>Congratulations!! You Win</h1>
            </div>
            `
            setTimeout(() => {
                window.location.reload();
            }, 3000); 
        }, 2000);
        
    }
})



function backSpace(index)
{
    if(elementString.length <= 5){
        elementString = elementString.substring(0, elementString.length-1);    
        for(let i = 0; i <= 5; i++){    
            wordButtonsArr[i + index].innerHTML = `<b style="font-size: bold">${elementString[i]}</b style="font-size: bold">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + index].innerText == "undefined"){
                wordButtonsArr[i + index].innerText = "";
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
