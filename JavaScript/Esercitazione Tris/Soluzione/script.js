const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");

const nameXInput = document.getElementById("name-x");
const nameOInput = document.getElementById("name-o");
const saveNamesBtn = document.getElementById("save-names-btn");
const errorBox = document.getElementById("error-box");

const labelX = document.getElementById("label-x");
const labelO = document.getElementById("label-o");
const scoreX = document.getElementById("score-x");
const scoreO = document.getElementById("score-o");
const scoreDraw = document.getElementById("score-draw");

const undoBtn = document.getElementById("undo-btn");
const newGameBtn = document.getElementById("new-game-btn");
const resetScoreBtn = document.getElementById("reset-score-btn");

let board = ["", "", "", "", "", "", "", "", ""];
const cells = [];

let currentPlayer = "X";
let gameOver = false;

// Attività 4
let winsX = 0;
let winsO = 0;
let draws = 0;

// Attività 5
let nameX = "Giocatore X";
let nameO = "Giocatore O";

// Attività 6
let moves = [];

// Bonus
let startingPlayer = "X";
loadData();

createBoard();
updateNames();
updateScores();
updateStatus();

// Attività 1
function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("button");
        cell.className = "cell";

        // Attività 2
        cell.addEventListener("click", () => {
            handleClick(i);
        });

        boardEl.appendChild(cell);
        cells.push(cell);
    }
}

function renderBoard() {
    for (let i = 0; i < 9; i++) {
        cells[i].innerText = board[i];

        if (board[i] === "X") {
            cells[i].className = "cell x";
        } else if (board[i] === "O") {
            cells[i].className = "cell o";
        } else {
            cells[i].className = "cell";
        }
    }
}

// Attività 2
function handleClick(index) {
    if (board[index] !== "" || gameOver) {
        return;
    }

    board[index] = currentPlayer;
    moves.push(index);   // Attività 6
    renderBoard();

    // Attività 3
    if (checkWinner()) {
        statusEl.innerText = `Ha vinto ${getName(currentPlayer)}!`;

        if (currentPlayer === "X") {
            winsX++;
        } else {
            winsO++;
        }

        endGame();
        return;
    }

    if (isDraw()) {
        statusEl.innerText = "Pareggio!";
        draws++;

        endGame();
        return;
    }

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    updateStatus();
}

function updateStatus() {
    statusEl.innerText = `Turno di: ${getName(currentPlayer)}`;
}

// Attività 3
function checkLine(a, b, c) {
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        cells[a].className += " win";
        cells[b].className += " win";
        cells[c].className += " win";

        return true;
    }

    return false;
}

function checkWinner() {
    // righe
    if (checkLine(0, 1, 2)) return true;
    if (checkLine(3, 4, 5)) return true;
    if (checkLine(6, 7, 8)) return true;

    // colonne
    if (checkLine(0, 3, 6)) return true;
    if (checkLine(1, 4, 7)) return true;
    if (checkLine(2, 5, 8)) return true;

    // diagonali
    if (checkLine(0, 4, 8)) return true;
    if (checkLine(2, 4, 6)) return true;

    return false;
}

function isDraw() {
    for (let i = 0; i < 9; i++) {
        if (board[i] === "") {
            return false;
        }
    }

    return true;
}

function endGame() {
    gameOver = true;
    boardEl.className = "locked";

    updateScores();
    saveData();   // Bonus
}

// Attività 4
function updateScores() {
    scoreX.innerText = winsX;
    scoreO.innerText = winsO;
    scoreDraw.innerText = draws;
}

newGameBtn.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    moves = [];
    gameOver = false;
    boardEl.className = "";

    // Bonus: il giocatore che inizia si alterna
    if (startingPlayer === "X") {
        startingPlayer = "O";
    } else {
        startingPlayer = "X";
    }
    currentPlayer = startingPlayer;

    renderBoard();   // riassegnando le classi, toglie anche "win"
    updateStatus();
});

resetScoreBtn.addEventListener("click", () => {
    winsX = 0;
    winsO = 0;
    draws = 0;

    updateScores();
    saveData();   // Bonus
});

// Attività 5
saveNamesBtn.addEventListener("click", () => {
    const newNameX = nameXInput.value.trim();
    const newNameO = nameOInput.value.trim();

    if (newNameX === "" || newNameO === "") {
        errorBox.innerText = "Entrambi i nomi sono obbligatori.";
        return;
    }

    if (newNameX.length > 12 || newNameO.length > 12) {
        errorBox.innerText = "I nomi non possono superare i 12 caratteri.";
        return;
    }

    if (newNameX === newNameO) {
        errorBox.innerText = "I due nomi devono essere diversi.";
        return;
    }

    errorBox.innerText = "";

    nameX = newNameX;
    nameO = newNameO;

    updateNames();
    saveData();   // Bonus

    // Aggiorna il messaggio solo se la partita è in corso
    if (!gameOver) {
        updateStatus();
    }
});

function getName(player) {
    if (player === "X") {
        return nameX;
    }

    return nameO;
}

function updateNames() {
    labelX.innerText = nameX;
    labelO.innerText = nameO;
}

// Attività 6
undoBtn.addEventListener("click", () => {
    if (moves.length === 0 || gameOver) {
        return;
    }

    const lastIndex = moves.pop();

    currentPlayer = board[lastIndex];   // il turno torna a chi aveva fatto la mossa
    board[lastIndex] = "";

    renderBoard();
    updateStatus();
});

// Bonus
function saveData() {
    localStorage.setItem("winsX", winsX);
    localStorage.setItem("winsO", winsO);
    localStorage.setItem("draws", draws);
    localStorage.setItem("nameX", nameX);
    localStorage.setItem("nameO", nameO);
}

function loadData() {
    winsX = parseFloat(localStorage.getItem("winsX")) || 0;
    winsO = parseFloat(localStorage.getItem("winsO")) || 0;
    draws = parseFloat(localStorage.getItem("draws")) || 0;
    nameX = localStorage.getItem("nameX") || "Giocatore X";
    nameO = localStorage.getItem("nameO") || "Giocatore O";
}
