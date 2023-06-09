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

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// DatePicker
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, updateThisUserAction } from "redux/actions/UserActions";

function Cover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    agreeTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const editUser = useSelector((state) => state.users.editUser);

  const initialValues = editUser
    ? {
        name: editUser.name,
        email: editUser.email,
        jobTitle: editUser.jobTitle,
        jobDescription: editUser.jobDescription,
        date: editUser.date,
        password: editUser.password,
      }
    : {
        name: "",
        email: "",
        jobTitle: "",
        jobDescription: "",
        date: "",
        password: "",
      };
  //   const initialValues = {
  //     name: "",
  //     email: "",
  //     password: "",
  //   };

  const handleSubmit = (values, { resetForm }) => {
    debugger;
    // Handle form submission logic here
    console.log(values);
    // debugger;
    if (editUser != "") {
      let updatedUser = values;

      updatedUser.id = editUser.id;
      debugger;
      dispatch(updateThisUserAction(updatedUser));
    } else {
      let newUser = values;
      newUser.id = Date.now();
      dispatch(addNewUser(newUser));
    }

    // debugger;
    resetForm();

    navigate("/userlist");
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          {/* Title and description */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="name"
                  type="text"
                  label="Name"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="name"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field
                  name="email"
                  type="email"
                  label="Email"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="email"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field
                  name="jobTitle"
                  type="text"
                  label="Job Title"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="jobTitle"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field
                  name="jobDescription"
                  type="text"
                  label="Job Description"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="jobDescription"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field name="date" label="Date">
                  {({ field, form }) => (
                    <ReactDatePicker
                      id="date"
                      selected={field.value}
                      onChange={(date) => form.setFieldValue(field.name, date)}
                      dateFormat="dd/MM/yyyy"
                      // ... other props for customizing the datepicker
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="date"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field
                  name="password"
                  type="password"
                  label="Password"
                  as={MDInput}
                  variant="standard"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <Field name="agreeTerms" type="checkbox" as={Checkbox} />
                <Field
                  name="agreeTerms"
                  component={MDTypography}
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </Field>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="info"
                  textGradient
                >
                  Terms and Conditions
                </MDTypography>
                <ErrorMessage
                  name="agreeTerms"
                  component={MDTypography}
                  variant="caption"
                  color="error"
                />

                <MDButton
                  type="submit"
                  variant="gradient"
                  color="info"
                  fullWidth
                  disabled={isSubmitting}
                >
                  Sign In
                </MDButton>
              </Form>
            )}
          </Formik>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
