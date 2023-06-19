import React from 'react'
import QuestionsDetails from './QuestionsDetails'
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Avatar from '../../components/Avatar/Avatar';
const DisplayAnswer = ({ question }) => {
    const {id} = useParams()
    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" >
                                    Share
                                </button>
                                <button type="button">Delete</button>
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link
                                    to={`/Users/${ans.userId}`}
                                    className="user-link"
                                    style={{ color: "#0086d8" }}
                                >
                                    <Avatar
                                        backgroundColor="lightgreen"
                                        px="8px"
                                        py="5px"
                                        borderRadius="4px"
                                    >
                                        {ans.userAnswered.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <div>{ans.userAnswered}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer