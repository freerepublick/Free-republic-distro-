import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function Account() {
  return (
    <DashboardLayout>
      <MDTypography variant="h4">Account</MDTypography>
      <MDTypography>Manage your profile and account settings.</MDTypography>
    </DashboardLayout>
  );
}

export default Account;