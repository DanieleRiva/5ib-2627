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
    // btnProva.classList.add("blue");

    btnProva.style.backgroundColor = "blue";
});

btnProva.innerText = "ciao";


const inputName = document.querySelector("input");

console.log(inputName.value);

const sendBtn = document.getElementById("send-btn");

inputName.addEventListener("input", () => {
    if (inputName.value) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }

    console.log(inputName.value);

    if (1 == "1") {

    }

    if (1 === "1") {
        
    }

    if (inputName.value == "rossi") {
        console.log("Password corretta!");

        btnProva.classList.toggle("blue");

        // if (btnProva.classList.contains("blue")) {
        //     btnProva.classList.remove("blue");
        // } else {
        //     btnProva.classList.add("blue");
        // }
    }
});


sendBtn.addEventListener("click", (event) => {
    event.preventDefault();


    console.log(event);
    event.target.innerText = "ciao";

    const immagine = document.querySelector("img");
    console.log(immagine.src);

    if (immagine.src.includes("foto1.jpg")) {
        immagine.src = "./imgs/foto2.jpg";
        // immagine.setAttribute("src", "./imgs/foto2.jpg");
    } else {
        immagine.src = "./imgs/foto1.jpg";
        // immagine.setAttribute("src", "./imgs/foto1.jpg");
    }

    // sendBtn.parentNode.submit();
});

const arr = [1, 2, 3, 4, 5];

// Aggiunge elemento
arr.push(6);
// Toglie ultimo elemento
arr.pop();
// Numero di elementi
arr.length;
// Controlla se contiene un elemento
arr.includes(4);
// Restituisce posizione dell'elemento
arr.indexOf(2);
// Restituisce una copia dell'array per
// queste posizioni
const newArr = arr.slice(0, 2);
// Unisce tutti gli elementi con questo carattere -> 1-2-3-4-5
arr.join("-");

const parola = " ciao ";

// Pulisce e toglie spazi vuoti dall'inizio e dalla fine
parola.trim();
// Lunghezza della stringa
parola.length;

parola.toUpperCase();
parola.toLocaleLowerCase();

// Sarebbe contains dell'array; controlla se la stringa contiene un carattere
parola.includes("a");

// Divide la parola in un array in base a un carattere divisore
const parola2 = "a,b,ciao";
const array = parola2.split(",");

// Come nell'array
parola.slice(0, 3);

// Sostituisce un carattere
parola.replace("a", "b");
parola.replaceAll(" ", "");

// alert("Attenzione");

// if (confirm("Sei sicuro?")) {
//     console.log("OK");
// } else {
//     console.log("NO");
// }


