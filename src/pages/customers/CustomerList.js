import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import Moment from "react-moment";
import "moment-timezone";

export default function CustomerList() {
  const customers = [
    {
      id: 1,
      name: "Customer Name 1",
      address: 'Customer Address 1',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 2,
      name: "Customer Name 2",
      address: 'Customer Address 2',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 3,
      name: "Customer Name 3",
      address: 'Customer Address 3',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 4,
      name: "Customer Name 4",
      address: 'Customer Address 4',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 5,
      name: "Customer Name 5",
      address: 'Customer Address 5',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 6,
      name: "Customer Name 6",
      address: 'Customer Address 6',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 7,
      name: "Customer Name 7",
      address: 'Customer Address 7',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 8,
      name: "Customer Name 8",
      address: 'Customer Address 8',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 9,
      name: "Customer Name 9",
      address: 'Customer Address 9',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
    {
      id: 10,
      name: "Customer Name 10",
      address: 'Customer Address 10',
      fax: "9053715135",
      phone: "0873243957",
      mobile: "0873243929",
      email: 'customer@gmail.com'
    },
  ]

  const columns = [
    {
      key: "id",
      text: "ID",
    },
    {
      key: "name",
      text: "Customer",
      align: "center",
    },
    {
      key: "address",
      text: "Address",
      align: "center",
    },
    {
      key: 'fax',
      text:'Fax'
    },
    {
      key: 'phone',
      text: 'Phone'
    },
    {
      key: "email",
      text: "Email",
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
      cell: (customers) => {
        return (
          <Fragment>
            <Link to={"/customers/view/" + customers.id} className="btn btn-info btn-sm my-1">
              <i class="fas fa-eye"></i>
            </Link>{" "}
            <Link
              to={"/customers/edit/" + customers.id}
              className="btn btn-primary btn-sm my-1"
            >
              <i class="fas fa-edit"></i>
            </Link>{" "} 
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
                <h1>Cusermers List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Dashboard</Link>
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
                <Link
                    to="/customers/create"
                    className="btn btn-success float-right"
                  >
                    <i class="fas fa-plus-circle"></i> Customer
                  </Link>
                <ReactDatatable
                    columns={columns}
                    records={customers}
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
