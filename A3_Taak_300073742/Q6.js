var go = document.getElementById("go");
go.addEventListener("click", start, false);

var completed = document.getElementById("completed");
var out = document.getElementById("out");

var para = document.createElement("p");
var node = document.createTextNode(str);
para.appendChild(node);
out.appendChild(para);



function start() {

    var eng = document.getElementById("English").value;
    var myArray = eng.split(" ");


    for (i = 0; i < myArray.length; i++) {
        printLatinWord(myArray[i]);
    }


    out.innerHTML += "<br>";
    completed.value += eng
    completed.value += "\n";
}



function printLatinWord(englishWord) {

    var pl = "";
    var current = englishWord;

    var firstLetter = englishWord.substring(0, 1);

    englishWord = englishWord.substring(1, englishWord.length);
    pl += englishWord + firstLetter + "ay" + " ";

    out.innerHTML += pl;
    console.log(pl);
}