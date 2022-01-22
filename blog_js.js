/* functions which runs on body load*/
function init() {
    hideTable();
};


/* function which gets selected checkbox values*/
function loadResultsFavOrchids() {
    var markedCheckbox = document.getElementsByName('orchid');
    for (var checkbox of markedCheckbox) {
        if (checkbox.checked) {
            var cv = checkbox.value;
            if (localStorage.getItem(cv)) {
                var count = Number(localStorage.getItem(cv)) + 1;
                localStorage.setItem(cv, count);
            }
            else {
                localStorage.setItem(cv, 1);
            }

        }
    }

    document.getElementById("result-table").style.display = "block";

    document.getElementById("check1").innerHTML = (localStorage.getItem("Phalaenopsis") || 0);
    document.getElementById("check2").innerHTML = (localStorage.getItem("Cattleya") || 0);
    document.getElementById("check3").innerHTML = (localStorage.getItem("Vanda") || 0);
    document.getElementById("check4").innerHTML = (localStorage.getItem("Catasetum") || 0);
    document.getElementById("check5").innerHTML = (localStorage.getItem("Oncidium") || 0);
    document.getElementById("check6").innerHTML = (localStorage.getItem("Dendrobium") || 0);
    document.getElementById("check7").innerHTML = (localStorage.getItem("None") || 0);
};

/* remove clickcount 
function cleanUp() {
    localStorage.clear();
}*/


function hideTable() {
    document.getElementById("result-table").style.display = "none";
};



/* add search in my website using google site */
const google = "https://www.google.com/search?q=site%3A+";
const site = "akvilejwebsite.netlify.app";

function submitted(event) {
    event.preventDefault();
    const q = document.getElementById("query");
    const url = google + site + "+" + q.value;
    const win = window.open(url, "_blank");
    win.focus();
};