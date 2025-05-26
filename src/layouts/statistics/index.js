import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function Statistics() {
  return (
    <DashboardLayout>
      <MDTypography variant="h4">Statistics</MDTypography>
      <MDTypography>View your Spotify sales, UGCs, and TikTok data.</MDTypography>
    </DashboardLayout>
  );
}

export default Statistics;