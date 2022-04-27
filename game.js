let cards;

function init() {
    cards = shuffle(hardcodedimg);
    updateMixedImages();
    // // boardStatus();
    // updateCardsUI();
}

function updateMixedImages() {
    var x = document.getElementById("gridDIV").querySelectorAll(".memoryimg");
    for (i = 0; i < x.length; i++) {
        var myimg = x[i].querySelector("img");
        myimg.src = cards[i];
    }
}

// //create initial array
// function createArray() {
//     var result = [];
//     for (let i = 0; i < 6; i++) {
//         result.push(i + 1);
//         result.push(i + 1);
//     }
//     return result;
// }

var hardcodedimg = [
    "./images/IMG_7947.JPG",
    "./images/IMG_7965.JPG",
    "./images/IMG_8674.JPG",
    "./images/IMG_8014.JPG",
    "./images/IMG_5620.JPG",
    "./images/IMG_5601.JPG",
    "./images/IMG_7947.JPG",
    "./images/IMG_7965.JPG",
    "./images/IMG_8674.JPG",
    "./images/IMG_8014.JPG",
    "./images/IMG_5620.JPG",
    "./images/IMG_5601.JPG",
];

function shuffle(hardcodedimg) {
    var array = [].concat(hardcodedimg);
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var selectedCards = [];
// add value of opened two cards;
var openCards = [];

//get selected card from UI
function showHide(cardNo) {
    pick(cardNo);
}

//choose the card
function pick(cardNo) {
    let r = cards[cardNo];

    //add selected card array cell number to selectedcards array
    selectedCards.push(cardNo);
    //update all cards onsite
    updateCardsUI();
    //add second selected cardno and do comparision
    if (selectedCards.length > 1) {
        checkEqual();
    }
    output = boardStatus();

    if (output.every(checkFound)) {
        let div = document.getElementsByClassName("divCelebrate")[0];
        div.style.display = "flex";
    }
}

function checkFound(value) {
    return value === "found";
}

function updateCardsUI() {
    var x = document.getElementById("gridDIV").querySelectorAll(".memoryimg");
    for (i = 0; i < x.length; i++) {
        var myimg = x[i].querySelector("img");
        const list = myimg.classList;
        list.remove("selected");
        list.remove("found");
        list.remove("closed");
        switch (resolveCardStatus(i)) {
            case "selected":
                list.add("selected");
                break;
            case "found":
                list.add("found");
                break;
            case "closed":
                list.add("closed");
                break;
        }
    }
}

function resolveCardStatus(index) {
    if (selectedCards.indexOf(index) > -1) {
        return "selected";
    }
    if (openCards.indexOf(cards[index]) > -1) {
        return "found";
    }
    return "closed";
}

function boardStatus() {
    const output = cards.map(function (card, index) {
        return resolveCardStatus(index);
    });
    return output;
}

function checkEqual() {
    let fs = selectedCards[0];
    let ss = selectedCards[1];
    if (cards[fs] === cards[ss]) {
        selectedCards = [];
        openCards.push(cards[fs]);
    } else {
        selectedCards = [];
    }
}
