// Recupero elementi HTML

const h1 = document.getElementById("ciao");
console.log(h1);

const titolo = document.querySelector("#ciao");

const div = document.querySelector(".nomeClasse p");
const paragrafo = document.getElementById("paragrafo");
console.log(div);
console.log(paragrafo);

const es3 = document.querySelector(".nomeClasse");
const es4 = document.querySelectorAll(".nomeClasse");
console.log(es3);
console.log(es4);

const es5 = document.getElementsByClassName("nomeClasse");
console.log(es5);

console.log(es3.children);

console.log(paragrafo.parentElement);


// Manipolazione HTML
const customBtn = document.createElement("button");
customBtn.innerText = "Cliccami";
customBtn.style.backgroundColor = "red";

es3.appendChild(customBtn);
es3.prepend(customBtn);

// es3.remove();

const btnProva = document.getElementById("btn-prova");

btnProva.addEventListener("click", () => {
    console.log(btnProva.classList);
    btnProva.classList.add("blue");
});



