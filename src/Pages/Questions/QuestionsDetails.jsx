import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import DisplayAnswer from './DisplayAnswer';
const QuestionsDetails = () => {
    const { id } = useParams()
    const Navigate = useNavigate();
    const User = null
    var questionsList = [{
        _id: '1',
        upVote: 3,
        downVote: 2,
        questionTitle: "What is a function?",
        noOfAnswers: 2,
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js",],
        userPosted: "mano",
        userId: 1,
        askedOn: "Jan 1 2022",
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2 2022",
            userId: 2
        }]
    },
    {
        _id: '2',
        upVote: 3,
        downVote: 3,
        questionTitle: "What is a function?",
        noOfAnswers: 0,
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        userId: 2,
        askedOn: "feb 1 2023",
        answer: [{
            answerBody: "Answer",
            userAnswered: "mishra",
            answeredOn: "jan 2 2022",
            userId: 2
        }]
    },
    {
        _id: '3',
        upVote: 3,
        downVote: 2,
        noOfAnswers: 0,
        questionBody: "It meant to be",
        questionTitle: "What is a function?",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        userId: 3,
        askedOn: "jan 1 2021",
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "feb 2 2021",
            userId: 2
        }]
    }]
    const handleUpVote = () => {
        if (User === null) {
            alert("Login or Signup to up vote a question");
            Navigate("/Auth");
        } else {

        }
    };

    const handleDownVote = () => {
        if (User === null) {
            alert("Login or Signup to down vote a question");
            Navigate("/Auth");
        } else {

        }
    };
    return (
        <div className="question-details-page">
            {
                questionsList === null ?
                    <h1>Loading.....</h1> :
                    <>
                        {
                            questionsList.filter((question) => question._id == id)
                                .map((question) => (
                                    <div key={question._id}>
                                        <section className="question-details-container">
                                            <h1>{question.questionTitle}</h1>
                                            <div className="question-details-container-2">
                                                <div className="question-votes">
                                                    <img src={upvote} alt=''
                                                        width="18"
                                                        className="votes-icon" />
                                                    <p>{question.upVote - question.downVote}</p>
                                                    <img src={downvote} alt=""
                                                        width="18"
                                                        className="votes-icon" />
                                                </div>
                                                <div style={{ width: "100%" }}>
                                                    <p className="question-body">{question.questionBody}</p>
                                                    <div className="question-details-tags">
                                                        {question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type="button">
                                                            Share
                                                        </button>
                                                        {User?.result?._id === question?.userId && (
                                                            <button type="button">
                                                                Delete
                                                            </button>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link
                                                            to={`/Users/${question.userId}`}
                                                            className="user-link"
                                                            style={{ color: "#0086d8" }}
                                                        >
                                                            <Avatar
                                                                backgroundColor="orange"
                                                                px="8px"
                                                                py="5px"
                                                                borderRadius="4px"
                                                            >
                                                                {question.userPosted.charAt(0).toUpperCase()}
                                                            </Avatar>
                                                            <div>{question.userPosted}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        {question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} Answers</h3>
                                                <DisplayAnswer
                                                    key={question._id}
                                                    question={question}
                                                />
                                            </section>
                                        )}
                                        <section className="post-ans-container">
                                            <h3>Your Answer</h3>
                                            <form>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    cols="30"
                                                    rows="10"
                                                ></textarea>
                                                <br />
                                                <input
                                                    type="submit"
                                                    className="post-ans-btn"
                                                    value="Post Your Answer"
                                                />
                                            </form>
                                            <p>
                                                Browse other Question tagged
                                                {question.questionTags.map((tag) => (
                                                    <Link to="/Tags" key={tag} className="ans-tags">
                                                        {" "}
                                                        {tag}{" "}
                                                    </Link>
                                                ))}{" "}
                                                or
                                                <Link
                                                    to="/AskQuestion"
                                                    style={{ textDecoration: "none", color: "#009dff" }}
                                                >
                                                    {" "}
                                                    ask your own question.
                                                </Link>
                                            </p>
                                        </section>

                                    </div>
                                ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionsDetails