import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CashPayment from './components/booking/CashPayment';

function App() {
  return (
      <Routes>
        <Route path="/cash-payment" element={<CashPayment/>} />
        <Route path="/" element={<CashPayment />} />
      </Routes>
  );
}
export default App;
