import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { AddIcon } from "@chakra-ui/icons";

const RoundButton = () => {
  return (
    <Link to="/CreatePage" className="round-button"    >
      <AddIcon />
    </Link>
  );
};

export default RoundButton;