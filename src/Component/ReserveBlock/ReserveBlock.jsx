import React from "react";
import "./ReserveBlock.scss";
const ReserveBlock = ({reserveList}) => {
 
  return (
    <div className="reserve-block py-4 shadow">
      <h2 className="py-2 reserve-header">Reserve</h2>
      <hr />
      {
      reserveList ? 
        reserveList.map((reserveItem) => (
          <div className="row px-5" key={reserveItem.id}>
              <div className="col-1">
                <img height="50px" src={reserveItem.logo} alt="crypto-coin" />
              </div>
              <div className="col-11 pl-5 pb-2">
                <span>
                <span className="text-capitalize">{reserveItem.name} <span className="text-uppercase">{reserveItem.currency}</span></span>
                    <br />
                    <span>180$</span>
                </span>
              </div>
              <hr/>
          </div>
        ))
      : 
    <div>
        <p className="lead">loading...</p>
    </div>
      
      }
    </div>
  );
};

export default ReserveBlock;
