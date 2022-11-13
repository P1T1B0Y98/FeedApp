import "./resultPoll.css";
import { SiJavascript } from "solid-icons/si";
import { Icon } from "solid-heroicons";
import { createSignal } from "solid-js";

const polls_JSON = '{"yes_votes":5, "total_votes":9, "no_votes":4}';
const votes_Obj = JSON.parse(polls_JSON);


const [pollId, setPollId] = createSignal('');
const [poll, setPoll] = createSignal('');
const [question, setQuestion] = createSignal('');
const [endTime, setEndTime] = createSignal('');
const [countVotes, setCountVotes] = createSignal(0);
const [positiveVotes, setPositiveVotes] = createSignal(0);
const [negativeVotes, setNegativeVotes] = createSignal(0);
const [isClosed, setIsClosed] = createSignal(false);

const token = localStorage.getItem("token");
var authentic = token?.substring(1, token.length-1);

function ResultPoll() {

    //fetch(`https://localhost:7280/api/poll/${pollId()}`, {
    fetch(`https://localhost:7280/api/poll/1039516104483041280`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + authentic,
        },
    })
    .then(response => {
        if (response.status === 200) {
            console.log(response);
            return response.json();
        } else {
            alert('Invalid fetch');
            console.log(response);
        }
    })
    .then(data => {
        setQuestion(data['question']);
        setEndTime(data['endTime']);
        setCountVotes(data['countVotes']);
        setPositiveVotes(data['positiveVotes']);
        setNegativeVotes(data['negativeVotes']);
        setPoll(data);
        setIsClosed(data['isClosed']);

    })

    return (
        
        <div class="trial">
            <div class="poll-result">
                <form class="poll-result-form" action="">
                    <div class ="all-elements">
                    <h3 class="poll-question">{question}</h3>
                    <div class="container-result">
                        <div class="result yes" data-width={(poll()['positiveVotes'])/(poll()['countVotes'])*100}> Yes: {(poll()['positiveVotes'])/(poll()['countVotes'])*100}%</div>
                    </div>
                    <div class="container-result" >
                        <div class="result no" data-width={(poll()['negativeVotes'])/(poll()['countVotes'])*100}>No: {(poll()['negativeVotes'])/(poll()['countVotes'])*100}%</div> 
                    </div>
                                      
                    <div class="text-and-button">
                        <p id="text"> {countVotes} overall votes  |  Poll closes at {endTime} </p>
                    </div>                    
                </div>
                
                </form>
            </div>
        </div>
    );
}

export default ResultPoll;
