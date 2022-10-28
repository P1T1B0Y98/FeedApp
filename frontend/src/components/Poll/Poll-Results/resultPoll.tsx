import "./resultPoll.css";

function ResultPoll() {
    return (
        <div class="trial">
            <div class="poll-result">
                <form class="poll-result-form" action="">
                    <h3 class="poll-question">Poll question here</h3>
                    <input class="result-question" type="checkbox" id="answer-yes"  value="Yes"></input>
                    <input class="result-question" type="checkbox" id="answer-no" value="No"></input>
                </form>
            </div>
        </div>
    );
}

export default ResultPoll;

