const questions =[
  {
    'que':'Which of the following is a Markup Language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
  },

  {
    'que': 'In what year was Javascript launched?',
      'a': '1996',
      'b': '1995',
      'c': '1994',
      'd': 'none of the above',
      'correct': 'b'
  },

  {
    'que': "What does CSS stands for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': 'b',
  },

  {
    'que': "What year was HTML launched?",
    'a': "1991",
    'b': "1992",
    'c': "1994",
    'd': "1993",
    'correct': 'd',
  },
  {
    'que': "In what year was CSS launched?",
    'a': "1991",
    'b': "1992",
    'c': "1994",
    'd': "1996",
    'correct': 'd',
  },

  {
    'que': "Which of the following language is truly Object Oriented?",
    'a': "C",
    'b': "C++",
    'c': "JAVA",
    'd': "none of the above",
    'correct': 'c',
  },

]
let index=0;
let total=questions.length;
let right=0;
    wrong=0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
  if(index==total)
  {
    return endQuiz();
  }
   reset();
  const data = questions[index];
  console.log(data)
  quesBox.innerText = `${index+1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () =>{
  const data = questions[index]
   const ans = getAnswer()
   if(ans == data.correct){
        right++;
   }
   else{
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}

const getAnswer = () => {
  let answer;
   optionInputs.forEach(
    (input) => {
        if(input.checked) {
           answer=input.value;
        }
       
    }
   )
   return answer;
}

const reset = () => {
  optionInputs.forEach(
    (input) => {
      input.checked = false
    }
  )
}

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
     <h3> Thankyou for playing the quiz </h3>
     <h2> ${right} / ${total} are correct </h2>
  `
}
//initial call
loadQuestion();