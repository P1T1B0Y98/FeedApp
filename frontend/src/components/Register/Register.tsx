import { Component } from 'solid-js';
import { registerForm } from './RegisterForm';
import "./register.css";
import { useNavigate } from '@solidjs/router';
import toast from 'solid-toast';

const Register: Component = () => {
    const { form, updateFormField, submit, clearField } = registerForm();
    const navigate = useNavigate();

    const handleSubmit = (e: Event) => {
        const data = submit(form);
        e.preventDefault();
        console.log(data);   
        fetch(`${import.meta.env.VITE_BASE_URL}user/register`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 200) {
                    console.log(response);
                    toast.success("Registration success", {position:"bottom-center", style: {'background-color': '#cdf2cb',}})
                    navigate('/login');
                    return response;
                } else {
                    toast.error("Invalid credentials", {position:"bottom-center", style: {'background-color': '#f2cbcb',}})
                }
            }
        )
        };
    return (
        <div class="container">
            <h1>Register</h1>
            <p> Please fill out the following information</p>
            <form class="form" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label class="label" for="firstname">First name:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="firstname" 
                        placeholder="Enter first name" 
                        value={form.firstname}
                        onInput={updateFormField('firstname')}
                        required 
                    />
                </div>
                <div class="form-group">
                    <label class="label" for="lastname">Last name:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="lastname" 
                        placeholder="Enter last name" 
                        value={form.lastname}
                        onInput={updateFormField('lastname')}
                        required 
                    />
                </div>
                <div class="form-group">
                    <label class="label" for="email">Email:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="email" 
                        placeholder="Enter email" 
                        value={form.email}
                        onInput={updateFormField('email')}
                        required 
                    />
                </div>
                <div class="form-group">
                    <label class="label" for="username">Username:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="username" 
                        placeholder="Enter username" 
                        value={form.username}
                        onInput={updateFormField('username')}
                        required 
                    />
                </div>
                <div class="form-group">
                    <label class="label" for="password">Password:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="password" 
                        placeholder="Enter password"
                        value={form.password}
                        onInput={updateFormField('password')}
                        required 
                    />
                </div>
                <input class="form-submit submit-btn" type="submit" value="Register user" />
            </form>
        </div>
    )
}

export default Register;