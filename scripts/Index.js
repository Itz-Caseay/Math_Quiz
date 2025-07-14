const questions = [
    {
        questions: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        questions: "Who is the best rapper prsently?",
        answers: [
            {text: "Caseay", correct: true},
            {text: "F Dior", correct: false},
            {text: "Fosaj Rexz", correct: false},
            {text: "Dhiip Sv", correct: false},
        ]
    },
    {
        questions: "Which language is not a programming language?",
        answers: [
            {text: "C+", correct: false},
            {text: "Python", correct: false},
            {text: "Html", correct: true},
            {text: "Java", correct: false},
        ]
    },
    {
        questions: "Which group is Caseay a Member?",
        answers: [
            {text: "CA_Studio", correct: false},
            {text: "ABS'Studio", correct: true},
            {text: "Cartel NT", correct: false},
            {text: "Shiiruken Prod", correct: false},
        ]
    },
    {
        questions: "Who Invented Html?",
        answers: [
            {text: "Tim Berners-Lee", correct: true},
            {text: "Mark Zuckerberg", correct: false},
            {text: "Higgins William", correct: false},
            {text: "Simon HTML", correct: false},
        ]
    },
    {
        questions: "Who is the best for the legends rapper?",
        answers: [
            {text: "Xxxtentacion", correct: true},
            {text: "Pop Smoke", correct: false},
            {text: "Juice wrld", correct: false},
            {text: "King Von", correct: false},
        ]
    },
    {
        questions: "Which language is a framework language?",
        answers: [
            {text: "C+", correct: false},
            {text: "Django", correct: true},
            {text: "Go", correct: false},
            {text: "Java", correct: false},
        ]
    },
    {
        questions: "Which year did the first world erupted?",
        answers: [
            {text: "1940", correct: false},
            {text: "1914", correct: true},
            {text: "1884", correct: false},
            {text: "1934", correct: false},
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