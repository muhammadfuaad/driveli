import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CashPayment from './components/booking/CashPayment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cash-payment" component={CashPayment} />
      </Routes>
    </Router>
  );
}
export default App;
