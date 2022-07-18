import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Main from './pages/Main';
import Bookings from './pages/Bookings';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Trip from './pages/Trip';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/trip/:tripId" element={<Trip />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
