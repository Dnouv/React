import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish) {
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

    renderComments(comments) {
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
    

    

    
    render(){
        var dish;
        if (this.props.selectedDish) {
            dish = (
                <div>   
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            )
        } else {
            dish = <div></div>
        }
    

        return(
        <div className="container">
            <div className="row"> 
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)} 
                </div>
                <div className="col-12 col-md-5 m-1">
                    {dish}
                </div>
            </div>
        </div>
        
        );
       
    }
}

export default DishDetail