var x = 0;
var y = 0;

var arr;

var zero = document.getElementById('0');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var ten = document.getElementById('10');
var eleven = document.getElementById('11');
var tweleve = document.getElementById('12');
var thirteen = document.getElementById('13');
var fourteen = document.getElementById('14');
var fifteen = document.getElementById('15');

zero.addEventListener("click", clickZero, false);
one.addEventListener("click", clickOne, false);
two.addEventListener("click", clickTwo, false);
three.addEventListener("click", clickThree, false);
four.addEventListener("click", clickFour, false);
five.addEventListener("click", clickFive, false);
six.addEventListener("click", clickSix, false);
seven.addEventListener("click", clickSeven, false);
eight.addEventListener("click", clickEight, false);
nine.addEventListener("click", clickNine, false);
ten.addEventListener("click", clickTen, false);
eleven.addEventListener("click", clickEleven, false);
tweleve.addEventListener("click", clickTwelve, false);
thirteen.addEventListener("click", clickThirteen, false);
fourteen.addEventListener("click", clickFourteen, false);
fifteen.addEventListener("click", clickFifteen, false);

document.addEventListener("load", start, false);


function start() {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle(arr);
    arr.unshift('');
    console.log(arr);

    for (var i = 0; i < 16; i++) {
        document.getElementById(i).innerHTML = arr[i];
    }


}


function clickZero(e) {//(0,0)
    if (x == 1 && y == 0) {//Empty Tile is to the right
        console.log(x, y);
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
        console.log(x, y);
    }

    else if (x == 0 && y == 1) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }

}

function clickOne(e) {//(1,0)
    if (x == 0 && y == 0) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 2 && y == 0) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;

    }
    else if (x == 1 && y == 1) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickTwo(e) {//(2,0)
    if (x == 1 && y == 0) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 3 && y == 0) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 2 && y == 1) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickThree(e) {//(3,0)
    if (x == 2 && y == 0) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }

    else if (x == 3 && y == 1) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickFour(e) { //(0,1)
    if (x == 0 && y == 0) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 1 && y == 1) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 0 && y == 2) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickFive(e) {//(1,1)
    if (x == 0 && y == 1) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 1 && y == 0) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 2 && y == 1) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 1 && y == 2) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickSix(e) {//(2,1)
    if (x == 1 && y == 1) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 2 && y == 0) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 3 && y == 1) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 2 && y == 2) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickSeven(e) {//(3,1)
    if (x == 2 && y == 1) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 3 && y == 0) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 3 && y == 2) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickEight(e) {//(0,2)
    if (x == 0 && y == 1) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 1 && y == 2) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 0 && y == 3) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickNine(e) {//(1,2)
    if (x == 0 && y == 2) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 1 && y == 1) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 2 && y == 2) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 1 && y == 3) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickTen(e) {//(2,2)
    if (x == 1 && y == 2) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 2 && y == 1) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 3 && y == 2) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else if (x == 2 && y == 3) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickEleven(e) {//(3,2)
    if (x == 2 && y == 2) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 3 && y == 1) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 3 && y == 3) {//Empty Tile is underneath
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickTwelve(e) {//(0,3)
    if (x == 1 && y == 3) {//Empty Tile is to the right
        console.log(x, y);
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
        console.log(x, y);
    }

    else if (x == 0 && y == 2) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }

}

function clickThirteen(e) {//(1,3)
    if (x == 0 && y == 3) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 1 && y == 2) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 2 && y == 3) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickFourteen(e) {//(2,3)
    if (x == 1 && y == 3) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 2 && y == 2) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else if (x == 3 && y == 3) {//Empty Tile is to the right
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        --x;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}

function clickFifteen(e) {//(3,3)
    if (x == 2 && y == 3) {//Empty Tile is to the left
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++x;
    }
    else if (x == 3 && y == 2) {//Empty Tile is above
        var num = e.target.innerHTML;
        e.target.innerHTML = '';
        document.getElementById('table').rows[y].cells[x].innerHTML = num;
        ++y;
    }
    else {
        window.alert("You have clicked on a tile that was not adjacent to the empty slot!");
    }
}


//Function suffle taken from stack overflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    x = 0;
    y = 0;
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}