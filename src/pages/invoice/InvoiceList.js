import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import "moment-timezone";

export default function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [branch, setBranch] =  useState([])

  function getData() {
    fetch("http://127.0.0.1:8000/api/invoices")
      .then((res) => res.json())
      .then((res) => setInvoices(res.invoices));
  }

  function getBranch() {
    fetch("http://127.0.0.1:8000/api/invoices-branch")
      .then((res) => res.json())
      .then((res) => setBranch(res.invoices));
  }

  useEffect(() => {
    getData();
    getBranch();
  }, []);

  const columns2 = [
    {
      key: "mcompcode",
      text: "รหัสผู้แทน",
    },
    {
      key: "mcustno",
      text: "รหัสลูกค้า",
    },
    {
      key: "mcustname",
      text: "ชื่อลูกค้า",
    },
    {
      key: "mnetamt",
      text: "ยอดที่ต้องชำระ",
    },
     {
      key: "actions",
      text: "Actions",
      align: "center",
      cell: (customers) => {
        return (
          <Fragment>
            <Link to={"/customers/view/" + customers.id} className="btn btn-info">
              <i class="fas fa-eye"></i>
            </Link>{" "}
            <Link
              to={"/customers/edit/" + customers.id}
              className="btn btn-primary"
            >
              <i class="far fa-envelope"></i>
            </Link>{" "}
            {/* <button
              // onClick={(event) => deleteStudnet(event, problems.id)}
              onClick={()=>window.confirm('Are your sure you want to Delete ?')}
              className="btn btn-danger btn-sm"
            >
              <i class="fas fa-trash"></i>
            </button> */}
          </Fragment>
        );
      },
    },
  ]

  const columns = [
    {
      key: "mcompcode",
      text: "รหัสผู้แทน",
    },
    {
      key: "mcustno",
      text: "รหัสลูกค้า",
      align: "center",
    },
    {
      key: "mcustname",
      text: "ชื่อลูกค้า",
      align: "center",
    },
    {
      key: "mnetamt",
      text: "ยอดหนี้",
    },
    // {
    //   key: '',
    //   text: 'รีเบท'
    // },
    // {
    //   key: '',
    //   text: 'เงินเหลือ'
    // },
    // {
    //   key: '',
    //   text: "ลดหนี้",
    //   align: "center",
    // },
    // {
    //   key: '',
    //   text: "เพิ่มหนี้",
    //   align: "center",
    // },
    {
      key: "mnetamt",
      text: "ยอดชำระ",
      align: "center",
    },
    {
      key: "mpostdate",
      text: "วันที่เริ่ม",
      cell: (invoices) => {
        return (
          <Fragment>
            <Moment format="DD/MM/YYYY">{invoices.mpostdate}</Moment>
          </Fragment>
        );
      },
    },
    {
      key: "mdocdate",
      text: "วันที่สิ้นสุด",
      cell: (invoices) => {
        return (
          <Fragment>
            <Moment format="DD/MM/YYYY">{invoices.mdocdate}</Moment>
          </Fragment>
        );
      },
    },
    {
      key: "mduedate",
      text: "วันที่ต้องแจ้ง",
      cell: (invoices) => {
        return (
          <Fragment>
            <Moment format="DD/MM/YYYY">{invoices.mdocdate}</Moment>
          </Fragment>
        );
      },
    },
    // {key: 'created_at',text: 'Create At',
    // cell: (problems)=>{
    //   return (
    //     <Fragment>
    //       <Moment format="DD/MM/YYYY">
    //         {problems.createdAt}
    //       </Moment>
    //     </Fragment>
    //   )
    // }
    // },
    // {
    //   key: "actions",
    //   text: "Actions",
    //   align: "center",
    //   cell: (customers) => {
    //     return (
    //       <Fragment>
    //         <Link to={"/customers/view/" + customers.id} className="btn btn-info btn-sm my-1">
    //           <i class="fas fa-eye"></i>
    //         </Link>{" "}
    //         <Link
    //           to={"/customers/edit/" + customers.id}
    //           className="btn btn-primary btn-sm my-1"
    //         >
    //           <i class="fas fa-edit"></i>
    //         </Link>{" "}
    //         {/* <button
    //           // onClick={(event) => deleteStudnet(event, problems.id)}
    //           onClick={()=>window.confirm('Are your sure you want to Delete ?')}
    //           className="btn btn-danger btn-sm"
    //         >
    //           <i class="fas fa-trash"></i>
    //         </button> */}
    //       </Fragment>
    //     );
    //   },
    // },
  ];

  const config = {
    show_filter: true,
  };

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Invoice List</h1>
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
                  <h3 className="card-title">Calculate</h3>
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
                  <ReactDatatable
                    columns={columns}
                    records={invoices}
                    config={config}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Inbox</h3>
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
                  <ReactDatatable
                    columns={columns2}
                    records={branch}
                    config={config}
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
