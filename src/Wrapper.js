import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Typography from 'typography'
import doelger from 'typography-theme-doelger'


import { TypographyStyle, GoogleFont } from 'react-typography'

const typography = new Typography(doelger)
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
      <div className="container pb-5">
        <div className="row">
        <div className="col-md-12 py-3 " style={{display:'flex', 'alignItems':'center', justifyContent: 'space-between' }}>
          <div>
          <h2 className="p-0">Data in Nepal</h2>
          <p>An active list of different data portals, <a href="https://docs.google.com/spreadsheets/d/13SwfS_OmOJI0zuf3x0i-0StBwaywyiAt_wLjz3RZCeI/edit?usp=sharing">contribute here</a>.</p>
          </div>

        </div>

        </div>

        <div className="row">
        <div className="col-md-12">
        {this.props.children}

        </div>

        </div>
      </div>
      </>
    );
  }
}

export default App;
