const correctAnswers = ['A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const scoreSection = document.querySelector('.score');
const result = document.querySelector('.score span');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score++;
        }
    } );

    scrollTo(0, 0);
    scoreSection.style = 'visibility: visible;';
    let i=0;
    const timer = setInterval(()=> {
        i++;
        result.textContent = `${i} %`;
        if(i === (score*100)/4){
            clearInterval(timer);
        }
    }, 10);
})

