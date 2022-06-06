import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";

export default function BranchList({ row }) {
  const [branch, setBranch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const { id } = useParams();

  const columns = [
    {
      dataField: "mdoctype",
      text: "ชนิดบิล",
    },
    {
      dataField: "macctdoc",
      text: "เลขที่บิล",
    },
    {
      dataField: "mdocdate",
      text: "วันที่ต้องชำระบิล",
    },
    {
      dataField: "mnetamt",
      text: "ยอดหนี้",
    },
    {
      dataField: "remark",
      text: "หมายเหตุ",
      formatter: (cellContent, row) => (
        <p align='center'>*</p>
      )
    },
  ]

 async function getData() {
    try {
      setLoading(true)
     await fetch("http://127.0.0.1:8000/api/branch?data=" + row.mcustno)
      .then((res) => res.json())
      .then((res) => setBranch(res.branch));
    }catch (error) {
      setError(error)
    }finally {
      setLoading(false)
    }
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };

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

if (loading === true) {
  return (
      <p>Loading...</p>
    )
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
        {branch.map((b, i)=>(
          <tr>
          <td>{ i+1 }</td>
          <td>{ b.mduedate }</td>
          <td>{ b.mcustno }</td>
          <td>{ b.mcustname }</td>
          <td>{ b.outstanding }</td>
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
        ))}
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
            <BootstrapTable
                    keyField="macctdoc"
                    data={branch}
                    columns={columns}
                    selectRow={ selectRow }
                  />
              {/* <table className="table-boardered">
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
              </table> */}
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
