import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage/MainPage'

class LoginForm extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {login: ' ',pwd: ' '};

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);    
  }
  handleLoginChange(event)
  {
    this.setState({login: event.target.value});
  }

  handlePasswordChange(event)
  {
    this.setState({pwd: event.target.value});
  }

  handleSumbit(event)  
  {  
    if(localStorage.getItem(this.state.login) == this.state.pwd)
    {
      ReactDOM.render(
      <div>
        <MainPage login={this.state.login}/>
      </div>,
      document.getElementById('root') );
    }
    else {
      alert("Please Register");
    }
  }


  render()
  {
    return (
      <div className="container lgn">
      <label htmlFor="formLogin"><h3>Login</h3></label>
        <form onSubmit={this.handleSumbit} id="formLogin">
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input type="login" id="login" className="form-control" 
          placeholder="Enter Your Login" onChange={this.handleLoginChange} />
        </div>  
        <div className="form-group">
        <label htmlFor="pwd">Password</label>
          <input type="password" id="pwd" className="form-control" 
          placeholder="Enter Your Password" onChange={this.handlePasswordChange} />
        </div> 
          <button type="submit" className="btn btn-primary">Sumbit</button>
        </form>
      </div>
    );
  }
}

class RegForm extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {login: ' ',pwd: ' '};

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);    
  }
  handleLoginChange(event)
  {
    this.setState({login: event.target.value});
  }

  handlePasswordChange(event)
  {
    this.setState({pwd: event.target.value});
  }

  handleSumbit(event)  
  {  
    if(localStorage.getItem(this.state.login, this.state.pwd) !== null)
    {
      alert("This user already exist");
    }
    else {
      localStorage.setItem(this.state.login, this.state.pwd);
      alert("Enter your data in Login Form");
    }
  }


  render()
  {
    return (
      <div className="container lgn">
      <label htmlFor="regLogin"><h3>Register</h3></label>
        <form onSubmit={this.handleSumbit} id="regLogin">
        <div className="form-group">
          <label htmlFor="newLogin">Login</label>
          <input type="login" id="newLogin" className="form-control" 
          placeholder="Enter Your Login" onChange={this.handleLoginChange} />
        </div>  
        <div className="form-group">
        <label htmlFor="newPwd">Password</label>
          <input type="password" id="newPwd" className="form-control" 
          placeholder="Enter Your Password" onChange={this.handlePasswordChange} />
        </div> 
          <button type="submit" className="btn btn-primary">Sumbit</button>
        </form>
      </div>
    );
  }
}

class StartPageForm extends React.Component {
  render()
  {
    return(
      <div>
      <LoginForm />
      <RegForm />
      </div>
    );
  }
}
export default StartPageForm;
