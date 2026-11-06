const addGradeBtn = document.getElementById("add-grade-btn");

const newGradeSubject = document.getElementById("new-grade-subject");
const newGradeInfo = document.getElementById("new-grade-info");
const newGradeScore = document.getElementById("new-grade-score");

// Event Listener
addGradeBtn.addEventListener("click", () => {
    console.log(addGradeBtn);

    if (validateData()) {
        console.log("Dati validi");
    }
    else {
        console.log("NON validi");
    }
});

function validateData() {
    if (
        newGradeSubject.value &&
        newGradeInfo.value &&
        (newGradeScore.value >= 3 && newGradeScore.value <= 10)
    ) {
        return true;
    }

    return false;
}