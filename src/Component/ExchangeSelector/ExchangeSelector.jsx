import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ExchangeSelector.scss";
import { useEffect } from "react";
import arrow from '../../assets/left-right-arrow.png'

const ExchangeSelector = ({reserveList}) => {
  const [sendItem,setSendItem] = useState(reserveList[0]);
  const [receiveItem,setReceiveItem] = useState(reserveList[6]);
  const sendItemHandler = (e)=>{
    let selectedItem = reserveList.filter(reserveItem=>reserveItem.id===e.target.value);
    setSendItem(selectedItem)
  }
  const receiveItemHandler = (e)=>{
    let selectedItem = reserveList.filter(reserveItem=>reserveItem.id===e.target.value);
    setReceiveItem(selectedItem)
  }
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(()=>{
    console.log(sendItem,receiveItem);
  },[sendItem,receiveItem])
  return (
    <div className="exchange-block py-4 shadow">
        <h2 className="exchange-header py-2 mb-4">Exchange</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <div className="col-lg-5 px-xl-5">
              <h3 className="text-center font-weight-bold">Send</h3>
                <select className="form-control text-capitalize" name="gender" ref={register} onChange={sendItemHandler}>
                  {
                    reserveList &&
                    reserveList.map(reserveItem=>
                      reserveItem.reserve>0 &&
                        <option className="text-capitalize" value={reserveItem.id}>{reserveItem.name} - {reserveItem.currency}</option>
                    )
                  }
                </select>
                <input className="form-control mt-3" name="firstName" ref={register} />
                <p className="pt-2">Exchange Rate : 1 USD = 82 BDT</p>
          </div>
          <div className="col-lg-2 text-center d-lg-flex arrow-image align-items-center">
              <img src={arrow} alt=""/>
          </div>
          <div className="col-lg-5 px-xl-5">
                <h3 className="text-center font-weight-bold">Receive</h3>
                <select className="form-control text-capitalize" name="gender" ref={register} onChange={receiveItemHandler}>
                  {
                    reserveList &&
                    reserveList.map(reserveItem=>
                      reserveItem.reserve>0 &&
                        <option className="text-capitalize" value={reserveItem.id}>{reserveItem.name} - {reserveItem.currency}</option>
                    )
                  }
                </select>
                <input className="form-control mt-3" name="firstName" defaultValue="82" ref={register} disabled/>
                <p className="pt-2">Reserve= 150 USD</p>
          </div>
        </div>
        <div className="text-center">
        <button className="btn" type="submit">Exchange</button>
        </div>
      </form>
    </div>
  );
};

export default ExchangeSelector;
