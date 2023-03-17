import React from 'react';
import './Item.css';
import {IoPersonCircle} from 'react-icons/io5';
import { Navigate, useNavigate,Link } from 'react-router-dom';
function Item(param) {
  const navigate = useNavigate();
  function handleViewDetails(id){
    console.log(id);
    // console.log('ID print ahe');
    navigate(`/doctorView/` + id);
  }
  return (
    <div className='itemContainer'>
        <div className='iconAndName'>
            <h4 style={{fontSize: '32px'}}><IoPersonCircle/></h4>
            <h4>{param.name}</h4>
        </div>
        <p>Age: {param.age}</p>
        {/* <p>Weight: {param.w}</p> */}
        <div className='dateAndButton'>
            {/* <p>Date: 6 March 2023</p> */}
            <Link to={`/doctorView/${param.id}`} style={{color: 'white'}}><button className='itemButton'>View Details</button></Link>
            
        </div>
    </div>
  )
}

export default Item