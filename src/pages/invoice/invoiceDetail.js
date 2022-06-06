import React, {useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail({row}) {
  const { id } = useParams();
  const [detail,setDetail] = useState([])

function getData(){
  fetch("http://127.0.0.1:8000/api/billdetails?data="+id)
      .then((res) => res.json())
      .then((res) => setDetail(res.bills));
}

useEffect(()=>{
    getData();
})

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Invoice Detail</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Invoice Detail</li>
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
                  <h3 className="card-title">Invoice Detail</h3>
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
                  <div class="modal-body">
                    <table className="table table-bordered">
                      <tr>
                        <th>ลำดับ</th>
                        <th>ชนิดบิล</th>
                        <th>เลขที่บิล</th>
                        <th>วันที่ต้องชำระบิล</th>
                        <th>ยอดหนี้</th>
                        <th>หมายเหตุ</th>
                      </tr>
                      {detail.map((d, i) => (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{d.mdoctype}</td>
                          <td>{d.macctdoc}</td>
                          <td>{d.mdocdate}</td>
                          <td>{d.mnetamt}</td>
                          <td align="center">*</td>
                        </tr>
                    ))}
                    </table>
                    <div className="float-right">
                        <Link to={'/invoice/report/' + row} className="btn btn-primary">Submit</Link>{' '}
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}