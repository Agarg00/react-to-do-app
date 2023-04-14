import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUS';
import SinglePage from './components/About/SinglePage';
import 'tachyons';
import './App.css';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    // Navigate 
  } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />}>
            <Route path=":slug" element={<SinglePage />} />
            </Route>
            <Route path='/contact' element={<ContactUs />} />
            {/* <Navigate to='/404' /> */}
          </Routes>
        </Router>
        <div className='foot'>
          <footer className='f5'>
            Made with ❤️ Copyright © Anonymous, {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    );
  }
}

export default App;