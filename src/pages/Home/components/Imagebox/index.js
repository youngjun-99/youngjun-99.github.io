import React from 'react';
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function imagebox({ image, name, desc }) {
  const imageTemplate = (
      <MKBox
        component="img"
        src={image}
        alt={name}
        width="100%"
        my="auto"
        bgColor="white"
        borderRadius="xl"
        shadow="xl"
        sx={{
          overflow: "hidden",
          transform: "perspective(999px) translate3d(0, 0, 0)",
          transformOrigin: "50% 0",
          backfaceVisibility: "hidden",
          willChange: "transform, box-shadow",
          transition: "transform 200ms ease-out",
  
          "&:hover": {
            transform: "perspective(999px) translate3d(0px, -10px, 50px)",
          },
        }}
      />
  );

  return (
    <MKBox position="relative">
      {imageTemplate}
      {name || desc ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography variant="h6" fontWeight="bold">
              {name}
            </MKTypography>
          )}
          {desc && (
            <MKTypography variant="button" fontWeight="regular" color="secondary">
              {desc}
            </MKTypography>
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

imagebox.defaultProps = {
  name: "default",
  desc: "default"
};

imagebox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  desc: PropTypes.string
};

export default imagebox;
