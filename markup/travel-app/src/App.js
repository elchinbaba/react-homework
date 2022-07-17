import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from './pages/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
