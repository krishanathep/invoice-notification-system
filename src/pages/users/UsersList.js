import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import ReactDatatable from "@ashvin27/react-datatable";
import Moment from "react-moment";
import "moment-timezone";

export default function UserList() {
  const users = [
    {
      id: 1,
      name: "Krishanathep.J",
      position: 'Developer',
      department: 'IT Solution',
      email: 'krishanathep@gmail.com',
      status: 'admin',
    },
    {
      id: 2,
      name: "Narumon.P",
      position: 'Helpdesk',
      department: 'IT Solution',
      email: 'narumon.p@gmail.com',
      status: 'user',
    },
    {
      id: 3,
      name: "Duangporn.S",
      position: 'Marketing',
      department: 'Marketing',
      email: 'duangporns@gmail.com',
      status: 'user',
    },
    {
      id: 4,
      name: "Somchai.T",
      position: 'Accounting',
      department: 'Accounting',
      email: 'somchai.t@gmail.com',
      status: 'user',
    },
    {
      id: 5,
      name: "Parwin.K",
      position: 'Sales',
      department: 'Sales Solution',
      email: 'parwin.k@gmail.com',
      status: 'user',
    },
  ]

  const columns = [
    {
      key: "id",
      text: "ID",
    },
    {
      key: "name",
      text: "Name",
      align: "center",
    },
    {
      key: 'email',
      text: 'Email',
      align: "center",
    },
    {
      key: "position",
      text: "Position",
      align: "center",
    },
    {
      key: 'department',
      text:'Department',
      align: "center",
    },
    {
      key: "status",
      text: "Status",
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
      cell: (users) => {
        return (
          <Fragment>
            <Link to={"/users/view/" + users.id} className="btn btn-info btn-sm my-1">
              <i class="fas fa-eye"></i>
            </Link>{" "}
            {/* <Link
              to={"/helpdesk/edit/" + problems.id}
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
                <h1>Users List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
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
                  <h3 className="card-title">Users</h3>
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
                    records={users}
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
