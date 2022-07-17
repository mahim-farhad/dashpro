import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardOverview = ({ service, number, icon }) => {
  return (
    <div className="card card--overview">
      <div className="card__body">
        <div className="info">
          <h6 className="mb-0">{service}</h6>

          <span className="text-sm text-muted mb-0">{number}</span>
        </div>

        <div className="icon-shape bg-gradient-primary">
          <FontAwesomeIcon
            icon={["fas", icon]}
            className="fa icon-shape__svg text-light"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
