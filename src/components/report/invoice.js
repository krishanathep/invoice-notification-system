import React from "react";
import { Link } from "react-router-dom";
import ComponentToPrint from "./componentToPrint";
import ReactToPrint from "react-to-print";

function invoice() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Invoice report</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Invoice report</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <ReactToPrint />
      <ComponentToPrint  />
    </div>
  );
}

export default invoice;
