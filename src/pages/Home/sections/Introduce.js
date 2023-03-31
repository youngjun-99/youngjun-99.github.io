import React from 'react';
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "pages/Home/components/RotatingCard";
import RotatingCardFront from "pages/Home/components/RotatingCard/RotatingCardFront";
import RotatingCardBack from "pages/Home/components/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/image/front.png";
import bgBack from "assets/image/back.png";

export default function Introduce() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
              />
              <RotatingCardBack
                image={bgBack}
                color="warning"
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <MKTypography variant="h3" fontWeight="bold" color="warning" py={2}>
                Contact.
            </MKTypography>
            <MKTypography variant="body1" color="text">
                Phone. 010-5625-5979
            </MKTypography>
            <MKTypography variant="body1" color="text">
            E-mail. tkwk6428@gmail.com
            </MKTypography>
            <MKTypography variant="h3" fontWeight="bold" color="warning" py={2}>
                Channel.
            </MKTypography>
            <MKTypography variant="body1" color="text">
                Github.&nbsp;
                <Link to="https://github.com/youngjun-99" style={{color:"#909090", textDecoration: "overline"}}>
                    https://github.com/youngjun-99
                </Link>
            </MKTypography>
            <MKTypography variant="body1" color="text">
                Blog.&nbsp;
                <Link to="https://youngjun-99.tistory.com" style={{color:"#909090", textDecoration: "overline"}}>
                  https://youngjun-99.tistory.com
                </Link>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
