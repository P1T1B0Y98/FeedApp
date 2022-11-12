import "./answerPoll.css";
import { SiJavascript } from "solid-icons/si";
import { Icon } from "solid-heroicons";
import { useNavigate, NavLink } from '@solidjs/router';
import { createSignal, createEffect, createMemo, onMount } from "solid-js";




function AnswerPoll() {

    const [countVotes, setCountVotes] = createSignal(0);
    const [positiveVotes, setPositiveVotes] = createSignal(0);
    const [negativeVotes, setNegativeVotes] = createSignal(0);
    const [endTime, setEndTime] = createSignal('');
    const [question, setQuestion] = createSignal('');

    const navigate = useNavigate();
    fetch(`https://localhost:7280/api/poll/1039516104483041280`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                
                //body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    // alert('Get request success');
                    return response.json();
                } else {
                    alert('Get request success invalid'); 
                }
            }
        )
            .then(data => {
                setCountVotes(data["countVotes"]);
                setPositiveVotes( data["positiveVotes"]);
                setNegativeVotes( data["negativeVotes"]);
                setEndTime(data['endTime']);
                setQuestion(data['question']);
            })

fetch(`https://localhost:7280/api/poll/1039516104483041280`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                
                body: JSON.stringify({
                    "id": "1039516104483041280",
                    "question": "Suger petter?",
                    "isPrivate": false,
                    "isClosed": false,
                    "endTime": "2022-11-15T12:25:33.891Z",
                    "creatorId": "d9e13ff8-e823-48b7-85e6-eb667466e6fe",
                    "creatorName": "jolkohol",
                    "countVotes": 5,
                    "positiveVotes": 2,
                    "negativeVotes": 3
                    })
            })
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    // alert('Get request success');
                    return response.json();
                } else {
                    alert('Get request success invalid'); 
                }
            }
        )

        .then(json => console.log(json))


    return (
        
        <div class="trial">
            <div class="poll-answer">
                <form class="poll-answer-form" action="">
                    <div class ="all-elements">
                    <h3 class="poll-question">{question}</h3>

                    
                    <div class="radio-buttons">
                        <input  name="radio" type="radio" id="answer-yes"  value="Yes" ></input>
                        <label for="answer-yes">Yes</label>


                        <input name="radio" type="radio" id="answer-no" value="No"></input>
                        <label for="answer-no">No</label>
                        </div>
                        



                    <div class="text-and-button">
                        <p id="text"> Poll closes at {endTime} </p>
                        <input class="submit-answer-btn"  type="submit" value="Vote"></input>
                    </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AnswerPoll;