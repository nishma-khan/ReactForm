import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
      console.log(this.state);
    };

    render() {
        return (
            <form>
                <input 
                name='firstName'
                placeholder= 'First name' 
                value={this.state.firstName} 
                onChange={e=> this.change(e)}/>
                <br />

                <input 
                name='lastName'
                placeholder= 'Last name' 
                value={this.state.lastName} 
                onChange={e=> this.change(e)} />
                 <br />

                <input 
                name= 'username'
                placeholder= 'Username' 
                value={this.state.username} 
                onChange={e=> this.change(e)} />
                 <br />

                <input 
                name= 'email'
                placeholder= 'Email' 
                value={this.state.email} 
                onChange={e=> this.change(e)} />
                 <br />

                <input 
                name= 'password'
                type= 'password'
                placeholder= 'Password' 
                value={this.state.password} 
                onChange={e=> this.change(e)} />
                 <br />

                <button onClick={() => this.onSubmit()}>Submit</button>
            </form>
        );
    }
}

