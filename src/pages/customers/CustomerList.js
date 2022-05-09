import React, {useState,useEffect,Fragment} from "react";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import Moment from "react-moment";
import "moment-timezone";

export default function CustomerList() {
  
  const [customers,setCustomers]=useState([])

  function getData() {
    fetch('http://127.0.0.1:8000/api/customers')
      .then((res)=>res.json())
      .then((res)=>setCustomers(res.customers))
  }

  useEffect(()=>{
    getData()
  },[])

  const columns = [
    {
      key: "mcustno",
      text: "Cus No",
    },
    {
      key: "mcustname",
      text: "Customer",
      align: "center",
    },
    {
      key: "maddress1",
      text: "Address",
      align: "center",
    },
    {
      key: 'mfax',
      text:'Fax'
    },
    // {
    //   key: 'mtel',
    //   text: 'Phone'
    // },
    {
      key: 'mmobile',
      text: 'Mobile'
    },
    {
      key: "memail",
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
  ];
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Customers List</h1>
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
