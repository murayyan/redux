import * as React from "react";
import { string, number, func } from "prop-types";
import "./style.css";

const Tile = ({ color, id, onDoubleClick }) => {
  //<- props di destructuring
  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onDoubleClick={onDoubleClick}
    />
  );
};

Tile.defaultProps = { color: "gray" };

Tile.propTypes = {
  color: string.isRequired,
  id: number.isRequired,
  onDoubleClick: func.isRequired,
};

export default Tile;
