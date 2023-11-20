import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Card, CardBody, CardHeader, Col, Container, Row, Button, Modal,ModalBody, ModalHeader, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const AllQuotes = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState<boolean>(false);

    function tog_center() {
      setModal(!modal);
    }
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
                <div className="d-flex gap-1">
                     <div className=""> 
                     <button onClick={() => tog_center()} className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#showModal"><i className="ri-add-circle-line"></i></button>
                    </div> 
                    <div className="">
                    <button className="btn btn-sm" data-bs-toggle="modal" data-bs-target="#showModal"><i className="ri-file-pdf-line"></i></button>
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
                                            navigate('/createquote');
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
            <Modal
                isOpen={modal}
                toggle={() => {
                    tog_center();
                }}
                centered
            >
                <ModalHeader className="modal-title" />

                <ModalBody className="text-center p-5">
                    {/* <i className="ri-thumb-down-line display-5 text-danger"></i> */}
                    <div className="mt-1">
                        <h3 className="mb-5">STATUS INSURANCE QUOTE</h3>
                          <div className="hstack gap-2 flex-wrap justify-content-center">
                              <Input type="radio" className="btn-check" name="options-outlined" id="success-outlined" defaultChecked />
                              <Label className="btn btn-outline-success" for="success-outlined">Accept</Label>
                                <p>or</p>
                              <Input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" />
                              <Label className="btn btn-outline-danger" for="danger-outlined">Decline</Label>
                          </div>
                        <div className="hstack gap-2 justify-content-center mt-4">
                            <Button color="primary" onClick={() => setModal(false)}>Submit</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    </React.Fragment>
  );
};
export default AllQuotes;