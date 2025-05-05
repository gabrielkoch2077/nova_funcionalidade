let quizShown = false;

setTimeout(() => {
  showQuiz();
}, 15000);

function showQuiz() {
  if (!quizShown) {
    document.getElementById('quizOverlay').style.display = 'block';
    quizShown = true;
  }
}

function checkAnswer(element, type) {
  const options = document.querySelectorAll('.quiz-option');
  const continueBtn = document.getElementById('continueBtn');

  options.forEach(opt => {
    opt.style.pointerEvents = 'none';
    if (opt === element) {
      opt.classList.add(type === 'correct' ? 'correct' : 'incorrect');
    } else if (opt.textContent === 'Brasília') {
      opt.classList.add('correct');
    }
  });

  continueBtn.classList.remove('hidden');
}

function continueVideo() {
  document.getElementById('quizOverlay').style.display = 'none';
}