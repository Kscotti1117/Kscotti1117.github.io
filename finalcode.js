const size = document.querySelector("#size");
const h1 = document.querySelector("h1");
const animal = document.querySelector("#animal");
const favAnimalField = document.querySelector("#favoriteanimal");
const checkboxes = document.querySelectorAll(".favoriteanimal");

// Update favorite animal field
function updateFavoriteAnimal() {
    favAnimalField.value = size.value + " " + animal.value;
}

// When size is typed
size.addEventListener("input", function () {
    h1.innerText = "I love " + size.value;
    updateFavoriteAnimal();
});

// When animal is typed
animal.addEventListener("input", updateFavoriteAnimal);

// Checkbox popups
checkboxes.forEach(box => {
    box.onclick = function () {
        alert(box.value + " was clicked!");
    };
});
