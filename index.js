import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  onEmailChanges(email){
    this.setState({
      email: email
    })
  }
  onPasswordChanges(password){
    this.setState({
      password: password
    })
  }

  onSubmitChanges= () => {
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <form>
          <input 
          onChange={(event)=>{ this.onEmailChanges(event.target.value)}}
          type='email'
          value={this.state.email}
          placeholder='@'/>
          <input 
          onChange={(event)=>{ this.onPasswordChanges(event.target.value)}}
          type='password'
          value={this.state.password}
          placeholder='Password'/>
          <div>
            <input 
            onClick={this.onSubmitChanges}
            type="submit"
            value='Aceptar'/>
          </div>
        </form>
      </div>
    );
  }
}

render(<Form />, document.getElementById('root'));