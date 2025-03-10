const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const questionText = document.getElementById("question");
const answerButtons = document.querySelectorAll("#answer-btn .btn"); 
const nextButton = document.getElementById("next-btn");
const timerDisplay = document.getElementById("timer");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-btn");
const startButton = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let timer;
let timeLeft = 15;


async function fetchQuestions() {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    const url = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        questions = data.results.map((q, index) => formatQuestion(q, index + 1));
        startQuiz(); 
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}


function formatQuestion(q, index) {
    let answers = [...q.incorrect_answers];
    let correctIndex = Math.floor(Math.random() * 4); 
    answers.splice(correctIndex, 0, q.correct_answer);
    return {
        question: q.question,
        options: answers,
        correctAnswer: q.correct_answer,
        number: index, 
    };
}


function startQuiz() {
    startScreen.style.display = "none"; 
    questionScreen.style.display = "flex"; 
    currentQuestionIndex = 0; 
    score = 0; 
    showQuestion(); 
}


function showQuestion() {
    updateUI(); 
    const currentQuestion = questions[currentQuestionIndex]; 
    questionText.innerHTML = `${currentQuestion.number}. ${currentQuestion.question}`; 
    answerButtons.forEach((button, index) => {
        button.innerHTML = currentQuestion.options[index]; 
        button.style.backgroundColor = ""; 
        button.onclick = () => selectAnswer(button, currentQuestion.correctAnswer); 
    });

    startTimer(); 
}


function updateUI() {
    clearInterval(timer); 
    timeLeft = 15; 
    timerDisplay.innerText = `Time: ${timeLeft}`; 
    nextButton.style.display = "none"; 
    answerButtons.forEach(button => button.style.backgroundColor = ""); 
}


function startTimer() {
    timer = setInterval(() => {
        timeLeft--; 
        timerDisplay.innerText = `Time: ${timeLeft}`; 
        if (timeLeft === 0) {
            clearInterval(timer); 
            revealAnswer(); 
        }
    }, 1000); 
}


function selectAnswer(button, correctAnswer) {
    clearInterval(timer); 
    const selectedAnswer = button.innerText; 
    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = "green"; 
        score++; 
    } else {
        button.style.backgroundColor = "red"; 
        revealAnswer(); 
    }
    nextButton.style.display = "block";
}


function revealAnswer() {
    answerButtons.forEach(button => {
        if (button.innerText === questions[currentQuestionIndex].correctAnswer) {
            button.style.backgroundColor = "green"; 
        }
    });
    nextButton.style.display = "block"; 
}


nextButton.addEventListener("click", () => {
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    } else {
        showResults(); 
    }
});


function showResults() {
    questionScreen.style.display = "none"; 
    resultScreen.style.display = "flex";
    finalScore.innerText = `${score}/20`;
}


restartButton.addEventListener("click", () => {
    resultScreen.style.display = "none"; 
    startScreen.style.display = "flex"; 
});


startButton.addEventListener("click", fetchQuestions); 
