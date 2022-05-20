import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import Moment from "react-moment";
import "moment-timezone";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  function getData() {
    fetch("http://127.0.0.1:8000/api/customers")
      .then((res) => res.json())
      .then((res) => setCustomers(res.customers));
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      dataField: "mcustno",
      text: "Cus No",
      filter: textFilter(),
    },
    {
      dataField: "mcustname",
      text: "Customer",
      filter: textFilter(),
    },
    {
      dataField: "maddress1",
      text: "Address",
      filter: textFilter(),
    },
    {
      dataField: "mfax",
      text: "Fax",
      filter: textFilter(),
    },
    {
      dataField: 'mtel',
      text: 'Phone',
      filter: textFilter(),
    },
    {
      dataField: "mmobile",
      text: "Mobile",
      filter: textFilter(),
    },
    {
      dataField: "memail",
      text: "Email",
      filter: textFilter(),
    },
    // {
    //   dataField: "created_at",
    //   text: "Create At",
    // },
    // {
    //   dataField: "actions",
    //   text: "Actions",
    //   formatter: actionButton,
    // },
  ];

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <>
      <button
        className="btn btn-info btn-sm"
        onClick={() => alert('Edit Customer')}
      >
      <i class="fas fa-eye"></i>
      </button>{' '}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => alert('View Customer')}
      >
      <i class="fas fa-edit"></i>
      </button>
      </>
    );
  };

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Customers list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Customers</li>
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
                  <h3 className="card-title">Customers</h3>
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
                  <BootstrapTable
                    keyField="id"
                    data={customers}
                    columns={columns}
                    filter={filterFactory()}
                    pagination={paginationFactory()}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
