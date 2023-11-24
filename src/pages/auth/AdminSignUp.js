import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../components/custominput/CustomInput";
import { toast } from "react-toastify";
import AdminLayout from "../../components/layouts/AdminLayout";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "Sam",
    required: true,
  },
  {
    label: "Last Name *",
    name: "lName",
    type: "text",
    placeholder: "Smith",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "number",
    placeholder: "04xxxxx",
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "sam@sam.com",
    required: true,
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "*****",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "*****",
    required: true,
    minLength: 6,
  },
];

function AdminSignUp() {
    const [formData, setFormData] = useState({});
   const handleOnChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Forms is submitted", formData);
    const { password, confirmPassword, ...rest } = formData;
    if (password !== confirmPassword) {
      return toast.error("Password and confirm password did not match!!!");
    }

  };
  return (
    <div>
      <AdminLayout>
        <div className="p-3 border shadow rounded admin-form">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((input, i) => {
              return (
                <CustomInput key={i} {...input} onChange={handleOnChange} />
              );
            })}

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </AdminLayout>
      
    </div>
  );
}

export default AdminSignUp;
