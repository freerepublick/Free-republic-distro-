import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Footer
import Footer from "examples/Footer";

function BasicLayout({ children }) {
  return (
    <MDBox
      minHeight="100vh"
      width="100%"
      sx={{
        background: "linear-gradient(135deg, #2c2c3e, #1e1e2f)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "10vh",
      }}
    >
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </MDBox>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;