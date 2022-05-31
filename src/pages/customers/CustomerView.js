import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

export default function CustoersView() {
  const {id} = useParams();

//   const getData = async () => {
//     await fetch("http://127.0.0.1:8000/api/problems/" + id)
//       .then((res) => res.json())
//       .then((res) => setProblem(res.problem));
//   };

//   useEffect(() => {
//     getData(id);
//   }, []);

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>View Customer</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Customer</Link>
                  </li>
                  <li className="breadcrumb-item active">View</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row container">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">View Customer</h3>
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
                  <table className="table table-bordered">
                    <tr>
                      <td>ID</td>
                      <td>{id}</td>
                    </tr>
                    <tr>
                      <td>Customer</td>
                      <td>Test customer</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>Test adress</td>
                    </tr>
                    <tr>
                      <td>Fax</td>
                      <td>Test fax</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>Test phone</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>Test email</td>
                    </tr>
                    <tr>
                      <td>Create At</td>
                      <td>
                        <Moment format="DD/MM/YYYY">
                          
                        </Moment>
                      </td>
                    </tr>
                  </table>
                  <div className="form-group mt-2 float-right">
                    <Link to="/customers/list" className="btn btn-danger">
                      Cancel
                    </Link>
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