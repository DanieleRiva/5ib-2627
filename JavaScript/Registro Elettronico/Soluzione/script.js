const addGradeBtn = document.getElementById("add-grade-btn");
const avgGradeBtn = document.getElementById("average-grade");

const newGradeSubject = document.getElementById("new-grade-subject");
const newGradeInfo = document.getElementById("new-grade-info");
const newGradeScore = document.getElementById("new-grade-score");

const errorBox = document.getElementById("error-box");

const userGrades = document.getElementById("user-grades");

const grades = [];

// Event Listener
addGradeBtn.addEventListener("click", () => {
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
            // ` => alt + 9 + 6
            console.log(`Materia: ${grade.subject}, Info: ${grade.gradeInfo}, Score: ${grade.score}`);
        });

        updateUI();
    }
    else {
        errorBox.innerText = "Dati non validi.";
    }
});

avgGradeBtn.addEventListener("click", () => {
    let sum = 0;

    grades.forEach(grade => {
        sum += parseFloat(grade.score);
    });

    const avg = (sum / grades.length).toFixed(2);
    avgGradeBtn.innerText = avg;

    const className = classifyScore(avg);
    avgGradeBtn.className = className;
});

function updateUI() {
    userGrades.innerHTML = "";

    grades.forEach(grade => {
        const li = document.createElement("li");
        const className = classifyScore(grade.score);

        li.innerHTML = `
            <div>
                <h4>${grade.subject}</h4>
                <h2>${grade.gradeInfo}</h2>
            </div>

            <h2 class="grade-value ${className}">
                ${grade.score}
            </h2>
        `;
        userGrades.appendChild(li);
    });
}

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

function classifyScore(score) {
    score = parseFloat(score);

    if (!score || score < 3 || score > 10) {
        return false;
    }

    if (score < 5) {
        return "red";
    } else if (score >= 5 && score < 6) {
        return "yellow";
    } else if (score >= 6 && score < 10) {
        return "green";
    } else {
        return "purple";
    }
}