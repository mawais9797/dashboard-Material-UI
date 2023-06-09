/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUserAction, deleteUserAction } from "redux/actions/UserActions";

export default function data() {
  const users = useSelector((state) => state.users.allUsers);
  debugger;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    // alert(id);
    const editUser = users.filter((user) => user.id == id);
    editUser[0].id = id;
    debugger;
    dispatch(editUserAction(editUser[0]));
    navigate("/Users");
  };

  const handleDelete = (id) => {
    dispatch(deleteUserAction(id));
  };
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: users.map((item) => ({
      author: <Author image={team4} name={item.name} email={item.email} />,
      function: <Job title={item.jobTitle} description={item.jobDescription} />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="Online" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.name}
        </MDTypography>
      ),
      action: (
        <>
          {/* <MDTypography
            component="button"
            onClick={() => handleEdit(item.id)}
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography> */}

          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-k10vsc-MuiButtonBase-root-MuiButton-root"
            tabIndex="0"
            type="button"
            onClick={() => handleEdit(item.id)}
          >
            <span
              className="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-1neevca-MuiIcon-root"
              aria-hidden="true"
            >
              edit
            </span>
            &nbsp;edit<span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
          </button>
          <br />
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-b5lw23-MuiButtonBase-root-MuiButton-root"
            tabIndex="0"
            type="button"
            onClick={() => handleDelete(item.id)}
          >
            <span
              className="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeInherit css-1neevca-MuiIcon-root"
              aria-hidden="true"
            >
              delete
            </span>
            &nbsp;delete<span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
          </button>

          {/* <MDTypography
            component="button"
            onClick={() => handleDelete(item.id)}
            variant="caption"
            color="text"
            fontWeight="medium"
            className="btn btn-danger"
          >
            delete
          </MDTypography> */}
        </>
      ),
    })),
  };
}
