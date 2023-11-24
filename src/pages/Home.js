import React from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import Carousels from "../components/carousels/Carousels";

function Home() {
  return (
    <div>
      <DefaultLayout>
        <Carousels/>
        <h1>BOOKS</h1>
        
      </DefaultLayout>
    </div>
  );
}

export default Home;
