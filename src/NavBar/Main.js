// Main.js
import React from "react";
import "./main.css";
import { Outlet, useNavigate } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

export const Main = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="maincontainer">
      <div className="leftcontainer">
        <div className="leftcontainerheader">PI-HMS</div>
        <div className="modulelist">
          <button
            className="modules-button"
            onClick={() => handleNavigation("/appointment")}
          >
            Appointment
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/communication")}
          >
            Communication
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/diagnostic")}
          >
            Diagnostic
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/doctorconsultation")}
          >
            DoctorConsultation
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/finance")}
          >
            Finance
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/general")}
          >
            General
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/housekeeping")}
          >
            HouseKeeping
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/inpatient")}
          >
            InPatient
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/inventory")}
          >
            Inventory
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/masters")}
          >
            Masters
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/opbilling")}
          >
            OpBilling
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/patient")}
          >
            Patient
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/pharmacy")}
          >
            Pharmacy
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/security")}
          >
            Security
          </button>
          <button
            className="modules-button"
            onClick={() => handleNavigation("/staff")}
          >
            Staff
          </button>
        </div>
      </div>
      <div className="rightcontainer">
        <Outlet />
      </div>
    </div>
  );
};
