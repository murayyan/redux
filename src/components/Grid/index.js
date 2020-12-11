import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTileButton from "../AddTileButton";
import Tile from "../Tile";
import { removeTile, addTileWithChecking } from "../../features/Grid/action";
import { string, number } from "prop-types";

const colors = ["red", "blue", "pink", "yellow", "gray"];

const Grid = () => {
  let gridTiles = useSelector((state) => state.grid); //<- select state dari store
  let dispatch = useDispatch(); //<- untuk memanggil action
  return (
    <div>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile} // <--- propsnya di spread ex (id=1, color=blue)
              key={index}
              onDoubleClick={(_) => dispatch(removeTile(tile.id))} //<- saat dispatch actionnya otomatis memanggil reducer sesuai dengan typenya
            />
          );
        })}
      </div>
      <br />
      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={(_) => dispatch(addTileWithChecking(color))}
            />
          );
        })}
      </div>
    </div>
  );
};

Tile.defaultProps = { color: "gray" };

Tile.propTypes = { color: string.isRequired, id: number.isRequired };

export default Grid;
