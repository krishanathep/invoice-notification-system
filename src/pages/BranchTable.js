import React,{useState,useEffect} from 'react'

export default function BranchTable({row}) {
    const [branch, setBranch] =  useState([])

    function getData(){
        fetch('http://127.0.0.1:8000/api/notifications-branch?data='+row.mcustno_sendto)
            .then((res)=>res.json())
            .then((res)=>setBranch(res.branch))
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <table>
      <tr>
        <th>No</th>
        <th>รหัสผู้แทน</th>
        <th>รหัสลูกค้า</th>
        <th>รหัสที่ส่ง</th>
        <th>ชื่อลูกค้า</th>
      </tr>
      {branch.map((b,i)=>(
        <tr>
         <td>{i+1}</td>
         <td>{b.mcomp}</td>
         <td>{b.mcustno}</td>
         <td>{b.mcustno_sendto}</td>
         <td>{b.mcustname}</td>
        </tr>
      ))}
    </table>
  )
}
