import "./resultPoll.css";
import { useNavigate, NavLink } from '@solidjs/router';
import { createSignal, createEffect, createMemo, onMount } from "solid-js";


const polls_JSON = '{"Id":"0c761621-7c3e-4b4f-90ae-028cadf0a817", "Question": "Is this a poll?", "IsPrivate":true, "IsClosed":false, "EndTime":"2022-11-04 18:37:26.997+00", "CreatorId":"cd12d700-030a-4ef7-a836-e8e99d28a00d"}';
const polls_Obj = JSON.parse(polls_JSON);

const votes_JSON = '{"Id":"0c761621-7c3e-4b4f-90ae-028cadf0a817", "total_votes":"500", "yes_votes":"190", "no_votes":"310"}';
const votes_Obj = JSON.parse(votes_JSON);




function ResultPoll() {

    const [countVotes, setCountVotes] = createSignal(0);
    const [positiveVotes, setPositiveVotes] = createSignal(0);
    const [negativeVotes, setNegativeVotes] = createSignal(0);
    const [endTime, setEndTime] = createSignal('');
    const [question, setQuestion] = createSignal('');



    //const token = localStorage.getItem("token");
    //var authentic = token?.substring(1, token.length-1);

    const token = localStorage.getItem("token");
    var authentic = token?.substring(1, token.length-1);
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




    return (
        
        <div class="trial">
            <div class="poll-result">
                <form class="poll-result-form" action="">
                    <div class ="all-elements">
                    <h3 class="poll-question">{question}</h3>

                    <div class="container">
                    <progress id="result yes" value={(votes_Obj.yes_votes)/(votes_Obj.total_votes)*100} max="100"> {(votes_Obj.no_votes)/(votes_Obj.total_votes)*100}%</progress>
                    </div>
  
                    <div class="container">
                    <progress id="result no" value={(votes_Obj.no_votes)/(votes_Obj.total_votes)*100} max="100"> {(votes_Obj.no_votes)/(votes_Obj.total_votes)*100}%</progress>
                    </div>

                     <div class="total-votes">{countVotes} total votes</div>
                     <div class="pos-votes">{positiveVotes} positive votes</div>
                     <div class="neg-votes">{negativeVotes} negative votes</div>

                        
                    <div class="text-and-button">
                        <p id="text"> {countVotes} overall votes  |  Poll closes at {endTime} </p>
                        <input class="submit-answer-btn"  type="submit" disabled value="Vote"></input>
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    );
}

export default ResultPoll;
