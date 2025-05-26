import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function Catalog() {
  return (
    <DashboardLayout>
      <MDTypography variant="h4">Catalog</MDTypography>
      <MDTypography>This page shows your music releases and uploads.</MDTypography>
    </DashboardLayout>
  );
}

export default Catalog;