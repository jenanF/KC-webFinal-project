
// let bok = document.getElementById("book");

// const questions = [
//     {
//         id:1,
//         question: "اي نوع من الالعاب تفضل؟",

//         options :[
//             "الجماعية",
//             "القتالية",
//             "التنافسية",
//             "الفردية"
//         ]
//     },
//     {
//         id:2,
//         question: "هل تفضل ل",
//         option1:"a",


//         options :[
//             "a",
//             "b",
//             "c",
//             "d"
//         ]
//     },
//     {
//         id:3,
//         question: "asd",

//         options :[
//             "a",
//             "b",
//             "c",
//             "d"
//         ]
//     },
//     {
//         id:4,
//         question: "asd",


//         options :[
//             "a",
//             "b",
//             "c",
//             "d"
//         ]
//     },
//     {
//         id:5,
//         question: "asd",

//         options :[
//             "a",
//             "b",
//             "c",
//             "d"
//         ]
//     },
//     {
//         id:6,
//         question: "asd",

//         options :[
//             "a",
//             "b",
//             "c",
//             "d"
//         ]
//     },

// ];







// let Qcount = 0;
// let points = 0;

// window.onload = function(){
//     show(Qcount);
// };

// function show(count){
//     let question = document.getElementById("quizb");
//     let[ op1, op2, op3, op4] = questions[count].options;

//     question.innerHTML = `<h2 class="hcol">س${count + 1}.${questions[count].question}</h2>
//     <ul class="options_group">

//         <li class="option">${op1}</li>
//         <li class="option"> ${op2}</li>
//         <li class="option">${op3}</li>
//         <li class="option">${op4}</li>

//    </ul>`;
//    toggleActive();
// }


// function toggleActive(){

//     let option = document.querySelectorAll("li.option");

//     for( let i=0; i< option.length; i++){
//         option[i].onclick = function(){
//             for( let i=0; i< option.length; i++){

//                 if(option[i].classList.contains("active")){
//                     option[i].classList.remove("active")
//                 }
//             }
//             option[i].classList.add("active");
//         }
//     }
// }


// function next(){

//     if(Qcount == question.length -1){
//         location.href = "ruselt.html";
//     }
//     console.log(Qcount);
// }
// let answer = document.querySelector("li.option.active").innerHTML;

// if(answer == questions[Qcount].answer){
//     points +=10;
//     sessionStorage.setItem("points", points);
// }

// console.log(points);

// Qcount++;

// show(Qcount);


