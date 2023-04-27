const questions=[{
    que: "1) Which type of JavaScript language is ___",
    a:"Object-oriented",
    b:"Object-based",
    c:"Assembly-language",
    d:"Hight-level",
    correct:"b",
},
{
    que: "2) The function and var are known as:",
    a:"keyword",
    b:"data type",
    c:" Declaration",
    d:"Prototype",
    correct:"c",

},
{
    que: "3)Which of the following keywords is used to define a variable in Javascript?",
    a:"var",
    b:"let",
    c:"Both A and B",
    d:"none of these ",
    correct:"c",
},
{
    que: "4)Which of the following methods can be used to display data in some form using Javascript?",
    a:"document.write()",
    b:"consloe.log()",
    c:"wndow.alert()",
    d:"All of the above",
    correct:"d",

},
{
    que: "5) How can a datatype be declared to be constant type?",
    a:"const",
    b:"var",
    c:"let",
    d:"constant",
    correct:"a",

},
{   
    que: "6) var a = true + true + true * 3; print(a)",
    a:"3",
    b:"0",
    c:"Error",
    d:"5",
    correct:"d",

},
{   
    que: "7) Which of the following is not jawascript framework",
    a:"Node",
    b:"Vue",
    c:"React",
    d:"Cassandra",
    correct:"d",

},
{
    que: "8)Which jawascript methode is used to  acces an HTML element by id?",
    a:"getElementById()",
    b:"getElementId()",
    c:"getElementById(Id)",
    d:"elementById(id)",
    correct:"c",

},
{
    que: "9) Which property is used to define the HTML content to an HTML element with a specific id?",
    a:"innerText",
    b:"innerContent",
    c:"elementText",
    d:"innerHTML",
    correct:"d",

},
{
    que: "10) What does NaN means?",
    a:"Negative Number",
    b:"Not a Number",
    c:"Both A and B",
    d:"None of the Above",
    correct:"b",

}]

const questionBox = document.querySelector(".myquestion");
const myInput = document.querySelectorAll('.option');
const submit = document.querySelector('#btn');
console.log(myInput)


let index =0;
let total = questions.length;
let rightAns  = 0;
let wrongAns  = 0;

const myLoadQuestion =()=>{
    if(index===total){
        return endQuiz();
        
        }
        
     
    const data = questions[index];
     questionBox.innerHTML = data.que;
     myInput[0].nextElementSibling.innerHTML=data.a;
     myInput[1].nextElementSibling.innerHTML=data.b;
     myInput[2].nextElementSibling.innerHTML=data.c;
     myInput[3].nextElementSibling.innerHTML=data.d;
}
myLoadQuestion()



// for sumbit button 
let submitBtn = ()=>{
    const ans = getAns();
    if(ans===questions[index].correct){
        rightAns++;

    }
    else{
        wrongAns++;
    }
    index++;
    myLoadQuestion();
    reset();
    return;
}

submit.addEventListener('click', submitBtn);


let getAns =()=>{
    let answer;
    myInput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
                
            }
            
        }
    )
    return answer;
}

// for reset 
let reset = () =>{
    myInput.forEach((input)=>{
        input.checked = false;
    })
}

// nake fucntion for end quiz 
const endQuiz = ()=>{
   
    if(rightAns==5 ||rightAns==6 ||rightAns==7 ||rightAns==8 ||rightAns==9 ||rightAns==10){
        document.querySelector('.box').innerHTML = `<h1>Quiz End <br></h1> 
        <h2> your score is ${rightAns} out of ${total}<br></h2>
        <h1> you passed the exam</h1>`

    }
    else{
        document.querySelector('.box').innerHTML = `<h1>Quiz End <br></h1> 
        <h1 text-center> your score is ${rightAns} out of  ${total}<br></h1>
        <h1> you Failed the exam</h1>`
    }
}





