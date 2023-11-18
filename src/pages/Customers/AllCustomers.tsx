import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Card, CardBody, CardHeader, Col, Container, Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const AllCustomers = () => {
    const navigate = useNavigate();
  const defaultTable =
    [
      { id: "10", company_name: "Tyrone", contact_name: "tyrone@example.com", contact_email: "Senior", contact_phone: "Raynor", bank_name: "Raynor", bank_account: "Qatar" },
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
        Header: "Company Name",
        accessor: "company_name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Contact Name",
        accessor: "contact_name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Contact Email",
        accessor: "contact_email",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Contact Phone",
        accessor: "contact_phone",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Bank Name",
        accessor: "bank_name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Bank Account",
        accessor: "bank_account",
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
                            <h5 className="card-title mb-0">All Customers</h5>
                        </CardHeader>
                            <CardBody>
                                <TableContainer
                                    columns={(columns || [])}
                                    data={(defaultTable || [])}
                                    handleUserClick= {() => {
                                        navigate('/createuser');
                                      }}
                                    createButtonText="Create New Customer"  
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
export default AllCustomers;