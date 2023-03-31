import React from 'react';
import routes from "routes";

import NavbarLayout from "layouts/NavbarLayout";

export default function Navbar() {
    return (
      <NavbarLayout
      routes={routes}
      sticky
    />
    );
  }