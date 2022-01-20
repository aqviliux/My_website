/* functions which runs on body load*/
function init() {
    allColors();
    addFutureDate();
};


/* calculate circle area with radius in meters*/
let radius;
let param = "";

function circleArea() {
    param = document.getElementById("circradius").value;
    radius = parseFloat(param);
    console.log("radius is " + radius);
    if (radius > 0) {
        const area = calcArea(radius);
        printArea(area);
    }
    else {
        alert("You enter negative or equal to zero number. Try again.");
        return;
    };
};

function calcArea(radius) {
    let area = Math.PI * (radius * radius);
    return area;
};

function printArea(area) {
    console.log(Math.round(area * 100) / 100);
    document.getElementById("getArea").innerHTML = "The area of the circle with radius " + radius
        + " meters is " + Math.round(area * 100) / 100 + " square metres.";
};


/* change color according color from input field.*/
const CSS_COLOR_NAMES = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
    "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite",
    "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray",
    "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory",
    "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen",
    "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey",
    "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
    "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue",
    "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive",
    "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon",
    "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal",
    "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow",
    "YellowGreen",
];


function allColors() {
    let select = document.getElementById("selectColors");
    for (var i = 0; i < CSS_COLOR_NAMES.length; i++) {
        var optn = CSS_COLOR_NAMES[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    };
};


function updateColor() {
    var select = document.getElementById("selectColors");
    var option = select.options[select.selectedIndex];
    newColor = option.value;
    document.getElementById("chColorText").style.color = newColor;
};


/* add dynamic list */
var places = ["Vilnius", "Kaunas", "Siauliai", "Klaipeda", "Taurage", "Utena"];

function displayList() {
    document.getElementById("citieslist").innerHTML = "";
    var ul = document.getElementById("citieslist");
    for (var i = 0; i < places.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(places[i]));
        ul.appendChild(li);
    }
};
/* add dynamic list */

/* add input field for the dynamic list */
let city = "";

function addedCity() {
    city = document.getElementById("addcity").value;
    if (Boolean(city)) {
        addCity(city);
        displayList();
    }
    else {
        alert("You enter incorrect value.");
        return;
    };
    document.getElementById("addcity").value = "";
};

function addCity(newcity) {
    places.push(newcity);
};

/* add input field for the dynamic list */



/* add clock */
var myTime = setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let t = time.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;
};
/* add clock */


/* two arrays as input, compare it and find unique values */

var places2 = ["Vilnius", "Kaunas", "Radviliskis", "Palanga", "Taurage", "Panevezys", "Vilkaviskis"];


function showArrays() {
    document.getElementById("showArrays").innerHTML = places;
    document.getElementById("showArrays2").innerHTML = places2;
};

/* function with parameter of array. The function should
rearrange the array so that the first element is in the end, but 
all other elements shift one place to the front */
function changeArray(list) {
    reverse = list;
    var firstElement = reverse[0];
    reverse.shift();
    reverse.push(firstElement);
    return reverse;
};

function reverseArrays() {
    var reverse = changeArray(places);
    document.getElementById("showArrays3").innerHTML = reverse;
};


/* function with parameter of array. The function should
concatenate all items in the array to a string separated by commas.*/

function concArray(list2) {
    var oneString = "";
    for (i = 0; i < list2.length; i++) {
        if (i < list2.length - 1) {
            oneString = oneString + list2[i].toString() + ", ";
        }
        else {
            oneString = oneString + list2[i].toString();
        }
    };

    return oneString;
};


function arrayToString() {
    var arrToStr = concArray(places);
    document.getElementById("showArrays4").innerHTML = arrToStr;
};



/*compare two arrays and create array with unique values*/
function compareCities(first, second) {
    var unique = [];
    for (let one of first) {
        if (!second.includes(one)) {
            unique.push(one);
        };
    };
    for (let two of second) {
        if (!first.includes(two)) {
            unique.push(two);
        };
    };
    return unique;
};

function compCities() {
    var unique = compareCities(places, places2)
    document.getElementById("showArrays5").innerHTML = unique;
};



/* Create a live coutdown with setInterval() that takes a datetime 
imput and has a button that starts the countdown. The countdown should stop at 0 */
function showCountTime(aDate) {
    var addDate = new Date(aDate).getTime();
    var currentDate = new Date().getTime();
    var deltaTime = (addDate - currentDate) / 1000;
    var days = Math.floor(deltaTime / 86400);
    deltaTime -= days * 86400;
    var hours = Math.floor(deltaTime / 3600);
    deltaTime -= hours * 3600;
    var minutes = Math.floor(deltaTime / 60);
    deltaTime -= minutes * 60;
    var seconds = Math.ceil(deltaTime % 60);

    document.getElementById("coountd").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    return ((addDate - currentDate) / 1000);

};

let interval;

function runCountDown() {
    var addDate = document.getElementById("addnDate").value;
    if (Boolean(addDate)) {
        if (interval) {
            clearInterval(interval);
        };
        interval = setInterval(function () {
            const distance = showCountTime(addDate);
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("coountd").innerHTML = "TIME'S UP!";
            };
        }, 1000);
    }
    else {
        alert("You enter incorrect value.");
        return;
    };
};

function addFutureDate() {
    var currentDate = new Date();
    var futureDate = currentDate.setSeconds(currentDate.getSeconds() + 40);
    var t = new Date(futureDate);
    document.getElementById("addnDate").value = t.toLocaleString();
};