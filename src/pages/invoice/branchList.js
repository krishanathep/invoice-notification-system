import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";

export default function BranchList({ row }) {
  const [branch, setBranch] = useState([]);
  const { id } = useParams();
  function getData() {
    fetch("http://127.0.0.1:8000/api/billdetails?data=" + id)
      .then((res) => res.json())
      .then((res) => setBranch(res.bills));
  }

  useEffect(() => {
    getData(id);
  }, []);

  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
}

function showDetail(){
  fetch("http://127.0.0.1:8000/api/billdetails?data="+row.mcustno)
      .then((res) => res.json())
      .then((res) => setBranch(res.bills));
}

  return (
    <div>
      <table className="table-boardered">
        <tr>
          <th>No</th>
          <th>วันที่</th>
          <th>รหัสลูกค้า</th>
          <th>ชื่อลูกค้า</th>
          <th>ยอดค้างชำระ</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2022-05-30</td>
          <td>0002000097</td>
          <td>บจ.สยาม อินเตอร์ ฮาร์ดแวร์</td>
          <td>10195.99</td>
          <td>
            <button
              data-toggle="modal"
              data-target="#myModal"
              className="btn btn-info"
              onClick={showDetail}
            >
              VIEW
            </button>
          </td>
        </tr>
      </table>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">รายละเอียดบิล</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <table className="table-boardered">
                <tr>
                  <th>ลำดับ</th>
                  <th>ชนิดบิล</th>
                  <th>เลขที่บิล</th>
                  <th>วันที่ต้องชำระบิล</th>
                  <th>ยอดหนี้</th>
                  <th>หมายเหตุ</th>
                </tr>
               {branch.map((b,i)=>(
                  <tr>
                  <td>{i+1}</td>
                  <td>{b.mdoctype}</td>
                  <td>{b.macctdoc}</td>
                  <td>{b.mdocdate}</td>
                  <td>{b.mnetamt}</td>
                  <td align="center">*</td>
                </tr>
               ))}
              </table>
            </div>

            <div class="modal-footer">
              <Link to={'/invoice/report/'+row.mcustno} onClick={refreshPage} className="btn btn-primary">Print</Link>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
