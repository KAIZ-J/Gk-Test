 function get1sClassName(str){
           return Number(str.split(" ")[0].match(/[0-9]/g).join(""))
        }
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
       const dots = document.getElementById("dots")
        const results = document.getElementById("results");
        const submitBtn = document.getElementById("submit-btn");
        let score = 0;
        const home = document.getElementById("home")
        const questionsContainer = document.getElementById("questions-container")
 const generalKnowledgeSet1=[{question:"What is the capital of France?",options:["Berlin","Madrid","Paris","Rome"],answer:"C",userAnswer:""},{question:"How many continents are there?",options:["5","6","7","8"],answer:"C",userAnswer:""},{question:"Which planet is known as the Red Planet?",options:["Venus","Mars","Jupiter","Mercury"],answer:"B",userAnswer:""},{question:"Who wrote 'Romeo and Juliet'?",options:["Shakespeare","Homer","Tolstoy","Chaucer"],answer:"A",userAnswer:""},{question:"What is the largest mammal on Earth?",options:["Elephant","Blue Whale","Giraffe","Shark"],answer:"B",userAnswer:""},{question:"Which gas do humans need to breathe?",options:["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"],answer:"A",userAnswer:""},{question:"Which country is known as the Land of the Rising Sun?",options:["India","Japan","China","Thailand"],answer:"B",userAnswer:""},{question:"In which year did World War II end?",options:["1940","1945","1950","1939"],answer:"B",userAnswer:""},{question:"What is the hardest natural substance on Earth?",options:["Iron","Gold","Diamond","Quartz"],answer:"C",userAnswer:""},{question:"Who developed the theory of relativity?",options:["Newton","Einstein","Galileo","Tesla"],answer:"B",userAnswer:""}];
const generalKnowledgeSet2=[{question:"What is the smallest prime number?",options:["0","1","2","3"],answer:"C",userAnswer:""},{question:"Which ocean is the largest?",options:["Indian","Atlantic","Pacific","Arctic"],answer:"C",userAnswer:""},{question:"Who painted the Mona Lisa?",options:["Michelangelo","Leonardo da Vinci","Raphael","Van Gogh"],answer:"B",userAnswer:""},{question:"What is H2O commonly known as?",options:["Hydrogen","Oxygen","Water","Salt"],answer:"C",userAnswer:""},{question:"Which organ pumps blood in the body?",options:["Brain","Heart","Liver","Lungs"],answer:"B",userAnswer:""},{question:"Which country hosted the 2016 Olympics?",options:["China","Brazil","UK","Russia"],answer:"B",userAnswer:""},{question:"Which is the tallest mountain on Earth?",options:["Everest","K2","Kilimanjaro","Makalu"],answer:"A",userAnswer:""},{question:"Who invented the telephone?",options:["Edison","Bell","Tesla","Marconi"],answer:"B",userAnswer:""},{question:"Which blood type is universal donor?",options:["A","B","AB","O-"],answer:"D",userAnswer:""},{question:"Which is the longest river in the world?",options:["Nile","Amazon","Yangtze","Mississippi"],answer:"B",userAnswer:""}];
const generalKnowledgeSet3=[{question:"What is the national currency of Japan?",options:["Yen","Won","Dollar","Peso"],answer:"A",userAnswer:""},{question:"Who discovered penicillin?",options:["Fleming","Darwin","Curie","Pasteur"],answer:"A",userAnswer:""},{question:"What is the chemical symbol for Gold?",options:["Ag","Au","Gd","Go"],answer:"B",userAnswer:""},{question:"Which desert is the largest in the world?",options:["Sahara","Gobi","Kalahari","Arctic"],answer:"A",userAnswer:""},{question:"Which planet has the most moons?",options:["Earth","Mars","Saturn","Neptune"],answer:"C",userAnswer:""},{question:"In which year did man first land on the moon?",options:["1965","1969","1972","1975"],answer:"B",userAnswer:""},{question:"Which scientist proposed the three laws of motion?",options:["Galileo","Newton","Einstein","Faraday"],answer:"B",userAnswer:""},{question:"What is the freezing point of water in Fahrenheit?",options:["0","32","100","212"],answer:"B",userAnswer:""},{question:"Which continent is the Sahara Desert located in?",options:["Asia","Africa","Australia","South America"],answer:"B",userAnswer:""},{question:"Which is the fastest land animal?",options:["Tiger","Cheetah","Horse","Leopard"],answer:"B",userAnswer:""}];
const generalKnowledgeSet4=[{question:"Which element has the atomic number 1?",options:["Oxygen","Hydrogen","Helium","Carbon"],answer:"B",userAnswer:""},{question:"Which country gifted the Statue of Liberty to the USA?",options:["UK","France","Spain","Germany"],answer:"B",userAnswer:""},{question:"What is the square root of 144?",options:["10","11","12","13"],answer:"C",userAnswer:""},{question:"Which gas causes the greenhouse effect the most?",options:["CO2","O2","N2","H2"],answer:"A",userAnswer:""},{question:"In which year did the Titanic sink?",options:["1910","1912","1915","1920"],answer:"B",userAnswer:""},{question:"What is the capital of Canada?",options:["Toronto","Vancouver","Ottawa","Montreal"],answer:"C",userAnswer:""},{question:"Who was the first man to orbit the Earth?",options:["Neil Armstrong","Yuri Gagarin","Buzz Aldrin","John Glenn"],answer:"B",userAnswer:""},{question:"Which instrument measures earthquakes?",options:["Barometer","Seismograph","Thermometer","Altimeter"],answer:"B",userAnswer:""},{question:"Which is the smallest planet in our solar system?",options:["Pluto","Mercury","Mars","Venus"],answer:"B",userAnswer:""},{question:"What is the national sport of Japan?",options:["Sumo","Karate","Judo","Kendo"],answer:"A",userAnswer:""}];
const generalKnowledgeSet5=[{question:"Which organelle is known as the powerhouse of the cell?",options:["Nucleus","Mitochondria","Ribosome","Chloroplast"],answer:"B",userAnswer:""},{question:"Who proposed the theory of evolution by natural selection?",options:["Einstein","Newton","Darwin","Mendel"],answer:"C",userAnswer:""},{question:"What is the capital city of Australia?",options:["Sydney","Canberra","Melbourne","Perth"],answer:"B",userAnswer:""},{question:"Which physicist is famous for the uncertainty principle?",options:["Bohr","Einstein","Heisenberg","Planck"],answer:"C",userAnswer:""},{question:"What is the SI unit of Force?",options:["Pascal","Newton","Joule","Watt"],answer:"B",userAnswer:""},{question:"Which part of the brain controls balance?",options:["Cerebrum","Cerebellum","Medulla","Hypothalamus"],answer:"B",userAnswer:""},{question:"Which metal is liquid at room temperature?",options:["Mercury","Lead","Sodium","Aluminum"],answer:"A",userAnswer:""},{question:"Which language has the most native speakers?",options:["English","Mandarin","Hindi","Spanish"],answer:"B",userAnswer:""},{question:"Which treaty ended World War I?",options:["Paris","Versailles","Geneva","Vienna"],answer:"B",userAnswer:""},{question:"Who was the first woman to win a Nobel Prize?",options:["Curie","Meitner","Franklin","Hopper"],answer:"A",userAnswer:""}]
const allSets = [generalKnowledgeSet1,generalKnowledgeSet2,generalKnowledgeSet3,generalKnowledgeSet4,generalKnowledgeSet5]
let currentSetNumber =parseInt(localStorage.getItem("currentSetNum")) || 0;
document.getElementById("set-text").textContent=currentSetNumber+1<6?`Set ${currentSetNumber+1}/5`:"Set Completed";
if(currentSetNumber>4){
  document.getElementById("start").textContent="Finished";
   document.getElementById("start").setAttribute("disabled",true)
}
let currentSet = allSets[currentSetNumber];
function addToContainer(array){
  dots.innerHTML="";
   questionsContainer.innerHTML="";
        for(let i=0;i<array.length;i++){
     questionsContainer.innerHTML+=`
     <div id="question-${i}" class="question">
            <p>${array[i].question}</p>
            <div class="choices-container">
                <button type="button" class="question-${i}-choice" id="question-${i}-choice-A" onclick="giveAnswer(this)">${array[i].options[0]}</button>
                <button type="button" class="question-${i}-choice" id="question-${i}-choice-B" onclick="giveAnswer(this)">${array[i].options[1]}</button>
                <button type="button" class="question-${i}-choice" id="question-${i}-choice-C" onclick="giveAnswer(this)">${array[i].options[2]}</button>
                <button type="button" class="question-${i}-choice" id="question-${i}-choice-D" onclick="giveAnswer(this)">${array[i].options[3]}</button>
            </div>
     `;
 dots.innerHTML+=`
    <span id="dot-${i}" class="dot" onclick="scrollToDiv(this)"><span>
     `
        }
        const observer = new IntersectionObserver((entries)=>{ 
        entries.forEach((entry)=>{
          let index = get1sClassName(entry.target.id);
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

      function startTest(){
        score = 0;
        results.style.display="none"
        home.style.display="none"
        questionsContainer.style.display="flex";
        submitBtn.style.display="block"
        submitBtn.setAttribute("disabled",true)
        addToContainer(shuffle(currentSet));

      }
      function goHome(){
        score = 0;
        results.style.display="none";
        questionsContainer.style.display="none"
         home.style.display="block";
         submitBtn.style.display="none";
         document.getElementById("start").textContent="Finished";
   document.getElementById("start").setAttribute("disabled",true);
   document.getElementById("set-text").textContent=currentSetNumber+1<6?`Set ${currentSetNumber+1}/5`:"Set Completed";

      }
      function giveAnswer(elem){
        [...document.querySelectorAll(`.${elem.className}`)].forEach(el=>el.classList.remove("active"))
        elem.classList.add("active");
        let index = get1sClassName(elem.className);
        let currentQuestion = currentSet[index];
        currentQuestion.userAnswer=elem.id.match(/[A-D]/g).join("");
        checkAllAnswered();
        document.getElementById(`dot-${index}`).classList.add("answered")

      }
      function submitTest(elem){
    for(let i=0;i<currentSet.length;i++){
         [...document.querySelectorAll(`.question-${i}-choice`)].forEach(el=>el.setAttribute("disabled",true)) 
        let correctAnswer =  document.getElementById(`question-${i}-choice-${currentSet[i].answer}`)
        correctAnswer.style.backgroundColor="green";
        correctAnswer.style.color="white";
        document.getElementById(`dot-${i}`).classList.remove("answered")
      if(currentSet[i].answer===currentSet[i].userAnswer){
       score++;
       document.getElementById(`dot-${i}`).style.backgroundColor="green";
      }
      else{
    document.getElementById(`question-${i}-choice-${currentSet[i].userAnswer}`).style.backgroundColor="red";
    document.getElementById(`dot-${i}`).style.backgroundColor="red";
      }
    }
    currentSetNumber+=1;
    localStorage.setItem("currentSetNum",currentSetNumber);
    if(currentSetNumber<5){
 currentSet = allSets[currentSetNumber]
    }
  
    results.style.display="flex";
    results.innerHTML=`<progress max="${currentSet.length}" value="${score}"></progress>
      <p id="text-over" style="color:${score>6?"white":"black"}">${score}/${currentSet.length}</p>
      <button type="button" id="startAgain" onclick="${currentSetNumber<5?"startTest()":"goHome()"}">${currentSetNumber<5?`Continue to Set ${currentSetNumber+1}`:"Back to Home"}</button>`;
      elem.style.display="none";
      }
      function checkAllAnswered(){
         if(currentSet.every(el=>el.userAnswer!=="")){
             submitBtn.removeAttribute("disabled")
        }
      }
   function scrollToDiv(elem){
     let index = get1sClassName(elem.id);
const targetElement = questionsContainer.children[index];
if (targetElement) {
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'      
  });
}
   }
       