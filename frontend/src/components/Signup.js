import React, { Component } from 'react';

export default class Login extends Component {

    signup = (e) => {
<<<<<<< HEAD
        fetch('http://localhost:3000/users', {
=======
        fetch('http://localhost:3001/users', {
>>>>>>> 0ed2c437f0fcd162ed53dd4a5d61c3abcaeefe37
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.parentElement.username.value,
                password: e.target.parentElement.password.value
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.name) {
                    alert(`New account made: ${data.name}`)
                }
                else {
                    alert(data)
                }
            })
    }

    render() {
        return (
            <div className="signupForm">
                <form>
                    <input placeholder="Username" name="username" required="" type="text" />
                    <input placeholder="Password" name="password" required="" type="password" />
                    <button type="button" onClick={this.signup}>SIGN UP</button>
                </form>
            </div>
        )
    }
}