const page = {
    isSectionVisible: false,
};

/* functions which runs on body load*/
function init() {
    updateSection();
}

/* hide or show div element with class member-info*/
function hideShowDiv() {
    page.isSectionVisible = !page.isSectionVisible;
    updateSection();
}

function updateSection() {
    if (page.isSectionVisible) {
        document.getElementById("member-section").style.display = "block";
        document.getElementById("bttchange").innerHTML =
            "Press this button to hide my family information. Thank you.";
    } else {
        document.getElementById("member-section").style.display = "none";
        document.getElementById("bttchange").innerHTML =
            "Press this button to show my family information. Thank you.";
    }
}
