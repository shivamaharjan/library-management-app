import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer'

function AdminLayout({children}) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout