import React, { useState, useEffect } from "react";
import ExchangeSelector from '../../Component/ExchangeSelector/ExchangeSelector';
import ReserveBlock from '../../Component/ReserveBlock/ReserveBlock';
import LatestExchange from '../../Component/LatestExchange/LatestExchange';
import reserveData from "../../fakeData/reserveData";

const HomePage = () => {
    const [reserveList, setReserveList] = useState([]);
    useEffect(() => {
      let data = reserveData;
      setReserveList(data);
    }, []);
    return (
        <div className="container-fluid">
           <div className="row">
               <div className="col-lg-8">
                   <ExchangeSelector reserveList={reserveList}/>
                   <LatestExchange/>
               </div>
               <div className="col-lg-4">
                   <ReserveBlock reserveList={reserveList}/>
               </div>
           </div>
        </div>
    );
};

export default HomePage;