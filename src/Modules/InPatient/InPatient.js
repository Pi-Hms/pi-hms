import React from "react";
import { InPatientN } from "../../NavBar/InPatientN";

export const InPatient = () => {
  return (
    <div>
      <InPatientN />
      <div className="mt-1">
        <div className="container1">
          <div className="add_btn mt-2 mb-2">
            <table class="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Sl No</th>
                  <th scope="col">IPCase</th>
                  <th scope="col"> Patient Name</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Bill Type</th>
                  <th scope="col">Ward Bed</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
            </table>
            <tbody></tbody>
          </div>
        </div>
      </div>
    </div>
  );
};
