import "./answerPoll.css";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { answerForm } from "./answerPollForm";

const [pollId, setPollId] = createSignal('');

function AnswerPoll() {
    const { form, updateFormField, submit, clearField } = answerForm();
    const navigate = useNavigate();

    const [poll, setPoll] = createSignal({});
    const token = localStorage.getItem("token");
    var authentic = token?.substring(1, token.length-1);

    fetch(`https://localhost:7280/api/poll/${pollId()}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then(response => {
            if (response.status === 200) {
                console.log(response);
                return response.json();
            } else {
                alert('Invalid fetch');
            }
        })
        .then(data => {
            setPoll(data);
        })

    const handleSubmit = (e: Event) => {
        const data = submit(form);
        console.log(data);
        alert(data);
        e.preventDefault();
        fetch(`https://localhost:7280/vote/poll/${pollId()}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 201) {
                    console.log(response);
                    alert('Login successful');
                    navigate('/poll/results')
                    return response.text();
                } else {
                    alert('Invalid credentials');
                    console.log(response);
                }
            }
        )
        
    }

    return (
        
        <div class="trial">
            <div class="poll-answer">
                <form class="poll-answer-form" action="" onSubmit={handleSubmit}>
                    <div class ="all-elements">
                    <h1 class="poll-question">{poll()['question']}</h1>                    
                    <div class="radio-buttons">
                        <input 
                            type="radio" 
                            name="isPositive" 
                            id="positive"
                            value="true"
                            onChange={updateFormField('isPositive')}/>
                        <label for="positive">Yes</label>
                        <input 
                            type="radio" 
                            name="isPositive" 
                            id="negative"
                            value="false"
                            onChange={updateFormField('isPositive')}/>
                        <label for="negative">No</label>
                        <p id="text"> {poll()['positiveVotes'] + poll()['negativeVotes']} overall votes  |  Poll closes at {poll()['endTime']} </p>
                        <input class="submit-answer-btn"  type="submit" value="Vote"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { pollId, setPollId };
export default AnswerPoll;