import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

export default function BranchList({ row }) {
  const [branch, setBranch] = useState([]);

  function getData() {
    fetch("http://127.0.0.1:8000/api/branch?data=" + row.mcustno_sendto)
      .then((res) => res.json())
      .then((res) => setBranch(res.branch));
  }

  useEffect(() => {
    //getData();
  }, []);

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
          <td>2022-07-05</td>
          <td>0002000676</td>
          <td>บมจ.โฮม โปรดักส์ เซ็นเตอร์</td>
          <td>11910.04</td>
          <td>
            <button
              data-toggle="modal"
              data-target="#myModal"
              className="btn btn-info"
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
                <tr>
                  <td>1</td>
                  <td>RT</td>
                  <td>0164884841</td>
                  <td>2022-5-11</td>
                  <td>161334.60</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>RT</td>
                  <td>0164884842</td>
                  <td>2022-5-11</td>
                  <td>65902.52</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>RT</td>
                  <td>0164884843</td>
                  <td>2022-5-11</td>
                  <td>129315</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>RT</td>
                  <td>0164884844</td>
                  <td>2022-5-11</td>
                  <td>268031.15</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>RT</td>
                  <td>0164884845</td>
                  <td>2022-5-11</td>
                  <td>74750.74</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>RT</td>
                  <td>0164884846</td>
                  <td>2022-5-11</td>
                  <td>3389.69</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>RT</td>
                  <td>0164884847</td>
                  <td>2022-5-11</td>
                  <td>124894.123</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>RT</td>
                  <td>0164884848</td>
                  <td>2022-5-11</td>
                  <td>191.32</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>RT</td>
                  <td>0164884849</td>
                  <td>2022-5-11</td>
                  <td>3389.69</td>
                  <td align="center">*</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>RT</td>
                  <td>0164884850</td>
                  <td>2022-5-11</td>
                  <td>24324</td>
                  <td align="center">*</td>
                </tr>
              </table>
            </div>

            <div class="modal-footer">
              <button
                onClick={()=>window.location.href = "/invoice/report"}
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Print
              </button>
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
