import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BookTable from "../../components/books/BookTable";

function Books() {
  return (
    <AdminLayout>
      <h3>Books</h3>
      <hr />
      <div>
        <Link to="/add-books">
          <Button>Add Books</Button>
        </Link>
        <BookTable />
      </div>
    </AdminLayout>
  );
}

export default Books