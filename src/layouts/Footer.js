import React from 'react';
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";

const Year = new Date().getFullYear();

export default function Footer() {
    return (
        <MKBox component="footer">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
                <MKTypography variant="button" fontWeight="regular">
                    All rights reserved. Copyright &copy; {Year} Youngjun Ro.
                </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    );
  }
