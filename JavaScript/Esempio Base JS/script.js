var num = 100;
let n = 5;
n = "parola";

{
    var num = 110;
    let n = 10;
    console.log("Dentro: " + n);
    console.log(`Dentro: ${n}`);
}

func1();

function func1() {
    console.log(n);
    console.log(num);
}

function func2() {
    const arr = [1, 2, 3, 4, 5];
    // Errore di ridefinizione -> arr = [1, 2, 3];
    arr[1] = 10;

    let string = "";

    console.log(data);

    arr.forEach(element => {
        string += `${element} `;
    });

    alert(string);
}

function func3() { 
    const item = {
        "nome": "Mario",
        "cognome": "Rossi",
        "voti": [
            {
                "materia": "matematica",
                "voto": 3
            },
            {
                "materia": "italiano",
                "voto": 8
            },
        ]
    };
    console.log(item);


    const divBello = document.getElementById("divMoltoBello");
    divBello.innerHTML += "<h1>Nuovo Titolo</h1>";

    console.log(divBello);
}