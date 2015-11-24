import React from "react";
import Section from "neal-react";
import { Col } from "../helpers/bootstrap.jsx";

export class SignupInline extends React.Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
  }

  state = { name: null , email: null, phone: 0, developer: null, experience: 'none'};

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  }

  render() {
    return (
      <div className="neal-signup-inline">
        <form className="form-inline row" onSubmit={this.handleSubmit}>
          <Col className="form-group" size={["xs-12", "lg-4"]}>
            <label className="sr-only" htmlFor="name">Name <span className="red">*</span></label>
            <input type="text" required className="form-control" name="name" placeholder="Name *"
              onChange={this.handleChange}/>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-4"]}>
            <label className="sr-only" htmlFor="phone">Phone Number</label>
            <input type="number" className="form-control" name="phone" placeholder="Phone Number"
              onChange={this.handleChange}/>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-4"]}>
            <label className="sr-only" htmlFor="email">Email address <span className="red">*</span></label>
            <input type="email" required className="form-control" name="email" placeholder="Email *"
              onChange={this.handleChange}/>
          </Col>
          
          <Col className="form-group" size={["xs-12", "lg-4"]} id="special-radio">
            <span>Are you a PHP Developer?  <span className="red">*</span></span>
            <input type="radio" required name="developer" id="yes" value="yes" onChange={this.handleChange} />
            <label className="radio-inline" htmlFor="yes">Yes</label>
            <input type="radio" name="developer" id="no" value="no" onChange={this.handleChange} />
            <label className="radio-inline" htmlFor="no">No</label>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-4"]}>
            <label htmlFor="experience">Years Of Experience:  <span className="red">*</span></label>
            <select className="form-control" id="experience" name="experience" required onChange={this.handleChange} defaultValue="">
              <option value="" disabled>Choose here:</option>
              <option value="none">No experience</option>
              <option value="1-2">1-2</option>
              <option value="3-5">3-5</option>
              <option value="6-10">6-10</option>
              <option value="+10">+ 10</option>
            </select>
          </Col>
          <Col className="form-group" size={["xs-12", "lg-4"]}>
            <label style={{minHeight: 18}}></label>
            <button type="submit" className="btn btn-primary btn-ghost">Sign up</button>
          </Col>
        </form>
      </div>
    );
  }
}

// <Col className="form-group" size={["xs-12", "lg-5"]}>
//   <label>
//     <input type="radio" name="developer" id="optionsRadios1" value="yes">
//     Yes
//   </label>
// </Col>
// <Col className="form-group" size={["xs-12", "lg-5"]}>
//   <label>
//     <input type="radio" name="developer" id="optionsRadios2" value="no">
//     No
//   </label>
// </Col>