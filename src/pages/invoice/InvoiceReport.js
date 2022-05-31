import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import BootstrapTable from "react-bootstrap-table-next";

export default function InvoiceReport() {
  const { id } = useParams();
  const [bills, setBills] = useState([]);

  function getData() {
    fetch("http://127.0.0.1:8000/api/billdetails?data=" + id)
      .then((res) => res.json())
      .then((res) => setBills(res.bills));
  }

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Invoice report</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Invoice report</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <ReactToPrint />
      <section classname="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* <div className="callout callout-info">
                <h5>
                  <i className="fas fa-info" /> Note:
                </h5>
                This page has been enhanced for printing. Click the print button
                at the bottom of the invoice to test.
              </div> */}
              <div className="invoice p-3 mb-3">
                <div className="row">
                  <div className="col-12">
                    <h3 className="mb-5 mt-5" align="center">
                      ใบแจ้งเตือนลูกค้าที่ครบกำหนดชำระค่าสินค้า
                    </h3>
                  </div>
                </div>
                <div className="row invoice-info">
                  <div className="col-sm-4 invoice-col">
                    From
                    <address>
                      <strong>NAWA PLASTIC Industries Co.,Ltd.</strong>
                      {/* <br />
                      เลขที่ 1  ถ.ปูนซิเมนต์ไทย บางซื่อ
                      <br />
                      กทม. 10800 */}
                      <br />
                      Phone: +66 2555 0333
                      <br />
                      Email:{" "}
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e68f888089a6878a8b879587838382959293828f89c885898b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </address>
                  </div>
                  <div className="col-sm-4 invoice-col">
                    To
                    <address>
                      <strong>บจ.สยาม อินเตอร์ ฮาร์ดแวร์</strong>
                      {/* <br />
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107 */}
                      <br />
                      Phone: (555) 539-1037
                      <br />
                      Email:{" "}
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="640e0b0c0a4a000b0124011c05091408014a070b09"
                      >
                        [email&nbsp;protected]
                      </a>
                    </address>
                  </div>
                  <div className="col-sm-4 invoice-col">
                    <p></p>
                    <b>Invoice #007612</b>
                    <br />
                    <b>Order ID:</b> 4F3S8J
                    <br />
                    <b>Payment Due:</b> 2/22/2014
                    {/* <br />
                    <b>Account:</b> 968-34567 */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ลำดับที่</th>
                          <th>กำหนดชำระ</th>
                          <th>เงื่อนไขขาย</th>
                          <th>ใบแจ้งหนี้</th>
                          <th>มูลค่า บาท</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bills.map((bill,i)=>(
                            <tr key={i}>
                            <td>{i+1}</td>
                            <td>{bill.mdocdate}</td>
                            <td>{bill.mpayterm}</td>
                            <td>{bill.macctdoc}</td>
                            <td>{bill.mnetamt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="lead">ท่านสามารถโอนเงินชำระค่าสินค่าได้ดังนี้</p>
                    
                    {/* <img src={process.env.PUBLIC_URL + "/assets/dist/img/credit/visa.png" } alt="Visa" />{' '}
                    <img
                      src={process.env.PUBLIC_URL +"/assets/dist/img/credit/mastercard.png" }
                      alt="Mastercard"/>{' '}
                    <img
                      src={process.env.PUBLIC_URL + "/assets/dist/img/credit/american-express.png" }
                      alt="American Express"
                    />{' '}
                    <img src={process.env.PUBLIC_URL +"/assets/dist/img/credit/paypal2.png" } alt="Paypal" /> */}
                    <p
                      className="text-muted well well-sm shadow-none"
                      style={{ marginTop: 10 }}
                    >
                      1. แจ้งการชำระเงินผ่านธนาคาร(PAY-IN SLIP)ตามบบฟอร์มของบริษัท<br/>
                      2. โอนผ่านบัญชีกระแสรายวัน(ใช้ Payin ธนาคาร) หรือ โอนผ่านอินเตอร์เน็ต<br/><br/>
                      <table width='100%'>
                        <tr>
                          <td>ธนาคารกสิกรไทย</td>
                          <td>สาขาบางซื่อ</td>
                          <td>020-1-06142-3</td>
                        </tr>
                        <tr>
                          <td>ธนาคารไทยพาณิชย์</td>
                          <td>สาขาบางโพ</td>
                          <td>027-3-02206-9</td>
                        </tr>
                        <tr>
                          <td>ธนาคารกรุงเทพ</td>
                          <td>สาขาซอยอารี</td>
                          <td>127-3-10643-3</td>
                        </tr>
                        <tr>
                          <td>ธนาคารกรุงไทย</td>
                          <td>สาขาประดิพัทธ์</td>
                          <td>034-6-10197-4</td>
                        </tr>
                      </table>
                    </p> 
                  </div>
                  <div className="col-6">
                    <p className="lead">มูลค่ารวมทั้งสิ้น</p>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th style={{ width: "50%" }}>Subtotal:</th>
                            <td>$250.30</td>
                          </tr>
                          {/* <tr>
                            <th>Tax (9.3%)</th>
                            <td>$10.34</td>
                          </tr>
                          <tr>
                            <th>Shipping:</th>
                            <td>$5.80</td>
                          </tr> */}
                          <tr>
                            <th>Total:</th>
                            <td>$265.24</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row no-print">
                  <div className="col-12">
                    {/* <a
                      href="invoice-print.html"
                      rel="noopener"
                      target="_blank"
                      className="btn btn-default"
                    >
                      <i className="fas fa-print" /> Print
                    </a> */}
                    <button
                      onClick={() => window.print()}
                      className="btn btn-default  float-right"
                    >
                      <i className="fas fa-print" /> Print & PDF
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-success float-right"
                    >
                      <i className="far fa-credit-card" /> Submit Payment
                    </button> */}
                    {/* <button
                      type="button"
                      className="btn btn-primary float-right"
                      style={{ marginRight: 5 }}
                    >
                      <i className="fas fa-download" /> Generate PDF
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
