import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session or token (if any)
    localStorage.clear();

    // Redirect to dashboard (overview)
    const timer = setTimeout(() => {
      navigate("/overview");
    }, 1500);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <MDBox
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="light"
    >
      <MDTypography variant="h4" color="text">
        Signing you out...
      </MDTypography>
    </MDBox>
  );
}

export default SignOut;