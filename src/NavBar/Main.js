import React, { useState } from "react";
import "./main.css";
import { Outlet, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faComment,
  faStethoscope,
  faMoneyBillWave,
  faCog,
  faHospital,
  faUser,
  faBoxOpen,
  faClipboardList,
  faPrescriptionBottleAlt,
  faShieldAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="maincontainer">
      <div className="leftcontainer">
        <div className="leftcontainerheader">PI-HMS</div>
        <div className="modulelist">
          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/appointment")}
            >
              <span className="modules-icon">
                {" "}
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              <span className="modules-title">Appointment</span>
            </p>
          </div>

          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/communication")}
            >
              <FontAwesomeIcon icon={faComment} className="modules-icon" />
              Communication
            </p>
          </div>

          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/diagnostic")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faFlaskVial} />
              </span>
              <span className="modules-title">Diagnostic</span>
            </p>
          </div>
          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/doctorconsultation")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faStethoscope} />
              </span>
              <span className="modules-title">DoctorConsultation</span>
            </p>
          </div>

          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/finance")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </span>
              <span className="modules-title">Finance</span>
            </p>
          </div>
          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/general")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faCog} />
              </span>
              <span className="modules-title">General</span>
            </p>
          </div>

          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/housekeeping")}
            >
              <span className="modules-icon">
                {/* <FontAwesomeIcon icon={faMop } /> */}
              </span>
              <span className="modules-title">HouseKeeping</span>
            </p>
          </div>

          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/inpatient")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faHospital} />
              </span>
              <span className="modules-title">InPatient</span>
            </p>
          </div>
          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/inventory")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faBoxOpen} />
              </span>
              <span className="modules-title">Inventory</span>
            </p>
          </div>
          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/masters")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </span>
              <span className="modules-title">Masters</span>
            </p>
          </div>
          <div className="modules">
            <p
            className="modules-p"
            onClick={() => handleNavigation("/opbilling")}
            >
            <span className="modules-icon">
              <FontAwesomeIcon icon={faFlaskVial} />
            </span>

            <span className="modules-title" onClick={toggleDropdown}>
              OpBilling
            </span>
            </p>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p>This is the dropdown content.</p>
              </div>
            )}
          </div>

          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/patient")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="modules-title">Patient</span>
            </p>
          </div>
          <div className="modules">
            <p
              className="modules-p"
              onClick={() => handleNavigation("/pharmacy")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faPrescriptionBottleAlt} />
              </span>
              <span className="modules-title">Pharmacy</span>
            </p>
          </div>
          <div className="modules">
  <p
    className="modules-p"
    onClick={() => handleNavigation("/security")}
  >
    <span className="modules-icon">
      <FontAwesomeIcon icon={faShieldAlt} />
    </span>
    <span className="modules-title">Security</span>
  </p>
</div>
<div className="modules">
  <p
    className="modules-p"
    onClick={() => handleNavigation("/staff")}
  >
    <span className="modules-icon">
      <FontAwesomeIcon icon={faUsers} />
    </span>
    <span className="modules-title">Staff</span>
  </p>
</div>
        </div>
      </div>
      <div className="rightcontainer">
        <Outlet />
      </div>
    </div>
  );
};
