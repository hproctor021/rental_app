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
import { Provider, useDispatch } from 'react-redux'
import store from './store/index'
import UserProfile from './components/UserProfile';
import UserUpdateForm from './components/UserUpdateForm'
import NewHomeForm from './components/NewHomeForm'
import ContactForm from './components/ContactForm'
import BannerPic from './components/BannerPic'
import { useEffect } from 'react'
import Terms from './components/TermsOService'



const App = () => {
  
  // const dispatch = useDispatch()

  // useEffect(() =>{
  //   if (localStorage.token){
  //     fetch('http://localhost:3000/api/v1/user',{
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.token}`
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(user => {
  //       console.log(user)
  //       dispatch({
  //         type: 'SET_USER',
  //         user: user
  //       })
  //     })
  //   }
  // })


    return (
      <Router>
      
        <Header />
        {/* {<Route exact path ='/' />
        ? <BannerPic />
        : null
        } */}
          <main>
              
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
                  component={Register}
                />

                <Route
                exact
                path='/api/v1/homes/:id'
                component={HomeShowPage}
                />

                <Route
                exact
                path='/users/profile'
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

                <Route
                exact
                path='/contact' 
                component={ContactForm}
                />

                <Route
                exact
                path='/terms' 
                component={Terms}
                />

            
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
