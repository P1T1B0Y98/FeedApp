import "./resultPoll.css";
import { SiJavascript } from "solid-icons/si";
import { Icon } from "solid-heroicons";




function ResultPoll() {
    return (
        
        <div class="trial">
            <div class="poll-result">
                <form class="poll-result-form" action="">
                    <div class ="all-elements">
                    <h2 class="poll-question">Poll question here</h2>

                    
                    <div class="radio-buttons">
                        <input  name="radio" type="radio" id="answer-yes"  value="Yes" ></input>
                        <label for="answer-yes">Yes</label>


                        <input name="radio" type="radio" id="answer-no" value="No"></input>
                        <label for="answer-no">No</label>
                        </div>
                        



                    <div class="text-and-button">
                        <p id="text"> xx overall votes  |  Time remaining: xx</p>
                        <input class="submit-answer-btn"  type="submit" disabled value="Vote"></input>
                    </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ResultPoll;

