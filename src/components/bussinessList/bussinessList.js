import React from "react";

import "./bussinessList.css";
import Business from "../bussiness/bussiness";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses
          ? this.props.businesses.map((business) => {
              return <Business key={business.id} business={business} />;
            })
          : ""}
      </div>
    );
  }
}

export default BusinessList;
