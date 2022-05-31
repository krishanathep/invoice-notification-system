import { set } from "date-fns";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerCreate() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [faxstatus, setFaxstatus] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [remark, setRemark] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      id,
      name,
      address1,
      setMobile,
      fax,
      faxstatus,
      phone,
      email,
      contact,
      remark,
    };

    const resusetOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://127.0.0.1:8000/api/customer-create", resusetOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert("เพิ่มข้อมูลเรียบร้อยแล้ว" + res.status);
          window.location.href = "/customers/list";
        } else {
          alert("มีบางอย่างผิดพลาด");
        }
      });
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Create Customer</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Customer</Link>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                  <h3 className="card-title">Create Customer</h3>
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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ID</label>
                          <input
                            type="text"
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer id"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Customer</label>
                          <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Address 1</label>
                          <input
                            type="text"
                            value={address1}
                            onChange={(event) =>
                              setAddress1(event.target.value)
                            }
                            className="form-control"
                            placeholder="Enter customer address 1"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Mobile</label>
                          <input
                            type="text"
                            value={mobile}
                            onChange={(event) =>
                              setMobile(event.target.value)
                            }
                            className="form-control"
                            placeholder="Enter customer address 2"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Fax</label>
                          <input
                            type="text"
                            value={fax}
                            onChange={(event) => setFax(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer fax"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Fax Status</label>
                          <input
                            type="text"
                            value={faxstatus}
                            onChange={(event) =>
                              setFaxstatus(event.target.value)
                            }
                            className="form-control"
                            placeholder="Enter customer fax status"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Phone</label>
                          <input
                            type="text"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Contact</label>
                          <input
                            type="text"
                            value={contact}
                            onChange={(event) => setContact(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer contact"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Remark</label>
                          <input
                            type="text"
                            value={remark}
                            onChange={(event) => setRemark(event.target.value)}
                            className="form-control"
                            placeholder="Enter customer remark"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group float-right">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>{" "}
                          <Link to="/customers/list" className="btn btn-danger">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
