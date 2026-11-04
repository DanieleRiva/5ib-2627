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

    const data = {
        "nome": "Mario",
        "cognome": "Rossi"
    };

    console.log(data);

    arr.forEach(element => {
        string += `${element} `;
    });

    alert(string);
}