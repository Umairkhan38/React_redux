import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
import { useSelector } from "react-redux";


const Shop = () => {
  
  const amount = useSelector((state) => state.amount);
  const dispatch=useDispatch();
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);


  return (
    <>
    <h2 className='text-center'>Deposite / Withdraw Money</h2>
    <hr />
    <div className='d-flex justify-content-center my-5'>
    <button className='btn btn-success mx-2' onClick={()=>depositMoney(100) } >+</button>
    <p className='fw-semibold fst-italic '>Update Your Balance</p>
    <button  disabled={amount<=0} className='btn btn-danger mx-2' onClick={()=>withdrawMoney(100) } >-</button>
    </div>
    </>
  )
}

export default Shop
