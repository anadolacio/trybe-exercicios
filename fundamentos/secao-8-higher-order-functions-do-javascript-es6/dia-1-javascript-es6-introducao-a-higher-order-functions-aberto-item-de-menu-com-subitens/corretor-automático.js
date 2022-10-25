const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let score = 0;
const checkAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
for (i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
        score += 1;
    } else if (STUDENT_ANSWERS[i] === 'N.A') {
        score = score;
    } else {
        score -= 0.5;
    }
}
 return score;
}

const result = (RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers) => {
     scoreFinal = checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);
     return `Result: ${scoreFinal} pontos`;
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

