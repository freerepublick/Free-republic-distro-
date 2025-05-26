import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function SubmitTicket() {
  return (
    <DashboardLayout>
      <MDTypography variant="h4">Submit Ticket</MDTypography>
      <MDTypography>If you have issues or need help, submit a support ticket here.</MDTypography>
    </DashboardLayout>
  );
}

export default SubmitTicket;