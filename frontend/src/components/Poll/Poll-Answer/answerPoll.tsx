import "./answerPoll.css";

function AnswerPoll() {
    return (
        <div class="trial">
            <div class="poll-answer">
                <form class="poll-answer-form" action="">
                    <h3 class="poll-question">Poll question here</h3>

                    <form class="answer-div">
                        <input  name="radio" type="radio" id="answer-yes"  value="Yes" ></input>
                        <label for="answer-yes">1. Yes</label>


                        <input name="radio" type="radio" id="answer-no" value="No"></input>
                        <label for="answer-no">2. No</label>
                    </form>


                    <div class="text-and-button">
                        <p id="text"> xx overall votes  |  Time remaining: xx</p>
                        <input class="submit-answer-btn" type="submit" value="Vote"></input>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AnswerPoll;

