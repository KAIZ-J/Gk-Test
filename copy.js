  function shuffle(array){
let randomArray = [];
let copy = array;
for(let z=0;;z++){
let j = Math.floor(Math.random()*array.length);
if(!randomArray.includes(j)){
    randomArray.push(j);
}
if(randomArray.length===array.length) break;
}
for(let i=0;i<array.length/2;i++){
let term = array[i];
    array[i]=array[randomArray[i]]
array[randomArray[i]]=term;
}
return array;
       }
       function changeTheme(elem){
        document.body.classList.toggle("dark");
        if(document.body.className==="dark"){
          elem.textContent="☀️"
        }
        else{
          elem.textContent="🌙"
        }
       }
       const resultComments=["Get out of here,NOW🫵","Your such a failure😭","You didn't even try🥲","Could have been lower🙃","no comment😑","meh🥱","i mean you tried,right?😅","could have been better😒","nice~just nice😉","vola-cool😎","fiesta,Super🤩✨"]
       const dots = document.getElementById("dots")
        const results = document.getElementById("dialog");
        const submitBtn = document.getElementById("submit-btn");
        let score = 0;
        const home = document.getElementById("home");
        let currentSet = [];
        const questionsContainer = document.getElementById("questions-container");
  
function choicesFx(obj){
  let num = obj.id; 
let str = "";
shuffle([obj.correctAnswer,obj.incorrectAnswers[0],obj.incorrectAnswers[1],obj.incorrectAnswers[2]]).forEach(el=>{
  str+=`<button type="button" class="question-${num}-choice" id="question-${num}-choice-${el}" onclick="giveAnswer(this)">${el}</button>`;
})
return str;
}
function addToContainer(array){
  dots.innerHTML="";
   questionsContainer.innerHTML="";
        for(let i=0;i<array.length;i++){
     questionsContainer.innerHTML+=`
     <div id="question-${array[i].id}" class="question">
            <p>${array[i].question.text}</p>
            <div class="choices-container">
                ${choicesFx(array[i])}
            </div>
     `;
 dots.innerHTML+=`
    <span id="dot-${array[i].id}" class="dot" onclick="scrollToDiv(this)"><span>
     `
        }
        const observer = new IntersectionObserver((entries)=>{ 
        entries.forEach((entry)=>{
          let index = entry.target.id.split("-")[1];
        if(entry.isIntersecting){
        document.getElementById(`dot-${index}`).classList.add('show')
         }
         else{
           document.getElementById(`dot-${index}`).classList.remove('show')
         }
       })
       },{})
      const cards = document.querySelectorAll('.question');
       cards.forEach(el => observer.observe(el));
      }

     async function startTest(){
        try{
                let response = await fetch('https://the-trivia-api.com/v2/questions')
    let data = await response.json();
    currentSet=data;
     currentSet.forEach(el=>el["userAnswer"]="");
     console.log(currentSet);
      score = 0;
        results.style.display="none"
        home.style.display="none"
        questionsContainer.style.display="flex";
        submitBtn.style.display="block"
        submitBtn.setAttribute("disabled",true)
        addToContainer(currentSet);
           }
           catch(err){
            console.log("coudn't fetch");
            alert("Please Try Again")
           }
       

      }

      function giveAnswer(elem){
        [...document.querySelectorAll(`.${elem.className}`)].forEach(el=>el.classList.remove("active"))
        elem.classList.add("active");
        let id = elem.className.split("-")[1];
        let index = currentSet.findIndex(el=>el.id===id);
        let currentQuestion = currentSet[index];
        currentQuestion.userAnswer=elem.textContent;
        checkAllAnswered();
        document.getElementById(`dot-${id}`).classList.add("answered")

      }
      function submitTest(elem){
    for(let i=0;i<currentSet.length;i++){
         [...document.querySelectorAll(`.question-${currentSet[i].id}-choice`)].forEach(el=>el.setAttribute("disabled",true)) 
        let correctAnswer =  document.getElementById(`question-${currentSet[i].id}-choice-${currentSet[i].correctAnswer}`)
        correctAnswer.style.backgroundColor="green";
        correctAnswer.style.color="white";
        document.getElementById(`dot-${currentSet[i].id}`).classList.remove("answered")
      if(currentSet[i].correctAnswer===currentSet[i].userAnswer){
       score++;
       document.getElementById(`dot-${currentSet[i].id}`).style.backgroundColor="green";
      }
      else{
    document.getElementById(`question-${currentSet[i].id}-choice-${currentSet[i].userAnswer}`).style.backgroundColor="red";
    document.getElementById(`dot-${currentSet[i].id}`).style.backgroundColor="red";
      }
    }
    document.getElementById("dialog-outer").style.display="flex";
       
    results.innerHTML=`<span>${resultComments[score]}</span>
    <progress max="${currentSet.length}" value="${score}"></progress>
      <p id="text-over" style="color:${score>6?"white":"black"}">${score}/${currentSet.length}</p>
      <button type="button" id="startAgain" onclick="startTest()"">Play Again</button>`;
      elem.style.display="none";
       setTimeout(()=>{
results.classList.add("active");
        },100)
      }
      function checkAllAnswered(){
         if(currentSet.every(el=>el.userAnswer!=="")){
             submitBtn.removeAttribute("disabled")
        }
      }
   function scrollToDiv(elem){
     let index = elem.id.split("-")[1];
const targetElement = document.getElementById(`question-${index}`);
if (targetElement) {
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'      
  });
}
   }
       