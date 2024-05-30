import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


const RoundButton = () => {
  return (
    <Link to="/CreatePage" className="round-button"    >
      <FaPlus />
    </Link>
  );
};

export default RoundButton;