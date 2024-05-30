import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { AddIcon } from "@chakra-ui/icons";

const HeaderBox = () => {
  return (
    <Link to="/CreatePage" className="header-box"    >
      <AddIcon />
    </Link>
  );
};

export default HeaderBox;