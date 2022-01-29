import React from "react";
import "./MoreInfo.css";

function MoreInfo({ type, info }) {
  return (
    <div className="more-info">
      <p>{type}: <span className="info">{info}</span> </p>
    </div>
  );
}

export default MoreInfo;
