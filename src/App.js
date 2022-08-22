import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./Profile";
import Billing from "./Billing";
import OrderDetails from "./OrderDetails";
import PaymentConfirmation from "./PaymentConfirmation";
import background from "./images/background.png";


const App = () => {
  return (
    <Router>
      <div className="App p-5" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',  backgroundSize: '100%' }}>
         <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/billing/details" element={<OrderDetails />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
         </Routes>
      </div>
    </Router>
    
  );
}

export default App;
