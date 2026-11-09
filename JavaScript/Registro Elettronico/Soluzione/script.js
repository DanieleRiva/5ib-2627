const addGradeBtn = document.getElementById("add-grade-btn");

const newGradeSubject = document.getElementById("new-grade-subject");
const newGradeInfo = document.getElementById("new-grade-info");
const newGradeScore = document.getElementById("new-grade-score");

const errorBox = document.getElementById("error-box");

const grades = [];

// Event Listener
addGradeBtn.addEventListener("click", () => {
    console.log(addGradeBtn);

    if (validateData()) {
        errorBox.innerText = "";
        grades.push(
            {
                "subject": newGradeSubject.value,
                "gradeInfo": newGradeInfo.value,
                "score": newGradeScore.value
            }
        );

        grades.forEach(grade => {
            // console.log("Materia: " + grade.subject + " Info: " + grade.gradeInfo + " Score: " + grade.score);

            // alt + 9 + 6
            console.log(`Materia: ${grade.subject}, Info: ${grade.gradeInfo}, Score: ${grade.score}`);
        });
    }
    else {
        errorBox.innerText = "Dati non validi.";
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