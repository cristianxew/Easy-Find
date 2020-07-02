import React from "react";

import "./bussiness.css";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={this.props.business.url}
        >
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt="" />
          </div>
        </a>
        <h2>
          {this.props.business.name}
          <span>{this.props.business.price}</span>
        </h2>
        <div className="Business-information">
          <div className="Business-address">
            <a
              href={`https://google.com/maps/?q=${this.props.business.address} ${this.props.business.city}&z=18`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.zipCode}</p>
            </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">Rating: {this.props.business.rating}</h3>
            <p className="reviews">
              Total reviews: {this.props.business.reviewCount}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
