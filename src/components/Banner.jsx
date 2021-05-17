import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Banner.css";
export default function Banner() {
  return (
    <div className="Banner">
      <Jumbotron>
        <div className="Banner-texts">
          <h1 className="Banner-title">The System Design Tutorial</h1>
          <p className="Banner-text">
            How do software systems work, How are they designed ? From the
            basics to advanced topics with simple, but detailed explanations.
          </p>
        </div>
        <div className="Banner-list">
          <div className="Banner-updated-at">
            <i className="fa fa-calendar"></i>08-May-2020
          </div>
          <div className="Banner-github">
            <span className="Banner-github-stars">
              10<i className="fa fa-star"></i>
            </span>
            <span className="Banner-github-text">Github</span>
          </div>
          <div className="Banner-share">Share:</div>
        </div>
        <div className="Banner-search">
          <Form inline>
            <FormControl type="text" placeholder="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </Jumbotron>
    </div>
  );
}
