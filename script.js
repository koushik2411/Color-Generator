const colCode = document.getElementById("colorCode");
const btn = document.getElementById("genColorBtn");

btn.addEventListener("click", () => {

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = randomColor;

    colCode.textContent = randomColor;
})

// HEX range :- #000000 - #FFFFFF
// value of FFFFFF = 16777215