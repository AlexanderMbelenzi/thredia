import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FiFeather } from "react-icons/fi";

import { AddIcon } from "@chakra-ui/icons";

const RoundButton = () => {
  return (
    <Link to="/CreatePage" className="round-button"    >
      <FiFeather  />
    </Link>
  );
};

export default RoundButton;