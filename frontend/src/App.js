import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import HomeShowPage from './components/pages/HomeShowPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import { Provider } from 'react-redux'
import store from './store/index'



const App = () => {
  
    return (
      <Router>
      
        <Header />
          <main className='py-4'>
            <Container>
              
                <Route
                  exact
                  path='/'
                  component={LandingPage}
                />

                <Route
                  exact
                  path='/login'
                  component={LoginPage}
                />

                <Route
                  exact
                  path='/register'
                  component={RegisterPage}
                />

                <Route
                exact
                path='/api/v1/homes/:id'
                component={HomeShowPage}
                />

            </Container>
          </main>
        <Footer />
      
      </Router>
    );
  }

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
