function text()
{
//Taking data
var first_name = document.getElementById("Firestname").value;
var last_name = document.getElementById("Lastname").value;
var number = document.getElementById("number").value;
var email = document.getElementById("email").value;
var state = document.getElementById("State").value;
const count=0;
//Storing in localstorage

var name = localStorage.setItem("Name" , first_name+last_name);
var phone_number = localStorage.setItem("Phone_number" , number);
var email_user = localStorage.setItem("Email" , email);
var state_user = localStorage.setItem("State" , state);

var name = localStorage.setItem("Name" , first_name+last_name);
var phone_number = localStorage.setItem("Phone_number" , number);
var email_user = localStorage.setItem("Email" , email);
var state_user = localStorage.setItem("State" , state);

var a,b,c,d;
a=first_name+last_name;
b=number;
c=email;
d=state;
if(a.length==0 || b.length==0 || c==0 || d==0){
    alert("Fill all the information");
    count++;
}

if(count>0)
{
    text();
}



const submit = document.querySelector('.btn1');
const instruction = document.querySelector('.instruction');
instruction.classList.add('active');

}
function exit(){
    const submit = document.querySelector('.btn1');
    const instruction = document.querySelector('.instruction');
    const exit = document.querySelector('.info-btn_exit-btn');
    window.location.href="index.html"
    
}



