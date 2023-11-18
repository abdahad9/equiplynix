import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Card, CardBody, CardHeader, Col, Container, Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const AllQuotes = () => {
    const navigate = useNavigate();
  const defaultTable =
    [
      { id: "10", ref: "test", company: "test", partner: "test", rep: "test", timestamp: "test", cost: "test", term: "test", premium: "test", status: "test"  },
      // { id: "09", name: "Cathy", email: "cathy@example.com", designation: "Customer Data Director", company: "Ebert, Schamberger and Johnston", location: "Mexico" },
      // { id: "08", name: "Patsy", email: "patsy@example.com", designation: "Dynamic Assurance Director", company: "Streich Group", location: "Niue" },
      // { id: "07", name: "Kerry", email: "kerry@example.com", designation: "Lead Applications Associate", company: "Feeney, Langworth and Tremblay", location: "Niger" },
      // { id: "06", name: "Traci", email: "traci@example.com", designation: "Corporate Identity Director", company: "Koelpin - Goldner", location: "Vanuatu" },
      // { id: "05", name: "Noel", email: "noel@example.com", designation: "Customer Data Director", company: "Howell - Rippin", location: "Germany" },
      // { id: "04", name: "Robert", email: "robert@example.com", designation: "Product Accounts Technician", company: "Hoeger", location: "San Marino" },
      // { id: "03", name: "Shannon", email: "shannon@example.com", designation: "Legacy Functionality Associate", company: "Zemlak Group", location: "South Georgia" },
      // { id: "02", name: "Harold", email: "harold@example.com", designation: "Forward Creative Coordinator", company: "Metz Inc", location: "Iran" },
      // { id: "01", name: "Jonathan", email: "jonathan@example.com", designation: "Senior Implementation Architect", company: "Hauck Inc", location: "Holy See" }
    ]
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: (cellProps : any) => {
          return (
            <span className="fw-semibold">{cellProps.id}</span>
          )
        },
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Ref #",
        accessor: "ref",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Company",
        accessor: "company",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Partner",
        accessor: "partner",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Rep",
        accessor: "rep",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Timestamp",
        accessor: "timestamp",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Cost",
        accessor: "cost",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Term (Mo)",
        accessor: "term",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Premium (Mo)",
        accessor: "premium",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Status",
        accessor: "status",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Action",
        accessor: (cellProps : any) => {
            return (
                <div className="d-flex gap-2">
                     <div className="view">
                        <button className="btn btn-sm btn-info edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">View</button>
                    </div>
                    <div className="edit">
                        <button className="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                    </div>
                    <div className="remove">
                        <button className="btn btn-sm btn-danger remove-item-btn">Remove</button>
                    </div>
                </div>
            )
          },
        disableFilters: true,
        filterable: false,
      }
    ],
    []
  );

  return (
    <React.Fragment>
          <div className="page-content">
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardHeader>
                            <h5 className="card-title mb-0">All Quotes</h5>
                        </CardHeader>
                            <CardBody>
                                <TableContainer
                                    columns={(columns || [])}
                                    data={(defaultTable || [])}
                                    handleUserClick= {() => {
                                        navigate('/createuser');
                                      }}
                                    createButtonText="Create New Quote"
                                    isAddUserList={true}
                                    iscustomPageSize={false}
                                    isBordered={false}
                                    customPageSize={8}
                                    className="custom-header-css table align-middle table-nowrap"
                                    tableClassName="table-centered align-middle table-nowrap mb-0"
                                    theadClassName="text-muted table-light"
                                    SearchPlaceholder='Search...'
                                />
                            </CardBody>
                    </Card>
                </Col>
          </Row>
        </Container>
        </div>
    </React.Fragment>
  );
};
export default AllQuotes;