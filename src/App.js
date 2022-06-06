import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import SignIn from "./pages/login/SignIn";
import SignUp from "./pages/login/SiginUp";
import AllReport from "./pages/report/AllReport";

import InvoiceList from "./pages/invoice/InvoiceList";
import InvoiceReport from './pages/invoice/InvoiceReport'
import InvoiceDetail from './pages/invoice/invoiceDetail'

import CustomerList from "./pages/customers/CustomerList";
import CustomerCreate from "./pages/customers/CustomerCreate";
import CustomerView from "./pages/customers/CustomerView";
import CustomerEdit from "./pages/customers/CustomerEdit";

import UserList from "./pages/users/UsersList";
import UserView from "./pages/users/UserView";

import TableExample from "./pages/TableExaple";

function App() {
  const token = localStorage.getItem('access_token')

  if(!token) {
    return <SignIn/>
  }

  return (
    <div className="wrapper">
      <Router>
        {window.location.pathname !== "/" && <Navbar />}
        {window.location.pathname !== "/" && <Sidebar />}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/invoice/list" element={<InvoiceList />} />
          <Route exact path="/invoice/report/:id" element={<InvoiceReport />} />
          <Route exact path="/invoice/detail/:id" element={<InvoiceDetail/> } />

          <Route exact path="/customers/list" element={<CustomerList />} />
          <Route exact path="/customers/create" element={<CustomerCreate />} />
          <Route exact path="/customers/view/:id" element={<CustomerView />} />
          <Route exact path="/customers/edit/:id" element={<CustomerEdit />} />
          
          <Route exact path="/users/list" element={<UserList />} />
          <Route exact path="/users/view/:id" element={<UserView />} />

          <Route exact path="/table" element={<TableExample />} />

          <Route path="/report" element={<AllReport />} />
          
        </Routes>
        {/* {window.location.pathname === "/" && "/invoice/report" ? null :  <Footer />} */}
        {/* {window.location.pathname.includes('/signin','/invoice/report')  ? null :  <Footer />} */}

      </Router>
    </div>
  );
}

export default App;
