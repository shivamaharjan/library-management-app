import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/custominput/CustomInput';
import AdminLayout from '../../components/layouts/AdminLayout';

function AddBooks() {
    const inputs = [
      {
        label: "Book Title",
        name: "title",
        type: "text",
        placeholder: "Twilight",
        required: true,
      },
      {
        label: "Author Name",
        name: "author",
        type: "text",
        placeholder: "Author",
        required: true,
      },
      {
        label: "Published Year",
        name: "year",
        type: "number",
        placeholder: "2022",
      },
      {
        label: "Image URL",
        name: "url",
        type: "text",
        placeholder: "https://...",
      },
      {
        label: "Summary",
        name: "summary",
        type: "text",
        as:"textarea",
        rows:"4",
        placeholder: "The book is about....",
      },
    ];
    const handleOnSubmit = () => {

    }
    const handleOnChange =() =>{

    };
  return (
    <AdminLayout>
      <h3>Add Books</h3>
      <hr />
      <Link to="/books">
        <Button>Go Back</Button>
      </Link>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input, i) => {
            return <CustomInput key={i} {...input} onChange={handleOnChange} />;
          })}

          <Button variant="primary" type="submit">
            Add Book
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
}

export default AddBooks