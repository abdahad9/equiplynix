import React from 'react';
import UiContent from "../../Components/Common/UiContent";

//import Components
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Card, CardBody, Col, Container, Form, Input, CardHeader, Label, Row } from 'reactstrap';

const CreateuUser = () => {
    document.title="Form Layouts | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Create New Quote" pageTitle="All Quotes" />
                    <Row  className='justify-content-center'>
                        <Col xxl={6}>
                            <Card >
                            <CardHeader className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Create New Quote</h4>
                            </CardHeader>
                                <CardBody>
                                    <div className="live-preview">
                                        <Form action="#">
                                            <div className="mb-3">
                                                <Label htmlFor="employeeName" className="form-label">Company Name :</Label>
                                                <Input type="text" className="form-control" id="employeeName" placeholder="Company Name" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">Asset Type</Label>
                                                <select className="form-select mb-3" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                {/* <Input type="text" className="form-control" id="employeeUrl" placeholder="Enter Last Name" /> */}
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">Asset Description :</Label>
                                                <Input type="email" className="form-control" id="employeeUrl" placeholder="Enter Asset Description" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">Assest Cost :</Label>
                                                <Input type="text" className="form-control" id="employeeUrl" placeholder="Enter Assest Cost" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">Lease Term (Mo) :</Label>
                                                <Input type="text" className="form-control" id="employeeUrl" placeholder="Enter Lease Term" />
                                            </div>
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">Submit Quote</button>
                                            </div>
                                        </Form>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default CreateuUser;