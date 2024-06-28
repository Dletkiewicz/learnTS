var questions = [
    {
        question: "What is the capital of France?",
        answers: { A: "Berlin", B: "Madrid", C: "Paris" },
        correctAnswer: "C"
    },
    {
        question: "What is 2 + 2?",
        answers: { A: "3", B: "4", C: "5" },
        correctAnswer: "B"
    },
    {
        question: "What is the capital of Spain?",
        answers: { A: "Madrid", B: "Rome", C: "Lisbon" },
        correctAnswer: "A"
    }
];
var currentQuestion;
function loadNewQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    var answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(function (button) {
        button.innerText = currentQuestion.answers[button.id];
        button.className = "answer";
        button.onclick = function () { return checkAnswer(button.id); };
    });
}
function checkAnswer(selectedAnswer) {
    var answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(function (button) {
        if (button.id === currentQuestion.correctAnswer) {
            button.classList.add("correct");
            if (selectedAnswer !== currentQuestion.correctAnswer) {
                button.classList.add("correct-answer");
            }
        }
        else if (button.id === selectedAnswer) {
            button.classList.add("incorrect");
        }
    });
}
// Load the first question when the page loads
document.addEventListener("DOMContentLoaded", function () {
    loadNewQuestion();
});
