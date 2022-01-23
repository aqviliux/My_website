const page = {
    isSectionVisible: true
};

/* functions which runs on body load*/
function init() {
    updateSection();
};


/* button which counts clicks.*/
function counterAll() {
    counter();
    alert("Hello! You are one of the " + localStorage.clickcount
        + " persons who want to know more about Lithuania");

};

function counter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
};
/* remove clickcount 
function cleanUp() {
    localStorage.clear();
}*/


/* hide or show div element with class member-info*/
function hideShowDiv() {
    page.isSectionVisible = !page.isSectionVisible;
    updateSection();
};

function updateSection() {
    if (page.isSectionVisible) {
        document.getElementById("member-section").style.display = "block";
        document.getElementById("bttchange").innerHTML = "Press this button to hide my family information. Thank you.";
    }
    else {
        document.getElementById("member-section").style.display = "none";
        document.getElementById("bttchange").innerHTML = "Press this button to show my family information. Thank you.";
    }
};


/* add search in my website using google site */
const google = "https://www.google.com/search?q=site%3A+";
const site = "https://akvilej-website.netlify.app";

function submitted(event) {
    event.preventDefault();
    const q = document.getElementById("query");
    const url = google + site + "+" + q.value;
    const win = window.open(url, "_blank");
    win.focus();
};
