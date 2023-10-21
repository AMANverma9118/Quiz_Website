function text() {
    //Taking data
    var first_name = document.getElementById("Firestname").value;
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


//Load quiz question

const loadQuiz = () => {
    const { question, options } = quizdata[currentQuiz];
    questionelm.innerText = `${currentQuiz+1}. ${question}`;

    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};

loadQuiz();


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

    if (currentQuiz < quizdata.length) {
        deselectedAnswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length*5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        </div>`
        ;
    }

});

skip.addEventListener("click", () => {

    currentQuiz++;
    if(currentQuiz<quizdata.length){
        deselectedAnswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class="result">
        <h2>🎉 Your score: ${score}/${quizdata.length*5} correct Answers </h2>
        <p>Congratulations on completing the quiz! ${localStorage.getItem('name')} 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play again 🔁</button>
        </div>`
        ;
    }
});
