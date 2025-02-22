import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change to Routes from Switch
import Signup from './components/signup';
import Signin from './components/signin';
// import { Link } from 'react-router-dom';

// // Inside your App component
// <nav>
//   <Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link>
// </nav>

function App() {
  return (
    <Router>
      <div>
        <h1>Authentication App</h1>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
