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
                    <BreadCrumb title="Create New User" pageTitle="All Users" />
                    <Row  className='justify-content-center'>
                        <Col xxl={6}>
                            <Card >
                            <CardHeader className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Create New User</h4>
                            </CardHeader>
                                <CardBody>
                                    <div className="live-preview">
                                        <Form action="#">
                                            <div className="mb-3">
                                                <Label htmlFor="employeeName" className="form-label">First Name</Label>
                                                <Input type="text" className="form-control" id="employeeName" placeholder="Enter First name" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">Last Name</Label>
                                                <Input type="text" className="form-control" id="employeeUrl" placeholder="Enter Last Name" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">Email</Label>
                                                <Input type="email" className="form-control" id="employeeUrl" placeholder="Enter Email" />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="employeeUrl" className="form-label">phone No</Label>
                                                <Input type="text" className="form-control" id="employeeUrl" placeholder="Enter Phone#" />
                                            </div>
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">Create</button>
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