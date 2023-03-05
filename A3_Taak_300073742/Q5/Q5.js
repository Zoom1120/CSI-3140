//window.addEventListener("load", start, false);
var out = document.getElementById("out");
var begin = document.getElementById("start");
begin.addEventListener("click", start, false);
var result = document.getElementById("result");
var Tpos = 1;
var Hpos = 1;
var tick = 1;
var done = false;

function start() {
    while (!done) {
        tick++;
        moveT();
        moveH();

        if (Tpos >= 70 || Hpos >= 70) {
            console.log(Tpos, Hpos, tick);
            done = true;
            if (Tpos >= 70 && Hpos < 70) {
                Tpos = 70;
                result.innerHTML = "TORTOISE WINS!!! YAY!!!";
            } else if (Tpos < 70 && Hpos >= 70) {
                Hpos = 70;
                result.innerHTML = "HARE WINS. YUCK!";
            } else {
                Tpos = 70;
                Hpos = 70;
                result.innerHTML = "IT'S A TIE";
            }

        }

        print();

    }
}

function print() {
    var str = " ";
    if (Tpos == Hpos) {
        for (var i = 1; i < Tpos; i++) {
            str += "-";
        }

        str += "OUCH!!!";

        for (var i = Tpos; i < 70; i++) {
            str += "-";
        }
    }
    if (Tpos < Hpos) {
        for (var i = 1; i < Tpos; i++) {
            str += "-";
        }

        str += "T";

        for (var i = Tpos; i < Hpos; i++) {
            str += "-";
        }

        str += "H";

        for (var i = Hpos; i < 70; i++) {
            str += "-";
        }
    }
    if (Hpos < Tpos) {
        for (var i = 1; i < Hpos; i++) {
            str += "-";
        }

        str += "H";

        for (var i = Hpos; i < Tpos; i++) {
            str += "-";
        }

        str += "T";

        for (var i = Tpos; i < 70; i++) {
            str += "-";
        }
    }

    var para = document.createElement("p");
    var node = document.createTextNode(str);
    para.appendChild(node);
    out.appendChild(para);
    //out.innerHTML = str;
}

function moveT() {
    var x = Math.floor(Math.random() * 10 + 1);
    console.log(x);

    if (x >= 1 && x <= 5) {
        Tpos += 3;
    } else if (x >= 6 && x <= 7) {
        Tpos -= 6;
    } else if (x >= 8 && x <= 10) {
        Tpos += 6;
    }

    if (Tpos < 1) {
        Tpos = 1;
    }
}

function moveH() {
    var y = Math.floor(Math.random() * 10 + 1);
    console.log(y);

    if (y >= 1 && y <= 2) {
        //Hare Sleeps, no movement
    } else if (y >= 3 && y <= 4) {
        Hpos += 9;
    } else if (y == 5) {
        Hpos -= 12;
    } else if (y >= 6 && y <= 8) {
        Hpos += 1;
    } else if (y >= 9 && y <= 10) {
        Hpos -= 2;
    }
    if (Hpos < 1) {
        Tpos = 1;
    }
}