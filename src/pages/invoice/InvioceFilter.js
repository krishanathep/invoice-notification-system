import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InvioceFilter() {
  
  const [code, setCode]=useState('');

  const [day, setDay]=useState('')

  const [startDate, setStartDate] = useState(new Date());
  const [stopDate, setStopDate] = useState(new Date());


  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <div className="group">
                <label htmlFor="">บริษัท</label>
                <select name="mcompcode" id="" className="form-control" onChange={(event)=>setCode(event.tartget.value)}>
                  <option value="0280">0280</option>
                  <option value="0870">0870</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="group">
                <label htmlFor="">จากวันที่</label>
                <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
            </div>
            <div className="col-md-3">
              <div className="group">
                <label htmlFor="">ถึงวันที่</label>
                <DatePicker className="form-control" selected={stopDate} onChange={(date) => setStopDate(date)} />
              </div>
            </div>
            <div className="col-md-3">
              <div className="group">
                <label htmlFor="">วันที่ต้องแจ้ง</label>
                <select name="" id="" className="form-control">
                  <option value="">วันจันทร์</option>
                  <option value="">วันพฤหัสบดี</option>
                  <option value="">วันศุกร์</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
