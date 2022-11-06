import "./answerPoll.css";
import { SiJavascript } from "solid-icons/si";
import { Icon } from "solid-heroicons";



const polls_JSON = '{"Id":"0c761621-7c3e-4b4f-90ae-028cadf0a817", "Question": "Is this a poll?", "IsPrivate":true, "IsClosed":false, "EndTime":"2022-11-04 18:37:26.997+00", "CreatorId":"cd12d700-030a-4ef7-a836-e8e99d28a00d"}';
const polls_Obj = JSON.parse(polls_JSON);

const votes_JSON = '{"Id":"0c761621-7c3e-4b4f-90ae-028cadf0a817", "total_votes":"500", "yes_votes":"190", "no_votes":"310"}';
const votes_Obj = JSON.parse(votes_JSON);

function AnswerPoll() {
    return (
        
        <div class="trial">
            <div class="poll-answer">
                <form class="poll-answer-form" action="">
                    <div class ="all-elements">
                    <h3 class="poll-question">{polls_Obj.Question}</h3>

                    
                    <div class="radio-buttons">
                        <input  name="radio" type="radio" id="answer-yes"  value="Yes" ></input>
                        <label for="answer-yes">Yes</label>


                        <input name="radio" type="radio" id="answer-no" value="No"></input>
                        <label for="answer-no">No</label>
                        </div>
                        



                    <div class="text-and-button">
                        <p id="text"> {votes_Obj.total_votes} overall votes  |  Poll closes at {polls_Obj.EndTime} </p>
                        <input class="submit-answer-btn"  type="submit" value="Vote"></input>
                    </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AnswerPoll;