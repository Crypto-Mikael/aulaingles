const questions = [
  {
    question: "1. She _____ to school every day.",
    answers: ["A) go", "B) goes", "C) is going", "D) went"],
    correctAnswer: 1
  },
  {
    question: "2. My parents _____ coffee in the morning.",
    answers: ["A) drinks", "B) are drinking", "C) drink", "D) drank"],
    correctAnswer: 2
  },
  {
    question: "3. _____ your brother play soccer on weekends?",
    answers: ["A) Does", "B) Do", "C) Is", "D) Did"],
    correctAnswer: 0
  },
  {
    question: "4. I _____ TV after dinner.",
    answers: ["A) am watching", "B) watches", "C) watched", "D) watch"],
    correctAnswer: 3
  },
  {
    question: "5. Look! The children _____ in the park.",
    answers: ["A) play", "B) played", "C) are playing", "D) plays"],
    correctAnswer: 2
  },
  {
    question: "6. I can't talk now. I _____ my homework.",
    answers: ["A) do", "B) did", "C) am doing", "D) does"],
    correctAnswer: 2
  },
  {
    question: "7. What _____ you _____ right now?",
    answers: ["A) do / do", "B) are / doing", "C) did / do", "D) is / doing"],
    correctAnswer: 1
  },
  {
    question: "8. She _____ a book at the moment.",
    answers: ["A) reads", "B) read", "C) is reading", "D) reading"],
    correctAnswer: 2
  },
  {
    question: "9. We _____ to the beach last weekend.",
    answers: ["A) go", "B) goes", "C) went", "D) are going"],
    correctAnswer: 2
  },
  {
    question: "10. He _____ his homework yesterday.",
    answers: ["A) finished", "B) finishes", "C) is finishing", "D) finish"],
    correctAnswer: 0
  },
  {
    question: "11. _____ you watch the movie last night?",
    answers: ["A) Do", "B) Are", "C) Does", "D) Did"],
    correctAnswer: 3
  },
  {
    question: "12. They _____ pizza for dinner yesterday.",
    answers: ["A) eat", "B) ate", "C) are eating", "D) eats"],
    correctAnswer: 1
  },
  {
    question: "13. At 8 p.m. yesterday, I _____ TV.",
    answers: ["A) watch", "B) watched", "C) was watching", "D) am watching"],
    correctAnswer: 2
  },
  {
    question: "14. While she _____, her phone rang.",
    answers: ["A) was sleeping", "B) sleeps", "C) slept", "D) is sleeping"],
    correctAnswer: 0
  },
  {
    question: "15. They _____ football when it started to rain.",
    answers: ["A) played", "B) were playing", "C) are playing", "D) play"],
    correctAnswer: 1
  },
  {
    question: "16. I think it _____ rain tomorrow.",
    answers: ["A) will", "B) is", "C) did", "D) was"],
    correctAnswer: 0
  },
  {
    question: "17. Look at those clouds! It _____ rain.",
    answers: ["A) will", "B) is going to", "C) was going to", "D) did"],
    correctAnswer: 1
  },
  {
    question: "18. We _____ visit our grandparents next weekend.",
    answers: ["A) are going to", "B) went", "C) were", "D) have"],
    correctAnswer: 0
  },
  {
    question: "19. She _____ already _____ her homework.",
    answers: ["A) has / finished", "B) have / finish", "C) did / finished", "D) is / finishing"],
    correctAnswer: 0
  },
  {
    question: "20. I _____ never _____ to London.",
    answers: ["A) did / go", "B) have / been", "C) am / going", "D) was / being"],
    correctAnswer: 1
  }
];

const state = {
  currentQuestionIndex: 0,
  score: 0
};

const answerButtons = [
  document.getElementById("answer1"),
  document.getElementById("answer2"),
  document.getElementById("answer3"),
  document.getElementById("answer4")
];

document.getElementById("button-quiz").addEventListener("click", iniciarQuiz);
document.getElementById("restart-button").addEventListener("click", restartQuiz);

function iniciarQuiz() {
  state.currentQuestionIndex = 0;
  state.score = 0;
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("main-container").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  questionSetter(state.currentQuestionIndex);
}

function questionSetter(questionIndex) {
  const currentQuestion = questions[questionIndex];

  if (!currentQuestion) {
    return;
  }

  document.getElementById("quiz-container").children[0].textContent = `Pergunta ${questionIndex + 1}`;
  document.getElementById("question").textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.onclick = () => checkAnswer(index, questionIndex);
  });
}

function checkAnswer(selectedAnswerIndex, questionIndex) {
  const correctAnswerIndex = questions[questionIndex].correctAnswer;

  if (selectedAnswerIndex === correctAnswerIndex) {
    state.score += 1;
  }

  if (questionIndex + 1 < questions.length) {
    state.currentQuestionIndex += 1;
    questionSetter(state.currentQuestionIndex);
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("result").textContent = `Você acertou ${state.score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  document.getElementById("main-container").style.display = "block";

  state.currentQuestionIndex = 0;
  state.score = 0;
}