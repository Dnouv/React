import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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

    function RenderComments({comments}) {
        if(comments != null){
            return (
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
            );
        }
        else {
            return (
                <div></div>
            );

        }
        
    }
    

    

    
    const DishDetail = (props) => {
        // var dish;
        // if (props.dish) {
        //     dish = (
        //         <div className="container">
        //             <div>  
        //                 {/* {this.renderDish(this.props.selectedDish)} */}
                        
        //                 <RenderComments comments={props.dish.comments} /> 
        //                 {/* {this.renderComments(this.props.selectedDish.comments)} */}
        //             </div>
        //         </div>
                
        //     )
        // } else {
        //     dish = <div></div>
        // }
    

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