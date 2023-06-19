import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AskQuestion from '../../Pages/AskQuestion/AskQuestion';
import './HomeMainbar.css'
import QuestionList from "./QuestionList";
const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();


  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  var questionsList = [{
    _id: 1,
    votes: 3,
    questionTitle: "What is a function?",
    noOfAnswers: 2,
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js",],
    userPosted: "mano",
    askedOn: "Jan 1 2022"
  },
  {
    _id: 2,
    votes: 0,
    questionTitle: "What is a function?",
    noOfAnswers: 0,
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "feb 1 2023"
  },
  {
    _id: 3,
    votes: 1,
    noOfAnswers: 0,
    questionBody: "It meant to be",
    questionTitle: "What is a function?",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "jan 1 2021"
  }]
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ?
            <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {
          questionsList === null ?
            <h1>Loading....</h1> :
            <>
              <p>
                { questionsList.length } questions
              </p>
               <QuestionList questionsList={questionsList}/>
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar