import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="bg-dark text-light sidebar">
      <div className="text-center mt-3">
        <h4>Welcome</h4>
      </div>
      <div className="mt-5">
        <ul className="list-unstyled ms-5 me-5 ">
          <li>
            <Link className="nav-link mb-4" to="/history">
              History
            </Link>
          </li>
          <li>
            <Link className="nav-link mb-4" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link mb-4" to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link className="nav-link mb-4" to="/clients">
              Clients
            </Link>
          </li>
          <li>
            <Link className="nav-link mb-4" to="/admin-signup">
              Admin SignUp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar