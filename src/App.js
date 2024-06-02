import React from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Sidenav from './Pages/Sidenav';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Appointments from './Pages/Appointments';
import Records from './Pages/Records';
import Payments from './Pages/Payments';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidenav />
        <main style={{ flexGrow: 1, padding: '24px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/records" element={<Records />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
