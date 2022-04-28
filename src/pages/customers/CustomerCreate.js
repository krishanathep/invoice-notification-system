import React from "react";
import { Link } from "react-router-dom";

export default function CustomerCreate() {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Create Customer</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Customer</Link>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                  <h3 className="card-title">Create Customer</h3>
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
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Customer</label>
                        <input type="text" className="form-control" placeholder="Enter customer name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Address</label>
                        <input type="text" className="form-control"  placeholder="Enter customer address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Fax</label>
                        <input type="text" className="form-control"  placeholder="Enter customer fax" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" className="form-control"  placeholder="Enter customer phone" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control"  placeholder="Enter customer email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                    <div className="form-group float-right">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>{" "}
                          <Link to="/customers/list" className="btn btn-danger">
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
