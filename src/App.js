import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './partials/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
