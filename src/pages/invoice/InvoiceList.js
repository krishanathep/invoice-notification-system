import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "moment-timezone";
import BranchList from "./branchList";
import "react-datepicker/dist/react-datepicker.css";
import ReactLoading from "react-loading";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export default function InvoiceList() {
  const [invoices, setNotifications] = useState([]);
  const [code, setCode] = useState("");
  const [day, setDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [state, setState] = useState();

  const handleCallback = (start, stop) => {
    setState({ start, stop });
  };

  const start = state?.start?.format("YYYY-MM-DD");
  const stop = state?.stop?.format("YYYY-MM-DD");



  const columns = [
    {
      dataField: "mcompcode",
      text: "รหัสผู้แทน",
    },
    {
      dataField: "mcustno",
      text: "รหัสลูกค้า",
    },
    {
      dataField: "mcustname",
      text: "ชื่อลูกค้า",
    },
    {
      dataField: "outstanding",
      text: "ยอดหนี้",
    },
    {
      dataField: "rebate",
      text: "รีเบท",
      formatter: (cellContent, row) => {
        if (row.rebate) {
          return <p>{row.rebate}</p>;
        }
        return <p>0</p>;
      },
    },
    {
      dataField: "balance",
      text: "เงินเหลือ",
      formatter: (cellContent, row) => {
        if (row.balance) {
          return <p>{row.balance}</p>;
        }
        return <p>0</p>;
      },
    },
    {
      dataField: "debit",
      text: "ลดหนี้",
      formatter: (cellContent, row) => {
        if (row.debit) {
          return <p>{row.debit}</p>;
        }
        return <p>0</p>;
      },
    },
    {
      dataField: "credit",
      text: "ยอดที่ต้องชำระ",
      formatter: (cellContent, row) => <p>{row.outstanding - row.debit}</p>,
    },
    {
      dataField: "mday",
      text: "วันที่ต้องแจ้ง",
    },
    {
      dataField: "mduedate",
      text: "จากวันที่",
    },
    {
      dataField: "actions",
      text: "Actions",
      formatter: actionButton,
    },
  ];

  async function getData() {
    try {
      setLoading(true)
      await fetch("http://127.0.0.1:8000/api/notifications")
      .then((res) => res.json())
      .then((res) => setNotifications(res.notifications));
    } catch(error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  async function searchDay(key) {
    try {
      setLoading(true);
      await fetch("http://127.0.0.1:8000/api/notifications-day?data=" + key)
        .then((res) => res.json())
        .then((res) => setNotifications(res.notifications));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function searchCode(key) {
    try {
      setLoading(true);
      await fetch("http://127.0.0.1:8000/api/notifications-code?data=" + key)
        .then((res) => res.json())
        .then((res) => setNotifications(res.notifications));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function searchStartDate() {
  try {
      setLoading(true);
      await fetch(
        `http://127.0.0.1:8000/api/notifications-due-date?start=${start}&stop=${stop}`
      )
        .then((res) => res.json())
        .then((res) => setNotifications(res.notifications));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => alert("Sending Email!")}
      >
        SEND
      </button>
    );
  }

  const expandRow = {
    renderer: (row) => (
      <div align="center">
        <BranchList row={row} />
      </div>
    ),
    onlyOneExpanding: true,
    showExpandColumn: true,
  };

  if (loading === true) {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="loading mt-5" align="center">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <ReactLoading
                    //type="spokes"
                    type='spin'
                    color="#6495ED"
                    height={"5%"}
                    width={"5%"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Invoice list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Invoice</li>
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
                  <h3 className="card-title">Invoice list</h3>
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
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="group">
                            <label htmlFor="">บริษัท</label>
                            <select
                              name={code}
                              className="form-control"
                              onChange={(event) =>
                                searchCode(event.target.value)
                              }
                            >
                              <option value="default">Please Select</option>
                              <option value="0281">0281</option>
                              <option value="0282">0282</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="group">
                            <label htmlFor="">
                              จากวันที่เริ่ม - วันที่สิ้นสุด
                            </label>
                            <DateRangePicker
                              onCallback={handleCallback}
                              onApply={searchStartDate}
                            >
                              <input type="text" className="form-control" />
                            </DateRangePicker>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="group">
                            <label htmlFor="">วันที่ต้องแจ้ง</label>
                            <select
                              name={day}
                              className="form-control"
                              onChange={(event) =>
                                searchDay(event.target.value)
                              }
                            >
                              <option value="default">Please Select</option>
                              <option value="Monday">วันจันทร์</option>
                              <option value="Thursday">วันพฤหัสบดี</option>
                              <option value="Friday">วันศุกร์</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BootstrapTable
                    keyField="mcustno"
                    data={invoices}
                    columns={columns}
                    expandRow={expandRow}
                    pagination={paginationFactory()}
                    noDataIndication={ 'No Results Found!' }
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
