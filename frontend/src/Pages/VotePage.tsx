import { Component } from 'solid-js';
import Header from '../components/Header/header';
import AnswerPoll from '../components/Poll/Poll-Answer/answerPoll';

const VotePage: Component = () => {
    return (
        <div>
            <Header />
            <AnswerPoll />
        </div>
    )
}

export default VotePage;