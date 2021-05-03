console.log("Hello");

let button = document.querySelector(".section__button");
let myFoto = document.querySelector(".section__photo");
console.log(myFoto);

button.addEventListener("click", () => {
    if (button.innerText === "Zobacz moje zdjęcie") {
        button.innerText = "Wyłącz moje zdjęcie";
    } else {
        button.innerText = "Zobacz moje zdjęcie";
    }
})

button.addEventListener("click", () => {
    myFoto.classList.toggle("section__hiddenPhoto")
});



// let button = document.querySelector(".button");
// let container = document.querySelector(".container");

// button.addEventListener("click", () => {
//     if (button.innerText === "Zmień kolor tła") {
//         button.innerText = "Wyłącz";
//     } else {
//         button.innerText = "Zmień kolor tła"
//     }
// })

// button.addEventListener("click", () => {
//     container.classList.toggle("whiteBackground")
// });

// console.log(button);

