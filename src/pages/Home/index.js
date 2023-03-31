import React from 'react';

import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Layout
import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";

// Load Page section
import Introduce from "pages/Home/sections/Introduce";
import OtherExperience from "pages/Home/sections/OtherExperience";

import bgImage from "assets/image/bg.png";

export default function Home() {
  return (
    <>
      <Navbar/>
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Introduce />
        <OtherExperience />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}