import React, {Component} from 'react';
import SignIn from '../src/pages/SignIn/SignIn';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <SignIn />
        {/* <p className="App-intro">{this.state.response}</p> */}
      </div>
    );
  }
}

export default App;
