import React from "react";
import { HorizontalSplit } from "./horizontal-split.jsx";
import { Row, Col } from "../helpers/bootstrap.jsx";

export class TeamMember extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="card neal-team-member">
        <img className="card-img-top neal-team-member-img img-responsive m-auto" src={this.props.imageUrl}/>
        <div className="card-block neal-team-member-profile">
          <h6 className="text-center">
            {this.props.title ? `${this.props.title}` : null}
          </h6>
          <h4 className="card-title lead neal-team-member-name text-center">
            {this.props.name}
          </h4>
          <br/>
          <div className="neal-team-member-description">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class Team extends React.Component {

  static propTypes = {
    // TODO: Enforce Member type
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  }

  render() {
    return (
      <div className="card-deck-wrapper neal-team">
        <Row>
          <div className="card-deck">
            {this.props.children.map((member, idx) => {
              return (
                <Col size={["xs-12", "md-6", "lg-4"]} key={idx}>{member}</Col>
              );
            })}
          </div>
        </Row>
      </div>
    );
  }

}
