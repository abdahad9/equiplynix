import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "Components/Common/BreadCrumb";

const DashboardEcommerce = () => {
  document.title = "Equiplynx";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Analytics" pageTitle="Dashboard" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
