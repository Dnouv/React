import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
        Button, Modal, ModalBody, Label, Col, Row, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm} from 'react-redux-form';

const required = (val) => val && (val.length);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

    function RenderDish({dish}) {
        if (dish != null)
            return(
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        else
            return(
                <div></div>
            );
    }

    class CommentForm extends Component{
        constructor(props){
            super(props);
            this.state = {
                value: '1',
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            // this.handleChange = this.handleChange.bind(this);
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values){
            alert('Current state is: ' + JSON.stringify(values));
        }

        // handleChange(event){
        //     this.setState({
        //         value: event.target.value
        //     })
        // }

        render(){
            return(<>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values => this.handleSubmit(values))} >
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating"
                            className="form-control" validators={{required}}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            <Errors className="text-danger"
                            show='touched'
                            model=".rating"
                            messages={{
                                required: 'Please Rate the dish'
                            }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text model=".author" name="author" id="author"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                            />
                            <Errors 
                            className="text-danger"
                            show="touched"
                            model=".author"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be less than 15 characters'
                            }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comments">Comment</Label>
                            <Control.textarea model=".comments" id="comments" name="comments"
                            placeholder="Write your Comment"
                            className="form-control"
                            rows="6"
                            validators={{
                                required
                            }}
                            />
                            <Errors 
                            className="text-danger"
                            model=".comments"
                            show="touched"
                            messages={{
                                required: "Required"
                            }}
                            />
                        </Row>
                        <Row className="form-group">
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                    </LocalForm>

                </div>
                </ModalBody>

            </Modal>
                <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-comments fa-lg"></span> Comments</Button>
                </div>
                
                </>
            );
        }

    } 

    


    function RenderComments({comments}) {
        if(comments != null){
            return (
                <>
                <div key={comments.id}>
                    <h4>Comments</h4>
                    {comments.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , 
                                    {new Intl.DateTimeFormat("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(Date.parse(comment.date))}
                                </p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
                <CommentForm />
                </>
            );
        }
        else {
            return (
                <div></div>
            );

        }
        
    }
    
    const DishDetail = (props) => {

        return(
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>       
        );
       
    }


export default DishDetail;