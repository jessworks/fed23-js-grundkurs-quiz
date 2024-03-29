function hidePage(): void {
  const start: HTMLElement | null = document.querySelector('#start-only');
  const startBtn: HTMLElement | null = document.querySelector('#start-button');
  const progressBarContainer: HTMLElement | null = document.querySelector('#progress-bar-container');
  const quizContainer: HTMLElement | null = document.getElementById('quiz-container');
  const stopWatch: HTMLElement | null = document.querySelector('#stopwatch');

  if (startBtn !== null && start !== null && quizContainer !== null && progressBarContainer !==  null 
    && stopWatch !==  null ) {
    startBtn?.addEventListener('click', function showQuizContainer () {
      start.classList.remove('grid');
      start.classList.add('hidden');

      quizContainer.classList.remove('hidden');
      progressBarContainer.classList.remove('hidden');
      stopWatch.classList.remove('hidden');

    });
  } 
}

export { hidePage };
//