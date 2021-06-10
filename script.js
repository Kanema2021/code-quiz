
let sec = 60; 
function startTimer(){
    let timer = setInterval(function(){
        sec--;
          document.getElementById("timerDisplay").innerHTML="00:"+ sec;
      if (sec < 0) {
          clearInterval(timer);
          alert("Sorry - you ran out of time!!")
          }
      }, 1000);      
  }



   






  const startButton = document.getElementById("startButton").addEventListener("click", function() {
    //document.getElementById('timerDisplay').innterHTML="00:" +sec;
});

startTimer(startButton);

const startQuizButton=document.getElementById("startButton");
startQuizButton.addEventListener("click", startQuiz);

const answerButton1=document.getElementsByClassName("answer1");
for (var i = 0; i < answerButton1.length; i++) {
    answerButton1[i].addEventListener('click', processResults);
}

const answerButton2=document.getElementsByClassName("answer2");
for (var i = 0; i < answerButton2.length; i++) {
    answerButton2[i].addEventListener('click', processResults);
}

const answerButton3=document.getElementsByClassName("answer3");
for (var i = 0; i < answerButton3.length; i++) {
    answerButton3[i].addEventListener('click', processResults);
}

const answerButton4=document.getElementsByClassName("answer4");
for (var i = 0; i < answerButton4.length; i++) {
    answerButton4[i].addEventListener('click', processResults);
}


function startQuiz(){
    const welcomeScreen = document.getElementById("welcome");
    welcomeScreen.classList.add('hide');
  
    const quizContainer = document.getElementById("questionsDiv");
    quizContainer.classList.remove('hide');

    const question1El = document.getElementById("question1");
    question1El.classList.remove('hide');

    const question2El = document.getElementById("question2");
    question2El.classList.add('hide');

    const question3El = document.getElementById("question3");
    question3El.classList.add('hide');

    const question4El = document.getElementById("question4");
    question4El.classList.add('hide');
}



function processResults(event){
    
    const answer = event.target.dataset.answer
    const question = event.target.dataset.questionnumber

    if(question === "1" && answer === "blue"){
        const totaleSCoreEl = document.getElementById("score")
        totaleSCoreEl.innerHTML = parseInt(totaleSCoreEl.innerHTML) + 10
    } 
    else {
        sec -= 10;
    }
    if(question === "2" && answer === "Steven Spielberg"){
        const totaleSCoreEl = document.getElementById("score")
        totaleSCoreEl.innerHTML = parseInt(totaleSCoreEl.innerHTML) + 10
    } 
    else {
        sec -= 10;
    }
    if(question === "3" && answer === "Draco Malfoy"){
        const totaleSCoreEl = document.getElementById("score")
        totaleSCoreEl.innerHTML = parseInt(totaleSCoreEl.innerHTML) + 10
    } 
    else {
        sec -= 10;
    }
    if(question === "4" && answer === "The Black Pearl"){
        const totaleSCoreEl = document.getElementById("score")
        totaleSCoreEl.innerHTML = parseInt(totaleSCoreEl.innerHTML) + 10
    } 
    else {
        sec -= 10;
    }
   
        showNextQuestion(question)
}

    function showNextQuestion(questionNumber){

       const nextQuestionNumber = parseInt(questionNumber) + 1 

        const question1El = document.getElementById("question1");
        question1El.classList.add('hide');
     
        const question2El = document.getElementById("question2");
        question2El.classList.add('hide');
     
        const question3El = document.getElementById("question3");
        question3El.classList.add('hide');
     
        const question4El = document.getElementById("question4");
        question4El.classList.add('hide');
        if (questionNumber === "4"){
        console.log("ShowResults")

        } else {
            const nextQuestion = document.getElementById("question" + nextQuestionNumber);
            nextQuestion.classList.remove('hide'); 
        }
        
    }

         
    function saveHighScores (e){

        let highScore = JSON.parse(localStorage.getItem("highScore")) || [];
         console.log(highScore)
    
        const userName = document.getElementById("username").value;
        console.log(userName)

        const scores = document.getElementById("highScore").value;

        const playerScore = {
            name: userName,
            playerScores: scores
        }

            highScore.push(playerScore)
            localStorage.setItem("highScore",JSON.stringify(saveHighScores));

        
      };
    
    
    
    







// //     const username = document.getElementById("username");
//     let saveHighScore = document.getElementById("saveScoreButton");
// //     const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    
// //    localStorage.getItem("highScores", JSON.stringify([]));
// //    console.log(JSON.parse(localStorage.getItem("highScores")));

//    saveHighScore = e => {
       
//         const finalScore = {
//             yourScore: saveHighSCore,
//             name: username.value
//         };
//         console.log(finalScore);
//    };











   

