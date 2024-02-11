import React from "react";

// prop-types is a library for typechecking of props

import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MK/MKBox";
import MKTypography from "components/MK/MKTypography";

import { useTheme } from "@emotion/react";

function DefaultInfoCard({ color, icon, title, description, direction, small }) {
  const theme = useTheme();
  const hexaColor = theme.palette.primary.focus;
  console.log(theme.palette.primary.focus);
  return (
    <MKBox lineHeight={1} p={direction === "center" ? 2 : 0} textAlign={direction}>
      {" "}
      {typeof icon === "string" ? (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          <Icon>{icon}</Icon>
        </MKTypography>
      ) : (
        <MKTypography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
          textGradient
        >
          {React.cloneElement(icon, {
            style: { color: hexaColor },
          })}
        </MKTypography>
      )}
      <MKTypography
        display="block"
        variant="5"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </MKTypography>
      <MKTypography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "primary",

  direction: "left",
  small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
