import React, {useState} from 'react'
import HeaderBlog from '../Components/HeaderBlog';
import Question from '../Components/Question';
import '../styles/quiz.css';

const questions = [{
    name: "1.Your friend has to pick what she’ll be doing after work, what does she pick?",
    answers: {
        a: {
            name: 'sleep',
            gif: 'https://i.pinimg.com/originals/05/83/a4/0583a451c6b0e59f1892e2d38bca5685.gif'
        },
        b: {
            name: 'clubs',
            gif: 'https://media.tenor.com/images/cbd7e37b64328e8e596df2d339b007d3/tenor.gif'
        },
        c: {
            name: 'cooking',
            gif: 'https://media1.giphy.com/media/2xPS9bJpkDXWvgcW4L/200.gif'
        },
        d: {
            name: 'shopping',
            gif: 'https://media1.giphy.com/media/KxtMLfh8k8GEJHpBVi/giphy.gif'
        }
    }
},
{
    name: "Which of the following movies would she like the most?",
    answers: {
        a: {
            name: 'Sex and the city',
            gif: 'https://i0.wp.com/media2.giphy.com/media/6wM4Zhs4h4PGo/giphy.gif'
        },
        b: {
            name: 'Pirates of the Caribbean',
            gif: 'https://media0.giphy.com/media/TE3ZlXmfr5psI/giphy.gif'
        },
        c: {
            name: 'Ratatouille',
            gif: 'https://media3.giphy.com/media/wNDa1OZtvl6Fi/giphy.gif'
        },
        d: {
            name: 'Mean Girls',
            gif: 'https://i.pinimg.com/originals/65/da/48/65da4856cff2dae14c919b499a37a58a.gif'
        }
    }
}]
let results = {
    a:0,
    b:0,
    c:0,
    d:0
}
function setNewQuestion(questions,number, setQuestionNumber, setQuestion){
    
    if(number+1 < questions.length){
        setQuestionNumber(number+1);
        setQuestion(questions[number+1]);
    }
    else{
        finishQuiz();
    }
}
function finishQuiz(){
    console.log(results)
}
function quiz(){
    let [question, setQuestion] = useState(questions[0])
    let [questionNumber, setQuestionNumber] = useState(0)
    return <>
        <HeaderBlog></HeaderBlog>
        <Question value={question.name}
            a={question.answers.a}
            b={question.answers.b}
            c={question.answers.c} 
            d={question.answers.d}
            
            newQuestion={()=>{
                setNewQuestion(questions, questionNumber, setQuestionNumber, setQuestion);     
            }}
            votedFor={(answer)=>{
                results[answer]++;
            }}
        />
    </>
}
export default quiz