import React from "react";
import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Our Library. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default MyFooter;
