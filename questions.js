var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  {
      question: "What does HTML stand for?",
      a: "Heavy Translated Multiple Language",
      b: "Hypertext MArkup Language",
      c: "How To Make a Language",
      answer: "B"
    },
  {
      question: "What doe JS stand for?",
      a: "J-script",
      b: "Just Styles",
      c: "Javascript",
      answer: "C"
    },
  {
      question: "What does CSS stand for?",
      a: "Cascading Style Sheet",
      b: "Corrupt Sheet System",
      c: "Cascading Sheets System",
      answer: "A"
    },
  {
      question: "What does var stand for? ",
      a: "vary",
      b: "variant",
      c: "variable",
      answer: "C"
    }
  ];
  var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);
 
function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    
    pos = 0;
    correct = 0;
    
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
 
  test.innerHTML = "<h3>"+question+"</h3>";
  
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos].answer){
    
    correct++;
  }
 
  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);