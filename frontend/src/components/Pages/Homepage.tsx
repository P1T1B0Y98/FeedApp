import { Component } from 'solid-js';
import Header from '../Header/header';
import SearchPoll from '../Poll/Poll-Search/searchPoll';
import CreatePoll from '../Poll/Poll-Creation/createPoll';
import AnswerPoll from "../Poll/Poll-Answer/answerPoll";

const Homepage: Component = () => {
    return (
        <div>
            <Header />
            <SearchPoll />
            <AnswerPoll/>
            {/* Uncomment line below to check create poll setup */}
            {/* <CreatePoll /> */}
        </div>
    )
}

export default Homepage;