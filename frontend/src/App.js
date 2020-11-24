import './App.css';
import React, { Component } from 'react';
// import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'

let homeURL = 'http://localhost:3000/api/v1/homes'

class App extends Component {

  



  render() {
    return (
      // <Router>
      <div>
        <Header />
          {/* <Continer className='mainContainer' style={{minHeight: '90vh'}}> */}

            {/* <Route
              exact
              path='/'
              render={routeProps =>
              <LandingPage
              {...routeProps} />
              }
            /> */}
            <LandingPage homes={this.state.homeList}/>
          {/* </Continer> */}
        <Footer />
      </div>
      // </Router>
    );
  }
}

export default App;
