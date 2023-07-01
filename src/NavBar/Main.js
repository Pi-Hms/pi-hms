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
  faBroom,
  faMoneyBill,
  faChevronDown,
  faChevronUp,
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
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              <span className="modules-title">Appointment</span>

              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/communication")}
            >
              <span className="modules-icon">
              <FontAwesomeIcon icon={faComment}  />
              </span>
              <span className="modules-title"> Communication </span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/diagnostic")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faFlaskVial} />
              </span>
              <span className="modules-title">Diagnostic</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/doctorconsultation")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faStethoscope} />
              </span>
              <span className="modules-title">Consultation</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/finance")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </span>
              <span className="modules-title">Finance</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/general")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faCog} />
              </span>
              <span className="modules-title">General</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/housekeeping")}
            >
              <span className="modules-icon">
                {<FontAwesomeIcon icon={faBroom} />}
              </span>
              <span className="modules-title">HouseKeeping</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
              </span>
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
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/inventory")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faBoxOpen} />
              </span>
              <span className="modules-title">Inventory</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/masters")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </span>
              <span className="modules-title">Masters</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/opbilling")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faMoneyBill} />
              </span>

              <span className="modules-title" onClick={toggleDropdown}>
                OpBilling 
              </span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/pharmacy")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faPrescriptionBottleAlt} />
              </span>
              <span className="modules-title">Pharmacy</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
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
              onClick={() => handleNavigation("/security")}
            >
              <span className="modules-icon">
                <FontAwesomeIcon icon={faShieldAlt} />
              </span>
              <span className="modules-title">Security</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
              </span>
            </p>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p>This is the dropdown content.</p>
              </div>
            )}
          </div>
          <div className="modules">
            <p className="modules-p" onClick={() => handleNavigation("/staff")}>
              <span className="modules-icon">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <span className="modules-title">Staff</span>
              <span className="dropdown-icon" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
              </span>
            </p>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <p>This is the dropdown content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="rightcontainer">
        <Outlet />
      </div>
    </div>
  );
};
