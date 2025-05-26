import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function Overview() {
  return (
    <DashboardLayout>
      <MDTypography variant="h4">Overview</MDTypography>
      <MDTypography>Welcome to Free Republick Distro Dashboard.</MDTypography>
    </DashboardLayout>
  );
}

export default Overview;