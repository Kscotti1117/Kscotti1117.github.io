const size = document.querySelector("#size");
const h1 = document.querySelector("#favTitle");
const animal = document.querySelector("#animal");
const favAnimalField = document.querySelector("#favoriteanimal");
const checkboxes = document.querySelectorAll(".favoriteanimal");

// Update favorite animal field
function updateFavoriteAnimal() {
    favAnimalField.value = size.value + " " + animal.value;
}

// Update H1 based on size + animal
function updateHeading() {
    const sizeValue = size.value.trim().toLowerCase();
    const animalValue = animal.value.trim();

    if (sizeValue === "small") {
        h1.innerText = "How cute!";
    } 
    else if (sizeValue === "big") {
        h1.innerText = "Holy Moly that's big!";
    } 
    else {
        h1.innerText = "I love " + size.value + " " + animalValue;
    }
}

// When size is typed
size.addEventListener("input", function () {
    updateHeading();
    updateFavoriteAnimal();
});

// When animal is typed
animal.addEventListener("input", function () {
    updateHeading();
    updateFavoriteAnimal();
});

// Checkbox popups
checkboxes.forEach(box => {
    box.onclick = function () {
        alert(box.value + " was clicked! What an awesome pet!");
    };
});
