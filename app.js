const backgroundImgEl = document.getElementById("background-img");

window.addEventListener("scroll", () => {
    updateImage()
});

function updateImage() {
    backgroundImgEl.style.opacity = 1 - window.pageYOffset / 900;
    backgroundImgEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"

}