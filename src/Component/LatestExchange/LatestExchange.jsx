import React from "react";
import "./LatestExchange.scss";

const LatestExchange = ({ reserveList }) => {
  return (
    <div className="latest-block py-4 shadow">
      <h3 className="py-2 latest-header">Latest Exchanges</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Send</th>
              <th scope="col">Receive</th>
              <th scope="col">Amount</th>
              <th scope="col">Mobile</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
          {
          [1,2,3,4,5,6,7,8,9,10].map(reserveItem => 
                  <tr>
                    <td><img src="https://i.imgur.com/QSPfdPw.png" alt=""/></td>
                    <td><img src="https://i.imgur.com/mzFd499.png" alt=""/></td>
                    <td>50 USD</td>
                    <td>*******5018</td>
                    <td>12/08/2020</td>
                    <td>17:50</td>
                    <td style={{cursor:"wait"}} className="text-success font-weight-bold">processing</td>
                  </tr>
                )
                }
          </tbody>
        </table>
        </div>
    </div>
  )
};

export default LatestExchange;
