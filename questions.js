const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const counter= document.getElementById("counter");
const scoreDiv= document.getElementById("scoreContainer");

// questions

let questions = [
    {
        question: "What does HTML stand for?",
        choiceA: "Heavy Translated Multiple Language",
        choiceB: "Hypertext Markup Language",
        choiceC: "How To Make Language",
        correct: "B"

    }, {
        question: "What does JS stand for?",
        choiceA: "Javascript",
        choiceB: "J-script",
        choiceC: "Just Styles",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        choiceA: "Corrupt Sheet System",
        choiceB: "Cascading Style Sheets",
        choiceC: "Cascading Sheets System",
        correct: "B"
    }

];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 15s
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block";
    renderCounter();
    TIMER= setInterval(renderCounter,1000)
}



function renderCounter(){
    if(count <=questionTime){
        counter.innerHTML=count;
        count * questionTime + "px";
        count++
    }
    else{
        count=0;
        answerIsWrong();
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();}
        else{
            clearInterval(TIMER);
            scoreRender();
        }
        }
    }

    //check answer
    function checkAnswer (answer) {
        if(answer==questions[runningQuestion].correct){score++;
        answerIsCorrect();
    }
    else{answerIsWrong();
    }
    count= 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        clearInterval(TIMER);
        scoreRender();
    }
    }
    

