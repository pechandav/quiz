function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output=[];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers=[];
            for(letter in questions[i].answers){
                answers.push("<label>" +)
            }
        }
	}

	function showResults(quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(quizContainer, resultsContainer);
	}
}

// questions

var questions = [
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


start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block";
    renderCounter();
    TIMER= setInterval(renderCounter,1000)
}





