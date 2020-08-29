import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }
  
function Contact(props) {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50249473.638080865!2d-71.91100772971826!3d-39.762456974209925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb09dff882a7809e1%3A0xb08d0a385dc8c7c7!2sAntarctica!5e0!3m2!1sen!2sin!4v1598677053193!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <Iframe iframe={iframe} />
                    
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="tel:+85212345678"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;