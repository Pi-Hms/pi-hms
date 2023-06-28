import React from "react";
import { PatientN } from "../../NavBar/PatientN";

export const Patient = () => {
  return (
    <div>
      <PatientN />
      <div className="mt-1">
        <div className="container1">
          <div className="add_btn mt-2 mb-2">
            <table class="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Sl No</th>
                  <th scope="col">Patient No</th>
                  <th scope="col"> Patient Name</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Registration</th>
                  <th scope="col">Action Buttons</th>
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
