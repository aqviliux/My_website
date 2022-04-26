function init() {
    prevBtn.addEventListener("click", function () {
        previous();
    });

    nextBtn.addEventListener("click", function () {
        next();
    });
}

let currSelected = 0;
const allImages = document.querySelectorAll(".gall-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

console.log(allImages);
// NodeList(5) [img.gall-img.orch-img.active,
//      img.gall-img.orch-img, img.gall-img.orch-img, img.gall-img.orch-img, img.gall-img.orch-img]

function previous() {
    nextBtn.disabled = false;
    let x = allImages[currSelected];
    x.classList.remove("active");
    currSelected = currSelected - 1;
    let y = allImages[currSelected];
    y.classList.add("active");
    if (currSelected === 0) {
        prevBtn.disabled = true;
    }
}

function next() {
    prevBtn.disabled = false;
    let x = allImages[currSelected];
    x.classList.remove("active");
    currSelected = currSelected + 1;
    let y = allImages[currSelected];
    y.classList.add("active");
    if (currSelected + 1 == allImages.length) {
        nextBtn.disabled = true;
    }
}
