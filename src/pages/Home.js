import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            {/* <div class="col-lg-3 col-6">
              <div class="small-box bg-primary">
                <div class="inner">
                  <h3>150</h3>
                  <p>Invoice</p>
                </div>
                <div class="icon">
                  <i class="fas fas fa-file-alt"></i>
                </div>
                <Link to="/invoice/list" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>100</h3>
                  <p>Customers</p>
                </div>
                <div class="icon">
                  <i class="fas fa-shopping-basket"></i>
                </div>
                <Link to="/customers/list" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>50</h3>
                  <p>Users</p>
                </div>
                <div class="icon">
                  <i class="fas fa-users"></i>
                </div>
                <Link to="/users/list" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="small-box bg-danger">
                <div class="inner">
                  <h3>10</h3>
                  <p>Notification</p>
                </div>
                <div class="icon">
                  <i class="fas fa-exclamation-circle"></i>
                </div>
                <Link to="/invoice/list" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div> */}
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-info">
                  <i class="far fa-copy"></i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Invoice</span>
                  <span class="info-box-number">1,410</span>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-success">
                  <i class="fas fa-shopping-basket"></i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Customers</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-primary">
                  <i class="fa fa-users"></i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Users</span>
                  <span class="info-box-number">648</span>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-danger">
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Notification</span>
                  <span class="info-box-number">139</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart width={500} height={250} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                      width={500}
                      height={250}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
