import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import InvestLayout from './components/invest/InvestLayout';

function App() {
  

  return (
    <>
      <main>
      <Header />
      {/* <Router>
        <Routes>
         <Route path="/invest" element={<InvestLayout />} />
        </Routes>
      </Router> */}
      <Footer />
      </main>
     
    </>
  )
}

export default App
