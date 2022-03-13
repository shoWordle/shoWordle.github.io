console.log("This is Shos Wordle");


let firstWord = [];
let secondWord = [];
let thirdWord = [];
let fourthWord = [];
let fifthWord = [];
let sixthWord = [];


const xhr = new XMLHttpRequest();

xhr.open("GET", "words.txt", true);

xhr.onload = function(){
    if(this.status = 200){
        console.log("I was requested");

let dict = this.responseText;
let dictArray = [];

for(let i = 0; i < dict.length; i+=5){
    dictArray.push(dict.slice(i, i + 5));
    i+=2;
}

let word = dictArray[Math.floor(Math.random()*dictArray.length)]
let newWord = word.toUpperCase();
let wordArr  = [];
for(let i = 0; i < word.length; i++){
    wordArr.push(newWord[i]);
}


let rows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow];

let buttons = document.getElementsByClassName("btn btn-danger m-1");


let buttonArr = Array.from(buttons);


let str1 = "";
let str2 = "";
let str3 = "";
let str4 = "";
let str5 = "";
let str6 = "";

let true1 = false;
let true2 = false;
let true3 = false;
let true4 = false;
let true5 = false;
let true6 = false;



let wordButtons = document.getElementsByClassName("btn btn-light m-1")
let wordButtonsArr = Array.from(wordButtons);


let enter = document.getElementById("enter");

let enterBoolean = false;
let backBoolean = false;



buttonArr.forEach(element => {
    element.addEventListener("click", function(){
        let elementId = element.id;
        if(str1.length < 5 ){
        str1 += elementId;    
        console.log(str1);
        for(let i = 0; i < str1.length; i++){
            wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str1[i]}</b style="font-size: 20px">`;
        }
        }
        else if(str1.length == 5 && str2.length < 5 && true1 == true){
            str2 += elementId;    
            console.log(str2);
            for(let i = 5; i < str2.length + 5; i++){
                wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str2[i - 5]}</b style="font-size: 20px">`;
            }
        }
        else if(str2.length == 5 && str3.length < 5 && true2 == true){
            str3 += elementId;    
            console.log(str3);
            for(let i = 10; i < str3.length + 10; i++){
                wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str3[i - 10]}</b style="font-size: 20px">`;
            }
        }
        else if(str3.length == 5 && str4.length < 5 && true3 == true){
            str4 += elementId;    
            console.log(str4);
            for(let i = 15; i < str4.length + 15; i++){
                wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str4[i - 15]}</b style="font-size: 20px">`;
            }
        }
        else if(str4.length == 5 && str5.length < 5 && true4 == true){
            str5 += elementId;    
            console.log(str5);
            for(let i = 20; i < str5.length + 20; i++){
                wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str5[i - 20]}</b style="font-size: 20px">`;
            }
        }
        else if(str5.length == 5 && str6.length < 5 && true5 == true){
            str6 += elementId;    
            console.log(str6);
            for(let i = 25; i < str6.length + 25; i++){
                wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str6[i - 25]}</b style="font-size: 20px">`;
            }
        }
        
    })
});





enter.addEventListener("click", function(){
    if(str1.length == 5 && dict.includes(str1.toLowerCase()) && true1 == false){
        for(let i = 0; i < str1.length; i++){
            firstWord.push(str1.charAt(i));
            if(wordArr.includes(str1[i])){
                wordButtonsArr[i].className = "btn btn-warning m-1"
            }
            if(wordArr[i] == str1[i]){
                wordButtonsArr[i].className = "btn btn-success m-1"
            }
            else if(!wordArr.includes(str1[i])){
                wordButtonsArr[i].className = "btn btn-secondary m-1";
                document.getElementById(str1[i]).className = "btn btn-secondary m-1";
            }
        }
        true1 = true;
    }
    else if(str1.length == 5 && !dict.includes(str1.toLowerCase())){
        str1 = "";
        for(let i = 0; i < 5; i++){
            wordButtonsArr[i].innerHTML = "";
        }
    }

    if(str2.length == 5 && dict.includes(str2.toLowerCase()) && true1 == true && true2 == false){
        for(let i = 0; i < str2.length; i++){
            secondWord.push(str2.charAt(i));
            if(wordArr.includes(str2[i])){
                wordButtonsArr[i + 5].className = "btn btn-warning m-1"
            }
            if(wordArr[i] == str2[i]){
                wordButtonsArr[i + 5].className = "btn btn-success m-1"
            }
            else if(!wordArr.includes(str2[i])){

                wordButtonsArr[i + 5].className = "btn btn-secondary m-1";
                document.getElementById(str2[i]).className = "btn btn-secondary m-1";
            }
            }
        
        true2 = true;
    }
    else if(str2.length == 5 && !dict.includes(str2.toLowerCase())){
        str2 = "";
        for(let i = 5; i < 10; i++){
            wordButtonsArr[i].innerHTML = "";
        }
    }

    if(str3.length == 5 && dict.includes(str3.toLowerCase()) && true2 == true && true3 == false){
        for(let i = 0; i < str3.length; i++){
            thirdWord.push(str3.charAt(i));
            if(wordArr.includes(str3[i])){
                wordButtonsArr[i + 10].className = "btn btn-warning m-1"
            }
            if(wordArr[i] == str3[i]){

                wordButtonsArr[i + 10].className = "btn btn-success m-1"
            }
            else if(!wordArr.includes(str3[i])){

                wordButtonsArr[i + 10].className = "btn btn-secondary m-1";
                document.getElementById(str3[i]).className = "btn btn-secondary m-1";
            }
        }

        true3 = true;
    }
    else if (str3.length == 5 && !dict.includes(str3.toLowerCase())){

        str3 = "";
        for(let i = 10; i < 15; i++){
            wordButtonsArr[i].innerHTML = "";
        }

    }

    if(str4.length == 5 && dict.includes(str4.toLowerCase()) && true3 == true && true4 == false){

        for(let i = 0; i < str4.length; i++){
            fourthWord.push(str4.charAt(i));
            if(wordArr.includes(str4[i])){

                wordButtonsArr[i + 15].className = "btn btn-warning m-1"
            }
            if(wordArr[i] == str4[i]){

                wordButtonsArr[i + 15].className = "btn btn-success m-1"
            }
            else if(!wordArr.includes(str4[i])){

                wordButtonsArr[i + 15].className = "btn btn-secondary m-1";
                document.getElementById(str4[i]).className = "btn btn-secondary m-1";
            }
           
        }

        true4 = true;
    }
    else if (str4.length == 5 && !dict.includes(str4.toLowerCase())){

        str4 = "";
        for(let i = 15; i < 20; i++){
            wordButtonsArr[i].innerHTML = "";
        }

    }

    if(str5.length == 5 && dict.includes(str5.toLowerCase()) && true4 == true && true5 == false){

        for(let i = 0; i < str5.length; i++){
            fifthWord.push(str5.charAt(i));
            if(wordArr.includes(str5[i])){

                wordButtonsArr[i + 20].className = "btn btn-warning m-1"
            }
            if(wordArr[i] == str5[i]){

                wordButtonsArr[i + 20].className = "btn btn-success m-1"
            }
            else if(!wordArr.includes(str5[i])){

                wordButtonsArr[i + 20].className = "btn btn-secondary m-1";
                document.getElementById(str5[i]).className = "btn btn-secondary m-1";
            }
           
        }

        true5 = true;
    }
    else if((str5.length == 5 && !dict.includes(str5.toLowerCase()))){

        str5 = "";
        for(let i = 20; i < 25; i++){
            wordButtonsArr[i].innerHTML = "";
        }

    }

    if(str6.length == 5 && dict.includes(str6.toLowerCase()) && true5 == true && true6 == false){

        for(let i = 0; i < str6.length; i++){
            sixthWord.push(str6.charAt(i));
            if(wordArr.includes(str6[i])){

                wordButtonsArr[i + 25].className = "btn btn-warning m-1"
            }
            if(wordArr[i] == str6[i]){

                wordButtonsArr[i + 25].className = "btn btn-success m-1"
            }
            else if(!wordArr.includes(str6[i])){

                wordButtonsArr[i + 25].className = "btn btn-secondary m-1";
                document.getElementById(str6[i]).className = "btn btn-secondary m-1";
            }
           
        }

        true6 = true;
    }
    else if((str6.length == 5 && !dict.includes(str6.toLowerCase()))){

        str6 = "";
        for(let i = 25; i < 30; i++){
            wordButtonsArr[i].innerHTML = "";
        }

    }
    
    if(true6 == true){
        setTimeout(() => {
            let win = document.getElementById("win");
            document.body.className = "bg-info"
            document.body.innerHTML = `
            <div class="container card my-4 p-4 bg-light">
            <h1>Sorry, You lost. The word was:</h1>
            <h2>${newWord}</h2>
            </div>
            `
            setTimeout(() => {
                window.location.reload();
            }, 5000); 
        }, 2000);
        
    }

    if(str1 == newWord || str2 == newWord || str3 == newWord || str4 == newWord || str5 == newWord || str6 == newWord){
        setTimeout(() => {
            let win = document.getElementById("win");
            document.body.className = "bg-info"
            document.body.innerHTML = `
            <div class="container card my-4 p-4 bg-light">
            <h1>Congratulations!! You Win. The word was:</h1>
            <h3>${newWord}</h3>
            </div>
            `
            setTimeout(() => {
                window.location.reload();
            }, 5000); 
        }, 2000);
        
    }
})


let back = document.getElementById("back");
back.addEventListener("click", function(){
    if(str1.length <= 5 && true1 == false){
        str1 = str1.substring(0, str1.length-1);
     
        for(let i = 0; i <= 5; i++){    

            wordButtonsArr[i].innerHTML = `<b style="font-size: 20px">${str1[i]}</b style="font-size: 20px">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i].innerText == "undefined"){
                wordButtonsArr[i].innerText = "";
            }
        }
    }

    else if(str2.length <= 5 && true1 == true && true2 == false){
        str2 = str2.substring(0, str2.length-1);

        for(let i = 0; i <= 5; i++){    

            wordButtonsArr[i + 5].innerHTML = `<b style="font-size: 20px">${str2[i]}</b style="font-size: 20px">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + 5].innerText == "undefined"){
                wordButtonsArr[i + 5].innerText = "";
            }
        }
    }

    else if(str3.length <= 5 && true2 == true && true3 == false){
        str3 = str3.substring(0, str3.length-1);
  
        for(let i = 0; i <= 5; i++){    
            
            wordButtonsArr[i + 10].innerHTML = `<b style="font-size: 20px">${str3[i]}</b style="font-size: 20px">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + 10].innerText == "undefined"){
                wordButtonsArr[i + 10].innerText = "";
            }
        }
    }

    else if(str4.length <= 5 && true3 == true && true4 == false){
        str4 = str4.substring(0, str4.length-1);
         
        for(let i = 0; i <= 5; i++){    

            wordButtonsArr[i + 15].innerHTML = `<b style="font-size: 20px">${str4[i]}</b style="font-size: 20px">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + 15].innerText == "undefined"){
                wordButtonsArr[i + 15].innerText = "";
            }
        }
    }

    if(str5.length <= 5 && true4 == true && true5 == false){
        str5 = str5.substring(0, str5.length-1);
        
        for(let i = 0; i <= 5; i++){    

            wordButtonsArr[i + 20].innerHTML = `<b style="font-size: 20px">${str5[i]}</b style="font-size: 20px">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + 20].innerText == "undefined"){
                wordButtonsArr[i + 20].innerText = "";
            }
        }
    }

    if(str6.length <= 5 && true5 == true && true6 == false){
        str6 = str6.substring(0, str6.length-1);
        
        for(let i = 0; i <= 5; i++){    

            wordButtonsArr[i + 25].innerHTML = `<b style="font-size: 20px">${str6[i]}</b style="font-size: 20px">`;
        }
        for(let i = 0; i <= 5; i++){
            if(wordButtonsArr[i + 25].innerText == "undefined"){
                wordButtonsArr[i + 25].innerText = "";
            }
        }
    }
})












}
    else{
        console.error("Some error occurred")
    }
}



xhr.send();;







