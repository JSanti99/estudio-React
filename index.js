import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Contador from './Contador';
import './style.css';


class App extends Component{
  render(){
    return(
      <div>
      
      </div>
    );
  }
}

/*class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
    promesa.then(response => response.json()).then(data => {
      this.setState({
        articles: data
      })
    })
  }

  render(){
    return(
      <div>
      {
        this.state.articles.map((article) => {
          return(
            <div className="card">
              <p>
              {article.title}
              </p>
            </div>
          )
        })
      }
      </div>
    );
  }
}
/*class Form extends Component{
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
}*/

render(<Contador />, document.getElementById('root'));