const questions = [
    {
        questions: "Simplify: 3x - 2x + 4",
        answers: [
            {text: "A. x + 4", correct: true},
            {text: "B. x - 4", correct: false},
            {text: "C. x + 2", correct: false},
            {text: "D. x - 2", correct: false},
        ]
    },
    {
        questions: "Solve: 2x + 5 = 15",
        answers: [
            {text: "A. 10", correct: false},
            {text: "B.  5", correct: true},
            {text: "C. -5", correct: false},
            {text: "D. 20", correct: false},
        ]
    },
    {
        questions: "What's the value of pie?",
        answers: [
            {text: "A. 2/7", correct: false},
            {text: "B. 3.11", correct: false},
            {text: "C. 3.14", correct: true},
            {text: "D. 7/22", correct: false},
        ]
    },
    {
        questions: "Find the value of: 3/5 × 10/9",
        answers: [
            {text: "A. 9/5", correct: false},
            {text: "B. 2/3", correct: true},
            {text: "C. 3/2", correct: false},
            {text: "D. 5/9", correct: false},
        ]
    },
    {
        questions: "Find tge area of a triangle of base 6cm and height 4cm",
        answers: [
            {text: "12 cm²", correct: true},
            {text: "10 cm²", correct: false},
            {text: "20 cm²", correct: false},
            {text: "20 cm²", correct: false},
        ]
    },
    {
        questions: "What is the mean of 5, 10, 15, 20, 25?",
        answers: [
            {text: "A. 15", correct: true},
            {text: "B. 12", correct: false},
            {text: "C. 17", correct: false},
            {text: "D. 10", correct: false},
        ]
    },
    {
        questions: "If a=2 and b=8. Find the value of a.b",
        answers: [
            {text: "A. 12", correct: false},
            {text: "B. 16", correct: false},
            {text: "C. 10", correct: true},
            {text: "D. 4", correct: false},
        ]
    },
    {
        questions: "Convert 120° to radians (pie = 3.14)",
        answers: [
            {text: "A. 2.09", correct: true},
            {text: "B. 3.14", correct: false},
            {text: "C. 1.57", correct: false},
            {text: "D. 4.71", correct: false},
        ]
    },
    {
        questions: "Find the gradient of a lune through (1, 2) and (3, 6)",
        answers: [
            {text: "A. 2", correct: true},
            {text: "B. 4", correct: false},
            {text: "C. 3", correct: false},
            {text: "D. 1", correct: false},
        ]
    },
    {
        questions: "The L.C.M of 4 and 6 is?",
        answers: [
            {text: "A. 24", correct: false},
            {text: "B. 12", correct: true},
            {text: "C. 10", correct: false},
            {text: "D. 6", correct: false},
        ]
    },
    {
        questions: "If 30% of a number is 60, what is that nunber?",
        answers: [
            {text: "A. 180", correct: false},
            {text: "B. 150", correct: false},
            {text: "C. 120", correct: false},
            {text: "D. 200", correct: true},
        ]
    },
    {
        questions: "If angle A = 40° and angle B = 65°. Find angle C",
        answers: [
            {text: "A. 55°", correct: false},
            {text: "B. 75°", correct: true},
            {text: "C. 65°", correct: false},
            {text: "D. 35°", correct: false},
        ]
    },
    {
        questions: "The volume of a cube with side 3cm is:",
        answers: [
            {text: "A. 6cm³", correct: false},
            {text: "B. 9cm³", correct: false},
            {text: "C. 27cm³", correct: true},
            {text: "D. 18cm³", correct: false},
        ]
    },
     {
        questions: "If y = 2x + 1. Find y when x = 4",
        answers: [
            {text: "A. 7", correct: false},
            {text: "B. 8", correct: false},
            {text: "C. 9", correct: true},
            {text: "D. 6", correct: false},
        ]
    },
    {
        questions: "A goat is being tied a rope of 7cm radius in a field to eat grass. And the goat eats in a circular manner. What's the area of grass eaten by the goat?",
        answers: [
            {text: "A. The answer is not here", correct: false},
            {text: "B. 81cm²", correct: false},
            {text: "C. 200cm²", correct: false},
            {text: "D. 154cm²", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz()

function show() {
  document.getElementById('contact').style.display = 'flex';
}