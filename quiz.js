const quizForm=document.querySelector('.quiz-form');
const submitAnswerButton=document.querySelector('#submit-answer-btn');
const outputScore=document.querySelector('#output');
const correctAnswer=["90","Right","Equilateral triangle","36","Isoceles triangle"];

function calculateScore(){
let score=0;
let index=0;
const formResults = new FormData(quizForm);
for(let value of formResults.values()){
    if(value===correctAnswer[index]){
        score=score+1;
    }
    index=index+1;
}
outputScore.innerText="The score is "+score;
}

submitAnswerButton.addEventListener('click',calculateScore);