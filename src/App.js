import React, { Component } from 'react';
import Wrapper from './Wrapper'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasDataLoaded :false
    }

  }



  componentWillMount () {
    const updateState = (myJson) => {
      this.setState({
        data: myJson,
        hasDataLoaded: true
      })
    }

    fetch('https://api.sheety.co/17005027-b614-41f8-9ba2-25bf2d227875').then(function(response) {
      return response.json();
    }).then(function(myJson) {
      updateState(myJson)
    });


  }
  render() {
    return (
      <Wrapper>
      {this.state.hasDataLoaded &&
        <div className="row">
        {this.state.data.map((item)=>{return(
          <div className=" col-md-8" key={item.nameOfThePortal}>
            <h1><a href={item.uRL} target="_blank" rel="noopener noreferrer">{item.nameOfThePortal}</a></h1>
            <p>{item["whatDataDoesItContain?"]}</p>
            <small><p>Maintained by: {item["contactPerson"]} | <a href={"mailto:"+item.contactEmail}>Email</a></p></small>

          </div>
        )})}
        </div>
      }
      </Wrapper>
    );
  }
}

export default App;
