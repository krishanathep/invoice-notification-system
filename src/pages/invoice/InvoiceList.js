import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import Moment from "react-moment";
import "moment-timezone";

export default function InvoiceList() {
  const invoices = [
    {
      id: 1,
      b_id: 101,
      c_id: 281,
      c_name: "Customer 1",
      d_balance: 100000,
      d_rebate: 0.1,
      d_reduce: 0.1,
      d_add: 0.1,
      d_total: 100000,
    },{
      id: 2,
      b_id: 101,
      c_id: 282,
      c_name: "Customer 2",
      d_balance: 200000,
      d_rebate: 0.2,
      d_reduce: 0.2,
      d_add: 0.2,
      d_total: 200000,
    },{
      id: 3,
      b_id: 101,
      c_id: 283,
      c_name: "Customer 3",
      d_balance: 300000,
      d_rebate: 0.3,
      d_reduce: 0.3,
      d_add: 0.3,
      d_total: 300000,
    },{
      id: 4,
      b_id: 101,
      c_id: 284,
      c_name: "Customer 4",
      d_balance: 400000,
      d_rebate: 0.4,
      d_reduce: 0.4,
      d_add: 0.4,
      d_total: 400000,
    },{
      id: 5,
      b_id: 101,
      c_id: 285,
      c_name: "Customer 5",
      d_balance: 500000,
      d_rebate: 0.5,
      d_reduce: 0.5,
      d_add: 0.5,
      d_total: 500000,
    },
    {
      id: 6,
      b_id: 101,
      c_id: 281,
      c_name: "Customer 6",
      d_balance: 100000,
      d_rebate: 0.1,
      d_reduce: 0.1,
      d_add: 0.1,
      d_total: 100000,
    },{
      id: 7,
      b_id: 101,
      c_id: 282,
      c_name: "Customer 7",
      d_balance: 200000,
      d_rebate: 0.2,
      d_reduce: 0.2,
      d_add: 0.2,
      d_total: 200000,
    },{
      id: 8,
      b_id: 101,
      c_id: 283,
      c_name: "Customer 8",
      d_balance: 300000,
      d_rebate: 0.3,
      d_reduce: 0.3,
      d_add: 0.3,
      d_total: 300000,
    },{
      id: 9,
      b_id: 101,
      c_id: 284,
      c_name: "Customer 9",
      d_balance: 400000,
      d_rebate: 0.4,
      d_reduce: 0.4,
      d_add: 0.4,
      d_total: 400000,
    },{
      id: 10,
      b_id: 101,
      c_id: 285,
      c_name: "Customer 10",
      d_balance: 500000,
      d_rebate: 0.5,
      d_reduce: 0.5,
      d_add: 0.5,
      d_total: 500000,
    },
  ];

  const columns = [
    {
      key: "c_id",
      text: "ID",
    },
    {
      key: "c_name",
      text: "Customer",
      align: "center",
    },
    {
      key: "d_balance",
      text: "Balance",
      align: "center",
    },
    {
      key: 'd_rebate',
      text:'Rebate'
    },
    {
      key: 'd_reduce',
      text: 'Reduce Debt'
    },
    {
      key: "d_add",
      text: "Add Debt",
    },
    {
      key: "d_total",
      text: "Total",
      align: "center",
    },
    {key: 'created_at',text: 'Create At',
    cell: (problems)=>{
      return (
        <Fragment>
          <Moment format="DD/MM/YYYY">
            {problems.createdAt}
          </Moment>
        </Fragment>
      )
    }
    },
    {
      key: "actions",
      text: "Actions",
      align: "center",
      cell: (invoice) => {
        return (
          <Fragment>
            <Link to={"/invoice/view/" + invoice.id} className="btn btn-info btn-sm my-1">
              <i class="fas fa-eye"></i>
            </Link>{" "}
            <Link
              to={"/invoice/edit/" + invoice.id}
              className="btn btn-primary btn-sm my-1"
            >
              <i class="fas fa-edit"></i>
            </Link>{" "}
            <button
              onClick={()=>alert('Send email was successfully!')}
              className="btn btn-success btn-sm"
            >
              <i class="fas fa-envelope"></i>
            </button>{" "}
            <button
              // onClick={(event) => deleteStudnet(event, problems.id)}
              onClick={()=>window.confirm('Are your sure you want to Delete ?')}
              className="btn btn-danger btn-sm"
            >
              <i class="fas fa-trash"></i>
            </button>
          </Fragment>
        );
      },
    },
  ];

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
                    <Link to="/">Dashboard</Link>
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
                  <h3 className="card-title">Invoice</h3>
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
                <Link
                    to="/invoice/create"
                    className="btn btn-success float-right"
                  >
                    <i class="fas fa-plus-circle"></i> Invioce
                  </Link>
                <ReactDatatable
                    columns={columns}
                    records={invoices}
                    //config={config}
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
