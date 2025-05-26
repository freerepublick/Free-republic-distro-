import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer({ company, links }) {
  const { size } = typography;

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
      pt={1}
      pb={1}
    >
      <MDBox display="flex" justifyContent="center" alignItems="center" lineHeight={1}>
        <MDTypography variant="button" fontWeight="regular" color="text">
          © {new Date().getFullYear()}{" "}
          <MDTypography
            component="span"
            variant="button"
            fontWeight="medium"
            color="info"
          >
            Free Republick Distro
          </MDTypography>{" "}
          - Built for independent music growth.
        </MDTypography>
      </MDBox>
      <MDBox
        component="ul"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: { xs: 2, lg: 0 },
          mb: 0,
          pl: 0,
        }}
      >
        {links.map((link, index) => (
          <MDBox key={index} component="li" px={2} lineHeight={1}>
            <Link href={link.href} target="_blank" rel="noreferrer">
              <MDTypography variant="button" fontWeight="regular" color="text">
                {link.name}
              </MDTypography>
            </Link>
          </MDBox>
        ))}
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  company: { name: "Free Republick Distro", href: "#" },
  links: [],
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.object,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;