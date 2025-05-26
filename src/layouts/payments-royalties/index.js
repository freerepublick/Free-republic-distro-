import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function PaymentsRoyalties() {
  return (
    <DashboardLayout>
      <MDTypography variant="h4">Payments & Royalties</MDTypography>
      <MDTypography>Track your payments and royalty earnings here.</MDTypography>
    </DashboardLayout>
  );
}

export default PaymentsRoyalties;