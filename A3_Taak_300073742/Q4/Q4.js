window.addEventListener("load", start, false);

function start() {

    console.log("Hello There");
    var arr = new Array(1000);
    console.log(arr.length);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = 1;
    }

    arr[0] = 0;
    arr[1] = 0;


    for (var i = 2; i < arr.length; i++) {
        for (var j = 2 * i; j < arr.length; j += i) {
            arr[j] = 0;
        }
    }

    console.log(arr);

    var str = "<table> <thead> <tr> <th> Array Index </th> <th> Value </th> </tr> </thead> <tbody> ";

    for (var k = 1; k < arr.length; k++) {
        str += "<tr> <td>" + k + "</td> <td>" + arr[k] + "</td> </tr>" ;
    }

    str += "</tbody> </table>";

    document.getElementById("out").innerHTML = str;
}