import "./SearchPoll.css";
import { loginForm } from '../../Login/LoginForm';
import { useNavigate, NavLink } from '@solidjs/router';
import { pollId, setPollId } from "../Poll-Answer/answerPoll";

function SearchPoll() {

    const { form, updateFormField, submit, clearField } = loginForm();
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setPollId(e.target.value);
        console.log("hello you", pollId());
    }

    const handleSubmit = (e: Event) => {
        const input = document.getElementById('fname') as HTMLInputElement | null;
        const value = input?.value;

        const data = submit(form);
        e.preventDefault();
        fetch(`https://localhost:7280/api/poll/${value}`, {
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
                alert('Fetch success');
                navigate('/');
                return response.json();
            } else {
                alert('Invalid fetch');
            }
        })
        .then(data => {
            console.log(data);
            console.log("ID: " + data["id"]);
            navigate('/polls/:id');
        })
    };

    return (
        <div class="trial">
            <div class="poll-search">
                <form class="poll-search-form" action="" onSubmit={handleSubmit}>
                    <input class="poll-search-input" type="text" id="fname" name="firstname" onChange={handleChange} placeholder="&#128269; Enter Poll ID"></input>
                    <input class="submit-poll-btn" type="submit" value="Enter"></input>
                </form>
            </div>
        </div>
    );
  }
  export default SearchPoll;

