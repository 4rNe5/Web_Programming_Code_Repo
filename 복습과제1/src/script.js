const quizData = [
    {
        question: "대한민국의 수도는 어디인가요?",
        a: "대구",
        b: "부산",
        c: "인천",
        d: "서울",
        correct: "d",
    },
    {
        question: "HTML에서 'H'의 의미는 무엇인가요?",
        a: "Hyper",
        b: "High",
        c: "Heavy",
        d: "Hyperlink",
        correct: "a",
    }
];

let currentQuestionIndex = 0;
let userScore = 0;
loadQuiz();

function loadQuiz() {
    const questionElement = document.getElementById('quiz-question');
    const optionElements = document.querySelectorAll('#quiz-options button');

    const currentQuestion = quizData[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;

    optionElements.forEach((option, index) => {
        option.innerText = currentQuestion[Object.keys(currentQuestion)[index + 1]];
    });
}

function selectOption(answer) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (answer === currentQuestion.correct) {
        userScore++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('quiz-options');
    resultElement.innerHTML = `You got ${userScore} out of ${quizData.length} correct.`;
}
