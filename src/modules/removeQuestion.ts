import { quizQuestions } from './quizData';

function removeObjFromArray (q:{question: string}): void {
  quizQuestions.forEach((obj, index) => {
    if (q.question === obj.question && quizQuestions.length > 10) {
      quizQuestions.splice(index, 1);
    }
  });
}


export { removeObjFromArray };