import React from "react";

export const Scroll = props => (
  <div style={{ overflowY: "scroll", height: "800px" }}>{props.children}</div>
);
