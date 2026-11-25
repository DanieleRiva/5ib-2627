// =====================================================================
//  FUNZIONI UTILI DA SAPERE IN JAVASCRIPT
// =====================================================================

// ---------------------------------------------------------------------
//  1. TROVARE ELEMENTI NELLA PAGINA (DOM)
// ---------------------------------------------------------------------
//
//  document.getElementById(id)
//      Trova UN elemento dal suo id.
//      Es: document.getElementById("board")
//
//  document.querySelector(selettore)
//      Trova il PRIMO elemento che corrisponde a un selettore CSS.
//      Es: document.querySelector(".cell")
//
//  document.querySelectorAll(selettore)
//      Trova TUTTI gli elementi che corrispondono (restituisce una lista).
//      Es: document.querySelectorAll(".cell")
//
//  document.getElementsByClassName(classe)
//      Trova tutti gli elementi con quella classe.
//      Es: document.getElementsByClassName("cell")
//
//  elemento.children
//      I figli diretti di un elemento.
//      Es: boardEl.children[0]
//
//  elemento.parentElement
//      L'elemento che lo contiene.
//      Es: cell.parentElement

// ---------------------------------------------------------------------
//  2. CREARE, AGGIUNGERE, TOGLIERE ELEMENTI
// ---------------------------------------------------------------------
//
//  document.createElement(tag)
//      Crea un nuovo elemento (non è ancora nella pagina!).
//      Es: document.createElement("button")
//
//  padre.appendChild(figlio)
//      Aggiunge l'elemento in fondo dentro "padre".
//      Es: boardEl.appendChild(cell)
//
//  padre.prepend(figlio)
//      Aggiunge l'elemento all'inizio.
//      Es: lista.prepend(li)
//
//  elemento.remove()
//      Toglie l'elemento dalla pagina.
//      Es: cell.remove()
//
//  elemento.innerHTML = ""
//      Svuota tutto il contenuto di un elemento.
//      Es: boardEl.innerHTML = ""

// ---------------------------------------------------------------------
//  3. MODIFICARE CONTENUTO E STILE
// ---------------------------------------------------------------------
//
//  innerText
//      Legge o scrive il testo.
//      Es: statusEl.innerText = "Pareggio!"
//
//  innerHTML
//      Legge o scrive l'HTML interno.
//      Es: div.innerHTML = "<b>Ciao</b>"
//
//  value
//      Il valore scritto in un <input>.
//      Es: nameXInput.value
//
//  className
//      Tutte le classi dell'elemento, come stringa.
//      Es: cell.className = "cell x"
//
//  classList.add(classe)
//      Aggiunge una classe.
//      Es: cell.classList.add("win")
//
//  classList.remove(classe)
//      Toglie una classe.
//      Es: cell.classList.remove("win")
//
//  classList.toggle(classe)
//      Aggiunge la classe se manca, la toglie se c'è.
//      Es: menu.classList.toggle("open")
//
//  classList.contains(classe)
//      Dice se la classe c'è (true / false).
//      Es: cell.classList.contains("x")
//
//  style.proprietà
//      Modifica il CSS direttamente.
//      Es: div.style.color = "red"
//
//  setAttribute(nome, valore)
//      Imposta un attributo HTML.
//      Es: img.setAttribute("src", "a.png")
//  img.src = "percorsoImmagine"
//      Imposta la source di un'immagine
//      Es: img.src = "./imgs/foto1.png"
//
//  disabled
//      Disabilita un bottone.
//      Es: btn.disabled = true
//
//  classList.add("win") è più pulito di className += " win":
//  non devi pensare agli sp0azi e non rischi di aggiungere la stessa
//  classe due volte.

// ---------------------------------------------------------------------
//  4. EVENTI
// ---------------------------------------------------------------------
//
//  elemento.addEventListener(tipo, funzione)
//      Esegue la funzione quando succede l'evento.
//      Es: btn.addEventListener("click", () => { ... })
//
//  event.target
//      L'elemento su cui è avvenuto l'evento.
//      Es: (e) => e.target.innerText
//
//  event.preventDefault()
//      Blocca il comportamento normale (es. l'invio di un form).
//      Es: form.addEventListener("submit", (e) => e.preventDefault())
//
//  Eventi comuni:
//      "click"                click del mouse
//      "input"                mentre scrivi in un campo
//      "change"               quando il valore cambia (es. select, checkbox)
//      "submit"               invio di un form
//      "keydown"              pressione di un tasto
//      "mouseover"            mouse sopra l'elemento
//      "DOMContentLoaded"     quando si carica la pagina

// ---------------------------------------------------------------------
//  5. ARRAY
// ---------------------------------------------------------------------
//
//  push(x)
//      Aggiunge in fondo.
//      Es: cells.push(cell)
//
//  pop()
//      Toglie e restituisce l'ultimo elemento.
//      Es: moves.pop()
//
//  length
//      Quanti elementi ci sono.
//      Es: moves.length
//
//  includes(x)
//      Dice se l'elemento c'è (true / false).
//      Es: board.includes("")
//
//  indexOf(x)
//      La posizione dell'elemento, oppure -1 se non c'è.
//      Es: arr.indexOf("X")
//
//  forEach(funzione)
//      Esegue la funzione su ogni elemento.
//      Es: cells.forEach(c => c.innerText = "")
//
//  slice(a, b)
//      Copia una parte dell'array (da a fino a b escluso).
//      Es: arr.slice(0, 3)
//
//  join(separatore)
//      Unisce tutti gli elementi in una stringa.
//      Es: ["a", "b"].join("-")   ->  "a-b"

// ---------------------------------------------------------------------
//  6. STRINGHE
// ---------------------------------------------------------------------
//
//  trim()
//      Toglie gli spazi all'inizio e alla fine.
//      Es: "  ciao ".trim()   ->  "ciao"
//
//  length
//      Lunghezza della stringa.
//      Es: nome.length > 12
//
//  toUpperCase() / toLowerCase()
//      Tutto maiuscolo / tutto minuscolo.
//      Es: "ciao".toUpperCase()   ->  "CIAO"
//
//  includes(s)
//      Dice se contiene la sottostringa.
//      Es: email.includes("@")
//
//  split(separatore)
//      Divide la stringa in un array.
//      Es: "a,b,c".split(",")   ->  ["a", "b", "c"]
//
//  replace(a, b) / replaceAll(a, b)
//      Sostituisce la prima occorrenza / tutte le occorrenze.
//      Es: testo.replace("x", "y")
//
//  slice(a, b)
//      Una parte della stringa.
//      Es: "ciao".slice(0, 2)   ->  "ci"
//
//  Stringa con i backtick ` `
//      Inserisce variabili nel testo.
//      Es: `Benvenuto, ${nome}`

// ---------------------------------------------------------------------
//  7. NUMERI
// ---------------------------------------------------------------------
//
//  n.toFixed(2)
//      Arrotonda a 2 decimali (restituisce una stringa).
//      Es: (3.14159).toFixed(2)   ->  "3.14"

// ---------------------------------------------------------------------
//  8. VARIE
// ---------------------------------------------------------------------
//
//  console.log(x)
//      Stampa nella console: utilissimo per il debug.
//
//  alert(msg) / confirm(msg) / prompt(msg)
//      Finestre di dialogo del browser.
//      Es: if (confirm("Sicuro?")) { ... }