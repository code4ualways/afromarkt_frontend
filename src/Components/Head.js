import React from "react";
import { COLORS } from "../consatants";

function Head({ title }) {
  return (
    <h4
      className="pt-2 pb-2 text-white mb-3 pl-3"
      style={{ backgroundColor: COLORS.main, fontWeight: "600" }}
    >
      {title}
    </h4>
  );
}

export default Head;
