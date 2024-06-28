interface Question {
    question: string;
    answers: { [key: string]: string };
    correctAnswer: string;
}

let questions: Question[] = [];
let currentQuestion: Question;

async function loadQuestions() {
    const response = await fetch('questions.json');
    questions = await response.json();
    loadNewQuestion();
}

function loadNewQuestion(): void {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    document.getElementById("question")!.innerText = currentQuestion.question;

    const answerButtons = document.querySelectorAll(".answer") as NodeListOf<HTMLButtonElement>;
    answerButtons.forEach(button => {
        button.innerText = currentQuestion.answers[button.id];
        button.className = "answer";
        button.onclick = () => checkAnswer(button.id);
    });
}

function checkAnswer(selectedAnswer: string): void {
    const answerButtons = document.querySelectorAll(".answer") as NodeListOf<HTMLButtonElement>;
    answerButtons.forEach(button => {
        if (button.id === currentQuestion.correctAnswer) {
            button.classList.add("correct");
            if (selectedAnswer !== currentQuestion.correctAnswer) {
                button.classList.add("correct-answer");
            }
        } else if (button.id === selectedAnswer) {
            button.classList.add("incorrect");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestions();
});
