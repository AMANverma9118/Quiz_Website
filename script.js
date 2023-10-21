function MyFunction() {
    window.location.href = "firstpage.html";
}

function text() {
    //Taking data
    var first_name = document.getElementById("Firstname").value;
    var last_name = document.getElementById("Lastname").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("State").value;
    const count = 0;
    //Storing in localstorage

    var name = localStorage.setItem("Name", first_name + last_name);
    var phone_number = localStorage.setItem("Phone_number", number);
    var email_user = localStorage.setItem("Email", email);
    var state_user = localStorage.setItem("State", state);

    var name = localStorage.setItem("Name", first_name + last_name);
    var phone_number = localStorage.setItem("Phone_number", number);
    var email_user = localStorage.setItem("Email", email);
    var state_user = localStorage.setItem("State", state);

    var a, b, c, d;
    a = first_name + last_name;
    b = number;
    c = email;
    d = state;
    if (a.length == 0 || b.length == 0 || c == 0 || d == 0) {
        alert("Fill all the information");
        count++;
    }

    if (count > 0) {
        text();
    }
    if (a.length != 0 && b.length != 0 && c != 0 && d != 0){
        alert("Your information successfully submited");
    }
    
    
    const submit = document.querySelector('.btn1');
    const instruction = document.querySelector('.instruction');
    instruction.classList.add('active');

}
function exit() {
    const submit = document.querySelector('.btn1');
    const instruction = document.querySelector('.instruction');
    const exit = document.querySelector('.info-btn_exit-btn');
    window.location.href = "index.html"

}

function cont() {
    window.location.href = "Quiz_question.html";
}

function exit(){
    window.location.href = "index.html";
}


//Quiz question

const quizdata = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyperlink and Text Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Marking Language",
            "Hyper Text Machine Language",
        ],
        correct: 1,
        timeLimit: 10,
    },

    {
        question: "Who is the father of HTML?",
        options: [
            "Rasmus Lerdorf",
            "Brendan Eich",
            "Tim Berners-Lee",
            "Sergey Brin",
        ],
        correct: 2,
        timeLimit: 10,
        timeLimit: 10,
    },

    {
        question: "Which of the below is the abbreviation of CSS ?",
        options: [
            "Cascading Style Sheets",
            "Color and Style Sheets",
            "Coded Style Sheet",
            "Cascade Sheet Style",
        ],
        correct: 0,
        timeLimit: 10,
    },

    {
        question: "Which of the following tag is used to embed css in html page?",
        options: [
            "<css>",
            " <!DOCTYPE html>",
            "<script>",
            "<style>",
        ],
        correct: 3,
        timeLimit: 10,
    },

    {
        question: "Which magical creature is known for guarding banks?",
        options: [
            "Phoenix",
            "Dragon",
            "Griffin",
            "Goblin",
        ],
        correct: 3,
        timeLimit: 10,
    },

    {
        question: "What spell is used to unlock doors?",
        options: [
            "Incendio",
            "Alohomora",
            "Lumos",
            "Expelliarmus",
        ],
        correct: 1,
        timeLimit: 10,
    },
];




//Intialise 

const quiz = document.querySelector('#quiz-section');
const answerElm = document.querySelectorAll('.answer');
const [questionelm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll("#question , .option_1, .option_2, .option_3, .option_4");
const submit = document.querySelector("#submit2");
const skip = document.querySelector("#skip");

let currentQuiz = 0;
let score = 0;
const timer = document.querySelector("timer1");

//Load quiz question

const loadQuiz = () => {
    const { question, options } = quizdata[currentQuiz];
    questionelm.innerText = `${currentQuiz+1}. ${question}`;

    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
//   displayQuestion();  
};

loadQuiz();

let currentQuestionIndex = 0; // Index of the current question
let timerInterval;

if(currentQuiz+1 < quizdata.length){
    function displayQuestion(index) {
        const questionElement = document.getElementById('question');
        const optionElements = document.querySelectorAll('.option');
        const countdownElement = document.getElementById('countdown');
        
        // Display the question and options
        // questionElement.textContent = quizdata[index].question;
        // for (let i = 0; i < optionElements.length; i++) {
        //     optionElements[i].textContent = quizdata[index].options[i];
        // }
        
        // // Reset the radio buttons
        // const answerInputs = document.querySelectorAll('.answer');
        // for (let i = 0; i < answerInputs.length; i++) {
        //     answerInputs[i].checked = false;
        // }
        
        // Set the initial time limit
        let timeRemaining = quizdata[index].timeLimit;
        countdownElement.textContent = timeRemaining + ' seconds';
        
        // Start the timer
        clearInterval(timerInterval); // Clear any previous timer
        timerInterval = setInterval(function () {
            timeRemaining--;
            countdownElement.textContent = timeRemaining + ' seconds';
            
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                // Time's up! You can perform some action here.
                // For example, move to the next question.
                if (currentQuiz < quizdata.length - 1) {
                    currentQuiz++;
                    loadQuiz();
                }
                else{
                    quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length*5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('Name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        <button class="reload-button" onclick="exit();">Exit game</button>
        </div>`
        ;
                }
                displayQuestion(currentQuiz);
                
            }
        }, 1000);
    }
    
    // Initialize the first question and timer
    displayQuestion(currentQuiz);
    
    
}


//taking user answer

const getselectedoption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
};

// deselectedAnswer
const deselectedAnswer = () =>{
    answerElm.forEach((curOption) => curOption.checked = false);
}

submit.addEventListener("click", () => {
    const selectedOptionIndex = getselectedoption();

    if (selectedOptionIndex.length==0)
    {
        deselectedAnswer();
        loadQuiz();
        
    }

    if(selectedOptionIndex == quizdata[currentQuiz].correct){
        score = score+5;
    }
    else if(selectedOptionIndex != quizdata[currentQuiz].correct){
        score = score-1;
    }
       
        currentQuiz++;
        if(currentQuiz < quizdata.length){
            displayQuestion(currentQuestionIndex);
        }
        

    if (currentQuiz < quizdata.length) {
        deselectedAnswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length*5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('Name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        <button class="reload-button" onclick="exit();">Exit game</button>
        </div>`
        ;
    }

});

skip.addEventListener("click", () => {
    if(currentQuiz < quizdata.length){
        displayQuestion(currentQuestionIndex);
    }
    
    currentQuiz++;
    if(currentQuiz<quizdata.length){
        deselectedAnswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length*5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('Name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        <button class="reload-button" onclick="exit();">Exit game</button>
        </div>`
        ;
    }
});
