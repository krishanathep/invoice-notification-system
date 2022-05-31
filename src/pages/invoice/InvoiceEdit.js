import React from "react";
import { Link } from "react-router-dom";

export default function InvoiceEdit() {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit Invoice</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Invoice</Link>
                  </li>
                  <li className="breadcrumb-item active">Edit</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Edit Invoice</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                      title="Remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Customer</label>
                        <input type="text" className="form-control" value='Edit Customer' />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Balance</label>
                        <input type="text" className="form-control" value='Edit Balancer' />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Rebate</label>
                        <input type="text" className="form-control" value='Edit Rebate' />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Reduce Debt</label>
                        <input type="text" className="form-control" value='Edit Reduce Debt' />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Add Debt</label>
                        <input type="text" className="form-control" value='Edit Add Debt' />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Total</label>
                        <input type="text" className="form-control" value='Edit Total' />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <div className="form-group float-right">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>{" "}
                          <Link to="/invoice/list" className="btn btn-danger">
                            Cancel
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
