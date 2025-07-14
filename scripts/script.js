// Game state variables
let num1, num2, correctAnswer;
let score = 0;
let timeLeft = 10;
let timerInterval;

function updateScore() {
  document.getElementById("score").textContent = score;
}

function updateTimerDisplay() {
  document.getElementById("timer").textContent = timeLeft;
}

function startTimer() {
  clearInterval(timerInterval);  // Clear any existing timer
  timeLeft = 10;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("feedback").textContent = "⏰ Time's up!";
      document.getElementById("feedback").style.color = "orange";
      setTimeout(generateQuestion, 1500);
    }
  }, 1000);
}

function generateQuestion() {
  // Generate 2 random numbers
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = num1 + num2;

  // Update question text
  document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;

  // Clear input and feedback
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";

  // Start/reset timer
  startTimer();
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++;
    updateScore();

    clearInterval(timerInterval);  // Stop timer for current question

    setTimeout(generateQuestion, 1500);
  } else {
    feedback.textContent = "❌ Try again!";
    feedback.style.color = "red";
  }
}

document.getElementById("submit").addEventListener("click", checkAnswer);

// Start first question
generateQuestion();
