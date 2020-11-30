import './App.css';
import './bootstrap.min.css'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import HomeShowPage from './components/pages/HomeShowPage'
import LoginPage from './components/pages/LoginPage'
import Register from './components/pages/RegisterPage'
import { Provider } from 'react-redux'
import store from './store/index'
import UserProfile from './components/UserProfile';
import UserUpdateForm from './components/UserUpdateForm'
import NewHomeForm from './components/NewHomeForm'



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
                  path='/api/v1/login'
                  component={LoginPage}
                />

                <Route
                  exact
                  path='/api/v1/register'
                  component={Register}
                />

                <Route
                exact
                path='/api/v1/homes/:id'
                component={HomeShowPage}
                />

                <Route
                exact
                path='/api/v1/users/:id/profile'
                component={UserProfile}
                />

                <Route
                exact
                path='/api/v1/users/:id/edit'
                component={UserUpdateForm}
                />

                <Route
                exact
                path='/user/list_home'
                component={NewHomeForm}
                />

            </Container>
          </main>
          <br /><br />
        <Footer />
      
      </Router>
    );
  }

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
